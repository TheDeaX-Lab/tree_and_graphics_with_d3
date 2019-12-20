import EventDrops from "./EventDrops/index";
import React from "react";

interface Event {
  name: string;
  data: {
    date: Date;
  };
}

interface AppProps {
  events: Event | Event[];
  onDataPointHover(): void;
  onZoom(): void;
  loading: boolean;
  onClick(): void;
  height: number;
  width: number;
}

function App(props: AppProps) {
  return <EventDrops {...props}></EventDrops>;
}

export default App;
