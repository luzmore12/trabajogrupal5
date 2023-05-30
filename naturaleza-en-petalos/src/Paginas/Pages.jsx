import React from "react"
import Home from "../components/MainPage/Home"
import FlashDeals from "../components/flashDeals/FlashDeals"
import TopCate from "../components/top/TopCate"
import NewArrivals from "../components/newarrivals/NewArrivals"
import Discount from "../components/discount/Discount"
import Shop from "../components/shops/Shop"
import Annocument from "../components/annocument/Annocument-llamar"
import Wrapper from "../components/wrapper/Wrapper"

const Pages = ({ productItems, addToCarro, CarroItem, shopItems }) => {
  return (
    <>
      <Home CarroItem={CarroItem} />
      <FlashDeals productItems={productItems} addToCarro={addToCarro} />
      <TopCate />
      <NewArrivals />
      <Discount />
      <Shop shopItems={shopItems} addToCarro={addToCarro} />
      <Annocument />
      <Wrapper />
    </>
  )
}

export default Pages
