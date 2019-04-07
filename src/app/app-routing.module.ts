import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParkingComponent } from './components/parking/parking.component';

const routes: Routes = [
      { path: 'home', component: ParkingComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
