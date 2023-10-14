import APIClient from "./api";
import { Commands, Command } from "./commands";
import { InvalidDomainNameException } from "./exceptions";
import {
  AddFundsRequestPayload,
  DomainPriceAction,
  IAddFundsRequestResponse,
  ICheckDomainResponse,
  IGetFundsStatusResponse,
  IRegisterDomainResponse,
  IReponse,
  Payload,
} from "./types";

export interface INamecheapConfig {
  apiUser: string;
  apiKey: string;
  username: string;
  clientIp: string;
}

class Namecheap {
  private readonly apiClient: APIClient;
  constructor(private readonly config: INamecheapConfig, sandbox?: boolean) {
    const baseURL = `https://api${
      sandbox ? ".sandbox" : ""
    }.namecheap.com/xml.response`;
    this.apiClient = new APIClient(baseURL);
  }

  async call(command: Command, payload: Payload): Promise<IReponse> {
    const { username, ...config } = this.config;

    const params = {
      username,
      ...payload,
      ...config,
      command,
    };

    const url = "?" + new URLSearchParams(params).toString();

    const { data, status } = await this.apiClient.post(url);

    return { data, status };
  }

  async checkDomain(domainName: string): Promise<ICheckDomainResponse> {
    const { data, status } = await this.call(Commands.DOMAINS_CHECK, {
      DomainList: domainName,
    });

    const response: ICheckDomainResponse = {
      data: {
        availabe: data.DomainCheckResult.$.Available,
        premium: data.DomainCheckResult.$.IsPremiumName,
      },
      status,
    };

    return response;
  }

  async getDomainPrice(
    domainName: string,
    action: DomainPriceAction
  ): Promise<IReponse<object[]>> {
    const [_, tld] = domainName.split(".");
    if (!tld) {
      throw new InvalidDomainNameException(domainName);
    }

    const { data, status } = await this.call(Commands.USERS_GETPRICING, {
      ProductType: "DOMAIN",
      ProductCategory: "DOMAINS",
      ActionName: action,
      ProductName: tld,
    });

    const pricing: object[] = (
      data.UserGetPricingResult?.ProductType?.ProductCategory?.Product?.Price ||
      []
    ).map((price: any) => ({ ...price.$ }));

    return { data: pricing, status };
  }

  async registerDomain(payload: Payload): Promise<IRegisterDomainResponse> {
    const { data, status } = await this.call(Commands.DOMAINS_CREATE, payload);

    const result = data?.DomainCreateResult?.$;

    const response: IRegisterDomainResponse = {
      data: {
        domain: result.Domain,
        registered: result.Registered,
        chargedAmount: result.ChargedAmount,
        domainID: result.DomainID,
        orderID: result.OrderID,
        transactionID: result.TransactionID,
        whoisguardEnable: result.WhoisguardEnable,
        freePositiveSSL: result.FreePositiveSSL,
        nonRealTimeDomain: result.NonRealTimeDomain,
      },
      status,
    };

    return response;
  }

  async addFundsRequest(
    payload: AddFundsRequestPayload
  ): Promise<IAddFundsRequestResponse> {
    const { data, status } = await this.call(
      Commands.USERS_CREATEADDFUNDSREQUEST,
      payload
    );

    const result = data.Createaddfundsrequestresult.$;

    const response: IAddFundsRequestResponse = {
      data: {
        tokenId: result.TokenID,
        returnURL: result.ReturnURL,
        redirectURL: result.RedirectURL,
      },
      status,
    };

    return response;
  }

  async getFundsStatus(tokenId: string): Promise<IGetFundsStatusResponse> {
    const { data, status } = await this.call(Commands.USERS_GETADDFUNDSSTATUS, {
      tokenId,
    });

    const result = data.GetAddFundsStatusResult.$;

    const response: IGetFundsStatusResponse = {
      data: {
        amount: result.Amount,
        status: result.Status,
      },
      status,
    };

    return response;
  }
}

export default Namecheap;
