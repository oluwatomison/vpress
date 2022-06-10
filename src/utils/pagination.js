import React, {useRef} from 'react';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';
import _ from 'lodash';
import {animateScroll as scroll} from 'react-scroll';
import PropTypes from 'prop-types';

function Pagination(props) {
  const {total, pageSize, onPageChange, currentPage} = props;
  const jumpToVal = useRef(null);
  const pagesCount = Math.floor(total / pageSize) || 0;
  if (pagesCount <= 1) return null;
  let start = 1;
  let end = pagesCount + 1;
  if (pagesCount >= 3) {
    if (currentPage + 2 <= pagesCount) {
      start = currentPage;
      end = currentPage + 3;
    } else {
      const minusStart =
        pagesCount - currentPage ? pagesCount - currentPage : 2;

      start = currentPage - minusStart;
      end = pagesCount + 1;
    }
  }
  const pages = _.range(1, pagesCount + 1);
  return (
    <div className="py-10">
      <div className="flex justify-between h-[70px]">
        {currentPage <= 1 ? (
          <div className="bg-[#F8F8F8] sm:w-[200px] md:w-[200px] lg:w-[200px] xl:w-[200px] 2xl:w-[200px] sm:h-[70px] md:h-[70px] lg:h-[70px] xl:h-[70px] 2xl:h-[70px] px-2 flex justify-center items-center space-x-5 cursor-not-allowed">
            <IoIosArrowBack />
            <span>Prev</span>
          </div>
        ) : (
          <div
            className="bg-[#888888] sm:w-[200px] sm:h-[70px] px-3 flex justify-center items-center space-x-5 hover:bg-[#A0A0A0] cursor-pointer"
            onClick={() => {
              onPageChange(currentPage - 1, pageSize, pages),
                scroll.scrollToTop();
            }}>
            <IoIosArrowBack />
            <span>Prev</span>
          </div>
        )}

        <div className="w-[250px] flex justify-center items-center space-x-5">
          <span>Page</span>
          <select
            defaultValue={currentPage}
            ref={jumpToVal}
            className="outline"
            onChange={() => {
              onPageChange(jumpToVal.current.value, pageSize, pages);
              jumpToVal.current.value = null;
            }}>
            {pages.map((page, i) => {
              return (
                <option key={i} value={page}>
                  {page}
                </option>
              );
            })}
          </select>
          <span>of {pagesCount}</span>
        </div>
        {currentPage >= pages.length ? (
          <div className="bg-[#F8F8F8] sm:w-[200px] md:w-[200px] lg:w-[200px] xl:w-[200px] 2xl:w-[200px] sm:h-[70px] md:h-[70px] lg:h-[70px] xl:h-[70px] 2xl:h-[70px] px-2 flex justify-center items-center space-x-5 cursor-not-allowed">
            <span>Next</span>
            <IoIosArrowForward />
          </div>
        ) : (
          <div
            className="bg-[#888888] sm:w-[200px] md:w-[200px] lg:w-[200px] xl:w-[200px] 2xl:w-[200px] sm:h-[70px] md:h-[70px] lg:h-[70px] xl:h-[70px] 2xl:h-[70px] px-2 flex justify-center items-center space-x-3 hover:bg-[#A0A0A0] cursor-pointer"
            onClick={() => {
              onPageChange(currentPage + 1, pageSize, pages),
                scroll.scrollToTop();
            }}>
            <span>Next</span>
            <IoIosArrowForward />
          </div>
        )}
      </div>
    </div>
  );
}

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

Pagination.defaultProps = {
  total: 0,
  pageSize: 0,
  currentPage: 0,
};

export default React.memo(Pagination);
