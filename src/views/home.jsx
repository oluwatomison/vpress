import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from '../actions';
import ProductComponent from '../component/products/productComponent';
import FilterContent from '../fiterContent';

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
      <div className="pt-[33%] sm:pt-[10%] md:pt-[13%] xl:pt-[7%] 2xl:pt-[10%] lg:pt-[10%]">
        <FilterContent
          showCompanyFilter
          showMonthFilter
          onSubmit={handleChange}
          search={search}
        />
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 pt-[2%]">
          {products.filter(searchData).map((product, index) => (
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
          ))}
        </div>
      </div>
    );
  };
  return renderComponent();
};

export default AllProduct;
