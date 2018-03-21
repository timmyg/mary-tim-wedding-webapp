import { Component } from "@angular/core";

import { AppState } from "../app.service";
import { Title } from "./title";
import { XLarge } from "./x-large";

import * as moment from "moment";

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: "home", // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [Title],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: ["./home.component.scss"],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  // templateUrl: './home.component.html'
  template: require("./home.component.pug")
})
export class Home {
  public timeaway = "bob";

  ngOnInit() {
    this.timeaway = moment("7-7-2018 16:00 EST", "M-D-YYYY HH:mm z").fromNow();
  }
}
