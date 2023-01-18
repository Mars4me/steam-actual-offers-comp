import { MouseEvent, useMemo, useState } from 'react';
import './App.css';
import SpecialOfferItem from './SpecialOfferItem';
import { mockData } from './data/index';

function App() {
    const [page, setPage] = useState(0);

    const handleArrowClick = (e: MouseEvent<EventTarget>) => {
        let target = e.target as HTMLDivElement;
        target.id === 'left'
            ? setPage((prev) => (prev > 0 ? prev - 1 : mockData.length - 1))
            : setPage((prev) => {
                  if (prev === mockData.length - 1) return 0;
                  return prev + 1;
              });
    };

    const gameList = useMemo(() => {
        return mockData[page];
    }, [page]);
    return (
        <div className="wrapper content">
            <h2 className="caption space-between">
                Особливі пропозиції
                <span>
                    <a className="outlined-btn caption" href="#">
                        Перегляньте ще
                    </a>
                </span>
            </h2>
            <div className="carousel_content">
                <div className="special-offer-group">
                    {gameList.map((element, index) =>
                        Array.isArray(element) ? (
                            <SpecialOfferItem key={index} firstGame={element[0]} secondGame={element[1]} />
                        ) : (
                            <SpecialOfferItem key={index} firstGame={element} />
                        )
                    )}
                </div>
                <div id="left" className="left-arrow" onClick={handleArrowClick}>
                    {'<'}
                </div>
                <div className="right-arrow" onClick={handleArrowClick}>
                    {'>'}
                </div>
                <div className="carousel_thumbs">
                    {mockData.map((_, indx) => (
                        <div
                            onClick={(event: MouseEvent<HTMLDivElement>) => {
                                const target = event.target as HTMLDivElement;
                                if (target.dataset['number']) {
                                    setPage(+target.dataset['number']);
                                }
                            }}
                            data-number={indx}
                            key={indx}
                            className={indx === page ? 'active' : ''}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
