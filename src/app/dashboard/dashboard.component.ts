import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild ('tempButton') buttontemp: any

  title = 'Dashboard';

  employeeform: FormGroup | undefined;

  educationOptions = [
    'Drop Out',
    'Grade 12',
    'diploma',
    'Undergraduate',
  ];


  constructor (private fb: FormBuilder) {
    this.employeeform = fb.group({
  });

}
ngOnInit(): void {
  this.employeeform = this.fb.group({
    firstname: this.fb.control(''),
    lastname: this.fb.control(''),
    birthday: this.fb.control(''),
    gender: this.fb.control(''),
    education: this.fb.control(''),
    company: this.fb.control(''),
    jobexpirience: this.fb.control(''),
    salary: this.fb.control(''),
  });
}

  ngAfterViewInit(): void {
    this.buttontemp.nativeElement.click
  }


  //need to learn more about this 



}//
