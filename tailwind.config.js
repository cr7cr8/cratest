

  module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [

      function ({ addVariant, addUtilities, addComponents, e, prefix, config, ...props }) {
        // console.log(props)
        console.log(e)
        addVariant('first-div', '& > div:nth-of-type(1)');

        //  addVariant('first-size', `& > transform:scale(${e(item.key)})`);

        // addVariant('child-hover', '& > *:hover');
      }

    ],




  }
