import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { SanckBarService } from '../../service/snackbar.service';
import { Iproduct } from '../../model/Iproduct';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  @ViewChild('productTitle') productTitle!: ElementRef;
  @ViewChild('productdesc') productdesc!: ElementRef;

  constructor(
    private _productService: ProductService,
    private _snackbar: SanckBarService,
  ) {}

  ngOnInit(): void {}

  onAddProduct() {
    let val1: string = this.productTitle.nativeElement.value;
    let val2: string = this.productdesc.nativeElement.value;
    if (val1.length > 0 && val2.length > 0) {
      let NEW_OBJ: Iproduct = {
        pName: val1,
        pInfo: val2,
        pId: Date.now().toString(),
        pStatus: 'InProgress',
      };
      this._productService.onCreate(NEW_OBJ).subscribe({
        next: (data) => {
          this._snackbar.openSnackbar(data.msg);
          this.productTitle.nativeElement.value = '';
          this.productdesc.nativeElement.value = '';
        },
        error: (err) => {
          this._snackbar.openSnackbar(err);
        },
      });
    }
  }
}
