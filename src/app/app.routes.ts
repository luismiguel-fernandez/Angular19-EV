import { Routes } from '@angular/router';
import { HomeSectionComponent } from './home-section/home-section.component';
import { VehiclesSectionComponent } from './vehicles-section/vehicles-section.component';
import { ManufacturersSectionComponent } from './manufacturers-section/manufacturers-section.component';
import { Page404SectionComponent } from './page404-section/page404-section.component';
import { MyGarageSectionComponent } from './my-garage-section/my-garage-section.component';

export const routes: Routes = [
    { path: "home", component: HomeSectionComponent, title: "Home" },
    { path: "vehicles", component: VehiclesSectionComponent, title: "Vehicles" },
    { path: "manufacturers", component: ManufacturersSectionComponent, title: "Manufacturers" },
    { path: "garage", component: MyGarageSectionComponent, title: "My garage" },
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: "**", component: Page404SectionComponent, title: "URL NOT FOUND" }
];
