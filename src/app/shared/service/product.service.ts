import { Injectable } from "@angular/core";
import { Iproduct, Ires } from "../model/Iproduct";
import { Observable, of } from "rxjs";


@Injectable({
    providedIn : 'root'
})
export class ProductService{

     productArr  : Iproduct[] = [
    {
      pName: 'iPhone 16 Pro Max',
      pInfo:
        'Apple A18 Pro chip powers the 6.9-inch Super Retina display with stunning clarity. The 48MP Fusion camera, USB-C, Action Button, and premium titanium build make it a flagship. And the product status is ',
      pId: 'APL-001',
      pStatus: 'InProgress',
    },
    {
      pName: 'Samsung Galaxy S25 Ultra',
      pInfo:
        'Snapdragon 8 Elite chipset drives the 6.9-inch AMOLED display with vivid colors. The 200MP camera, built-in S Pen, powerful AI features, and 5000mAh battery make it exceptional. And the product status is ',
      pId: 'SAM-002',
      pStatus: 'Dispatched',
    },
    {
      pName: 'OnePlus 13',
      pInfo:
        'Snapdragon 8 Elite with a smooth 6.82-inch LTPO display delivers premium performance. The Hasselblad 50MP camera, 100W fast charging, and clean OxygenOS make it outstanding. And the product status is ',
      pId: 'OPL-003',
      pStatus: 'Delivered',
    },
  ];
    constructor(){}

    fetchAll() : Observable<Iproduct[]>{
        return of(this.productArr);

    }

    onUpdate(updatedObj : Iproduct) : Observable<Ires<Iproduct>>{
      let GETINDEX = this.productArr.findIndex(p => p.pId === updatedObj.pId);
      this.productArr[GETINDEX] = updatedObj;
      return of({
        msg : `The product state with id ${updatedObj.pId} is Updated Successfully`,
        data : updatedObj
      })

    }

    onCreate(newObj : Iproduct) : Observable<Ires<Iproduct>> {
      this.productArr.unshift(newObj);
      return of({
        msg : `The product with id ${newObj.pId} is Added successfully...!`,
        data : newObj
      })

    }



}