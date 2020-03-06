import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from './services/users.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserformComponent } from './components/userform/userform.component';
import { AdiDropdownComponent } from './components/adi-dropdown/adi-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    UserformComponent,
    AdiDropdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
