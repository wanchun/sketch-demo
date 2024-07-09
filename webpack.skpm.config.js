const CopyPlugin = require("copy-webpack-plugin");

module.exports = function (config, entry) {
  console.log(entry, config)
  config.node = entry.isPluginCommand ? false : {
    setImmediate: false
  };
  config.plugins.push(
    new CopyPlugin( [
      { from: "src/dist", to: "../Resources/_webpack_resources" },
    ]),
  )
  config.module.rules.push({
    test: /\.(html)$/,
    use: [{
        loader: "@skpm/extract-loader",
      },
      {
        loader: "html-loader",
        options: {
          attrs: [
            'img:src',
          ],
          interpolate: true,
        },
      },
    ]
  })
}
