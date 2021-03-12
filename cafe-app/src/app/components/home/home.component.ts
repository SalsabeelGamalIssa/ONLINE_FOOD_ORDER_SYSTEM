import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../services/api.service';
import { environment } from './../../../environments/environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _apiService:HttpService) { }
products:any=[];
  ngOnInit(): void {

    this._apiService.getAllProducts().subscribe((res:any)=>{
      console.log(res);
      this.products=res.data;
    },(err)=>{
      alert("yallahwyyy");
    });
  }


  _getProducts(): void {
    this._apiService.getAllProducts().subscribe((data: any) => {
      this.products = data.data;
      console.log(this.products);
    });
  }
  _addItemToCart( id, quantity): void {
    let payload = {
      productId: id,
      quantity,
    };
    this._apiService.addToCart(payload).subscribe(() => {
      this._getProducts();
      alert('Product Added');
    });
  }

}
