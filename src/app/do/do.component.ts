// import { ModalService } from './sc-modal/modal.service';
import {ModalComponent, ModalService} from 'angular-5-popup';
import {Component, OnInit, ViewChild} from '@angular/core';
// import { ModalService } from './sc-modal/modal.service';
// import {ModalComponent, ModalService} from 'angular-5-popup';
@Component({
  selector: 'app-do',
  templateUrl: './do.component.html',
  styleUrls: ['./do.component.css']
})
export class DoComponent implements OnInit {
  @ViewChild('modal') modal: ModalComponent;
  constructor(
    private ms: ModalService ) {

  }
  openModal(id) {
    this.modal.openModal(id);
  }

  closeModal(id) {
    this.modal.closeModal(id);
  }

// export class DoComponent implements OnInit {
//
//   constructor() { }

  ngOnInit() {
  }

}
