import { Injectable } from '@angular/core';

export interface ProfileData {
  email: string;
  name: string;
  whatsApp: string;
  linkedin: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  getProfile(): ProfileData {
    const profile: ProfileData = {
      email: 'sergioda.silva1992@gmail.com',
      name: 'Sergio da Silva Junior',
      whatsApp: 'https://wa.me/5511953519853',
      linkedin: 'https://www.linkedin.com/in/s%C3%A9rgio-da-silva-junior/'
    };

    return profile;
  }
}
