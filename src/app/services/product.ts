import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Product {

   constructor(){
     console.log("product service ");



   }
  
getProductData(){
  return[ {name:'mobile', branch:'samsung', price: '20000'},
    {name:'laptop',branch:'LG',price:'200000'},
  ]
}

}
