import './list.css';

//выводит список в формате: понятие - определение
export default function DefinitionsList({ items }) {
  return (
    <ul className="widget-list">
      {items.map(({ term, definition }, index) => {
        return (
          <li className="widget-list__item" key={index}>
            <b>{term}</b> &ndash; {definition}
          </li>
        );
      })}
    </ul>
  );
}