import PolaroidApiClient from "../classes/PolaroidApiClient";
import { PolaroidService } from "./PolaroidService";

const apiClient = new PolaroidApiClient();

export const polaroidService = new PolaroidService(apiClient);
