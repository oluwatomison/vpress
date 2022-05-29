import * as types from '../constants/ActionTypes';

const INITIAL_STATE = {
  error: '',
  allProducts: [
    {
      serialno: 'SN0000f43',
      type: 'S4 Pro',
      location: 'Site 1 Cheddar UK',
      status: 'Active',
      imageSRC: '../../assets/images/s4-pro.png',
      info: {
        temperature: 23.8,
        operatingHours: '2022-04-29T22:56:15.802Z',
      },
      configure: {
        inputValue: 15.7,
        spoolPosition: 68.4,
        pressure: 35.2,
        flowTorque: 32,
      },
    },
    {
      serialno: 'SN0000g96',
      type: 'S6 Pro',
      location: 'Site 1 Cheddar UK',
      status: 'Error',
      imageSRC: '../../assets/images/fast.png',
      info: {
        temperature: 1.8,
        operatingHours: '2022-04-29T22:56:15.802Z',
      },
      configure: {
        inputValue: 15.7,
        spoolPosition: 68.4,
        pressure: 35.2,
        flowTorque: 449,
      },
    },
    {
      serialno: 'SN0000h56',
      type: 'Fast',
      location: 'vehicle, Cheddar UK',
      status: 'Active',
      imageSRC: '../../assets/images/s4-pro.png',
      info: {
        temperature: 23.8,
        operatingHours: '2022-04-29T22:56:15.802Z',
      },
      configure: {
        inputValue: 5.7,
        spoolPosition: 68.4,
        pressure: 35.2,
        flowTorque: 449,
      },
    },
    {
      serialno: 'SN0000h56',
      type: 'Fast',
      location: 'vehicle, Cheddar UK',
      status: 'Active',
      imageSRC: '../../assets/images/s4-pro.png',
      info: {
        temperature: 23.0,
        operatingHours: '2022-04-29T22:56:15.802Z',
      },
      configure: {
        inputValue: 15.7,
        spoolPosition: 68.4,
        pressure: 35.2,
        flowTorque: 449,
      },
    },
    {
      serialno: 'SN0000h56',
      type: 'Fast',
      location: 'vehicle, Cheddar UK',
      status: 'Active',
      imageSRC: '../../assets/images/s4-pro.png',
      info: {
        temperature: 23.8,
        operatingHours: '2022-04-29T22:56:15.802Z',
      },
      configure: {
        inputValue: 15.7,
        spoolPosition: 68.4,
        pressure: 35.2,
        flowTorque: 32,
      },
    },
    {
      serialno: 'SN0000h56',
      type: 'Fast',
      location: 'vehicle, Cheddar UK',
      status: 'Active',
      imageSRC: '../../assets/images/s4-pro.png',
      info: {
        temperature: 23.8,
        operatingHours: '2022-04-29T22:56:15.802Z',
      },
      configure: {
        inputValue: 15.7,
        spoolPosition: 68.4,
        pressure: 35.2,
        flowTorque: 449,
      },
    },
    {
      serialno: 'SN0000h56',
      type: 'Fast',
      location: 'vehicle, Cheddar UK',
      status: 'Active',
      imageSRC: '/assets/images/s4-pro.png',
      info: {
        temperature: 23.8,
        operatingHours: '2022-04-29T22:56:15.802Z',
      },
      configure: {
        inputValue: 15.7,
        spoolPosition: 68.4,
        pressure: 35.2,
        flowTorque: 449,
      },
    },
    {
      serialno: 'SN0000h56',
      type: 'Fast',
      location: 'vehicle, Cheddar UK',
      status: 'Active',
      imageSRC: '/assets/images/s4-pro.png',
      info: {
        temperature: 23.8,
        operatingHours: '2022-04-29T22:56:15.802Z',
      },
      configure: {
        inputValue: 15.7,
        spoolPosition: 68.4,
        pressure: 35.2,
        flowTorque: 449,
      },
    },
    {
      serialno: 'SN0000h56',
      type: 'Fast',
      location: 'vehicle, Cheddar UK',
      status: 'Active',
      imageSRC: '/assets/images/s4-pro.png',
      info: {
        temperature: 23.8,
        operatingHours: '2022-04-29T22:56:15.802Z',
      },
      configure: {
        inputValue: 15.7,
        spoolPosition: 68.4,
        pressure: 35.2,
        flowTorque: 449,
      },
    },
    {
      serialno: 'SN0000h56',
      type: 'Fast',
      location: 'vehicle, Cheddar UK',
      status: 'Active',
      imageSRC: '/assets/images/s4-pro.png',
      info: {
        temperature: 23.8,
        operatingHours: '2022-04-29T22:56:15.802Z',
      },
      configure: {
        inputValue: 15.7,
        spoolPosition: 68.4,
        pressure: 35.2,
        flowTorque: 449,
      },
    },
  ],
  productWithProductId: null,
};

const productData = (state, action) => {
  return {
    ...state,
    allProducts: action.payload,
  };
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.userConstants.PRODUCT_DATA:
      return productData(state, action);
    default:
      return state;
  }
};
