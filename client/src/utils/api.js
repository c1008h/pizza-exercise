import axios from 'axios'
axios.defaults.headers.common['Access-Control-Allow-Credentials'] = true

export const fetchPizzas = () => {
    return axios
        .get('http://files.olo.com/pizzas.json')
        .then((response) => {
            // console.log(response.data)
            return response.data

        })
        .catch((error) => {
            console.log(error)
        })
}