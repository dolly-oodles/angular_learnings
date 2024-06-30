import { Component } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  usersData: any;
  constructor(private userdata: UserDataService) {
    this.usersData = userdata.users();
    console.log(this.usersData);
  }
}
