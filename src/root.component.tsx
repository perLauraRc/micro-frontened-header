import styled from "styled-components";
import { GRID_BACKGROUND_DEFAULT_COLOR } from "./constants/defaults";
import { License } from "./constants/license";
import { resolveGridBuild } from "./helpers/layout-helper";

interface ISectionWithGridProps {
  agileEstimation: License;
}

const SectionWithGrid = styled.section`
  display: flex;
  padding: 1rem;
  height: 2rem;
  width: 100%;
  background-color: ${({ agileEstimation }: ISectionWithGridProps) =>
    agileEstimation
      ? resolveGridBuild(agileEstimation)
      : GRID_BACKGROUND_DEFAULT_COLOR};
`;

export default function Root(props) {
  console.log("ROOT COMPONENT PROPS: ", props);
  return (
    <SectionWithGrid agileEstimation={props.agileEstimation}>
      {props.name} is mounted!
    </SectionWithGrid>
  );
}
