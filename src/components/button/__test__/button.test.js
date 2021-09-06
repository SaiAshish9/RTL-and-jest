import React from "react";
import ReactDOM from "react-dom";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

import Btn from "../index";

// jest.mock("../index", () => ({ children, label }) => (
//   <>
//     <Btn label={label} />
//   </>
// ));

afterEach(cleanup);

// we can have multiple different types of test so that residue will not be left
// https://medium.com/swlh/mock-imported-react-components-and-various-helpers-fea4240be7eb

it("renders w/o crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Btn />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders button correctly", () => {
  const { getByTestId } = render(<Btn label="hi" />);
  expect(getByTestId("btn")).toHaveTextContent("hi");
});

it("matches snapshot 1", () => {
  const tree = renderer.create(<Btn label="save"></Btn>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("matches snapshot 2", () => {
  const tree = renderer.create(<Btn label="save me"></Btn>).toJSON();
  expect(tree).toMatchSnapshot();
});
