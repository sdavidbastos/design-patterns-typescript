interface ValidationComponentProtocol {
  validate(value: unknown): boolean;
}

interface ValidationCompositeProtocol extends ValidationComponentProtocol {
  add(...validations: ValidationComponentProtocol[]): void;
}

export class ValidateEmail implements ValidationComponentProtocol {
  validate(value: unknown): boolean {
    if (typeof value !== 'string') return false;
    return /@/.test(value);
  }
}

export class ValidateString implements ValidationComponentProtocol {
  validate(value: unknown): boolean {
    return typeof value === 'string';
  }
}

export class ValidateNumber implements ValidationComponentProtocol {
  validate(value: unknown): boolean {
    if (typeof value !== 'string') return false;
    return /\d+/.test(value);
  }
}

export class ValidationComposite implements ValidationCompositeProtocol {
  private readonly children: ValidationComponentProtocol[] = [];

  add(...validations: ValidationComponentProtocol[]): void {
    validations.forEach((validation) => this.children.push(validation));
  }
  validate(value: unknown): boolean {
    for (const child of this.children) {
      const validation = child.validate(value);
      if (!validation) return false;
    }
    return true;
  }
}

const validateEmail = new ValidateEmail();
const validateNumber = new ValidateNumber();
const validateString = new ValidateString();
const validationComposite = new ValidationComposite();
validationComposite.add(validateString, validateEmail, validateNumber);
console.log(validationComposite.validate('luiz123@email.com'));
