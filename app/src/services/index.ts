import PolaroidApiClient from "../classes/PolaroidApiClient";
import { DailyChallengeService } from "./DailyChallenge";
import { PolaroidService } from "./PolaroidService";

const apiClient = new PolaroidApiClient();

export const polaroidService = new PolaroidService(apiClient);
export const dailyChallengeService = new DailyChallengeService(apiClient);