import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Home } from '../home';
import { HomeService } from '../home.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  abc: Home[] = [];
  newabc: Home = new Home();
  selectedImage: File | null = null; 
  records!: any[]; // ye code export ke neche likhna hai ok na..
  updateData: any = {
    id: 0,
    name: '',
    phone: '',
    email: '',
    image: ''
  };

  constructor(private http: HttpClient, private employeeservice: HomeService, private router: Router) { }
  ngOnInit() {
    this.employeeservice.getAllapi().subscribe(data => {
      this.records = data;
    });
  } 
  saveclicks() {
    if (this.selectedImage) {
      const formData = new FormData();
      formData.append('name', this.newabc.name);
      formData.append('ph', this.newabc.ph);
      formData.append('email', this.newabc.email);
      formData.append('image', this.selectedImage);

      this.employeeservice.saveapi(formData).subscribe(
        (response) => {
          alert('Data saved successfully.');
          this.ngOnInit();
        },
        (error) => {
          console.log('Error saving data:', error);
        }
      );
    } else {
      console.log('Please select an image.');
    }
  }

  onFileSelected(event: any) {
    this.selectedImage = event.target.files[0];
    this.updateData.image = event.target.files[0];
  }
  onFileSelectedt(event: any) {
    this.updateData.image = event.target.files[0];
  }
  editClick(home: Home) {
    this.updateData = home;
  }

  updateClick() {
    this.employeeservice.updateapi(this.updateData.id, this.updateData).subscribe(
      (response) => {
        alert('Data updated successfully');
        this.ngOnInit();
      },
      (error) => {
        console.log('Error updating data:', error);
      }
    );
  }
  deleteClick(id: number) {
    console.log(id);
    this.employeeservice.deleteapi(id).subscribe(
      () => {
        alert('Data deleted successfully');
        this.ngOnInit();
      },
      (error) => {
        console.log('Cannot delete data', error);
        alert('Error deleting data.');
      }
    );
  }
}
