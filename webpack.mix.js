const mix = require('laravel-mix');

mix
  .js('resources/js/app.js', 'public/js').react()
  .postCss('resources/css/app.css', 'public/css', [
    require('tailwindcss'),
  ])
  .options({
    terser: {
      extractComments: false,
    }
  })
  .webpackConfig({
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
        },
      ],
    },
    stats: {
      children: true,
    },
  });
