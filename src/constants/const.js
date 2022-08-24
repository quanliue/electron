export const COLORS = {
  button: '#fcfcfc',
  border: '#ababab',
  light_border: '#ababab'//'#dee2e6',
}
export const countryCodeList = [
  {eventKey:'US', label: 'US: United States'},
  {eventKey:'GB', label: 'GB: United Kingdom'},
  {eventKey:'NL', label: 'NL: Netherlands'},
  {eventKey:'CA', label: 'CA: Canada'},
  {eventKey:'IT', label: 'IT: Italy'},
  {eventKey:'JP', label: 'JP3: Japan'},
  {eventKey:'DE', label: 'DE: Germany'},
  {eventKey:'PT', label: 'PT: Portugal'},
  {eventKey:'LU', label: 'LU: Luxembourg'},
  {eventKey:'NO', label: 'NO: Norway'},
  {eventKey:'FI', label: 'FI: Finland'},
  {eventKey:'DK', label: 'DK: Denmark'},
  {eventKey:'CH', label: 'CH: Switzerland'},
  {eventKey:'CZ', label: 'CZ: Czech Republic'},
  {eventKey:'ES', label: 'ES: Spain'},
  {eventKey:'KR', label: 'KR: Republic of Korea (South Korea)'},
  {eventKey:'CN', label: 'CN: China'},
  {eventKey:'FR', label: 'FR: France'},
  {eventKey:'HK', label: 'HK: Hong Kong'},
  {eventKey:'SG', label: 'SG: Singapore'}, 
  {eventKey:'TW', label: 'TW: Taiwan'}, 
  {eventKey:'BR', label: 'BR: Brazil'}, 
  {eventKey:'IL', label: 'IL: Israel'}, 
  {eventKey:'SA', label: 'SA: Saudi Arabia'},
  {eventKey:'LB', label: 'LB: Lebanon'},
  {eventKey:'AE', label: 'AE: United Arab Emirates'}, 
  {eventKey:'ZA', label: 'ZA: South Africa'}, 
  {eventKey:'AR', label: 'AR: Argentina'}, 
  {eventKey:'AU', label: 'AU: Australia'},
  {eventKey:'AT', label: 'AT: Austria'}, 
  {eventKey:'BO', label: 'BO: Bolivia'}, 
  {eventKey:'CL', label: 'CL: Chile'}, 
  {eventKey:'GR', label: 'GR: Greece'}, 
  {eventKey:'IS', label: 'IS: Iceland'}, 
  {eventKey:'IN', label: 'IN: India'},
  {eventKey:'IE', label: 'IE: Ireland'}, 
  {eventKey:'KW', label: 'KW: Kuwait'}, 
  {eventKey:'LI', label: 'LI: Liechtenstein'}, 
  {eventKey:'LT', label: 'LT: Lithuania'}, 
  {eventKey:'MX', label: 'MX: Mexico'},
  {eventKey:'MA', label: 'MA: Morocco'},
  {eventKey:'NZ', label: 'NZ: New Zealand'}, 
  {eventKey:'PL', label: 'PL: Poland'}, 
  {eventKey:'PR', label: 'PR: Puerto Rico'}, 
  {eventKey:'SK', label: 'SK: Slovak Republic'}, 
  {eventKey:'SI', label: 'SI: Slovenia'},
  {eventKey:'TH', label: 'TH: Thailand'}, 
  {eventKey:'UY', label: 'UY: Uruguay'}, 
  {eventKey:'PA', label: 'PA: Panama'}, 
  {eventKey:'RU', label: 'RU: Russia'}, 
  {eventKey:'EG', label: 'EG: Egypt'},
  {eventKey:'TT', label: 'TT: Trinidad and Tobago'}, 
  {eventKey:'TR', label: 'TR: Turkey'}, 
  {eventKey:'CR', label: 'CR: Costa Rica'}, 
  {eventKey:'EC', label: 'EC: Ecuador'}, 
  {eventKey:'HN', label: 'HN: Honduras'},
  {eventKey:'KE', label: 'KE: Kenya'}, 
  {eventKey:'UA', label: 'UA: Ukraine'}, 
  {eventKey:'VN', label: 'VN: Vietnam'}, 
  {eventKey:'BG', label: 'BG: Bulgaria'}, 
  {eventKey:'CY', label: 'CY: Cyprus'}, 
  {eventKey:'EE', label: 'EE: Estonia'},
  {eventKey:'MU', label: 'MU: Mauritius'}, 
  {eventKey:'RO', label: 'RO: Romania'}, 
  {eventKey:'CS', label: 'CS: Serbia and Montenegro'}, 
  {eventKey:'ID', label: 'ID: Indonesia'}, 
  {eventKey:'PE', label: 'PE: Peru'},
  {eventKey:'VE', label: 'VE: Venezuela'}, 
  {eventKey:'JM', label: 'JM: Jamaica'}, 
  {eventKey:'BH', label: 'BH: Bahrain'}, 
  {eventKey:'OM', label: 'OM: Oman'}, 
  {eventKey:'JO', label: 'JO: Jordan'}, 
  {eventKey:'BM', label: 'BM: Bermuda'},
  {eventKey:'CO', label: 'CO: Colombia'}, 
  {eventKey:'DO', label: 'DO: Dominican Republic'}, 
  {eventKey:'GT', label: 'GT: Guatemala'}, 
  {eventKey:'PH', label: 'PH: Philippines'},
  {eventKey:'LK', label: 'LK: Sri Lanka'},
  {eventKey:'SV', label: 'SV: El Salvador'}, 
  {eventKey:'TN', label: 'TN: Tunisia'}, 
  {eventKey:'PK', label: 'PK: Islamic Republic of Pakistan'}, 
  {eventKey:'QA', label: 'QA: Qatar'},
  {eventKey:'DZ', label: 'DZ: Algeria'},
];

