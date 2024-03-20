import Footer from "../components/Footer";
import Header from "../components/Header";
import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Fetchitems from "../components/Featchitems";
import LoadingSpinner from "../components/LoadingSpinner";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header />
      <Fetchitems />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
