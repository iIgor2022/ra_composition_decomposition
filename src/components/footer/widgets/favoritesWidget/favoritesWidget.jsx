import DefinitionsList from "../common/lists/definitionsList";
import Title from "../common/title/title";

//выводит часто посещаемые страницы
export default function FavoritesWidget({ title, items }) {
  return (
    <div className="favorites-widget">
      <Title title={title}/>
      <DefinitionsList items={items}/>
    </div>
  )
}