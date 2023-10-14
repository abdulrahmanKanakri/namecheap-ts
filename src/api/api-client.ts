import axios, { AxiosInstance, AxiosResponse } from "axios";
import { ResponseError, XMLParsingError } from "./errors";
import { parseXMLString } from "./utils";

class APIClient {
  private readonly _client: AxiosInstance;
  constructor(baseURL: string) {
    this._client = axios.create({ baseURL });
    this._client.interceptors.response.use(this.onResponse);
  }

  async get(url: string) {
    return await this._client.get(url);
  }

  async post(url: string) {
    return await this._client.post(url);
  }

  private async onResponse(response: AxiosResponse): Promise<AxiosResponse> {
    try {
      const result = await parseXMLString(response.data);

      if (result.ApiResponse.$.Status === "ERROR") {
        const responseErrors = result.ApiResponse.Errors;
        const code = responseErrors.Error.$.Number;
        const message = responseErrors.Error._;

        throw new ResponseError(message, code);
      }

      response.data = result.ApiResponse.CommandResponse;
    } catch (err) {
      response.status = 400;
      if (err instanceof ResponseError) {
        throw err;
      }

      throw new XMLParsingError();
    }

    return response;
  }
}

export default APIClient;
