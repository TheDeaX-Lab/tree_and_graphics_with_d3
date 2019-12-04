//import React from "react";
import d3Wrap from "react-d3-wrap";
import eventDrops from "event-drops";
let d3 = require("d3");

function create(svg, data) {
  const repo_data = data.map(
    ({ name, commits: data = undefined, dataExtra = [] }) => ({
      name,
      data: !!data ? data : dataExtra
    })
  );
  const chart = eventDrops({
    d3,
    drop: {
      date: d => d.date
    }
  });
  d3.select(svg)
    .data([repo_data])
    .call(chart);
}

const EventDrops = d3Wrap({
  initialize(svg, data, options) {
    create(svg, data);
  },

  update(svg, data, options) {
    create(svg, data);
  },

  destroy() {}
});

export default EventDrops;
