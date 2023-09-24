import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetpassordComponent } from './resetpassord/resetpassord.component';

const routes: Routes = [
   {path:'' ,redirectTo:'resetpassord' ,pathMatch:'full'},
   {path:'resetpassord',component:ResetpassordComponent}
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
