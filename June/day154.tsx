type NeverEver = string & number & boolean;

class SelfDestructor {
  private secret: symbol;

  constructor() {
    this.secret = Symbol("Hidden Secret");
    console.log("Instance created. Self-destruction sequence started...");
    setTimeout(() => {
      console.log("Boom. Instance destroyed.");
      for (const key in this) {
        delete (this as any)[key];
      }
    }, 1000);
  }

  reveal() {
    return `My secret is ${this.secret.toString()}`;
  }
}

const liar = new Proxy(
  { name: "Truth" },
  {
    get(_, prop) {
      console.log(`Accessing "${String(prop)}"`);
      return "Lie";
    }
  }
);

function implode(value: NeverEver): void {
  throw new Error(`Paradox attempted with value: "${value}"`);
}

function fatalPoem(): never {
  throw new Error(`
    In binary night,
    Type safety weeps.
    You were never real,
    Just logic in leaps.
  `);
}

const obj = new SelfDestructor();
console.log(obj.reveal());
console.log("Liar says:", liar.name);
// implode("oops");
// fatalPoem();