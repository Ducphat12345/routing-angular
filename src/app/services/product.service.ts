import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../models/product";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class ProductService {
  
    constructor(private http: HttpClient) { }
  
    getInfoProduct(): Observable<Product>{
      return this.http.get<Product>('http://localhost:8080/api/product/danh-sach');
    }
  }