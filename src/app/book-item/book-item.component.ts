import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
 
  constructor(public service:BookService) { }

  ngOnInit(): void {
    this.service.book=new Book();
  }
  onSubmit(){
  if (!this.service.existBook()) {
    this.service.postBook().subscribe(res=>{
      this.service.getAllBook()
     
      },
      err=>{
        console.log(err)
      })
  }else
  {
    this.service.putBook().subscribe(res=>{
      this.service.getAllBook()
     
      },
      err=>{
        console.log(err)
      })
  }

  
  }


}
