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
  apiKey: "api-key",
  apiUser: "api-user",
  username: "user-name",
  clientIp: "client-ip",
};

const api = new Namecheap(config, true);

const payload = { DomainList: "mezoishere.net" };
const { data } = await api.call("namecheap.domains.check", payload);

const isAvailabe = data.DomainCheckResult.$.Available;
console.log(isAvailable);
```

## API

The `Namecheap` class is the main entry point for interacting with the Namecheap API.

#### `constructor(config: INamecheapConfig, sandbox?: boolean)`

Create a new instance of the `Namecheap` class.

```typescript
const namecheap = new Namecheap(config, true);
```

#### `call(command: Command, payload: Payload): Promise<IReponse>`

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
const { data } = await namecheap.checkDomain("example.com");

console.log({ availabe: data.availabe, premium: data.premium });
```

#### `getDomainPrice(domainName: string, action: DomainPriceAction): Promise<IReponse>`

Get the prices list of a domain.

```typescript
import { DomainPriceAction } from "namecheap-ts";
const response = await namecheap.getDomainPrice(
  "example.com",
  DomainPriceAction.REGISTER
);

console.log(response);
```

#### `registerDomain(payload: Payload): Promise<IRegisterDomainResponse>`

Register domain in namecheap.

```typescript
const payload = {
  DomainName: "mezoishere.co",
  Years: 2,
  // ...etc other attributes
};

const response = await namecheap.registerDomain(payload);

console.log(response);
```

#### `addFundsRequest(payload: AddFundsRequestPayload): Promise<IAddFundsRequestResponse>`

Add funds to the user account.

```typescript
const payload = {
  username: "username",
  paymentType: "creditcard",
  amount: 10,
  returnURL: "the return url after payment is done",
};

const response = await namecheap.addFundsRequest(payload);

console.log(response);
```

#### `getFundsStatus(tokenId: string): Promise<IGetFundsStatusResponse>`

Check the status of a specific funds request.

```typescript
const tokenId = "the-token-id-of-the-created-funds-request"

const response = await namecheap.getFundsStatus(tokentId);

console.log(response);
```

You can refer to the official Namecheap API documentation for more information on the available methods and parameters. [The documentation is available at ¹](https://www.namecheap.com/support/api/intro/).
