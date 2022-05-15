import { useState, useEffect } from "react";

const userRating = (onEvery, rating) => {
     let RatingComp = [];
     const [ratings, setRatings] = useState([]);
     useEffect(() => {
          let fraction = rating[1];
          for (let i = 0; i < rating[0]; i++) {
               onEvery(RatingComp, fraction, i);
               fraction -= 1;
          }
          setRatings(RatingComp);
          RatingComp = [];
     }, []);
     return ratings;
};

export default userRating;
