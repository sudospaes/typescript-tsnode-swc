import "./extensions/functions";

export function Singleton(constructor: any): any {
  let instance: any;
  return class {
    constructor(...args: any) {
      if (instance) {
        return instance;
      }
      return (instance = new constructor(...args));
    }
  };
}

export function notEmpty(constructor: new (name: string) => any): any {
  return class {
    constructor(name: string) {
      if (name.isEmpty()) {
        return new constructor("NOEMPTY");
      }
      return new constructor(name);
    }
  };
}
