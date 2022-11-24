import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../candidate.service';
import { ICandidate } from '../candidate';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-register-candidate',
  templateUrl: './register-candidate.component.html',
  styleUrls: ['./register-candidate.component.css']
})
export class RegisterCandidateComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  candidate: ICandidate = {
    candidateId: 0,
    candidateName: "",
    candidateParty: "",
    vote: 0
  }

  constructor(private candidateService: CandidateService) { }

  ngOnInit(): void {
  }

  addCandidate(candidateForm: NgForm)  {
    this.candidateService.addCandidate(this.candidate).subscribe(
      (response: ICandidate) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
  // onSubmit(): void {
  //   this.candidateService.addCandidate(this.form).subscribe(
  //     data => {
  //       console.log(data);
  //       this.isSuccessful = true;
  //       this.isSignUpFailed = false;
  //     },
  //     err => {
  //       this.errorMessage = err.error.message;
  //       this.isSignUpFailed = true;
  //     }
  //   );
  // }

    // addCandidate(candidateForm: NgForm){
    //   console.log(this.candidate);

    //   this.candidateService.addCandidate(this.candidate).subscribe(
    //     (response: ICandidate) => {
    //       console.log(response);
    //     },
    //     err => {
    //       this.errorMessage = err.error.message;
    //     }

      
    //   );
    // }


}
