import React from "react"
import Hero from "./hero/Hero"
import AboutCard from "../about/AboutCard"
import HAbout from "./HAbout"
import Testimonial from "./testimonial/Testimonial"
import Hblog from "./Hblog"
import Hprice from "./Hprice"

const Home = () => {
  return (
    <>
      <Hero/>
      <AboutCard />
      <HAbout/>
      <Testimonial/>
      <Hblog/>
      <Hprice/>
    </>
  )
}

export default Home
