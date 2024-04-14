import { Component } from '@angular/core';
import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrl: './country.component.scss'
})
export class CountryComponent {
  abc: Country[] = [];
  newabc: Country = new Country();
  updateabc: Country = new Country();
  countries: any[] = [];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.getAllCountries();
  }

  getAllCountries(): void {
    this.countryService.getAllapi().subscribe(
      (data: any) => {
        this.countries = data;
      },
      (error) => {
        console.error('Error fetching countries:', error);
      }
    );
  }

  saveclicks(): void {
    this.countryService.saveCountry(this.newabc).subscribe(
      (response) => {
        alert('Data saved successfully :)');
        this.getAllCountries();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  editClick(home: Country): void {
    this.updateabc = home;
  }

  updateClick(): void {
    this.countryService.updateCountry(this.updateabc.id.toString(), this.updateabc).subscribe(
      (response) => {
        alert('Data updated successfully :)');
        this.getAllCountries();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteClick(id: string): void {
    console.log(id);
    this.countryService.deleteCountry(id).subscribe(
      () => {
        alert('Data deleted successfully');
        this.getAllCountries();
      },
      (error) => {
        console.log('Cannot delete data', error);
        alert('Error deleting data.');
      }
    );
  }

}