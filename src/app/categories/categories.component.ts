import { Component , OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { category} from './catgory_model';
//import {CategoriesService} from './categories.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent{
  url:string = 'http://test-api.edfa3ly.io/category';
 categoires:any;
 constructor(private http:HttpClient){

 }
 ngOnInit(): void {
this.http.get(this.url).subscribe(a =>{
 this.categoires = a
});



}
}
