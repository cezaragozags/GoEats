import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsideBarComponent } from './aside-bar/aside-bar.component';
import { CatalogoMenusComponent } from './catalogo-menus/catalogo-menus.component';
import { FooterComponent } from './footer/footer.component';
import { FormPlatillosComponent } from './form-platillos/form-platillos.component';
import { HeaderComponent } from './header/header.component';
import { ListPlatillosComponent } from './list-platillos/list-platillos.component';
import { MainContainerComponent } from './main-container/main-container.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AsideBarComponent, CatalogoMenusComponent, FooterComponent, FormPlatillosComponent, HeaderComponent, ListPlatillosComponent, MainContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GoEats';
}
