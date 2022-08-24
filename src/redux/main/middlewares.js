import Services from "../services";
import { 
  FINNHUB_GET_SYMBOLS,
  FINNHUB_GET_SYMBOLS_SUCCESS,
  FINNHUB_GET_SYMBOLS_FAILED
} from "./actions";

const main = store => next => action => {
  let dispatch = store.dispatch;
  
  switch (action.type) {
    case FINNHUB_GET_SYMBOLS:
    {
      Services.getSymbols(action.payload)
      .then((res) => {
        dispatch({
          type: FINNHUB_GET_SYMBOLS_SUCCESS,
          payload: res
        })
      })
      .catch((err) => {
        console.log("Reject GetSymbols =>", err)
        dispatch({
          type: FINNHUB_GET_SYMBOLS_FAILED,
          payload: err
        })
      })
      break;
    }
    default:
      break;
  }
  
  return next(action);
};

export default main;