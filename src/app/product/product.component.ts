import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
url:string = 'http://test-api.edfa3ly.io/product';
products:any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(a =>{
     this.products = a
    });
  }
  counter(i: number) {
    return new Array(i);
}


}
