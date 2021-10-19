import axios from '../../utils/axios';
export const getBooksService = (page, itemsPerPage, query) =>
  axios
    .post('/',{
    page : page + 1,
    itemsPerPage,
    filters: [{"type": "all", "values": [query]}]
})
    .then((res) => res.data)
    .catch((error) => Promise.reject(error));
