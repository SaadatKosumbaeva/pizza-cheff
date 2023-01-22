import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ToolbarComponent } from './ui/toolbar/toolbar.component';
import { MainInfoComponent } from './ui/main-info/main-info.component';
import { PizzaItemsComponent } from './ui/pizza-items/pizza-items.component';
import { PizzaItemComponent } from './ui/pizza-items/pizza-item/pizza-item.component';
import { OrderFormComponent } from './ui/order-form/order-form.component';
import { QualityItemsComponent } from './ui/quality-items/quality-items.component';
import { ValidatePhoneDirective } from './directives/validate-phone.directive';
import { ExcludeSpecSymbolsDirective } from './directives/exclude-spec-symbols.directive';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    MainInfoComponent,
    PizzaItemsComponent,
    PizzaItemComponent,
    OrderFormComponent,
    QualityItemsComponent,
    ValidatePhoneDirective,
    ExcludeSpecSymbolsDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    FlexModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
