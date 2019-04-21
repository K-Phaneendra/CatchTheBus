const mongo = {
  collectionName: 'catchTheBus'
};
const config = {
  port: 1001,
  mongo: {
    uri: `mongodb://localhost/${mongo.collectionName}`
  }
};

export default config;
