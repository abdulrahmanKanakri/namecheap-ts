export class InvalidDomainNameException extends Error {
  constructor(domainName: string) {
    super(`The provided domain name [${domainName}] is not valid`);

    this.name = "InvalidDomainNameException";
  }
}
