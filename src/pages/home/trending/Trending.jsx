import React , {useState} from "react";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const Trending = () => {
  // now WE ARE CALLING API SO USESTATE CREATE KARNI PADEGI
   const [endpoint, setEndpoint] = useState("day") // api k end point pe bhejna h toh small letter mein rahega sab

  const{data, loading}=useFetch(`/trending/all/${endpoint}`);
  const onTabChange = (tab) => {
    setEndpoint(tab==="Day"?"day":"week");

  };
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel  data={data?.results} loading={loading}/>
    </div>
  );
};

export default Trending;
