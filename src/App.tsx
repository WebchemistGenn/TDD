import React, { useState } from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo";
import List from "./List";

const App = () => {
  const [tasks] = useState([
    { id: 1, title: "공부하기" },
    { id: 2, title: "운동하기" },
  ]);

  return (
    <ApolloProvider client={client}>
      <List tasks={tasks} />
    </ApolloProvider>
  );
};

export default App;
