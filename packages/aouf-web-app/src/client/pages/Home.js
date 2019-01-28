import React from 'react';
import Layout from '../components/App/Layout';
import { Theme } from '../theme';

const Home = () => (
  <Layout>
    <main>
      <section css={Theme.Hero}>
        <img src="" alt="Écran d'accueil de l'application" />
        <div>
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
            particulièrement complexe. "AOUF" est une application mobile qui est
            née de ce constat. Elle a pour vocation d'apporter des solutions
            d'hyperproximité en réponse à un quotidien morcelé et éreintant.
          </p>
          <a href="" />
        </div>
      </section>
      <section css={Theme.Description}>Description</section>
      <section css={Theme.Features}>Features</section>
    </main>
  </Layout>
);

export default Home;
