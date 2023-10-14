export enum DomainPriceActions {
  REGISTER = "REGISTER",
  RENEW = "RENEW",
  REACTIVATE = "REACTIVATE",
  TRANSFER = "TRANSFER",
}

export type DomainPriceAction = `${DomainPriceActions}`;
