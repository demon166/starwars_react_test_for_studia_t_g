import React from 'react';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';
import { PublicRouteEnum } from 'app/routing/RouteEnums';
import MyButton from '../../shared/ui/AppButton';

const HomePage = () => (
  <section className={styles.homePage}>
    <div className="container">
      <div className={styles.content}>
        <h1>
          <strong>Find </strong>
          all your favorite
          <strong> character</strong>
        </h1>
        <h2>You can find out all the information about your favorite characters</h2>
        <div className={styles.btnWrap}>
          <Link to={PublicRouteEnum.characters}>
            <MyButton color="yellow">See more...</MyButton>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default HomePage;
