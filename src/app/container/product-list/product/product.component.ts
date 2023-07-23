import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input()
  product: {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    inStock: boolean,
    rating: {
        rate: number,
        count: number
    }
  };

}
