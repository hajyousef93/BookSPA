import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Book } from './book.model';


@Injectable({
  providedIn: 'root'
})
export class BookService {
books:Book[];
book:Book;
Url:string="http://localhost:51167/Books"
  constructor(private http:HttpClient) { }


  getAllBook(){
    this.http.get(this.Url).toPromise().then(
      result=>{
        this.books=result as Book[];
      }
    )
  }

  postBook(){
    return this.http.post(this.Url,this.book);
  }
  putBook(){

      return this.http.put(this.Url +"/"+this.book.id,this.book);

  }
  existBook(){
    return this.http.get(this.Url+"/BookExists"+this.book.id);
  }
  deteteBook(id){
    return this.http.delete(this.Url+"/"+id);
  }
}
