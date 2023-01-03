import './App.css';
import WeatherData from './components/WeatherData';
import WeatherForecast from './components/WeatherForecst';

function App() {
  const WeatherApp = WeatherData.map ((weather, index) => {
    return (
      <WeatherForecast {...weather} key = { index }/>
    )
  })
  return (
    <div className="App">
      <h1> Richards WeatherIcons App </h1>
      <section> { WeatherApp } </section>
      <body>{ WeatherApp }</body>

    </div>
  );
}

export default App;
