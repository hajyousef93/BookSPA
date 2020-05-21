import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  
  constructor(public service:BookService) { }

  ngOnInit(): void {
    this.service.getAllBook();
  }
FillData(item:Book){
  console.log("in Fill");
this.service.book.id=item.id;
this.service.book.author=item.author;
this.service.book.tite=item.tite;
this.service.book.publishedAt=item.publishedAt;
this.service.book.numperOfPage=item.numperOfPage;
}
Delete(id)
{
  this.service.deteteBook(id).subscribe(res=>{
    this.service.getAllBook() 
  })
}
}
