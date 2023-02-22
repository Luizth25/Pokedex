import { render, screen } from "@testing-library/react";

import PokemonImage from ".";

describe("The PokemonImage Component", () => {
  it("Should be defined", () => {
    expect(PokemonImage).toBeDefined();
  });

  it("Should have Image", () => {
    render(<PokemonImage image="img/img.png" name="image" />);

    expect(screen.getByRole("img")).toHaveAttribute("src", "img/img.png");
  });
});
