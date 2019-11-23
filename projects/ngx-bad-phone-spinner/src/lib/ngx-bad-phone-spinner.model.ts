export class NgxBadPhoneSpinnerOptions {
  public locks:LockOptions[] = [
    LockOptions.MANUAL
  ];

  public unlocks:LockOptions[] = [
    LockOptions.MANUAL
  ];
}

export enum LockOptions {
  IGNORE = 'ignore',
  MANUAL = 'manual',
  ORDER = 'order',
  RANDOM = 'random',
  REVERSE = 'reverse',
  SHUFFLE = 'shuffle',
}
