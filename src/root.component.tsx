import React, { Fragment } from "react";
import styled from "styled-components";
import {
  GRID_BACKGROUND_DEFAULT_COLOR,
  GRID_BORDER_DEFAULT_COLOR,
} from "./constants/defaults";
import { Estimation } from "./constants/estimation";
import { GlobalStyle } from "./styles/globalStyle";
import { resolveGridLayoutBuild } from "./helpers/layout-helper";
import { Menu } from "./components/menu";
import "normalize.css";
import "./root.scss";

interface ISectionWithGridProps {
  agileEstimation: Estimation;
}

const SectionWithGrid = styled.section`
  display: flex;
  width: 100%;
  background-color: ${({ agileEstimation }: ISectionWithGridProps) =>
    agileEstimation
      ? resolveGridLayoutBuild(agileEstimation)
      : GRID_BACKGROUND_DEFAULT_COLOR};
  border-bottom: ${() => `2px solid ${GRID_BORDER_DEFAULT_COLOR}`};
`;

export default function Root(props) {
  console.log("ROOT COMPONENT PROPS: ", props);
  return (
    <Fragment>
      <GlobalStyle />
      <SectionWithGrid agileEstimation={props.agileEstimation}>
        <h4>{props.name} is mounted!</h4>
        <Menu></Menu>
      </SectionWithGrid>
    </Fragment>
  );
}
