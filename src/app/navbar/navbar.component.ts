import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  counter:number=this.srv.counter
  constructor(private srv:ServiceService) { }

  ngOnInit(): void {
  }


}
