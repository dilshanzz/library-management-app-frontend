import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-books',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './view-books.component.html',
  styleUrl: './view-books.component.css'
})
export class ViewBooksComponent implements OnInit {
  private http;
  public bookList:any = {};

  constructor(private httpClient:HttpClient){
    this.http=httpClient;
  }
  ngOnInit(): void {
      this.loadBooks();
  }
  loadBooks(){
    this.http.get('http://localhost:8080/book/get').subscribe ((data) => {
      this.bookList = data;
      console.log(this.bookList);
    });
  }
}
