const colors = require(`tailwindcss/colors`);

module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      padding: {
        'p-20': '25%',
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: "#000",
        white: "#fff",
        bluegray: colors.blueGray,
        coolgray: colors.coolGray,
        gray: colors.gray,
        truegray: colors.trueGray,
        warmgray: colors.warmGray,
        red: colors.red,
        orange: colors.orange,
        amber: colors.amber,
        yellow: colors.yellow,
        lime: colors.lime,
        green: colors.green,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        sky: colors.sky,
        blue: colors.blue,
        indigo: colors.indigo,
        violet: colors.violet,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
        pink: colors.pink,
        rose: colors.rose,
      },
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  }
}