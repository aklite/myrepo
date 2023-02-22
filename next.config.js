const { withContentlayer } = require("next-contentlayer")

module.exports=withContentlayer({

    images: {
        domains: [
          "api.microlink.io", // Link previews
        ],
      },
})