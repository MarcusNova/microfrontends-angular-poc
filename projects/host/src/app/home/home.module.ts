import { NgModule } from "@angular/core";
import { RegisterComponent } from "./ui/register/register.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
    {
        path: '',
        component: RegisterComponent
    }
]

@NgModule({
    declarations: [
        RegisterComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        RegisterComponent
    ]
})
export class HomeModule {}