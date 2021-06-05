import React from "react";
import { gql } from "@apollo/client";

export const TEST = gql`
  query GetMe($name: String) {
    me(name: $name) {
      _id
    }
  }
`;

interface IProps {
  tasks: { id: number; title: string }[];
}

const List: React.FC<IProps> = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>{task.title}</div>
      ))}
    </div>
  );
};

export default List;
