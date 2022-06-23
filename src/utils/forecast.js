const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=54c6e8e11cd826988f3a3cd977027729&query=' + latitude + ',' + longitude + '&units=m'

    request({url, json: true}, (error, {body}) => {
            if (error) {
                callback('Unable to connect to weather service!', undefined)
               
            } else if (body.error) {
                callback('Unable to find location', undefined)
               
            } else {
                callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out. It feels like " + body.current.feelslike + " degrees out")
            }
            
        
            
        })
}

module.exports = forecast