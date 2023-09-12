import Title from "../common/title/title";
import "./weatherWidget.css";

//выводит погоду на текущий день
export default function WeatherWidget(props) {
  const {
    title,
    averageTemperature,
    morningTemperature,
    daytimeTemperature,
  } = props;

  return (
    <div className="weather-widget">
      <Title title={title}/>
      <div className="weather-widget-degrees">
        <span className="weather-widget-degrees__average">
          {averageTemperature}&deg;
        </span>
        <div className="weather-widget-degrees__in-detail">
          <span className="weather-widget-degrees__in-detail-morning">
            Утром {morningTemperature};
          </span>
          <span className="weather-widget-degrees__in-detail-afternoon">
            днем {daytimeTemperature}
          </span>
        </div>
      </div>
    </div>
  );
}