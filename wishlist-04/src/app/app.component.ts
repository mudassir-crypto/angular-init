import { Component, OnInit } from '@angular/core'
import { WishItem } from 'src/shared/models/wishItem'
import { EventService } from 'src/shared/services/EventService'
import { WishService } from './services/wish.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  items! : WishItem[];

  constructor(private events: EventService, private wishService: WishService){
    this.events.listen('removeWish', (wish:any) => {
      let idx = this.items.indexOf(wish);
      this.items.splice(idx, 1);
    })
  }

  ngOnInit(): void {
    this.wishService.getWishes().subscribe((data: any) => {
      this.items = data;
    })
  }

  // filter: any = () => {}
  filter: any;

}
