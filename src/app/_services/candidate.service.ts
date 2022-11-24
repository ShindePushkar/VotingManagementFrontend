// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { ICandidate } from '../candidate';
// import { HttpClient, HttpHeaders } from '@angular/common/http';




// const httpOptions = {

//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })

// };




// @Injectable({

//   providedIn: 'root'

// })

// export class CandidateService {



//   constructor(private http: HttpClient) { }






//   getCandidateList() : Observable<ICandidate[]>{

//     return this.http.get<ICandidate[]>( 'http://localhost:8080/candidate/get', httpOptions);

//   }



//   deleteCandidate(candidateId:number) : Observable<any> {

//     return this.http.delete('http://localhost:8080/delete/'+ candidateId, httpOptions )

//   }



//   updateCandidate(candidateId:number) : Observable<any> {

//     return this.http.put('http://localhost:8080/put/'+ candidateId, httpOptions)

//   }

// }