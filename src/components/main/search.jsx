import './search.css';

//выводит навигацию по поисковым страницам, поле поиска и подсказку для поиска
export default function Search(props) {
  const {
    searchСategories,
    searchBarLabel,
    searchBtnName,
    searchAdvice,
    searchExample,
  } = props;

  return (
    <div className="search">
      <nav className="search-nav">
        <ul className="searc-nav-menu">
          {searchСategories.map((category, index) => {
            return (
              <li className="search-nav-menu__item active" key={index}>
                <a href="#0" className="search-nav-menu__item-link">
                  {category}
                </a>
              </li>
            );
          })}
          <li className="search-nav-menu__item">
            <a href="#0" className="search-nav-menu__item-link">
              еще
            </a>
          </li>
        </ul>
      </nav>

      <form className="search-bar">
        <label htmlFor="search-bar-input" className="search-bar-input">
          {searchBarLabel}
        </label>
        <input
          type="text"
          className="search-bar-input"
          id="search-bar-input"
          name="search-bar-input"
          required
        />
        <button className="search-bar-button" type="submit">
          {searchBtnName}
        </button>
      </form>

      <p className="search-advice">
        {searchAdvice}
        <span className="search-advice__example">
          &nbsp;{searchExample}
        </span>
      </p>
    </div>
  );
}