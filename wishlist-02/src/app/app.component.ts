import { Component } from '@angular/core'
import { WishItem } from 'src/shared/models/wishItem'

const filters = [
  (item : WishItem) => item,
  (item : WishItem) => !item.isComplete,
  (item : WishItem) => item.isComplete,
]

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

  listFilter : any = "0"
  get visibleItems() : WishItem[] {
    return this.items.filter(filters[this.listFilter])
  }

  title = 'helloworld' 
}
