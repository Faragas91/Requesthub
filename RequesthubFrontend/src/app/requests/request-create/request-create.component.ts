import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RequestCreateModel } from '../../interface/requestcreate.model';
import { RequestService } from '../../service/request.service';

@Component({
  selector: 'app-request-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './request-create.component.html',
  styleUrl: './request-create.component.scss'
})
export class RequestCreateComponent {

  request: RequestCreateModel = {
    title: '',
    description: '',
    priority: 'Low'
  }

  constructor(private requestService: RequestService) { }

  onSubmit() {
    console.log('Submitting request:', this.request);
    this.requestService.createRequest(this.request).subscribe({
      next: () => {
        console.log('Request successfully created');
      }, 
      error: (err) => {
        console.error('Error creating request:', err);
      }
    });
  }
}
