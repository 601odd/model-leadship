import { Customer, Revenue, Sales, TargetReality, Visitors, TopProducts, SalesMap, VolumeService } from "../../components";
import { DashboardScreenWrap } from "./DashboardScreen.styles";
import './DashboardScreen.css'
const DashboardScreen = () => {
  return (
    <DashboardScreenWrap className="content-area">
      <div className="area-row ar-one">
        <Sales />
        <Visitors />
      </div>

     
      <div className="area-row ar-three">
       
        <Customer />
        <TargetReality />       
         <SalesMap />
         {/* <VolumeService /> */}
      </div>
      <div className="area-row ar-two">
      <Revenue />
        <TopProducts />
      </div>
    </DashboardScreenWrap>
  );
};

export default DashboardScreen;
