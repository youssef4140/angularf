import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  name: string = '';
  addToCart: number = 0;
  products = [
    {
      img: "assets/image/galaxy.jpg",
      name: 'iphone',
      price: 1000,
      color: 'black',
      discounted_price: 0.85,
      inStock: 1,
      addToCart:0
    },
    {
      img: "assets/image/iphone.jpg",
      name: 'galaxy',
      price: 900,
      color: 'blue',
      discounted_price: 0.78,
      inStock: 5,
      addToCart:0

    },
    {
      img: "assets/image/pixel.jpg",
      name: 'pixel',
      price: 800,
      color: 'white',
      discounted_price: 0.9,
      inStock: 0,
      addToCart:0


    },
  ];

  getdiscountedprice(discounted_price: number, price: number): number {
    return discounted_price * price;
  }

  buy(inStock: number){
    inStock = inStock - 1;
  }

  onNameChange(event: any){
    this.name = event.target.value;
    // console.log(this.name);
    console.log(event.target.value);
    console.log(event);
  }
  substract(product: any){
    if(product.addToCart > 0){
      product.addToCart--;
      product.inStock++;
    } 
  }
  add(product: any){
    if(product.inStock > 0){
      product.addToCart++;
      product.inStock--;
    }
    
  }
}
