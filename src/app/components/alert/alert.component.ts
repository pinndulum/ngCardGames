import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  message: Observable<{ text: string; type?: string; cssClass?: string; }>;

  constructor(private alerts: AlertService) {
  }

  ngOnInit() {
    this.message = this.alerts.getAlert().pipe(
      map(msg => {
        switch (msg.type) {
          case 'success':
            msg.cssClass = 'alert alert-success';
            break;
          case 'error':
            msg.cssClass = 'alert alert-danger';
            break;
        }
        return msg;
      })
    );
  }
}
