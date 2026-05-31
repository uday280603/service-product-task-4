import { Component, Input, OnInit } from '@angular/core';
import { Iproduct } from '../../model/Iproduct';
import { ProductService } from '../../service/product.service';
import { SanckBarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() productobj!: Iproduct;

  constructor(private _prioductService: ProductService , private _snackbar : SanckBarService) {}

  ngOnInit(): void {}

  onUpdated(
    updatedObj: Iproduct,
    status: 'InProgress' | 'Dispatched' | 'Delivered',
  ) {
    let UPDATED_OBJ = {
      pName: this.productobj.pName,
      pInfo: this.productobj.pInfo,
      pId: this.productobj.pId,
      pStatus: status,
    };
    this._prioductService.onUpdate(UPDATED_OBJ)
    .subscribe( {
      next : data =>{
      this._snackbar.openSnackbar(data.msg)
      }
    })
  }
}
