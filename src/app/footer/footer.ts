import { Component } from '@angular/core';
import { ProfileService } from '../services/profile';
import { Profile } from '../models/proflie';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

  constructor (private profileservice: ProfileService) {}

  profile?: Profile;

  date: Date = new Date();

  ngOnInit() {

    this.profile = this.profileservice.getProfile();
  }
}
