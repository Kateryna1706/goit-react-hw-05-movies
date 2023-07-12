import { useEffect, useState } from 'react';
import axios from 'axios';
import { MagnifyingGlass } from 'react-loader-spinner';
import { Notify } from 'notiflix';
import { ListReviews } from './Reviews.styled';
import PropTypes from 'prop-types';

const Reviews = ({ id }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }
    setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=cb48852f2616f6f5995e859b25c73cfe`
      )
      .then(response => {
        const reviews = response.data.results;
        setReviews(reviews);
        if (reviews.length === 0) {
          throw new Error('No found!');
        }
      })
      .catch(error => {
        Notify.failure('No found!');
      })
      .finally(setLoading(false));
  }, [id]);

  return (
    <div>
      {loading && (
        <MagnifyingGlass
          visible={true}
          height="300"
          width="300"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        />
      )}
      <ListReviews>
        {reviews.length !== 0 ? (
          reviews.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author_details.username}</h3>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
      </ListReviews>
    </div>
  );
};

Reviews.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Reviews;
