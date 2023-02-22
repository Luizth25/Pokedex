import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import Button from ".";

import theme from "styles/theme";

describe("The Button Component", () => {
  it("Should be defined", () => {
    expect.assertions(1);

    expect(Button).toBeDefined();
  });

  it("Should be Have a Label and clicked", () => {
    expect.assertions(2);

    const fn = jest.fn();

    render(
      <ThemeProvider theme={theme}>
        <Button label="test" onClick={fn} />
      </ThemeProvider>
    );

    const button = screen.getByRole("button", { name: "test" });
    fireEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(fn).toBeCalledTimes(1);
  });
});
