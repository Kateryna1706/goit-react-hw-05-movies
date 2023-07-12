import { useEffect, useState } from 'react';
import axios from 'axios';
import { MagnifyingGlass } from 'react-loader-spinner';
import { Notify } from 'notiflix';
import { ListCast } from './Cast.styled';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const Cast = ({ id }) => {
  const [actors, setActors] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }
    setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=cb48852f2616f6f5995e859b25c73cfe`
      )
      .then(response => {
        const actors = response.data.cast;
        setActors(actors);
        if (!actors) {
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
      <ListCast>
        {actors &&
          actors.map(actor => (
            <li key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                    : `${defaultImg}`
                }
                width={150}
                alt="poster"
              />

              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
      </ListCast>
    </div>
  );
};

export default Cast;
