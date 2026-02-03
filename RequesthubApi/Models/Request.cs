// structure of a ticket in the ticketing system
// this will be a template for tickets in the database

namespace Requesthub.Api.Models
{
    public class Request
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public RequestStatus Status { get; set; } = RequestStatus.Open;
        public RequestPriority Priority { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public int CreatedByUserId { get; set; }
    }
}