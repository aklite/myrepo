import { type Options } from "rehype-pretty-code"
 
export const rehypePrettyCodeOptions: Partial<Options> = {
  theme:{
    dark: "one-dark-pro",
    light: "solarized-light",
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push("line--highlighted")
  },
}
