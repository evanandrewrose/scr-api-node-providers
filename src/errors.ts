export class BaseError extends Error {
  constructor(message?: string) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = this.constructor.name;
  }
}

export class StarcraftProcessNotFoundError extends BaseError {}
export class StarcraftAPIPortNotFoundError extends BaseError {}
