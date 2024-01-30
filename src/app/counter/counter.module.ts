import { NgModule } from "@angular/core";
import { CounterCompenent } from "./components/counter/counter.component";

@NgModule({
  declarations: [
    CounterCompenent
  ],
  exports: [
    CounterCompenent
  ]
})
export class CounterModule {

}
