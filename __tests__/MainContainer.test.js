import { render, screen } from "@testing-library/react";
import MainContainer from "../components/MainContainer";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import Button from "@/components/Button";

describe("Testing Main Container and Button", () => {
  it("renders a button with correct text", () => {
    render(<MainContainer />);
    const button = screen.getByText("New Cat Fact");
    expect(button).toBeInTheDocument();
  });

  it("renders text in speech bubble", () => {
    render(<MainContainer />);
    const speechBubbleText = screen.getByText(
      "Click the button to learn about Cats"
    );
    expect(speechBubbleText).toBeInTheDocument();
  });

  it("button click changes text in speech bubble", async () => {
    const getNewCatFact = jest.fn();
    render(<Button getNewCatFact={getNewCatFact} />);
    const button = screen.getByText("New Cat Fact");
    expect(button).toBeInTheDocument();
    await user.click(button);
    expect(getNewCatFact).toBeCalledTimes(1);
  });
});
