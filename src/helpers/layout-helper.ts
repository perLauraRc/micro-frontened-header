import { GRID_BACKGROUND_DEFAULT_COLOR } from "../constants/defaults";
import { Estimation } from "../constants/estimation";
import { mapEstimationTypeToGridBuild } from "./mapping-helper";

export const resolveGridLayoutBuild = (agileEstimation: Estimation): string => {
  console.log(agileEstimation);
  return (
    mapEstimationTypeToGridBuild.get(agileEstimation) ||
    GRID_BACKGROUND_DEFAULT_COLOR
  );
};
