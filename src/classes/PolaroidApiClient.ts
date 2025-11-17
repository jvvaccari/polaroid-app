import ApiClient from "./ApiClient";
import { CreateAxiosDefaults } from "axios";

class PolaroidApiClient extends ApiClient {
  constructor() {
    const apiUrl = String(import.meta.env.VITE_API_URL || "");

    const baseConfig: CreateAxiosDefaults = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    if (apiUrl) {
      baseConfig.baseURL = apiUrl;
    }

    super(baseConfig);
  }
}

export default PolaroidApiClient;
