import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { products } from '../productos';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {this.product = products[+params.get('productId')];
    });
  }

  share(nombreP:string) {
    window.alert('Ha compartido el telefono: ' + nombreP);
  }
}