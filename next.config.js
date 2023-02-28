const { withContentlayer } = require("next-contentlayer")

module.exports=withContentlayer({

    images: {
        remotePatterns:[
        {
          protocol:"https",
          hostname:"i.pinimg.com"
        },
        {
          protocol: 'https',
          hostname: 'www.digitalocean.com'
        }
        ],
      },
})