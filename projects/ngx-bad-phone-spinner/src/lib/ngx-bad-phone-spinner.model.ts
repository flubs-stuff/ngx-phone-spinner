export enum LockOptions {
  IGNORE = 'ignore',
  MANUAL = 'manual',
  RANDOM = 'random',
  SHUFFLE = 'shuffle',
}

export class NgxBadPhoneSpinnerOptions {
  public locks:LockOptions[] = [
    LockOptions.MANUAL
  ];

  public unlocks:LockOptions[] = [
    LockOptions.MANUAL
  ];

  public modals:ModalOptions[] = [];
}

export class ModalOptions {
  cancel?:string;
  confirm?:string;
  text:string;
  title:string;
}
