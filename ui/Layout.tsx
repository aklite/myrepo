import Nav from "@/ui/Navigation"
// import Footer from "../components/Footer"
import React from "react"
import Footer from "@/ui/Footer"
const Layout = ({ children }:{children:React.ReactNode}) => {
    return (
      <div className="max-w-5xl mx-auto antialiased">
        <Nav />
        <main>{children}</main>
       <Footer/>
      </div>
    )
  }
  
  export default Layout