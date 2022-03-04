import { emailValidatorFnAdapter } from './validation/email-validator-fn-adapter';
import { EmailValidatorFnProtocol } from './validation/email-validator-protocol';

function validateEmail(emailValidator: EmailValidatorFnProtocol) {
  return function (email: string) {
    if (emailValidator(email)) {
      console.log('Email válido!');
      return;
    }
    console.log('Email inválido');
  };
}

const email = 'davidgmail.com';

const validatorEmail = validateEmail(emailValidatorFnAdapter);

validatorEmail(email);
