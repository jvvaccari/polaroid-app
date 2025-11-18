import IApiClient from "../interfaces/IApiClient";
import { IPolaroid } from "../interfaces/IPolaroid";

export class DailyChallengeService {
    private api: IApiClient;

    constructor(api: IApiClient) {
        this.api = api;
    }

    public async getDailyChallenge(): Promise<IPolaroid> {
        const response = await this.api.get('/daily-challenges/by-date');
        const data = response.data as { polaroid: IPolaroid };
        return data.polaroid;
    }
}
