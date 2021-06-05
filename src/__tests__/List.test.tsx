import { render } from "@testing-library/react";
import List from "../List";

describe("TDD를 자연스럽게 쓰자", () => {
  it("render tasks", () => {
    const tasks = [
      { id: 1, title: "공부하기" },
      { id: 2, title: "운동하기" },
    ];

    const { container } = render(<List tasks={tasks} />);

    expect(container).toHaveTextContent("공부하기");
    expect(container).toHaveTextContent("운동하기");
  });
});
