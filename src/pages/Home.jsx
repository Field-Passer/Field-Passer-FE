import React from "react";
import Footer from "../components/Footer";
import ImminentBoard from "../components/home/imminent/ImminentBoard";
import MainSlider from '../components/home/MainSlider'
import BoardList from '../components/home/search/BoardList'

const Home = () => {
  return (
    <div className="m-auto max-w-7xl relative">
      <MainSlider />
      <BoardList />
      <ImminentBoard />
      <Footer />
    </div>
  )
};

export default Home;
