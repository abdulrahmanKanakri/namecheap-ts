export type Payload = Record<string, string | number>;

export interface IReponse<T = any> {
  data: T;
  status: number;
}

export type ICheckDomainResponse = IReponse<{
  availabe: boolean;
  premium: boolean;
}>;

export type IRegisterDomainResponse = IReponse<{
  domain: string;
  registered: boolean;
  chargedAmount: number;
  domainID: string;
  orderID: string;
  transactionID: string;
  whoisguardEnable: boolean;
  freePositiveSSL: boolean;
  nonRealTimeDomain: boolean;
}>;

export type IAddFundsRequestResponse = IReponse<{
  tokenId: string;
  returnURL: string;
  redirectURL: string;
}>;

export type IGetFundsStatusResponse = IReponse<{
  status: string;
  amount: number;
}>;

export enum DomainPriceActions {
  REGISTER = "REGISTER",
  RENEW = "RENEW",
  REACTIVATE = "REACTIVATE",
  TRANSFER = "TRANSFER",
}

export type DomainPriceAction = `${DomainPriceActions}`;

export type AddFundsRequestPayload = {
  username: string;
  paymentType: "creditcard";
  amount: number;
  returnURL: string;
};
