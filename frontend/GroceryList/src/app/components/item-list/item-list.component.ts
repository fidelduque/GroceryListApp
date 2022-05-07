import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { groceryItem } from 'src/app/models/groceryItem';
import { ItemsService } from '../../services/items.service';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {

  constructor(private service: ItemsService,  public dialog: MatDialog) {}
  groceryList: groceryItem[] = [];
  item!: groceryItem;
  newItemName!: string;

  ngOnInit(): void {
    this.getAllItems();
    /*const newItem: groceryItem = {id: 1, name: 'Pears', done: 0 };
    this.service.createNewItem(newItem).subscribe(item => {
      console.log(item);
    });
    this.service.getAllItems().subscribe((item) => {
      console.log(item);
    });
    
    this.service.updateItem(newItem).subscribe(item => {
      console.log(item);
    });
    this.service.getAllItems().subscribe((item) => {
      console.log(item);
    });
    this.service.deleteItem(1).subscribe(item => {
      console.log(item);
    });
        this.service.getAllItems().subscribe((item) => {
      console.log(item);
    });*/


  }

  getAllItems() {
    this.service.getAllItems().subscribe((items) => {
      this.groceryList = items;
      this.groceryList.sort(this.compare);
    });
  }

  compare( a: groceryItem, b: groceryItem ) {
    if ( a.done < b.done ){
      return -1;
    }
    if ( a.done > b.done ){
      return 1;
    }
    return 0;
  }

  showHelp(){
    const dialogRef = this.dialog.open(InfoDialogComponent, {
      maxWidth: "400px",
    });
  }


  onSubmit() {
    const newItem: groceryItem = {name: this.newItemName, done: 0 };
    this.service.createNewItem(newItem).subscribe(item => {
      console.log(item);
    });
    this.newItemName = '';
    setTimeout(() => {
      this.getAllItems();
    },500);
  }

  handleChildEvent(event: any) {

      this.getAllItems();

  }
}
