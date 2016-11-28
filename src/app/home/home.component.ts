import { Component, OnInit } from '@angular/core';
import { SplitButton, Message, MenuItem, Growl } from 'primeng/primeng';

import { PatientModel, ServiceModel } from '../shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  patient: PatientModel[] = [];
  patientResults: PatientModel[] = [];
  services: ServiceModel[] = [];
  selectedService: ServiceModel;

  display: boolean = false;
  private items: MenuItem[];
  
  constructor() { 

    this.items = [{
            label: 'File',
            items: [
                {label: 'New', icon: 'fa-plus'},
                {label: 'Open', icon: 'fa-download'}
            ]
        },
        {
            label: 'Edit',
            items: [
                {label: 'Undo', icon: 'fa-refresh'},
                {label: 'Redo', icon: 'fa-repeat'}
            ]
      }];
    
  }

  showDialog() {
    this.display = true;
  }
  
  ngOnInit() {
    this.patient.push({ hn: '0041223', fullname: 'นายสถิตย์ เรียนพิศ', cid: '3440400434345', sex: 'ชาย', age: 43 });
    this.patient.push({ hn: '0012345', fullname: 'นายเทอดศักดิ์ ใจมั่น', cid: '1440004433433', sex: 'ชาย', age: 20});
    this.patient.push({ hn: '0000999', fullname: 'นางสาวมุ่งกิจ เจริญดี', cid: '554445454554', sex: 'หญิง', age: 21});
    this.patient.push({ hn: '1122200', fullname: 'ด.ช.เจริญศักดิ์ อยู่ดี', cid: '1440004433433', sex: 'ชาย', age: 20});
    this.patient.push({ hn: '9900009', fullname: 'นายไปรญาพัธ ใจมั่น', cid: '223121233122', sex: 'ชาย', age: 12});

    this.services.push({ vstdate: '21/03/2558', vsttime: '13:00', department: 'ห้องอุบัติเหตุและฉุกเฉิน'})
    this.services.push({ vstdate: '24/06/2558', vsttime: '14:41', department: 'ห้องตรวจโรค 1'})
    this.services.push({ vstdate: '11/06/2558', vsttime: '12:40', department: 'ห้องตรวจโรค 2'})
    this.services.push({ vstdate: '31/07/2558', vsttime: '11:10', department: 'ห้องตรวจโรค 1'})
    this.services.push({ vstdate: '03/06/2558', vsttime: '14:54', department: 'ห้องตรวจโรค 3'})
    this.services.push({ vstdate: '24/06/2558', vsttime: '14:22', department: 'ห้องตรวจโรค 6'})
    this.services.push({ vstdate: '23/12/2558', vsttime: '14:40', department: 'ห้องตรวสุขภาพจิต'})
    this.services.push({ vstdate: '11/09/2558', vsttime: '14:40', department: 'ห้องตรวจโรค 4'})
    this.services.push({ vstdate: '24/04/2558', vsttime: '14:40', department: 'ห้องตรวจโรค 4'})
  }

  onRowSelect(event: any) {
    console.log(event.data);
  };

  paginate(event: any) {
    console.log(event);
  }
}