export const wPasskeyTypes = [
  {eKey:'PSK', label:'WPA-PSK'},
  {eKey:'EAP', label:'WPA-EAP'}
];

export const TopFaceList = [
  {eKey:'etf', label:'ETFs'},
  {eKey:'portfolio', label:'Portfolio performance'},
  {eKey:'forex', label:'Forex/crypto'},
];

export const TopFaceIndex = {
  ETF: 0,
  Portfolio: 1,
  Forex: 2
};

export const FrontFaceList = [
  {eKey:'watchlist', label:'Watchlist'},
  {eKey:'portfolio', label:'Portfolio detail'},
  {eKey:'worldclock', label:'World Clock'},
];

export const FrontFaceIndex = {
  WatchList: 0,
  Portfolio: 1,
  WorldClock: 2
};

export const CryptoList = [
  "NONE", "1INCH", "AAVE", "ADA", "ALICE", "ANKR", "ARDR", "ARPA", "AVAX", "AXS",
  "BAND", "BAT", "BCH", "BNB", "BTC", "BTT", "BUSD", "C98", "CAKE", "CHZ", "COMP",
  "DENT", "DOGE", "DOT", "DYDX", "EGLD", "ENJ", "EOS", "ETC", "ETH", "FIL",
  "FIO", "FTM", "GRT", "HBAR", "ICP", "IDEX", "IOTX", "LAZIO", "LINK", "LTC",
  "LUNA", "MATIC", "MBOX", "MKR", "NEAR", "OMG", "PSG", "QNT", "QTUM", "RUNE",
  "SAND", "SHIB", "SLP", "SNX", "SOL", "SXP", "THETA", "TLM", "TRU", "TRX",
  "UNI", "USDC", "USDT", "VET", "WRX", "XLM", "XRP", "XTZ", "YFI", "ZEC", "ZIL"
];

export const ForexList = [
  "NONE", "AUD", "EUR", "GBP", "NZD", "CAD", 
  "CHF", "CNH", "HKD", "JPY", "MXN", "TRY"
];

export const AvailableWifi = {
  auto: 0,
  manual: 1,
}