import React, { useState } from "react";
import List from "./List";

const App = () => {
  const [tasks] = useState([
    { id: 1, title: "공부하기" },
    { id: 2, title: "운동하기" },
  ]);

  return (
    <React.Fragment>
      <List tasks={tasks} />
    </React.Fragment>
  );
};

export default App;
