import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import ProductComponent from '../component/products/productComponent';
import CustomTab from '../utils/tab/tab';
import {TabData} from '../utils/tab/tabData';
import Infopage from './infoPage/infoPage';
import Configurepage from './configurePage/configurePage';
import Reportpage from './reportPage/reportPage';

const ProductDetailPage = () => {
  const {id, type, location, status, imgurl} = useParams();
  //console.log({imgurl});
  const [currentTab, setCurrentTab] = useState('Info');

  return (
    <div>
      <div className="pt-[100px]">
        <h5 className="text-[#6b6b6b]">{id}</h5>
        <ProductComponent
          serialNo={id}
          type={type}
          location={location}
          status={status}
          // image={imgurl}
        />
        <CustomTab
          data={TabData}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
        {currentTab === 'Info' && <Infopage />}
        {currentTab === 'Configure' && <Configurepage />}
        {currentTab === 'Reports' && <Reportpage />}
      </div>
    </div>
  );
};

export default ProductDetailPage;
