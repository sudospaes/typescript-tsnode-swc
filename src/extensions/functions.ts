declare interface String {
  isEmpty(): boolean;
}

String.prototype.isEmpty = function (): boolean {
  return this == null || (typeof this === "string" && this.trim().length === 0);
};
