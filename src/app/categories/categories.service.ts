import { Injectable } from '@angular/core';
import {category} from './catgory_model';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

getProduct()
  {
    return category;
  }
}
