// structure of a ticket creation data transfer object
// used when creating a new ticket via the API
// this will only be shown in the frontend when creating a ticket, no status, createdAt or createdByUserId

using System.ComponentModel.DataAnnotations;
using Requesthub.Api.Models;

namespace Requesthub.Api.DTOs
{
    public class RequestCreateDto
    {
        [Required]
        [StringLength(100, MinimumLength = 5)]
        public string Title { get; set; } = string.Empty;

        [Required]
        [StringLength(1000, MinimumLength = 10)]
        public string Description { get; set; } = string.Empty;

        [Required]
        public RequestPriority Priority { get; set; } 

    }
}