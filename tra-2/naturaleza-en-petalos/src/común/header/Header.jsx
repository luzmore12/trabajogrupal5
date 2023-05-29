import React from "react"
import "./Header.css"
import Head from "./Head"
import Search from "./Search"
import Navbar from "./Navbar"

const Header = ({ CarroItem }) => {
  return (
    <>
      <Head />
      <Search CarroItem={CarroItem} />
      <Navbar />
    </>
  )
}

export default Header
