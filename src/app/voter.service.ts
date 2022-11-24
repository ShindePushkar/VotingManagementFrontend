import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user'

const httpOptions = {

  header: new HttpHeaders({ 'Content-Type': 'application/json'})

};

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  constructor(private http: HttpClient) { }

  getUserList(): Observable<User[]>{
    return this.http.get<User[]>('http://localhost:8082/user/get')
  }

  deleteUser(userId:number) : Observable<any> {

    return this.http.delete('http://localhost:8082/user/delete/'+ userId);

  }
}
