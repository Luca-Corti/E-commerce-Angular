import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngbd-carousel-basic',
  templateUrl: './carousel-basic.component.html',
  styleUrls: ['./carousel-basic.component.scss']
})
export class NgbdCarouselBasic implements OnInit {

  constructor() {

  }
  @Input() id!:number
  interpolatedSrc(number:number):string{
    if(this.id===1){
      return `../assets/img/minecraft/Minecraft${number}.jpg`
    }
    else if(this.id===2){
      return `../assets/img/elden-ring/elden-ring${number}.jpg`
    }
    else {
      return `../assets/img/zelda/zelda${number}.jpg`
    }

  }
  ngOnInit(): void {
  }

}
