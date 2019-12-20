import React, { useState, useEffect } from "react";
//import CollapsibleTree from "./components/CollapsibleTree";
import Tree from "./components/AipCollapsibleTree";
import initialData from "./components/CollapsibleTreeData.js";
import initialRepositories from "./components/EventDrops.json";
import EventDrops from "./components/EventDrops/index.js";

function App() {
  const panels = [{ name: "CollapsibleTree" }, { name: "EventDrops" }];
  let [data, setData] = useState(initialData);
  let [repositories, setRepositories] = useState(initialRepositories);
  let [activePanel, setActivePanel] = useState(panels[0].name);
  useEffect(
    () =>
      setRepositories(repositories =>
        repositories.map(r => ({ data: r.commits, name: r.name }))
      ),
    []
  );
  useEffect(() => console.log("edited data"), [data]);
  useEffect(() => console.log("edited repositories", [repositories]));
  return (
    <div>
      {activePanel === panels[0].name && (
        <div>
          <button
            onClick={() =>
              setData({
                name: "test",
                children: [
                  { name: "IEvaluable", value: 335 },
                  { name: "IPredicate", value: 383 },
                  { name: "IValueProxy", value: 874 }
                ]
              })
            }
          >
            Изменить
          </button>
          <button onClick={() => setActivePanel(panels[1].name)}>
            Перейти к EventDrops
          </button>
          <div style={{ width: window.outerWidth, height: window.outerHeight }}>
            <Tree data={data} pathFunc="step" />
          </div>
        </div>
      )}
      {activePanel === panels[1].name && (
        <div>
          <button
            onClick={() =>
              setRepositories([
                {
                  name: "admin-on-rest",
                  data: [{ date: new Date("2014/09/15 14:21:31") }]
                },
                {
                  name: "event-drops",
                  data: [{ date: new Date("2014/09/15 13:24:57") }]
                },
                {
                  name: "sedy",
                  data: [{ date: new Date("2014/09/15 13:25:12") }]
                }
              ])
            }
          >
            Изменить
          </button>
          <button onClick={() => setActivePanel(panels[0].name)}>
            Перейти к CollapsibleTree
          </button>
          <EventDrops
            events={repositories}
            style={{ width: window.outerWidth, height: window.outerHeight }}
          />
        </div>
      )}
    </div>
  );
}

export default App;
