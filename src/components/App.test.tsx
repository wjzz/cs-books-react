import React from "react";
import ReactDOM from "react-dom";

import renderer from "react-test-renderer";
import { mount, render } from "enzyme";

import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("App is in sync with the snapshot", () => {
  const component = renderer.create(<App />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("App correctly renders the basic structure", () => {
  const app = render(<App />);

  expect(app.text()).toContain("There are 4 books in total");
  expect(app.find("button").length).toEqual(8);
});

const countChars = (haystack: string, needle: string): number => {
  return Array.from(haystack).filter(char => char === needle).length;
};

test("App correctly reacts to 'mark all' button clicks", () => {
  const app = mount(<App />);

  const unread_marker = "❌";
  const read_marker = "✅";

  app.find("#read-none").simulate("click");

  expect(app.text()).toContain(
    "You have read 0 books, which is 0% of all available books."
  );
  expect(countChars(app.text(), read_marker)).toEqual(0);
  expect(countChars(app.text(), unread_marker)).toEqual(4);

  app.find("#read-all").simulate("click");

  expect(app.text()).toContain(
    "You have read 4 books, which is 100% of all available books."
  );
  expect(countChars(app.text(), read_marker)).toEqual(4);
  expect(countChars(app.text(), unread_marker)).toEqual(0);
});
