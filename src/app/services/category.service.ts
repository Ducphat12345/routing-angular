import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getInfoCategory(): Observable<Category>{
    return this.http.get<Category>('http://localhost:8080/api/category/categories');
  }

  getCategoryById(id: number): Observable<Category>{
    return this.http.get<Category>('http://localhost:8080/api/category/search-by-id/'+`${id}`)
  }

  createCategory(category: Category): Observable<Category>{
    return this.http.post<Category>('http://localhost:8080/api/category/create', category);
  }

  updateCategory(id: number, category: Category): Observable<Category>{
    return this.http.put<Category>('http://localhost:8080/api/category/update/'+`${id}`, category);
  }

  deleteCategory(id: number): Observable<Category>{
    return this.http.delete<Category>('http://localhost:8080/api/category/delete/'+`${id}`);
  }
}
