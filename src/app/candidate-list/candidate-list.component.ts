import { Component, OnInit } from '@angular/core';
import {ICandidate } from '../candidate'
import {CandidateService } from '../candidate.service'
import { TokenStorageService } from '../_services/token-storage.service';

       
@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {
    
    content: string;
    candidates: ICandidate[];
    currentUser: any;
    vote:any;


   constructor(private candidateService: CandidateService, private token: TokenStorageService)  { }
  
   ngOnInit(): void {
    this.candidateService.getCandidateList().subscribe(
      data => {
        this.candidates=data;
      },
      err => {
        this.content= JSON.parse(err.error).message;
      }
    );
    this.currentUser = this.token.getUser();
    // console.log(this.currentUser.candidates.candidateId);
  }

  deleteCandidate(cid:number):void{
    this.candidateService.deleteCandidate(cid).subscribe(
      data => {
        this.candidates = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      });
      this.candidates = this.candidates.filter(item => item.candidateId != cid);
      this.reloadPage();
    }
  delGet(candidateId:number){
    this.deleteCandidate(candidateId);
  }


  updateCandidate(cadId:number): void {
    this.candidateService.updateCandidate(cadId).subscribe(
      data => {
        this.candidates = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      });
      this.candidates = this.candidates.filter(item => item.candidateId != cadId);
      this.reloadPage();
      // this.vote = this.candidates.filter(item => item.vote += item.vote );
  }
  putCad(candidateId:number){
    this.updateCandidate(candidateId);
  }

  reloadPage(): void {
    window.location.reload();
  }
  
  }



  // private getCandidates(){
  //   this.candidateService.getCandidateList().subscribe(data => {
  //     this.candidates = data;
  //   })
  // }




