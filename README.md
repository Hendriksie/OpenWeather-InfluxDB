# OpenWeather-InfluxDB

Fetch weather data from OpenWeatherMap [One Call API](https://openweathermap.org/api/one-call-api) every 10 minutes and save it into an InfluxDB database.

## Install

`npm ci`

## Run

`npm start`

## Configuration

Set configuration options via ENV variables.

Name | Description | Default | Required
--- | --- | --- | ---
`OW_URL` | OpenWeatherMap API endpoint | `https://api.openweathermap.org/data/2.5/onecall` | No
`OW_API_KEY` | Your OpenWeatherMap API key ([Here](https://home.openweathermap.org/api_keys)) | - | Yes
`OW_UNITS` | Units of measurement ([Options](https://openweathermap.org/api/one-call-api#data)) | `metric` | No
`OW_LAT` | Geographical coordinates (latitude) of the location | - | Yes
`OW_LON` | Geographical coordinates (longitude) of the location | - | Yes
`OW_LANG` | Not really used, defaults to `en` ([Options](https://openweathermap.org/api/one-call-api#multi)) | `en` | No
`INFLUX_HOST` | InfluxDB host | `127.0.0.1` | No
`INFLUX_PORT` | InfluxDB port | `8086` | No
`INFLUX_USERNAME` | InfluxDB username | - | Yes
`INFLUX_PASSWORD` | InfluxDB password | - | Yes
`INFLUX_DATABASE` | InfluxDB database | - | Yes
