import "./exchangeRates.css";

//выводит кусры валют
export default function EchangeRates({ currencyRates }) {
  return (
    <div className="exchange-rates-container">
      <ul className="echange-rates">
        {currencyRates.map((item, index) => {
          return (
            <li className="echange-rates__item" key={index}>
              <a href="#0" className="echange-rates__item-link">
                {item.currency}
              </a>
              <span className="exchange-rates__item-rate">
                {item.rate}
              </span>
            </li>
          );
        })}
      </ul>
      <a href="#0" className="echange-rates__more-rates">
        &#8230;
      </a>
    </div>
  );
}