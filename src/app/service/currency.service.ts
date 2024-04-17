import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, pipe } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Icurrency } from '../interface/currency';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  // baseurl:string='//latest/USD'
urlbase='https://v6.exchangerate-api.com/v6';
  urlid='f2bda8ea7594118e3c4d3e36';

 posturl:string=`${this.urlbase}/${this.urlid}/latest/USD`
  constructor(private http:HttpClient) {
    console.log(this.posturl);
   }
   fetchobjtoarr():Observable<any>{
     return this.http.get<Icurrency>(this.posturl)
     .pipe(map((res:Icurrency)=>{
     let currarray:Array<any>=[]
      for (const key in res.conversion_rates) {
        currarray.push(key)
      }
  return currarray
  
  
     }))

   }
   forexchange(exchange:string):Observable<any>{
    let changes=`${this.urlbase}/${this.urlid}/latest/${exchange}`
    return this.http.get<Icurrency>(changes)
   }

  }