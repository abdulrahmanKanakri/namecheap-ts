import APIClient from "./api";
import { Commands, Command } from "./commands";
import { InvalidDomainNameException } from "./exceptions";
import { DomainPriceAction } from "./types";

export interface INamecheapConfig {
  ApiUser: string;
  ApiKey: string;
  UserName: string;
  ClientIp: string;
}

export interface IReponse {
  data: any;
  status: number;
}

export interface ICheckDomainResponse {
  availabe: boolean;
  premium: boolean;
}

class Namecheap {
  private readonly apiClient: APIClient;
  constructor(private readonly config: INamecheapConfig, sandbox?: boolean) {
    const baseURL = `https://api${
      sandbox ? ".sandbox" : ""
    }.namecheap.com/xml.response`;
    this.apiClient = new APIClient(baseURL);
  }

  async call(
    command: Command,
    payload: Record<string, string>
  ): Promise<IReponse> {
    const params = {
      ...payload,
      ...this.config,
      command,
    };

    const url = "?" + new URLSearchParams(params).toString();

    const { data, status } = await this.apiClient.get(url);

    return { data, status };
  }

  async checkDomain(domainName: string): Promise<ICheckDomainResponse> {
    const { data } = await this.call(Commands.DOMAINS_CHECK, {
      DomainList: domainName,
    });

    const isAvailabe: string = data[0].DomainCheckResult[0].$.Available;
    const isPremium: string = data[0].DomainCheckResult[0].$.IsPremiumName;

    const response: ICheckDomainResponse = {
      availabe: isAvailabe === "true",
      premium: isPremium === "true",
    };

    return response;
  }

  async getDomainPrice(
    domainName: string,
    action: DomainPriceAction
  ): Promise<IReponse> {
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

    const pricing =
      data[0].UserGetPricingResult[0]?.ProductType?.[0]?.ProductCategory?.[0]?.Product?.[0]?.Price?.map(
        (price: any) => ({ ...price.$ })
      );

    return { data: pricing, status };
  }
}

export default Namecheap;
