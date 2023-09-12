import "./ads.css";

//выводит рекламу, которая название, описание и опционально картинку
export default function Ads(props) {
  const { title, description, children } = props;

  return (
    <div className="ads">
      {children}
      <h3 className="ads-title">
        <a href="#0" className="ads-title__link">
          {title}
        </a>
      </h3>
      <p className="ads-description">
        {description}
      </p>
    </div>
  );
}