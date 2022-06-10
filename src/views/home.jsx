import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from '../actions';
import ProductComponent from '../component/products/productComponent';
import HomePagination from '../utils/pagination';
import {Circles} from 'react-loader-spinner';

const AllProduct = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    dispatch(actions.getAllProductInfo())
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, []);

  const handlePageSwitch = (pageNumber, pageSize, pages) => {
    if (pageNumber < 1) return null;
    if (pageNumber > pages.length) return null;
    setLoading(true);
    dispatch(actions.getPaginatedData(pageNumber, pageSize))
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  };

  const products = useSelector(
    (state) => state.productData.allProducts.data || [],
  );
  const totalDocumentCount = useSelector(
    (state) => state.productData.allProducts.total,
  );
  const pageLimit = useSelector((state) => state.productData.allProducts.limit);
  const currentPage = useSelector(
    (state) => state.productData.currentPageNumber,
  );

  const renderComponent = () => {
    if (loading) {
      return (
        <div className="py-[8%] gap-6 flex h-screen items-center justify-center">
          {loading && <Circles color="#e9530d" height={80} width={80} />}
        </div>
      );
    } else if (products.length <= 0) {
      return (
        <div className="pt-[10%] flex items-center justify-center">
          <p>No data found</p>
        </div>
      );
    }
    return (
      <div className="flex flex-col justify-center sm:items-center md:items-center lg:items-center xl:items-center pt-[30%] sm:pt-[10%] md:pt-[14%] lg:pt-[12%] xl:pt-[8%] 2xl:pt-[6%] ">
        <div className="grid gap-6">
          {products.map((product, index) => (
            <div key={index}>
              <ProductComponent
                likes={product.likes}
                owner={product.owner}
                text={product.text}
                publishedDate={product.publishDate}
                tags={product.tags}
                image={product.image}
              />
            </div>
          ))}
        </div>
        <HomePagination
          total={totalDocumentCount}
          pageSize={pageLimit}
          currentPage={currentPage}
          onPageChange={handlePageSwitch}
        />
      </div>
    );
  };
  return renderComponent();
};

export default AllProduct;
