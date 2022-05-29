import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from '../actions';
import ProductComponent from '../component/products/productComponent';
import CustomSearchForm from '../component/search/customSearchForm';

const AllProduct = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(actions.getAllProductInfo());
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const searchData = (val) => {
    if (search === '') {
      return val;
    } else if (val.serialno.toLowerCase().includes(search.toLowerCase())) {
      return val;
    }
  };

  const products = useSelector((state) => state.productData.allProducts || []);

  const renderComponent = () => {
    return (
      <>
        <div className="sm:pt-[15%] md:pt-[10%] lg:pt-[7%]">
          <CustomSearchForm onSubmit={handleChange} search={search} />
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 pt-[2%]">
          {products.filter(searchData).map((product, index) => {
            return (
              <Link key={index} to={`/product/${product?.serialno}`}>
                <ProductComponent
                  key={index}
                  serialNo={product.serialno}
                  location={product.location}
                  status={product.status}
                  type={product.type}
                  image={product.imageSRC}
                />
              </Link>
            );
          })}
        </div>
      </>
    );
  };
  return renderComponent();
};

export default AllProduct;
