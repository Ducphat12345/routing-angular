import { Component, OnInit } from "@angular/core";
import { Category } from "../models/category";
import { CategoryService } from "../services/category.service";
import { Router } from "@angular/router";

@Component({
    selector: 'create-category',
    templateUrl: './create-category.component.html'
})

export class CreateCategoryComponent implements OnInit{

    category: Category = new Category();

    constructor(private categoryService: CategoryService, private router: Router){}
    
    ngOnInit(): void {
    }

    saveCategory(){
        this.categoryService.createCategory(this.category).subscribe(res => {
            console.log(res);
            this.router.navigate(['/categories'])
            alert("Create successfully!")
        });
        console.error();
    }
}