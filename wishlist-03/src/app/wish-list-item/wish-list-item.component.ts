import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.css']
})
export class WishListItemComponent implements OnInit {

  @Input() wishText! : string;

  @Input() fulfilled! : boolean;
  @Output() fulfilledChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  get cssClasses(){
    // return this.fulfilled ? ['strikeout', 'text-muted'] : [];
    return {'strikeout text-muted': this.fulfilled};
  }
  toggleFulfilled(){
    this.fulfilled = !this.fulfilled;
    this.fulfilledChange.emit(this.fulfilled);
  }

}
