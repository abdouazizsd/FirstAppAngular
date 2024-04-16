import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {


  public products: any;
  public keyword: string = "";

  constructor(){}


  ngOnInit(): void {
    this.products = [
      {"id":1, "name": "Velo", "price": "500000"},
      {"id":2, "name": "Moto", "price": "2000000"},
      {"id":3, "name": "Taxi", "price": "30000000"},
      {"id":4, "name": "Charette", "price": "5000000"}
    ]
  }

   deleteProduct(p: any) {
    let index = this.products.indexOf(p);
     this.products.splice(index, 1);
    }

    search(): void {
      
      this.products = this.products.filter((p:any)=>p.name.includes(this.keyword));
      /*console.log(this.keyword);
      let result: any =  [];
      for(let p of this.products){
        if (p.name.includes(this.keyword)) {
          result.push(p);
        }
      }
      this.products = result;*/
      }
      
}
