import { Icons } from "../../../assets/icons";
import { BlockContentWrap, BlockTitle } from "../../../styles/global/default";
import { SalesBlockWrap } from "./Sales.styles";

const SalesBlock = () => {
  return (
    <SalesBlockWrap>
      <div className="block-head">
        <div className="block-head-l">
          <BlockTitle className="block-title">
            <h3>总体概览</h3>
          </BlockTitle>
          <p className="text" style={{color:'white'}}>Data Overview</p>
        </div>
        <div className="block-head-r">
          <button type="button" className="export-btn">
            <img src={Icons.ExportDark} alt="" />
            <span className="text"  >Export</span>
          </button>
        </div>
      </div>
      <BlockContentWrap>
        <div className="cards">
          <div className="card-item card-misty-rose">
            <div className="card-item-icon">
              <img src={Icons.CardSales} alt="" />
            </div>
            <div className="card-item-value">5</div>
            <p className="card-item-text text">事件上报总量</p>
            {/* <span className="card-item-sm-text">+8% from yesterday</span> */}
          </div>
          <div className="card-item card-latte">
            <div className="card-item-icon">
              <img src={Icons.CardOrder} alt="" />
            </div>
            <div className="card-item-value">0%</div>
            <p className="card-item-text text"> 群众满意度</p>
            {/* <span className="card-item-sm-text">+5% from yesterday</span> */}
          </div>
          <div className="card-item card-nyanza">
            <div className="card-item-icon">
              <img src={Icons.CardProduct} alt="" />
            </div>
            <div className="card-item-value">47</div>
            <p className="card-item-text text"> 平台总人数</p>
            {/* <span className="card-item-sm-text">+1.2% from yesterday</span> */}
          </div>

          <div className="card-item card-pale-purple">
            <div className="card-item-icon">
              <img src={Icons.CardCustomer} alt="" />
            </div>
            <div className="card-item-value"> 26</div>
            <p className="card-item-text text">志愿者</p>
            {/* <span className="card-item-sm-text">+0.5% from yesterday</span> */}
          </div>
          <div className="card-item card-nyanza2">
            <div className="card-item-icon">
              <img src={Icons.CardProduct} alt="" />
            </div>
            <div className="card-item-value">3</div>
            <p className="card-item-text text"> 市场主体</p>
            {/* <span className="card-item-sm-text">+1.2% from yesterday</span> */}
          </div>
        </div>
      </BlockContentWrap>
    </SalesBlockWrap>
  );
};

export default SalesBlock;
