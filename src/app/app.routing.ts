import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CadBiometricComponent } from "./cad-biometric/cad-biometric.component";
import { ModuleWithProviders } from "@angular/core";
import { NewPaassengerComponent } from "./new-paassenger/new-paassenger.component";

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'cad-biometric', component: CadBiometricComponent },
    { path: 'new-passenger', component: NewPaassengerComponent}
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTES);
