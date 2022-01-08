module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    // {pattern: /from-(coffee)/},
    {pattern: /from-(green|red|gray|teal)-(700|600)/},
    {pattern: /to-(green|red|gray|teal)-(700|600)/},
    {pattern: /bg-(green|red|gray|teal)-(700|600)/},
  ],
  theme: {
    extend: {
      colors: {
        'fullnight': "#040c0E",
        'dusk': "#132226",
        'lightnight': "#525B56",
        'moon': "#A4978E",
        'coffee': "#BE9063",
        'scarlet': "#390000"
      }
    },
  },
  plugins: [],
}
