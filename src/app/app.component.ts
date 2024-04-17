import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './service/currency.service';
import { Icurrency } from './interface/currency';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  conrencyname!:Array<Icurrency>
  basecurrency!:string
  currenttarget!:string
  amount:number=1
  result:number=0
  title = 'currencytask';
constructor(private _currency:CurrencyService){

}

  ngOnInit(): void {
    this._currency.fetchobjtoarr().subscribe(res=>{
      this.conrencyname =res
    })
  }
  onclickchnge(){
    this._currency.forexchange(this.basecurrency).subscribe(res=>{
      this.result=res.conversion_rates [this.currenttarget] * this.amount
      console.log(this.result);
      
    })
  }
}
