import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
  @ViewChild ('tempButton') buttontemp: any

  title = 'Dashboard';

  educationOptions = [
    'Grade 10',
    'Grade 12',
    'diploma',
    'Undergraduate',
  ];

  ngAfterViewInit(): void {
    this.buttontemp.nativeElement.click
  }

  constructor() { }

  ngOnInit(): void {
  }

}
