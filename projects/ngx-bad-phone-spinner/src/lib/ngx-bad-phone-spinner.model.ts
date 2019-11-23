export class NgxBadPhoneSpinnerOptions {
  public locks:LockOptions[] = [
    LockOptions.MANUAL
  ];

  public unlocks:LockOptions[] = [
    LockOptions.MANUAL
  ];

  public shuffleMilliseconds = 200;
  public shufflesPerClick = 5;
}

export enum LockOptions {
  IGNORE = 'ignore',
  LIAR = 'liar',
  MANUAL = 'manual',
  ORDER = 'order',
  RANDOM = 'random',
  REVERSE = 'reverse',
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
