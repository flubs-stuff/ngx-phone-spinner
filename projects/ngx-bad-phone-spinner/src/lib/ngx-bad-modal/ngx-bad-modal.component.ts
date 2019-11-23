import {Component, EventEmitter, Input, Output} from '@angular/core';

import {NgxSmartModalComponent, NgxSmartModalService} from 'ngx-smart-modal';

@Component({
  selector:    'ngx-bad-modal',
  templateUrl: './ngx-bad-modal.component.html',
  styleUrls: [
    './ngx-bad-modal.component.scss'
  ],
  providers: []
})
export class NgxBadModalComponent {
  @Input() cancelText:string = 'Cancel';
  @Input() confirmText:string = 'Confirm';
  @Input() id:string = 'myModal';
  @Input() titleText:string = '';
  @Input() textText:string = '';

  @Output() onClose:EventEmitter<any>;
  @Output() onOpen:EventEmitter<any>;

  constructor(
    public modalService:NgxSmartModalService
  ) {
    this.onClose = new EventEmitter<any>();
    this.onOpen = new EventEmitter<any>();
  }

  cancel():void {
    this.modalService.getModal(this.id).close();

    this.onClose.emit(false);
  }

  confirm():void {
    this.modalService.getModal(this.id).close();

    this.onClose.emit(true);
  }

  emitOpen(event:NgxSmartModalComponent):void {
    this.onOpen.emit(event);
  }
}
