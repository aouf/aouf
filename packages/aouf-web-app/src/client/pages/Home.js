import React from 'react';
import Layout from '../components/App/Layout';
import { Theme } from '../theme';

import AppScreen from '../assets/accueil-aouf-app.png';
import Logo from '../assets/aouf.png';
import Example from '../assets/exemple-aouf.png';
import Features from '../assets/features.png';

const Home = () => (
  <Layout>
    <main>
      <section css={Theme.HomeHero}>
        <div css={Theme.Container}>
          <div>
            <img src={AppScreen} alt="Écran d'accueil de l'application" />
          </div>
          <div>
            <h1 css={Theme.HomeHeroTitle}>
              <span css={Theme.HomeHeroTitleSpan}>Aouf</span>, la <br />
              plateforme
              <br />
              d'engagement <br />
              solidaire !
            </h1>
            <a href="" css={Theme.HomeHeroButton}>
              Me tenir informé·e
            </a>
          </div>
        </div>
      </section>
      <section css={Theme.HomeDescription}>
        <div css={Theme.Container}>
          <div css={Theme.HomeDescriptionText}>
            <p>
              Depuis le drame du 5 novembre, de nombreuses forces vives
              s'organisent pour répondre à la détresse sociale des habitants
              délogés. L'engagement de citoyens-bénévoles au sein d’associations
              et de collectifs est transverse : accompagnement social et
              juridique, aide alimentaire, collecte et distribution de dons
              matériels, plaidoyers revendiquant un logement digne et accessible
              pour tous.
            </p>
            <p>
              Les habitants délogés sont temporairement hébergés dans des hôtels
              disséminés au quatre coins de Marseille, ce qui implique une
              logistique de suivi et d'accompagnement des familles
              particulièrement complexe. "AOUF" est une application mobile qui
              est née de ce constat. Elle a pour vocation d'apporter des
              solutions d'hyperproximité en réponse à un quotidien morcelé et
              éreintant.
            </p>
          </div>
          <div css={Theme.HomeDescriptionLogo}>
            <img src={Logo} alt="Aouf" />
          </div>
        </div>
      </section>
      <section css={Theme.HomeFeatures}>
        <div css={Theme.Container}>
          <div css={Theme.HomeFeaturesScreen}>
            <img src={Example} alt="" />
          </div>
          <div css={Theme.HomeFeaturesIcons}>
            <img src={Features} alt="" />
          </div>
        </div>
      </section>
    </main>
  </Layout>
);

export default Home;
