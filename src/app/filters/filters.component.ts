import { Component, OnInit, Output  ,EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  url:string = 'http://test-api.edfa3ly.io/product';
  products:any;
   colors:string[] = [];
     @Output() valueChange = new EventEmitter();
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(a =>{
     this.products = a
    });
  }
  counter(i: number) {
    return new Array(i);
}
 selectColor(color){
    this.colors.push(color.name);
     this.valueChange.emit(this.colors);
 }
  remove(){
     this.colors = [];
  }

}
