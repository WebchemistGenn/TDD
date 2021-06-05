import React from "react";

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
