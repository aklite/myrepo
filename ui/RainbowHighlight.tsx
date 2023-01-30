import React from "react"

import { RoughNotation } from "react-rough-notation"
export const RainbowHighlight=({color,children}:{
    color:string 
    children:string 
})=>{
    const animationDuration=Math.floor(30*children.length)
    return (
            <RoughNotation  
            type="highlight"
            multiline={true}
            padding={[0,5]}
            iterations={3}
            animationDuration={animationDuration}
            color={color}
            >
                {children}
            </RoughNotation>
        
    )
}