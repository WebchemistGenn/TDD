import { render } from "@testing-library/react";
import List from "../List";

describe("TDD를 자연스럽게 쓰자", () => {
  it("render tasks", () => {
    const { container } = render(<List />);

    expect(container).toHaveTextContent("공부하기");
  });
});
