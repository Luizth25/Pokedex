import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import theme from "styles/theme";

import PokemonInfo from ".";

describe("The PokemonInfo Component", () => {
  it("Should be denied", () => {
    expect.assertions(1);

    expect(PokemonInfo).toBeDefined();
  });

  it("Should render component", () => {
    render(
      <ThemeProvider theme={theme}>
        <PokemonInfo
          abilities="teste 1"
          baseExperience="2"
          id="1"
          name="teste"
          weight="2"
        >
          <p>teste</p>
        </PokemonInfo>
      </ThemeProvider>
    );

    expect(screen.getAllByRole("heading", { name: /teste /i })).toHaveLength(2);
    expect(screen.getAllByText("2")).toHaveLength(2);
  });

  it("Should match snapshot", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <PokemonInfo
          abilities="teste 1"
          baseExperience="2"
          id="1"
          name="teste"
          weight="2"
        >
          <p>teste</p>
        </PokemonInfo>
      </ThemeProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
