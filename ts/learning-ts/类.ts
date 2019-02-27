class Email {
  private eamil: string;
  constructor(email: string) {
    if (this.validateEmail(email)) {
      this.eamil = email;
    }
  }

  private validateEmail(email: string) {
    var re = /\S+@\s+\.\S+/;
    return re.test(email);
  }

  get(): string {
    return this.eamil;
  }
}

class Person {
  public name: string;
  public email: Email;

  constructor(name: string, email: Email) {
    this.name = name;
    this.email = email;
  }

  greet() {}
}

var email = new Email("re@qq.com");
