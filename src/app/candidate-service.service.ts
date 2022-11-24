import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ICandidate } from './candidate'


import { HttpClient, HttpHeaders } from '@angular/common/http';

import { NgForm } from '@angular/forms';




const httpOptions = {

  headers: new HttpHeaders({ 'Content-Type': 'application/json' })

};




@Injectable({

  providedIn: 'root'

})

export class CandidateService {

  candidate: any;



  constructor(private http: HttpClient) { }






  getCandidateList() : Observable<ICandidate[]>{

    return this.http.get<ICandidate[]>('http://localhost:8081/candidate/get', httpOptions);

  }



  deleteCandidate(candidateId:number) : Observable<any> {

    return this.http.delete('http://localhost:8081/delete/'+ candidateId, httpOptions )

  }



  updateCandidate(candidateId:number) : Observable<any> {

    return this.http.put('http://localhost:8081/put/'+ candidateId, httpOptions)

  }




  public addCandidate(candidate: ICandidate){

    return this.http.post<ICandidate>('http://localhost:8081/candidate/post', candidate);

  }

}