import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { VoterService } from '../voter.service'
import { User } from '../user';

@Component({
  selector: 'app-voter-list',
  templateUrl: './voter-list.component.html',
  styleUrls: ['./voter-list.component.css']
})
export class VoterListComponent implements OnInit {

  content: string;
  users: User[];
  currentUser: any;
  

  constructor(private voterService: VoterService, private token: TokenStorageService) { }

  ngOnInit(): void {
    this.voterService.getUserList().subscribe(
      data => {
        this.users=data;
      },
      err => {
        this.content= JSON.parse(err.error).message;
      }
    );
    this.currentUser = this.token.getUser();
  }

  
  deleteUser(uid: number):void {
    this.voterService.deleteUser(uid).subscribe(
      data => {
        this.users = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      });
      this.users = this.users.filter(item => item.userId != uid);
      this.reloadPage();
  }
  delUser(userId:number){
    this.deleteUser(userId);
  }

  reloadPage(): void{
    window.location.reload();
  }

}
