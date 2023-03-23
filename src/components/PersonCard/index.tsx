/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from 'react';
import { Link } from 'react-router-dom';

import dotIcon from '../assets/home-dot.svg';

import './styles.scss';

interface PersonCardInterface {
  id?: number;
  profile_path?: string;
  media_type?: string;
  name?: string;
  className: string;
  known_for_department?: string;
}

const getPosterURL = (profilePath?: string) => {
  return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${profilePath}`;
};

const PersonCard = ({
  id,
  profile_path,
  media_type,

  name,

  className,
  known_for_department,
}: PersonCardInterface) => {
  return (
    <main className={className}>
      <section className={`${className}__section`}>
        <Link to={`/person/${id}`} className={`${className}__link`}>
          <img
            src={getPosterURL(profile_path)}
            className={`${className}__poster`}
            alt={`${name} poster`}
          />
        </Link>
        <section className={`${className}__details`}>
          <p className={`${className}__details__para`}>
            {known_for_department}
          </p>
          <object data={dotIcon} type="" className="dot-icon"></object>
          <p className={`${className}__details__para`}>{media_type}</p>
        </section>
        <h3>{name}</h3>
      </section>
    </main>
  );
};

export default PersonCard;
