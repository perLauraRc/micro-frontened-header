import { Estimation } from "../constants/estimation";
import { colors } from "../constants/styled-variables";

export const mapEstimationTypeToGridBuild = new Map<Estimation, string>([
  [Estimation.StoryPoints, colors.blue01],
  [Estimation.StoryHours, colors.blue02],
]);
