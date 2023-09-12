import './list.css';

//выводит программу ТВ передач
export default function TVProgrammList({ items }) {
  return (
    <ul className="widget-list">
      {items.map(({ time, name, source }, index) => {
        return (
          <li className="widget-list__item" key={index}>
            <span className="widget-list__item-time">
              {time ? `${time}\u00A0` : ""}
            </span>
            <span className="widget-list__item-name">
              {name}
            </span>
            <span className="widget-list__item-source">
              {source ? `\u00A0\u00A0${source}` : ""}
            </span>
          </li>
        );
      })}
    </ul>
  );
}