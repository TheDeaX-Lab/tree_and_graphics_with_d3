import React, { useState, useEffect } from "react";
//import CollapsibleTree from "./components/CollapsibleTree";
import Tree from "react-d3-tree";
import initialData from "./components/CollapsibleTreeData.js";
function App() {
  const panels = [{ name: "CollapsibleTree" }, { name: "EventDrops" }];
  let [data, setData] = useState(initialData);
  let [activePanel, setActivePanel] = useState(panels[0].name);
  useEffect(() => console.log("edited"), [data]);
  return (
    <div>
      {activePanel === panels[0].name && (
        <div>
          <input />
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
            <Tree data={data} />
          </div>
        </div>
      )}
      {activePanel === panels[1].name && (
        <div>
          <button onClick={() => setActivePanel(panels[0].name)}>
            Перейти к CollapsibleTree
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
