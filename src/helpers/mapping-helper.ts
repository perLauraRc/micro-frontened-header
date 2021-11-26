import { License } from "../constants/license";
import { colors } from "../constants/styled-variables";

export const mapEstimationTypeToGridBuild = new Map<License, string>([
  [License.StoryPoints, colors.green],
  [License.StoryHours, colors.cyan],
]);
