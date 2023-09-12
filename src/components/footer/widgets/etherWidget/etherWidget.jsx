import TVProgrammList from "../common/lists/TVProgrammList";
import Title from "../common/title/title";

//выводит программу "Эфира"
export default function EtherWidget({ title, items }) {
  return (
    <div className="ether-widget">
      <Title title={title}/>
      <TVProgrammList items={items}/>
    </div>
  );
}