import { GRID_BACKGROUND_DEFAULT_COLOR } from "../constants/defaults";
import { License } from "../constants/license";
import { mapEstimationTypeToGridBuild } from "./mapping-helper";

export const resolveGridBuild = (agileEstimation: License): string => {
  console.log(agileEstimation);
  return (
    mapEstimationTypeToGridBuild.get(agileEstimation) ||
    GRID_BACKGROUND_DEFAULT_COLOR
  );
};
