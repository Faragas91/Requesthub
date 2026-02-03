#!/usr/bin/env bash
set -e

echo "Start Requesthub Development Environment"

# -----------------------------
# SQL Server
# -----------------------------
if ! docker ps | grep -q sqlserver-requesthub; then
  echo "🗄️  Start SQL Server Container..."
  docker start sqlserver-requesthub
else
  echo "🗄️  SQL Server already running"
fi

# -----------------------------
# Wait until SQL is ready
# -----------------------------
echo "⏳ Waiting of SQL Server..."
sleep 5

# -----------------------------
# Backend 
# -----------------------------
echo "⚙️  Start ASP.NET Core API..."
cd RequesthubApi
dotnet ef database update
dotnet run &
API_PID=$!
cd ..

# -----------------------------
# Frontend 
# -----------------------------
echo "🌐 Start Angular Frontend..."
cd RequesthubFrontend
ng serve --open &
FRONTEND_PID=$!
cd ..

# -----------------------------
# 5️⃣ Graceful Shutdown
# -----------------------------
trap "echo '🛑 Close all...'; kill $API_PID $FRONTEND_PID; exit" SIGINT

wait
