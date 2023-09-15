import { Component, OnInit } from "@angular/core";
import { Category } from "../models/category";
import { CategoryService } from "../services/category.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'update-category',
    templateUrl: './update-category.component.html'
})

export class UpdateCategoryComponent implements OnInit{
    
    id!: number;
    category: Category = new Category();

    constructor(private categoryService: CategoryService, private activeRoute: ActivatedRoute, private router: Router){}

    ngOnInit(): void {
        this.id = this.activeRoute.snapshot.params['id'];
        this.categoryService.getCategoryById(this.id).subscribe(res => {
            this.category = res;
        });
        console.error();
    }

    updateCategory(){
        this.categoryService.updateCategory(this.id, this.category).subscribe(res => {
            console.log(res);
            this.router.navigate(['/categories'])
            alert("Update successfully!")
        });
        console.error();
    }
}