import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ProductComponent from '../component/products/productComponent';
import CustomTab from '../utils/tab/tab';
import {TabData} from '../utils/tab/tabData';
import Infopage from './infoPage/infoPage';
import Configurepage from './configurePage/configurePage';
import Reportpage from './reportPage/reportPage';
import {_, useSelector} from 'react-redux';

const ProductDetailPage = () => {
  const {id} = useParams();
  const [currentTab, setCurrentTab] = useState('Info');
  const [newfilterData, setNewFilterData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleFilterData();
    setLoading(false);
  }, []);

  const products = useSelector((state) => state.productData.allProducts || []);

  const handleFilterData = () => {
    let filterData;
    filterData = products.filter((data) => data.serialno === id);
    setNewFilterData(filterData);
  };

  const renderComponent = () => {
    if (loading) {
      return (
        <div className="pt-[10%]">
          <p>Loading data...</p>
        </div>
      );
    }
    return (
      <div>
        <div className="pt-[100px]">
          <h5 className="text-[#6b6b6b]">{id}</h5>
          <ProductComponent
            serialNo={newfilterData[0].serialno}
            type={newfilterData[0].type}
            location={newfilterData[0].location}
            status={newfilterData[0].status}
            image={newfilterData[0].imageSRC}
          />
          <CustomTab
            data={TabData}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />
          {currentTab === 'Info' && <Infopage info={newfilterData[0].info} />}
          {currentTab === 'Configure' && (
            <Configurepage configure={newfilterData[0].configure} />
          )}
          {currentTab === 'Reports' && (
            <Reportpage reportData={newfilterData[0].report} />
          )}
        </div>
      </div>
    );
  };
  return renderComponent();
};

export default ProductDetailPage;
