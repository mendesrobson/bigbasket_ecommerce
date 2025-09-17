import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get(Constant.API_ENDPOINT + Constant.METHODS.GET_ALL_PRODUCT)
  }

  getAllCategory(){
    return this.http.get(Constant.API_ENDPOINT + Constant.METHODS.GET_ALL_CATEGORY)
  }

  saveProducts(obj: any){
    return this.http.post(Constant.API_ENDPOINT + Constant.METHODS.CREATE_PRODUCT, obj)
  }

}
