const API_FIELD = 'FinnhubAPIKey'
export const saveAPIKey = (value) => {
  localStorage.setItem(API_FIELD, value);
};

export const getAPIKey = () => {
  let key = localStorage.getItem(API_FIELD);
  return key;
}