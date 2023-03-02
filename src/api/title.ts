import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://moviesdatabase.p.rapidapi.com/titles',
  headers: {
    'X-RapidAPI-Key': '5bbe56c27cmsh96b6dcc8684eedfp121f17jsnd7fc8f853916',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
  },
};

const titleArray: any = [];
axios
  .request(options)
  .then(function (response: any) {
    titleArray.push(response.data.results[1].results);
    console.log(response.data);
  })
  .catch(function (error: any) {
    console.error(error);
  });

export default titleArray;
