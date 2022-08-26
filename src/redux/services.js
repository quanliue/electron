import axios from "axios";

var Services = {
  getSymbols(queryData) {
    return new Promise((resolve, reject) => {
      console.log("Get symbols =>", queryData);
      let symbol = queryData.symbol;
      let finnhubtoken = queryData.apiKey;
      axios.get(
        `https://finnhub.io/api/v1/stock/symbol?exchange=${symbol}&token=${finnhubtoken}`
      ).then(resp => {
        let symbols = [];
        if (resp.data && resp.data.length > 0 )
        {
          resp.data.map((item) => {
            symbols.push(item.symbol);
          });
          symbols.sort();
        }
        resolve(symbols);
      })
      .catch(error => {
        console.log("Get symbols222 =>", error);
        reject(error);
      })
    });
  },

};

export default Services;