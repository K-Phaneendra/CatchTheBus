const initialState = {
  locations: [
    {
      _id: '5cb31255c3847a53069b57cf',
      name: 'BHEL'
    },
    {
      _id: '5cb31255c3847a53069b57d1',
      name: 'Miyapur'
    },
    {
      _id: '5cb31255c3847a53069b57d3',
      name: 'Nizampet'
    },
    {
      _id: '5cb31255c3847a53069b57d5',
      name: 'JNTU'
    },
    {
      _id: '5cb31255c3847a53069b57d7',
      name: 'KPHB'
    },
    {
      _id: '5cb31255c3847a53069b57d9',
      name: 'Kukatpally'
    },
    {
      _id: '5cb31255c3847a53069b57db',
      name: 'Moosapet'
    },
    {
      _id: '5cb31255c3847a53069b57dd',
      name: 'SR Nagar'
    },
    {
      _id: '5cb31255c3847a53069b57df',
      name: 'Ameerpet'
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
