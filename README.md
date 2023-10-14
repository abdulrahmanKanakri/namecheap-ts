# Namecheap-ts API Wrapper

A TypeScript package that provides a simple and intuitive interface to interact with Namecheap API.

## Installation

You can install the package using npm. Run the following command in your terminal:

```shell
npm install namecheap-ts
```

## Usage

You can use the package to perform various operations such as domain registration, DNS management, SSL certificate management, and more. Here's an example of how to use the package to check whether the domain name is available or not:

```typescript
import Namecheap, { INamecheapConfig } from "namecheap-ts";
const config: INamecheapConfig = {
  ApiKey: "api-key",
  ApiUser: "api-user",
  UserName: "user-name",
  ClientIp: "client-ip",
};

const api = new Namecheap(config, true);

const payload = { DomainList: "mezoishere.net" };
const { data } = await api.call("namecheap.domains.check", payload);

const isAvailabe = data[0].DomainCheckResult[0].$.Available;
console.log(isAvailable);
```

## API

The `Namecheap` class is the main entry point for interacting with the Namecheap API.

#### `constructor(config: INamecheapConfig, sandbox?: boolean)`

Create a new instance of the `Namecheap` class.

```typescript
const namecheap = new Namecheap(config, true);
```

#### `call(command: Command, payload: Record<string, string>): Promise<IReponse>`

Call a command on the Namecheap API.

```typescript
import { Commands } from "namecheap-ts";
const response = await namecheap.call(Commands.DOMAINS_CHECK, {
  DomainList: "example.com",
});

console.log(response);
```

#### `checkDomain(domainName: string): Promise<ICheckDomainResponse>`

Check if a domain is available and if it'is premium.

```typescript
const { availabe, premium } = await namecheap.checkDomain("example.com");

console.log({ availabe, premium });
```

#### `getDomainPrice(domainName: string, action: DomainPriceAction): Promise<IReponse>`

Get the price of a domain.

```typescript
import { DomainPriceAction } from "namecheap-ts";
const response = await namecheap.getDomainPrice(
  "example.com",
  DomainPriceAction.REGISTER
);

console.log(response);
```

You can refer to the official Namecheap API documentation for more information on the available methods and parameters. [The documentation is available at ¹](https://www.namecheap.com/support/api/intro/).
