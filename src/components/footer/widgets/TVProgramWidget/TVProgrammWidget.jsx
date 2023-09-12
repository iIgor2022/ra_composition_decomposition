import TVProgrammList from "../common/lists/TVProgrammList";
import Title from "../common/title/title";

//выводит список ТВ программ
export default function TVProgrammWidget({ title, items }) {
  return (
    <div className="tv-programm-widget">
      <Title title={title}/>
      <TVProgrammList items={items}/>
    </div>
  );
}