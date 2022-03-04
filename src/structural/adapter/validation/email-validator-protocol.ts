export interface EmailValidatorProtocol {
  isEmail: EmailValidatorProtocol;
}

export interface EmailValidatorFnProtocol {
  (value: string): boolean;
}
