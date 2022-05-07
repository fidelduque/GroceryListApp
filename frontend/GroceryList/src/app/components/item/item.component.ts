import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { groceryItem } from 'src/app/models/groceryItem';
import { ItemsService } from 'src/app/services/items.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();
  @Input() itemInput!: groceryItem;
  isDone: boolean = false;
  item!: groceryItem;
  newItemName!: string;
  result: string = '';
  constructor(private service: ItemsService, public dialog: MatDialog) { }


  ngOnInit(): void {
    if(this.itemInput.done === 1){
      this.isDone = true;
    }
  }

  deleteItem(item: groceryItem) {
    console.log(item);
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.service.deleteItem(item.id!).subscribe(item => {
          console.log(item);
          this.newItemEvent.emit(item);
        });
      } 
    });
  }

  onChange(e: any) {
    console.log(e.target.checked);
    this.item = this.itemInput;
    this.item.done = e.target.checked ? 1 : 0;
    console.log(this.item);
    this.service.updateItem(this.item as groceryItem).subscribe(item => {
      console.log(item);
      this.newItemEvent.emit(item);
    });
  }

  toggleClass() {
    if (this.isDone) {
      // return 'list-item-success';
      return { 'item-done': this.isDone};

    }
    return '';
  }
}

