import axios from "axios";

const Services = {};

Services.createShortLink = (url) => {
  return axios
    .get(`/shorten?url=${url}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
};

export default Services;
