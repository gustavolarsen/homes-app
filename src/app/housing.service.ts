import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  apiUrl = 'http://localhost:3000/locations'


  constructor() { }

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.apiUrl);
    return await data.json() ?? [];
  }

  async getHousiongLocationById(id: Number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.apiUrl}/${id}`);
    return await data.json() ?? {};
  }

  submitAppication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
