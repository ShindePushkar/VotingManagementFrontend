import { Component, OnInit, EventEmitter,Input, Output } from '@angular/core';
import { SharedService } from '../shared.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import {ICandidate } from '../candidate'
import {CandidateService } from '../candidate.service'
import { TokenStorageService } from '../_services/token-storage.service';


@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})

export class CandidatesComponent implements OnInit {
  content: string;
  candidates: ICandidate[];
  currentUser: any;
 constructor(private _router:Router,private SharedService:SharedService,
  private candidateService: CandidateService, private token: TokenStorageService){}
// constructor(private candidateService: CandidateService, private token: TokenStorageService){}

  @Input() vote: any;
  @Output() voteAction = new EventEmitter();
  ngOnInit(): void {this.candidateService.getCandidateList().subscribe(

    data => {

      this.candidates=data;

    },

    err => {

      this.content= JSON.parse(err.error).message;

    }

  );

  this.currentUser = this.token.getUser();
  }

  
  voteHandler(){
    this.vote.voteState= true;
    this.voteAction.emit(this.vote);
  }
  clickme(){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire(
      'Done!',
      'Your Vote has been Submitted.',
      'success'
      
    )
    this._router.navigate(["/vote-complete"]);

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
      // this.vote = this.candidates.filter(item => item.vote += item.vote );
  }
  putCad(candidateId:number){
    this.updateCandidate(candidateId);
  }




  

}
