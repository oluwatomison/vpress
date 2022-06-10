import React from 'react';
import PropTypes from 'prop-types';

const ProductComponent = (props) => {
  const {image, likes, owner, text, publishedDate, tags} = props;
  return (
    <div className="sm:flex md:flex lg:flex xl:flex 2xl:flex w-[screen] sm:h-[280px] md:h-[280px] lg:h-[280px] xl:h-[280px] 2xl:h-[280px] divide-x rounded border-2 overflow-hidden">
      <div className="sm:w-3/5 md:w-3/5 lg:w-3/5 xl:w-3/5 2xl:w-3/5 flex">
        <div className="w-2/4">
          <img
            src={image}
            alt="ITEM-IMAGE"
            className="rounded-tl object-cover w-full h-full hover:scale-105 transition-all hover:saturate-1"
          />
        </div>
        <div className="w-2/4">
          <img
            src={owner.picture}
            alt="OWNER_IMAGE"
            className="object-fit w-full h-full hover:scale-105 transition-all hover:saturate-1"
          />
        </div>
      </div>
      <div className="sm:w-2/5 md:w-2/5 lg:w-2/5 xl:w-2/5 2xl:w-2/5 p-5 flex flex-col items-center justify-center gap-3">
        <div>
          <span className="capitalize text-[17px] font-bold">{text}</span>
        </div>
        <div>
          <span className="text-[#53535f]">Pet Owner: </span>
          <span className="font-semibold text-[#53535f] capitalize">
            {`${owner.title} ${owner.firstName} ${owner.lastName}`}
          </span>
        </div>
        <div className="">
          <span className="text-[#53535f]">Likes: </span>
          <span className="font-semibold text-[#53535f]">{likes}</span>
        </div>
        <div>
          <span className="text-[#53535f]">Date: </span>
          <span className="font-semibold text-[#53535f]">{publishedDate}</span>
        </div>
        <div className="space-x-3">
          <span className="text-[#53535f]">Tags: </span>
          {tags.map((item, i) => (
            <span key={i} className="capitalize font-semibold text-[#53535f]">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

ProductComponent.propTypes = {
  image: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  owner: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  publishedDate: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
};

ProductComponent.defaultProps = {
  image: '',
  likes: 0,
  owner: {},
  text: '',
  publishedDate: '',
  tags: [],
};

export default ProductComponent;
