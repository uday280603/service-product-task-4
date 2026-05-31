import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../model/Iproduct';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {

  getAllProducts !: Iproduct[]
  

  constructor(private _productService : ProductService) { }

  ngOnInit(): void {

    this.getAll()
  }

  getAll(){
    this._productService.fetchAll()
    .subscribe({
      next : data =>{
        this.getAllProducts = data
      }
    })

  }

  trackByFun(index : number , item : Iproduct){
    return item.pId;
  }

  

}
