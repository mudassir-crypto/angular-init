import { Component } from '@angular/core'
import { WishItem } from 'src/shared/models/wishItem'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items : WishItem[] = [
    new WishItem("Learn Angular"),
    new WishItem("Get ready for demo", true),
    new WishItem("Get Some Coffee")
  ]

  // filter: any = () => {}
  filter: any;

  // get visibleItems() : WishItem[] {
  //   return this.items.filter(this.filter);
  // }

}
