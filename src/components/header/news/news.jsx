import "./news.css";

//выводит навигацию по новостям и список новостей
export default function News({ newsCategories, newsNames }) {
  return (
    <div className="news">
      <nav className="new-nav">
        <ul className="news-nav-menu">
          {newsCategories.map((category, index) => {
            return (
              <li
                className={`news-nav-menu__item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <a href="#0" className="news-nav-menu__item-link">
                  {category}
                </a>
              </li>
            );
          })}
        </ul>
        <span className="news-current-datetime">10 сетнября, воскресенье 14:52</span>
      </nav>
      <div className="news-content">
          <ul>
            {newsNames.map((name, index) => {
              return (
                <li className="news-content__item" key={index}>
                  {name}
                </li>
              );
            })}
          </ul>
      </div>
    </div>
  )
}