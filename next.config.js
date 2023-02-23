const { withContentlayer } = require("next-contentlayer")

module.exports=withContentlayer({

    images: {
        domains: [
          "i.pinimg.com" // Image 
        ],
      },
})