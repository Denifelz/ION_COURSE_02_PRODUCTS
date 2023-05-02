import { Component } from '@angular/core';

import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [
    new Product('Phone XL', 'A large phone with one of the best screens', 800),
    new Product('Phone Mini', 'A great phone with one of the best cameras', 700),
    new Product('Phone Standard', '', 700)
  ]

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
