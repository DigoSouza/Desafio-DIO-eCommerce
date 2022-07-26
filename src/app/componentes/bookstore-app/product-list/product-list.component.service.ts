import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './product-item/model/book';

@Injectable()

export class BooksService {
    private url = 'https://api.itbook.store/1.0/books/9781617294136';

    HttpOptions = {
        Headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    constructor(private Http:HttpClient) {

    }

    getBooks(){
        return this.Http.get(this.url);
    }
}