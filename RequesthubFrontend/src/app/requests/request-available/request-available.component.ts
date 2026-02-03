import { Component } from '@angular/core';
import { RequestGetModel } from '../../interface/requestget.model';
import { RequestService } from '../../service/request.service';
import { NgFor, NgClass } from '@angular/common';
import { RequestCardComponent } from "../request-card/request-card.component";

@Component({
  selector: 'app-request-available',
  standalone: true,
  imports: [NgClass, RequestCardComponent],
  templateUrl: './request-available.component.html',
  styleUrl: './request-available.component.scss'
})
export class RequestAvailableComponent {

  allRequests: RequestGetModel[] = [];

  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.requestService.loadRequests();
    this.requestService.requests$.subscribe(requests => {
      this.allRequests = requests;
    });
    console.log(this.allRequests);
  }

  get openRequests() {
    return this.allRequests.filter(request => request.status === 'Open');
  }

  get inProgressRequests() {
    return this.allRequests.filter(request => request.status === 'InProgress ');
  }

  get closedRequests() {
    return this.allRequests.filter(request => request.status === 'Closed');
  }

  priorityClass(request: RequestGetModel): string {
    return `priority-${request.priority.toLowerCase()}`;
  }
}