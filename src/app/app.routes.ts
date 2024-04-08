import { Routes } from '@angular/router';
import { SelectionpageComponent } from './Pages/selectionpage/selectionpage.component';
import { NavPageComponent } from './Pages/nav-page/nav-page.component';
import { PlaygroundPageComponent } from './Pages/playground-page/playground-page.component';
import { SidePageComponent } from './Pages/side-page/side-page.component';

export const routes: Routes = [
    { path: '', component: SelectionpageComponent },
    { path: 'navbar', component: NavPageComponent },
    { path: 'play', component: PlaygroundPageComponent },
    { path: 'sidebar', component: SidePageComponent },

];
