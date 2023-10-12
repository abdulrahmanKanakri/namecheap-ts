import APIClient from "./api";
import { ICommand } from "./commands";

export interface INamecheapConfig {
  ApiUser: string;
  ApiKey: string;
  UserName: string;
  ClientIp: string;
}

export interface ICallReponse {
  data: any;
  status: number;
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
    command: ICommand,
    payload: Record<string, string>
  ): Promise<ICallReponse> {
    const params = {
      ...this.config,
      ...payload,
      command,
    };

    const url = "?" + new URLSearchParams(params).toString();

    const { data, status } = await this.apiClient.get(url);

    return { data, status };
  }
}

export default Namecheap;
