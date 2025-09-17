import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {

  isSidePanelVisible: boolean = false;

  productObj: any = {
    "productId": 0,
    "productSku": "",
    "productName": "",
    "productPrice": 0,
    "productShortName": "",
    "productDescription": "",
    "createdDate": new Date().getUTCDate(),
    "deliveryTimeSpan": "",
    "categoryId": 0,
    "productImageUrl": "",
    "userId": 0
  }

  categoryList: any = [] = [];
  productsList: any = [] = [];


  constructor(private productSrv: ProductService){}

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategory();
  }

  getAllCategory(){
    this.productSrv.getAllCategory().subscribe((res: any) => {
      this.categoryList = res.data;
    })
  }

  getAllProducts(){
    this.productSrv.getAllProducts().subscribe((res: any) => {
      this.productsList = res.data;
    })
  }

  onSave(){
   this.productSrv.saveProducts(this.productObj).subscribe((res: any) => {
      debugger;
      if(res.result){
        this.getAllProducts();
        alert("Product saved successfully")
      }else{
        alert(res.message)
      }
    })
  }


  openSidePanel(){
    this.isSidePanelVisible = true;
  }

  closeSidePanel(){
    this.isSidePanelVisible = false;
  }

}
