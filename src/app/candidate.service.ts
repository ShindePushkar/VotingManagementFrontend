import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICandidate } from './candidate';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {

  headers: new HttpHeaders({ 'Content-Type': 'application/json' })

};


@Injectable({
providedIn: 'root'
})

export class CandidateService {


  constructor(private http: HttpClient) { }

  addCandidate(candidate: ICandidate){
    return this.http.post<ICandidate>('http://localhost:8081/candidate/post',candidate);
  }

  getCandidateList() : Observable<ICandidate[]>{

    return this.http.get<ICandidate[]>( 'http://localhost:8081/candidate/get', httpOptions);

  }

  deleteCandidate(candidateId:number) : Observable<any> {

    return this.http.delete('http://localhost:8081/delete/'+ candidateId, httpOptions )

  }

  updateCandidate(candidateId:number) : Observable<any> {

    return this.http.put('http://localhost:8081/put/'+ candidateId, httpOptions)

  }

}