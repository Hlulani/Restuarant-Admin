import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { OrderService } from "app/service/order.service";

@Component({

 selector: 'app-processing-orders',
 templateUrl: './processing-orders.component.html',
 styleUrls: ['./processing-orders.component.scss']

})
export class ProcessingOrdersComponent {
  orders: FirebaseListObservable<any[]>;
  isCollapsed = false;
  order: any[];

  constructor(db: AngularFireDatabase, private router: Router, private orderService: OrderService) {
    this.orders = db.list('resturents/hrll3/orders');

    //  orderService.cartObserver.subscribe((cart) => {
    //   this.menus = cart;
    //   this.totalPrice = cart.reduce((c, menu) => {
    //     return c + menu.price;
    //   }, 0);
    // });
    orderService.cartObserver.next(orderService.cart);
  }

  orderDetails() {
    this.router.navigate(['']);
  }
  deleteProduct(order) {

    this.orderService.deleteProductFromOrder(order);
    console.log('test' +  this.orderService.deleteProductFromOrder(order));
  }
}
