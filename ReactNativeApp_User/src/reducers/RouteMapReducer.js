const initialState = {
  routeMaps: [
    {
      _id: '5cb3137cc3847a53069b5804',
      name: 'BHEL - JNTU',
      stops: {
        '5cb31255c3847a53069b57cf': {
          people: []
        },
        '5cb31255c3847a53069b57d1': {
          people: []
        },
        '5cb31255c3847a53069b57d3': {
          people: []
        },
        '5cb31255c3847a53069b57d5': {
          people: []
        }
      }
    }
  ]
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
