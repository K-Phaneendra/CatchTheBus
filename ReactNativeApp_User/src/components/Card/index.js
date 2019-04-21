import React from 'react';
import { Card, CardItem, Text } from 'native-base';
import PropTypes from 'prop-types';

const CardComponent = props => {
  const { header, children, footer } = props;
  return (
    <Card>
      <CardItem header>
        <Text>{header}</Text>
      </CardItem>
      <CardItem>{children}</CardItem>
      <CardItem header>{footer}</CardItem>
    </Card>
  );
};

CardComponent.propTypes = {
  header: PropTypes.string
};

export default CardComponent;
