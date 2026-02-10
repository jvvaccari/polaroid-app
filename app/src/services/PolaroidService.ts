import IApiClient from "../interfaces/IApiClient";
import { IPolaroid } from "../interfaces/IPolaroid";

export class PolaroidService {
  private api: IApiClient;

  constructor(api: IApiClient) {
    this.api = api;
  }

  public async getAllPolaroids() : Promise<IPolaroid[]> {
    const response = await this.api.get("/polaroids");
    return response.data as IPolaroid[];
  }

  public async getPolaroidById(id: string) : Promise<IPolaroid> {
    const response = await this.api.get(`/polaroids/${id}`);
    return response.data as IPolaroid;
  }

  public async createPolaroid(data: FormData) : Promise<IPolaroid> {
    const response = await this.api.post("/polaroids", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data as IPolaroid;
  }
}
