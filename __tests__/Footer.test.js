import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";
import "@testing-library/jest-dom";


describe("Testing Footer Component", () => {
  it("renders name text", () => {
    render(<Footer />);
    const button = screen.getByText("Made by Chet Jogia");
    expect(button).toBeInTheDocument();
  });
});
