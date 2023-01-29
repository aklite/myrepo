import React from "react"
import { getLightColor } from "./useColorSeed"
import { RoughNotation } from "react-rough-notation"
export const RainbowHighlight=({colorIndex,className,text}:{
    colorIndex:number,
    text:string,
    className?:string 
})=>{
    const animationDuration=Math.floor(30*text.length)

    const color=getLightColor(colorIndex)
    return (
        <span className={color}>
            <RoughNotation  
            type="highlight"
            multiline={true}
            padding={[0,5]}
            iterations={3}
            animationDuration={animationDuration}
            >
                <span className={className}>{text}</span>
            </RoughNotation>
        </span>
    )
}