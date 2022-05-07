import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { groceryItem } from '../models/groceryItem'; 
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient ) { }

  getAllItems(): Observable<any> {
    return this.http.get(environment.apiUrl + 'api/ListItems');
  }

  createNewItem(item: groceryItem): Observable<any> {
    return this.http.post<groceryItem>(environment.apiUrl +'api/ListItems', item);
  }

  deleteItem(id: number): Observable<any> {
    return this.http.delete(environment.apiUrl +'api/ListItems/'+id);
  }

  updateItem(item: groceryItem): Observable<any> {
    console.log(item);
    return this.http.put<groceryItem>(environment.apiUrl +'api/ListItems/' + item.id, item);
  }

}
