import { render, screen } from "@testing-library/react";

import PokemonImage from ".";

describe("The PokemonImage Component", () => {
  it("Should be defined", () => {
    expect.assertions(1);

    expect(PokemonImage).toBeDefined();
  });

  it("Should have Image", () => {
    expect.assertions(1);

    render(<PokemonImage image="img/img.png" name="image" />);

    expect(screen.getByRole("img")).toHaveAttribute("src", "img/img.png");
  });

  it("Should match snapshot", () => {
    expect.assertions(1);

    const { container } = render(
      <PokemonImage image="img/img.png" name="image" />
    );

    expect(container).toMatchSnapshot();
  });
});
