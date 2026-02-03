import { Component, Input } from '@angular/core';
import { RequestGetModel } from '../../interface/requestget.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-request-card',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './request-card.component.html',
  styleUrl: './request-card.component.scss'
})
export class RequestCardComponent {
  @Input() request!: RequestGetModel;

  constructor() { }
}
