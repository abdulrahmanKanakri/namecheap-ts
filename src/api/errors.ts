export class XMLParsingError extends Error {
  constructor() {
    super("Invalid XML response");

    this.name = "XMLParsingError";
  }
}

export class ResponseError extends Error {
  constructor(message: string, readonly code?: number) {
    super((code ? `${code}: ` : "") + message);

    this.name = "ResponseError";
  }
}
