import Tree from "react-d3-tree";
import React from "react";

interface Point {
  name: string;
  value: number;
  children: Point[];
}

interface ScaleExtent {
  min: number;
  max: number;
}

interface NodeSvgShape {
  shape: string;
  shapeProps: object;
}

interface Styles {
  nodes: object;
  links: object;
}

interface Translate {
  x: number;
  y: number;
}

interface NodeSize {
  x: number;
  y: number;
}

interface Separation {
  siblings: number;
  nonSiblings: number;
}

interface AppProps {
  data: Point | Point[];
  onClick(): void;
  translate: Translate;
  scaleExtent: ScaleExtent;
  nodeSize: NodeSize;
  nodeSvgShape: NodeSvgShape;
  styles: Styles;
  circleRadius: number;
  shouldCollapseNeighborNodes: boolean;
  allowForeignObjects: boolean;
  textLayout: object;
  separation: Separation;
  zoom: number;
  zoomable: boolean;
  initialDepth: number;
  useCollapseData: boolean;
  collapsible: boolean;
  depthFactor: number;
  transitionDuration: number;
  pathFunc(): "diagonal" | "elbow" | "straight" | "step" | Function;
  orientation: "horizontal" | "vertical";
  onUpdate(): void;
  onLinkMouseOut(): void;
  onLinkMouseOut(): void;
  onLinkMouseOver(): void;
  onLinkClick(): void;
  onMouseOut(): void;
  onMouseOver(): void;
  nodeLabelComponent: object;
}

function App(props: AppProps) {
  return <Tree {...props}></Tree>;
}

export default App;
