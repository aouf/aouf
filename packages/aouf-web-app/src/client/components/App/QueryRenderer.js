import React from 'react';
import PropTypes from 'prop-types';
import { QueryRenderer as RelayQueryRenderer } from 'react-relay';
import { getEnvironment, consumeStaticProps } from '../../utils/relayUtils';

const AppQueryRenderer = ({ children, ...otherProps }) => {
  const staticProps = consumeStaticProps(otherProps);

  if (staticProps) {
    return children(staticProps);
  }

  return (
    <RelayQueryRenderer
      environment={getEnvironment()}
      render={({ error, props }) =>
        children({
          error,
          props: props || undefined,
          loading: !error && !props,
        })
      }
      {...otherProps}
    />
  );
};

AppQueryRenderer.propTypes = {
  children: PropTypes.func.isRequired,
};

export default AppQueryRenderer;
