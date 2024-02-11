import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

@Component({
  selector: 'wish-form',
  templateUrl: './wish-form.component.html',
  styleUrls: ['./wish-form.component.css']
})
export class WishFormComponent implements OnInit {

  @Output() addWish = new EventEmitter<WishItem>()

  constructor() { }

  ngOnInit(): void {
  }

  newWishText = ''
  addNewWish() {
    //this.items.push(new WishItem(this.newWishText))
    this.addWish.emit(new WishItem(this.newWishText))
    this.newWishText = ''
  }

}
