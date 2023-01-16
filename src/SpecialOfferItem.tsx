import { FC } from 'react';

interface IGameDescription {
    name: string;
    about: string;
    releaseDate: Date;
    genre: string[];
}

export interface Game {
    thumbnail: string;
    originalPrice: number;
    discountPercent: number;
    description: IGameDescription;
}

interface SpecialOfferItemProp {
    firstGame: Game;
    secondGame?: Game;
}

const getFinalPrice = (originalPrice: number, discount: number): number => Math.round((originalPrice / 100) * (100 - discount));

const SpecialOfferItem: FC<SpecialOfferItemProp> = ({ firstGame, secondGame }) => {
    return (
        <div className="special-offer-item">
            {secondGame ? <BothGame firstGame={firstGame} secondGame={secondGame} /> : <OneGame game={firstGame} />}
        </div>
    );
};

const OneGame = ({ game }: { game: Game }) => {
    return (
        <div className="item-wrapper">
            <a href={'#'}>
                <img
                    className="game_thumbnail"
                    src={game.thumbnail}
                    alt="game-thumbnail"
                    title={game?.description?.name ?? 'test'}
                />
            </a>
            <div className="spotlight-content">
                <h2 className="caption">Знижка на вихідних</h2>
                <div className="spotlight-description">Пропозиція діє до НН о 20:00</div>
                <div className="spotligh-price">
                    <div className="discount-percent">-{game.discountPercent}%</div>
                    <div className="discount-prices">
                        <div className="discount-price-original">{game.originalPrice}₴</div>
                        <div className="discount-price-final">{getFinalPrice(game.originalPrice, game.discountPercent)}₴</div>
                    </div>
                </div>
            </div>
            <div className="arrow-options">
                <div></div>
            </div>
        </div>
    );
};

const BothGame = ({ firstGame, secondGame }: Required<SpecialOfferItemProp>) => {
    return (
        <>
            <HorizontalGameComp game={firstGame} />
            <HorizontalGameComp game={secondGame} />
        </>
    );
};

const HorizontalGameComp = ({ game }: { game: Game }) => {
    return (
        <div className="item-wrapper item-wrapper_double ">
            <a href={'#'}>
                <img
                    className="game_thumbnail"
                    src={game.thumbnail}
                    alt="game-thumbnail"
                    title={game?.description?.name ?? 'test'}
                />
                <div className="spotlight-content spotlight-content_double">
                    {/* <h2 className="caption">Знижка на вихідних</h2> */}
                    <div className="spotligh-price spotligh-price_double">
                        <div className="discount-percent">-{game.discountPercent}%</div>
                        <div className="discount-prices">
                            <div className="discount-price-original">{game.originalPrice}₴</div>
                            <div className="discount-price-final">{getFinalPrice(game.originalPrice, game.discountPercent)}₴</div>
                        </div>
                    </div>
                </div>
            </a>

            <div className="arrow-options">
                <div></div>
            </div>
        </div>
    );
};

export default SpecialOfferItem;
