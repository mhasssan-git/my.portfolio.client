import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  messageSendForm!: FormGroup;
  
  constructor(private service:ContactService) {    
  }
  ngOnInit(): void {
    this.messageSendForm = new FormGroup({
      Name: new FormControl(null, [Validators.required]),
      From: new FormControl(null, [Validators.required,Validators.email]),
      Subject: new FormControl(null, [Validators.required]),
      Body: new FormControl(null, [Validators.required]),
    });
  }
  onSubmit():void{
    var data=this.messageSendForm.value;
    var jsData=JSON.stringify(data);
    this.service.sendMail(JSON.stringify(jsData))
    .subscribe(res=>{
      console.log(res);
    })
  }
}
