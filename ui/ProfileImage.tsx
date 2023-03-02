import clsx from 'clsx'
import React from 'react'

import Image from 'next/image'
const ProfileImage = ({
    size="large",
    isInteractive 
}:{
    size:string 
    isInteractive?:boolean
}) => {
  return (
    <div 
    className={clsx("")}>
      <Image 
      src="/ayush.jpeg"
      alt="A Photo of ayush"
      priority={true}
      className="rounded-full"
      width={size==="small" ? 36 : 64}
      height={size==="small" ? 36 : 64}
      />
    </div>
  )
}

export default ProfileImage