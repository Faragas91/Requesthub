using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Requesthub.Api.Data;
using Requesthub.Api.Models;
using Requesthub.Api.DTOs;
using Microsoft.AspNetCore.Authorization;

namespace Requesthub.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    // [Authorize]
    public class RequestsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public RequestsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/requests
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Request>>> GetRequests()
        {
            var requests = await _context.Requests.Select(t => new RequestDto
            {
                Id = t.Id,
                Title = t.Title,
                Description = t.Description,
                Status = t.Status,
                Priority = t.Priority,
                CreatedAt = t.CreatedAt,
                CreatedByUserId = t.CreatedByUserId
            }).ToListAsync();

            return Ok(requests);
        }

        // POST: api/tickets
        [HttpPost]
        public async Task<ActionResult<Request>> CreateRequest([FromBody] RequestCreateDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var request = new Request
            {
                Title = dto.Title,
                Description = dto.Description,
                Priority = dto.Priority,
                Status = RequestStatus.Open,
                CreatedAt = DateTime.UtcNow,
                CreatedByUserId = 1
            };

            _context.Requests.Add(request);
            await _context.SaveChangesAsync();

                        // var ticketDto = new TicketDto
            // {
            //     Id = ticket.Id,
            //     Title = ticket.Title,
            //     Description = ticket.Description,
            //     Status = ticket.Status,
            //     Priority = ticket.Priority,
            //     CreatedAt = ticket.CreatedAt,
            //     CreatedByUserId = ticket.CreatedByUserId
            // };

            return CreatedAtAction(nameof(GetRequests), new { id = request.Id }, request);
        }

        // PUT: api/requests/{id}/status
        // [Authorize(Roles = "Admin")]
        // [HttpPut("{id}/status")]
        // public async Task<ActionResult<RequestDto>> UpdateStatus(int id, [FromQuery] RequestStatus newStatus, [FromQuery] UserRole role)
        // {
        //     var request = await _context.Requests.FindAsync(id);
        //     if (request == null)
        //     {
        //         return NotFound();
        //     }

        //     // Only Admins can change the status to Closed or Approved
        //     if (role != UserRole.Admin)
        //     {
        //         return Forbid("Only admins can change the request status to Closed.");
        //     }
        //     request.Status = newStatus;
        //     await _context.SaveChangesAsync();

        //     var requestDto = new RequestDto
        //     {
        //         Id = request.Id,
        //         Title = request.Title,
        //         Description = request.Description,
        //         Priority = request.Priority,
        //         Status = request.Status,
        //         CreatedAt = request.CreatedAt,
        //         CreatedByUserId = request.CreatedByUserId
        //     };

        //     return Ok(requestDto);
        // }
    }
}
