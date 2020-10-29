import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { HomeComponent } from  "./home/home.component";
import { FormComponent } from "./form/form.component";


const routes: Routes = [
    
    
    { path: "", redirectTo:"/home" , pathMatch:"full"},
    { path: "home", component: HomeComponent },
    { path: "home/form", component: FormComponent }
 
      
];  

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
