import { Singleton, notEmpty } from "./decorators";

@Singleton
@notEmpty
class Example {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  printExampleName() {
    console.log(this.name);
  }
}

const text = new Example("Hi");
text.printExampleName();
