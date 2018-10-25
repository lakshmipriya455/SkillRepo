import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ListConnectionsComponent } from './components/list-plans/list-connections.component';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { SuccesPageComponent } from './components/succes-page/succes-page.component';
const paths: Routes = [
  { path: '', component: ListConnectionsComponent },
  { path: 'listConnections', component: ListConnectionsComponent },
  { path: 'addCustomer/:title', component: CustomerFormComponent },
  { path: 'successReport/:id', component: SuccesPageComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    ListConnectionsComponent,
    CustomerFormComponent,
    SuccesPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(paths)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
