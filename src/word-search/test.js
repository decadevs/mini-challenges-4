const wordSearch = require(".");

describe("Word Search", () => {
  test("Find a cat", () => {
    const words = [
      ["C", "D", "Y", "C", "X"],
      ["A", "N", "Y", "Z", "X"],
      ["T", "F", "Z", "A", "T"],
      ["M", "D", "B", "U", "T"],
    ];

    const word = "CAT";

    expect(wordSearch(words, word)).toBe(true);
  });

  test("Off to Canada", () => {
    const words = [
      ["C", "A", "Y", "C", "X"],
      ["O", "N", "A", "Z", "X"],
      ["T", "F", "D", "A", "T"],
      ["M", "D", "B", "U", "T"],
    ];

    const word = "CANADA";

    expect(wordSearch(words, word)).toBe(true);
  });

  test("Say no to sanctions", () => {
    const words = [
      ["D", "S", "A", "N", "C"],
      ["I", "N", "O", "I", "T"],
      ["T", "A", "T", "R", "O"],
      ["M", "F", "O", "U", "T"],
    ];

    const word = "SANCTIONS";

    expect(wordSearch(words, word)).toBe(false);
  });

  test("Social media frenzy", () => {
    const words = [
      ["Z", "R", "A", "B", "C"],
      ["O", "N", "O", "O", "T"],
      ["O", "A", "I", "O", "O"],
      ["K", "Q", "O", "K", "T"],
    ];

    const word = "FACEBOOK";

    expect(wordSearch(words, word)).toBe(false);
  });

  test("Almost got it", () => {
    const words = [
      ["P", "R", "A", "B", "C"],
      ["R", "N", "O", "O", "T"],
      ["E", "A", "I", "O", "O"],
      ["C", "I", "S", "E", "L"],
    ];

    const word = "PRECISELY";

    expect(wordSearch(words, word)).toBe(false);
  });

  test("Welcome to Decagon", () => {
    const words = [
      ["D", "E", "C", "A", "C"],
      ["E", "D", "E", "O", "N"],
      ["E", "A", "D", "D", "O"],
      ["C", "G", "O", "E", "G"],
      ["C", "A", "N", "C", "A"],
    ];

    const word = "DECAGON";

    expect(wordSearch(words, word)).toBe(true);
  });

  test("Because I'm Batman", () => {
    const words = [
      ["B", "A", "T", "J", "T"],
      ["A", "B", "M", "O", "M"],
      ["T", "J", "O", "K", "E"],
      ["J", "M", "O", "E", "G"],
      ["A", "A", "N", "R", "A"],
      ["M", "N", "M", "A", "N"],
    ];

    const word = "BATMAN";

    expect(wordSearch(words, word)).toBe(false);
  });

  test("Write good grammar", () => {
    const words = [
      ["G", "A", "T", "J", "M"],
      ["R", "G", "R", "G", "N"],
      ["A", "M", "A", "K", "E"],
      ["N", "M", "A", "E", "U"],
      ["D", "L", "R", "R", "Q"],
      ["M", "Y", "M", "A", "A"],
    ];

    const word = "GRAMMARLY";

    expect(wordSearch(words, word)).toBe(true);
  });

  test("You've got it backward", () => {
    const words = [
      ["O", "A", "V", "P", "Z"],
      ["H", "S", "I", "F", "X"],
      ["T", "M", "A", "K", "K"],
      ["S", "U", "B", "E", "Y"],
    ];

    const word = "FISH";

    expect(wordSearch(words, word)).toBe(true);
  });

  test("You've got the word", () => {
    const words = [
      ["C", "A", "A"],
      ["A", "A", "A"],
      ["B", "C", "D"],
    ];

    const word = "AAB";

    expect(wordSearch(words, word)).toBe(true);
  });

  test("Because you can See", () => {
    const words = [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ];

    const word = "SEE";

    expect(wordSearch(words, word)).toBe(true);
  });

  test("Horizontal misplaced characters", () => {
    const words = [["A", "S", "A"]];
    const word = "SAA";

    expect(wordSearch(words, word)).toBe(false);
  });

  test("Vertical misplaced characters", () => {
    const words = [["B"], ["A"], ["C"]];
    const word = "ABC";

    expect(wordSearch(words, word)).toBe(false);
  });
});
