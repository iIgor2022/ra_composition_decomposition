import Title from "../common/title/title";
import List from "../common/lists/list";

//выводит список разделов "Карта Германии"
export default function GermanMapWidget({ title, items }) {
  return (
    <div className="german-map-widget">
      <Title title={title}/>
      <List items={items}/>
    </div>
  )
}