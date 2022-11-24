import { Component, OnInit } from '@angular/core';
import {ICandidate } from '../candidate'
import {CandidateService } from '../candidate.service'
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  content: string;
  candidates: ICandidate[];
  currentUser: any;

  constructor(private candidateService: CandidateService, private token: TokenStorageService) { }

  ngOnInit(): void {this.candidateService.getCandidateList().subscribe(
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

}
