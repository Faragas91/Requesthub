// DTO for transferring ticket data 
// backend to frontend
// includes all relevant ticket information

using Requesthub.Api.Models;

namespace Requesthub.Api.DTOs
{
    public class RequestDto
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public RequestStatus Status { get; set; }
        public RequestPriority Priority { get; set; }

        public DateTime CreatedAt { get; set; }
        public int CreatedByUserId { get; set; }
    }
}