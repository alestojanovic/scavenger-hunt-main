import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { StyleSheetTestUtils } from "aphrodite";
import { StartTimerMessages } from "../../Messages";
import StartTimer from "./StartTimer";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test("Renders header", () => {
  render(<StartTimer />);
  const header = screen.getByText(StartTimerMessages.TITLE);
  expect(header).toBeInTheDocument();
});

test("First click enable the button", () => {
  // const setStateMock = jest.fn();
  // const useStateMock = (useState: any) => [useState, setStateMock];
  // jest.spyOn(React, "useState").mockImplementation(useStateMock);
  render(<StartTimer />);
  const button = screen.getByText(StartTimerMessages.BUTTON);
  fireEvent.click(button);
  // expect(setStateMock).toBeCalledWith(false);
});
