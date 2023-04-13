import { render, screen } from "@testing-library/react";

import { ThemeProvider } from "styled-components";
import theme from "styles/theme";

import Home from ".";

describe("The Home Page", () => {
  it("Should be defined", () => {
    expect.assertions(1);
    expect(Home).toBeDefined();
  });

  it("Should Have render Page", () => {
    expect.assertions(3);

    render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    );
    expect(screen.getByText(/Pokédex/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Busca/i })).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/Nome ou Id do Pokémon/i)
    ).toBeInTheDocument();
  });
});
