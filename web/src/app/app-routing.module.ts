import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HealthComponent} from './health/health.component';
import {ConfigServiceComponent} from './config-service/config-service.component';

const routes: Routes = [

  {
    path: '',
    component: ConfigServiceComponent
  },
  {
    path: 'health',
    component: HealthComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
