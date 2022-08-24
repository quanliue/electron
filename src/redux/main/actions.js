export const WIFI_NETWORK_TYPE = 'WIFI_NETWORK_TYPE';
export const WIFI_MANUAL_ENTRY = 'WIFI_MANUAL_ENTRY';
export const WIFI_SET_PASSWORD = 'WIFI_SET_PASSWORD';
export const WIFI_SAVE = 'WIFI_SAVE';
export const WIFI_UNSAVE = 'WIFI_UNSAVE';
export const FINNHUB_GET_SYMBOLS = 'FINNHUB_GET_SYMBOLS';
export const FINNHUB_GET_SYMBOLS_SUCCESS = 'FINNHUB_GET_SYMBOLS_SUCCESS';
export const FINNHUB_GET_SYMBOLS_FAILED = 'FINNHUB_GET_SYMBOLS_FAILED';

export const selectWifiNetwork = (network_type) => ({
  type: WIFI_NETWORK_TYPE,
  payload: network_type,
});

export const useThisNetwork = (manual_entry) => ({
  type: WIFI_MANUAL_ENTRY,
  payload: manual_entry,
});

export const setWifiPassword = (password) => ({
  type: WIFI_SET_PASSWORD,
  payload: password,
});

export const saveWifi = (data) => ({
  type: WIFI_SAVE,
  payload: data
});

export const unSave = () => ({
  type: WIFI_UNSAVE
});

export const getSymbols = ({symbol, apiKey}) => ({
  type: FINNHUB_GET_SYMBOLS,
  payload: {symbol, apiKey}
});