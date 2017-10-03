import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminWelcomeComponent } from 'app/components/admin-welcome/admin-welcome.component';
import { AdminDetailsComponent } from 'app/components/admin-details/admin-details.component';
import { ProcessingOrdersComponent } from 'app/components/processing-orders/processing-orders.component';

export const routes: Routes = [
  { path: '', component: AdminWelcomeComponent },
  { path: 'admin-details', component: AdminDetailsComponent },
  { path: 'processing-orders', component: ProcessingOrdersComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
