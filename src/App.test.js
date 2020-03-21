import React from "react";
import App from './App'
import { create } from "react-test-renderer";

describe("App component", () => {
  test("Matches the snapshot", () => {
    const component = create(<App />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});