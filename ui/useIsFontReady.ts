import React from "react"

export function useIsFontReady(){
    const [isReady,setIsReady]=React.useState(false)
    React.useEffect(()=>{
        document.fonts.ready.then(()=>{
            setIsReady(true)
        })
    },[])
    return isReady
}

