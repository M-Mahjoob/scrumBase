import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DoMoJe project';
}



// import { ModalService } from './sc-modal/modal.service';
// export class AppComponent implements OnInit {
//   @ViewChild("modal") modal: ModalComponent;
//   constructor(
//     private ms:ModalService
//   ){
//
//   }
//   openModal(id){
//     this.modal.openModal(id);
//   }
//
//   closeModal(id){
//     this.modal.closeModal(id);
//   }
//
//   ngOnInit(){
//   }
// }
