const axios = require('axios');

const getClima = async(lat, lng) => {

    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=83580711788f9344af0cc36b08d0d153&units=metric`);

    return respuesta.data.main.temp;
}

module.exports = {
    getClima
}