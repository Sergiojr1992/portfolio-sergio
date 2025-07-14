import { Component } from '@angular/core';
import { ProfileService } from '../services/profile';
import { Profile } from '../models/proflie';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  constructor(private profileservice: ProfileService) {}

  profile?: Profile;

  ngOnInit() {
    this.profile = this.profileservice.getProfile();
  }
}
