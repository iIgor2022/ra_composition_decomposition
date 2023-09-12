import './list.css';

//выводит простой список
export default function List({ items }) {
  return (
    <ul className="widget-list">
      {items.map(({ content }, index) => {
        return (
          <li className="widget-list__item" key={index}>
            {content}
          </li>
        );
      })}
    </ul>
  );
}