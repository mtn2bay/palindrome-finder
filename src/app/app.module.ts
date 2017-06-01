import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PalindromeComponent } from './palindrome/palindrome.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { SearchService } from './palindrome/search.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PalindromeComponent,
    SimpleFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [{provide:'search', useClass:SearchService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
