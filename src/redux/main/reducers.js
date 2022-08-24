import { 
  WIFI_NETWORK_TYPE,
  WIFI_MANUAL_ENTRY,
  WIFI_SET_PASSWORD,
  WIFI_SAVE,
  WIFI_UNSAVE,
  FINNHUB_GET_SYMBOLS_SUCCESS,
  FINNHUB_GET_SYMBOLS_FAILED
} from "./actions";

const INIT_STATE = {
  wifi: {
    selectedWifiType: 0,
    network_name: '',
    password: '',
    country_code: 0,
    passkey_type: 0,
    save: false,
  },

  finnhub: {
    symbols: [],
    getSymbolsErr: null,
    
    profile: [],
  },

  error: null,
};

const Main = (state = INIT_STATE, action) =>  {
  switch (action.type) 
  {
    case WIFI_NETWORK_TYPE:
    {
      let selectedWifiType = action.payload;
      let wifi = {...state.wifi, selectedWifiType};
      return {
        ...state, 
        wifi: {...wifi},
      };
      break;
    }
    case WIFI_MANUAL_ENTRY:
    {
      console.log("reducer =>", action.payload)
      let network_name = action.payload;
      let wifi = {...state.wifi, network_name};
      return {
        ...state, 
        wifi: {...wifi},
      };
      break;
    }
    case WIFI_SET_PASSWORD: 
    {
      let password = action.payload;
      let wifi = {...state.wifi, password};
      return {
        ...state, 
        wifi: {...wifi},
      };
      break;
    }
    case WIFI_SAVE:
    {
      let data = action.payload;
      console.log("SAVE WIFI DATA =>", data)
      let wifi = data;
      return {
        ...state, 
        wifi: {...wifi},
      };
      break;
    }
    case WIFI_UNSAVE: 
    {
      let save = false;
      let wifi = {...state.wifi, save};
      return {
        ...state, 
        wifi: {...wifi},
      };
      break;
    }
    case FINNHUB_GET_SYMBOLS_SUCCESS: 
    {
      let data = action.payload;
      let finnhub = {...state.finnhub, symbols: data, getSymbolsErr: null}
      return {
        ...state, 
        finnhub: {...finnhub},
      };
      break;
    }
    case FINNHUB_GET_SYMBOLS_FAILED:
    {
      let error = action.payload;
      let finnhub = {...state.finnhub, symbols: [], getSymbolsErr: error}
      return {
        ...state, 
        finnhub: {...finnhub},
      };
      break;
    }
    default:
      break;
  }

  return {...state};
};

export default Main;