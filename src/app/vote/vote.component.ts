import { Component, OnInit } from '@angular/core';



@Component({

  selector: 'app-vote',

  templateUrl: './vote.component.html',

  styleUrls: ['./vote.component.css']

})

export class VoteComponent implements OnInit {



  constructor() { }



  voteArray=[{

    id:1,

    voteState:false,

    name:"Rohit"

  },
]




  ngOnInit(): void {

  }



  voteChecker($event:any,index:number){

    this.voteArray.map((data:any)=>{

      data.voteState=false;

    })

    this.voteArray[index].voteState=true;



  }
}