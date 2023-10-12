import axios, { AxiosInstance, AxiosResponse } from "axios";
import { parseStringPromise } from "xml2js";
import { ResponseError, XMLParsingError } from "./errors";

class APIClient {
  private readonly _client: AxiosInstance;
  constructor(baseURL: string) {
    this._client = axios.create({ baseURL });
    this._client.interceptors.response.use(this.onResponse);
  }

  async get(url: string) {
    return await this._client.get(url);
  }

  private async onResponse(response: AxiosResponse): Promise<AxiosResponse> {
    try {
      const result = await parseStringPromise(response.data);

      if (result.ApiResponse.$.Status === "ERROR") {
        const responseErrors = result.ApiResponse.Errors;
        const code = responseErrors[0].Error[0].$.Number;
        const message = responseErrors[0].Error[0]._;

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
