import './App.css'

import newsСategories from './data/newsCategories';
import newsNames from './data/newsNames';
import currencyRates from './data/currencyRates';
import searchСategories from './data/searchCategories';
import favoritePages from './data/favoritePages';
import germanMap from './data/germanMap';
import programmsTV from './data/programmsTV';
import ether from './data/ether';

import News from './components/header/news/news'
import EchangeRates from './components/header/exchangeRates/exchangeRates';
import Ads from './components/header/ads/ads';
import Image from './components/header/images/images';
import Search from './components/main/search';
import Widgets from './components/footer/widgets';
import WeatherWidget from './components/footer/widgets/weatherWidget/weatherWidget';
import GermanMapWidget from './components/footer/widgets/germanMapWidget/germanMapWidget';
import EtherWidget from './components/footer/widgets/etherWidget/etherWidget';
import FavoritesWidget from './components/footer/widgets/favoritesWidget/favoritesWidget';
import TVProgrammWidget from './components/footer/widgets/TVProgramWidget/TVProgrammWidget';

export default function App() {
  return (
    <>
      <header className='app-header'>
        <div className='app-wrapper'>
          <div className='app-header__main'>
            <News newsCategories={newsСategories} newsNames={newsNames}/>

            <EchangeRates currencyRates={currencyRates}/>
          </div>

          <Ads
            title="Работа над ошибками"
            description="Смотрите на Яндексе и запоминайте"
          >
            <Image
              containerClass="ads__image-container"
              imgClass="ads-image"
              src="https://picsum.photos/id/2/100"
              alt="Plug"
            />
          </Ads>
        </div>
      </header>

      <div className='app-body'>
        <div className='app-wrapper'>

          <Search
            searchСategories={searchСategories}
            searchBarLabel="Яндекс"
            searchBtnName="Найти"
            searchAdvice="Найдется все. Например,"
            searchExample="фаза луны сегодня"
          />

          <Image
            containerClass="banner"
            imgClass="banner-image"
            src="https://picsum.photos/id/1063/1000"
            alt="Image cap"
          />

        </div>
      </div>

      <footer className='app-footer'>
        <div className='app-wrapper'>
          <Widgets>
            <WeatherWidget
              title="Погода"
              averageTemperature="+17"
              morningTemperature="+17"
              daytimeTemperature="+19"
            />
            <GermanMapWidget
              title="Карта Германии"
              items={germanMap}
            />
            <EtherWidget
              title="Эфир"
              items={ether}
            />
            <FavoritesWidget
              title="Посещаемое"
              items={favoritePages}
            />
            <TVProgrammWidget
              title="Телепрограмма"
              items={programmsTV}
            />
          </Widgets>

        </div>
      </footer>
    </>
  )
}