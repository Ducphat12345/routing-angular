import { Component } from '@angular/core';
import { CategoryService } from './services/category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-angular';
  categories: any; 

  constructor(private categoryService: CategoryService){}

  ngOnInit(): void {
      this.getCategoryList();
  }

  getCategoryList(){
      this.categoryService.getInfoCategory().subscribe(res => {
          this.categories = res;
      })
  }
}
