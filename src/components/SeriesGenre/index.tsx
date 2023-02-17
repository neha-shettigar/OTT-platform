import React from 'react';
// import { Button } from '../Button';
import './styles.scss';

interface SeriesGenreInterface {
  label1: string;
  label2: string;
  label3: string;
  label4: string;
  label5: string;
  label6: string;
  label7: string;
  label8: string;
  label9: string;
  label10: string;
  label11: string;
  label12: string;
}

const SeriesGenre = ({
  label1,
  label2,
  label3,
  label4,
  label5,
  label6,
  label7,
  label8,
  label9,
  label10,
  label11,
  label12,
}: SeriesGenreInterface) => {
  return (
    <main className="seriesGenre-container">
      <a className="seriesGenre-container__link1" href="">
        {label1}
      </a>
      <a className="seriesGenre-container__link2" href="">
        {label2}
      </a>
      <a className="seriesGenre-container__link1" href="">
        {label3}
      </a>
      <a className="seriesGenre-container__link2" href="">
        {label4}
      </a>
      <a className="seriesGenre-container__link1" href="">
        {label5}
      </a>
      <a className="seriesGenre-container__link2" href="">
        {label6}
      </a>
      <a className="seriesGenre-container__link1" href="">
        {label7}
      </a>
      <a className="seriesGenre-container__link2" href="">
        {label8}
      </a>
      <a className="seriesGenre-container__link1" href="">
        {label9}
      </a>
      <a className="seriesGenre-container__link2" href="">
        {label10}
      </a>
      <a className="seriesGenre-container__link1" href="">
        {label11}
      </a>
      <a className="seriesGenre-container__link2" href="">
        {label12}
      </a>
    </main>
  );
};

export default SeriesGenre;
