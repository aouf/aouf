import React from 'react';
import { graphql } from 'react-relay';
import AppQueryRenderer from '../components/App/QueryRenderer';
import logo from '../assets/logo-big.png';

const HelloWorld = () => (
  <AppQueryRenderer query={HelloWorldQuery}>
    {({ error, loading }) => (
      <div css={styles.hello}>
        {loading
          ? 'Loading…'
          : (error && JSON.stringify(error)) || <img src={logo} alt="Aouf" />}
      </div>
    )}
  </AppQueryRenderer>
);

export default HelloWorld;

const HelloWorldQuery = graphql`
  query HelloWorldQuery {
    viewer {
      user {
        userName
      }
    }
  }
`;

const styles = {
  hello: {
    fontSize: 32,
    fontWeight: 'bold',
  },
};
