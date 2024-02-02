import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from './contact.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  messageSendForm!: FormGroup;
  loading:boolean=false;
  buttonDisabled=false;

  constructor(private service: ContactService, public snackBar: MatSnackBar) {}
  ngOnInit(): void {
    this.messageSendForm = new FormGroup({
      Name: new FormControl(null, [Validators.required]),
      From: new FormControl(null, [Validators.required, Validators.email]),
      Phone: new FormControl(null, [Validators.pattern('[- +()0-9]+')]),
      Subject: new FormControl(null, [Validators.required]),
      Body: new FormControl(null, [Validators.required]),
    });
  }
  onSubmit(): void {
    
    if (this.messageSendForm.valid) {
      var data = this.messageSendForm.value;
      var jsData = JSON.stringify(data);
      this.loading=true;
      this.buttonDisabled=true;
      this.service.sendMail(JSON.stringify(jsData)).subscribe((res: any) => {
        this.snackBar.open('Email has been sent successfully!',"Close",{
          duration:1500
        });
        this.loading=false;
        this.buttonDisabled=false;
        this.messageSendForm.reset();
        this.messageSendForm.clearValidators();

      },(err:any)=>{
        this.snackBar.open('There is an error occured!',"Close",{
          duration:1500
        });
      });
    }
     
  }
   
}
