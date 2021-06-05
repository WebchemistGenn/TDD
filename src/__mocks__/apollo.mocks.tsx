jest.mock("@apollo/client", () => ({
  makeVar: () => {
    return {};
  },
  useReactiveVar: () => {
    return { account: { name: "Test" } };
  },
}));
