import { render } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { meVar } from "../apollo/cache";
import List, { TEST } from "../List";

describe("TDD를 자연스럽게 쓰자", () => {
  const mocks: any = [
    {
      request: { query: TEST, variables: { name: "test" } },
      result: { data: { me: "" } },
      error: new Error("An error occurred"),
    },
  ];
  beforeEach(() => {
    meVar({ name: "yoon" });
  });

  it("test", () => {
    expect(true).toEqual(true);
  });

  it("render tasks", async () => {
    const me = meVar();
    const tasks = [
      { id: 1, title: "공부하기" },
      { id: 2, title: "운동하기" },
    ];

    // render
    const { container } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <List tasks={tasks} />
      </MockedProvider>
    );

    // wait-for-expect
    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(me.name).toBe("yoon");
    expect(container).toHaveTextContent("공부하기");
    expect(container).toHaveTextContent("운동하기");
  });
});
