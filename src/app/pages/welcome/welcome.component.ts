import { Component, OnInit } from '@angular/core';
import { NzFlexModule, NzWrap  } from 'ng-zorro-antd/flex';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [NzFlexModule, 
    CommonModule, 
    NzDividerModule,
    NzMenuModule,
    NzStepsModule],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {


  wrap: NzWrap = "wrap";

  constructor() { }

  ngOnInit() { }

}
