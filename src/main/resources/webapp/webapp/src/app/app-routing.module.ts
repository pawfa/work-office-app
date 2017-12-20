import {NgModule} from "@angular/core";
import { RouterModule } from "@angular/router"
import {CentralComponent} from "./central/central.component";
import {NewsItemComponent} from "./news/news-item/news-item.component";
import {OfferItemComponent} from "./offers/offer-item/offer-item.component";
import {EditorComponent} from "./shared/editor/editor.component";
import {LoginFormComponent} from "./shared/login-form/login-form.component";

const routes = [
  {path: '', component: CentralComponent, pathMatch: "full"},
  {path: 'login', component: LoginFormComponent,pathMatch: "full"},
  {path: 'news/editor', component: EditorComponent,pathMatch: "full"},
  {path: 'news/editor/:id', component: EditorComponent,pathMatch: "full"},
  {path: 'offers/editor', component: EditorComponent,pathMatch: "full"},
  {path: 'offers/editor/:id', component: EditorComponent,pathMatch: "full"},
  {path: 'offers/:id', component: OfferItemComponent,pathMatch: "full"},
  {path: 'news/:id', component: NewsItemComponent, pathMatch: "full"},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
