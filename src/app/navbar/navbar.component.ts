import { Component, OnInit,} from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public srv:ServiceService) { }

  ngOnInit(): void {
  }

}
