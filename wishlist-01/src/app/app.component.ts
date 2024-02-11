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

  newWishText = ''

  listFilter : any = "0"
  // visibleItems : WishItem[] = this.items
  get visibleItems() : WishItem[] {
    // let value = this.listFilter
    // if(value == '0'){
    //   return this.items
    // } else if(value == '1'){
    //   return this.items.filter(item => !item.isComplete)
    // } else {
    //   return this.items.filter(item => item.isComplete)
    // }
    return this.items.filter(filters[this.listFilter])
  }

  // filterChange (value: any){
  //   //listfilter value which is selected by user is coming here
  //   console.log(value)
  //   if(value == '0'){
  //     this.visibleItems = this.items
  //   } else if(value == '1'){
  //     this.visibleItems = this.items.filter(item => !item.isComplete)
  //   } else {
  //     this.visibleItems = this.items.filter(item => item.isComplete)
  //   }
  //   console.log(this.visibleItems)
  // }

  title = 'helloworld'

  addNewWish() {

    this.items.push(new WishItem(this.newWishText))
    this.newWishText = ''
    // Instead of this we could use get on visibleItems
    // this.visibleItems = this.items
    // this.filterChange(this.listFilter)
    
  }

  toggleItem(item : WishItem){
    item.isComplete = !item.isComplete
    console.log(this.items)
  }
}
