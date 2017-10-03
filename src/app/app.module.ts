import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AdminWelcomeComponent } from 'app/components/admin-welcome/admin-welcome.component';
import { AdminDetailsComponent } from 'app/components/admin-details/admin-details.component';
import { ProcessingOrdersComponent } from 'app/components/processing-orders/processing-orders.component';
import { environment } from 'environments/environment';

import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2/angularfire2';
import { OrderService } from "app/service/order.service";

const appRoutes: Routes = [
  { path: '', component: AdminWelcomeComponent },
  { path: 'admin-details', component: AdminDetailsComponent },
  { path: 'processing-orders', component: ProcessingOrdersComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    AdminWelcomeComponent,
    AdminDetailsComponent,
    ProcessingOrdersComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
