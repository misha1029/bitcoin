import axios from "axios";

export const ValuesApi = {
  async fetchValues(){
    const response = await axios.get(
      "https://api.coindesk.com/v1/bpi/currentprice.json"
    );
    return response.data;
  },
};

