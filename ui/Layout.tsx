import Nav from "@/ui/Navigation"
import React from "react"
import Footer from "@/ui/Footer"
const Layout = ({ children }:{children:React.ReactNode}) => {
    return (
        <div className=" max-w-5xl px-6 mx-auto antialiased bg-white">
          <Nav />
          <main>{children}</main>
         <Footer/>
        </div>
    )
  }
  
  export default Layout