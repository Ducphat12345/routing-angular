import { Component, OnInit } from "@angular/core";
import { CategoryService } from "../services/category.service";
import { Router } from "@angular/router";

@Component({
    selector: 'category-list',
    templateUrl: './category-list.component.html'
})

export class CategoryListComponent implements OnInit{

    categories: any; 

    constructor(private categoryService: CategoryService, private router: Router){}

    ngOnInit(): void {
        this.getCategoryList();
    }

    getCategoryList(){
        this.categoryService.getInfoCategory().subscribe(res => {
            this.categories = res;
        })
    }

    updateCategory(id: number){
        this.router.navigate(['update', id])
    }

    deleteCategory(id: number){
       this.categoryService.deleteCategory(id).subscribe(res => {
            console.log(res);
            this.getCategoryList();
       })
    }
}