import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class OrderService {
  menus: FirebaseListObservable<any[]>;
  cart: any[];
  cartObserver: Subject<any[]>;
  cartObservable: Observable<any[]>;

  menuObserver: BehaviorSubject<any>;

  constructor(db: AngularFireDatabase) {
    this.menuObserver = new BehaviorSubject(null);

    db.list('resturents/hrll3/orders').subscribe(c => this.menuObserver.next(c));

    this.cart = [];
    this.cartObserver = new Subject<any[]>();
    this.cartObservable = Observable.create(this.cart);
  }

  deleteProductFromOrder(order: any) {
    const reduced = this.cart.reduce((prev, curr) => {
      if (curr.$key === order.$key && prev.seen === false) {
        prev.seen = true;
      } else {
        prev.cart.push(curr);
      }
      return prev;
    }, { seen: false, cart: [] });

    this.cart = reduced.cart;
    this.cartObserver.next(this.cart);
  }
}
