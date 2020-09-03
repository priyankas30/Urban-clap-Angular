import { Component, OnInit } from '@angular/core';
import { NgbButtonLabel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  public imgsrc = 'assets/me.jpg';

  public list = [
    { img: 'assets/images/bt1.jpg' },
    
    { img: 'assets/images/bt-1.jpg' },
    { img: 'assets/images/bt2.jpg' },
    { img: 'assets/images/bt-2.jpg' },
    { img: 'assets/images/i4.jpg' },
    { img: 'assets/images/i5.jpg' },
    { img: 'assets/images/i1.jpg' },
    { img: 'assets/images/i2.jpg' },
    { img: 'assets/images/i3.jpg' },
    { img: 'assets/images/bt3.jpg' },
    { img: 'assets/images/i7.jpg' },
    { img: 'assets/images/i8.jpg' },
  ];

  constructor() {}

  ngOnInit(): void {}
}