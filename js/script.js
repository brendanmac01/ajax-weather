let weatherData, userInput;

const $temperature = $(`#temperature`)
const $feelsLike = $(`#feelsLike`)
const $input = $(`input[type="text"]`)
const $weatherFor = $(`#weatherFor`)
const $weather = $(`#weather`)

$(`form`).on(`submit`, handleGetData)

function handleGetData(event) {
    event.preventDefault()
    userInput = $input.val()
$.ajax({
    url:'https://api.openweathermap.org/data/2.5/weather?q=' + userInput + `&appid=e77cae58087dd68ad377c3f50d8e7686&units=imperial`
  }).then(
    (data) => {
        weatherData = data;
        render();
    },
    (error) => {
     console.log('bad request', error);
    }
  );
}
function render() {
    $weatherFor.text(weatherData.name);
    $temperature.text(weatherData.main.temp)
    $feelsLike.text(weatherData.main.feels_like)
    $weather.text(weatherData.weather[0].main)
  }