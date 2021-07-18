import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  [users: string]: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users= this.userService.getUsers();

  }

}
