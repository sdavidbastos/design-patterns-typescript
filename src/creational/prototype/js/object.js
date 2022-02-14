const personPrototype = {
  firstName: 'David',
  lastName: 'Miranda',
  age: 23,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const anotherPerson = Object.create(personPrototype);

console.log(anotherPerson.fullName());
