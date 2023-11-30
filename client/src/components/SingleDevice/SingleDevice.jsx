import React from "react";
import style from "./SingleDevice.module.css";
import { useNavigate } from "react-router-dom";
import { ROUTES } from '../../utils/constants';

const SingleDevice = ({device}) => {
    const navigate = useNavigate()
    return (
        <li className={style.cards__item}>
            <article className={style.card}>
                <div className={style.card__img} onClick={() => navigate(ROUTES.DEVICE_ROUTE)}>
                    <img src={device.img} alt="" />
                </div>
                <div className={style.card__content}>
                    <h3 className={style.card__title}>{device.name}</h3>
                    <p className={style.card__desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laudantium, maiores.
                    </p>
                    <div className={style.card__actions}>
                        <p className={style.price}>{device.price}{" "}₽</p>
                        <div className={style.card__buttons}>
                            <button
                                title="Добавить в избранное"
                                className={style.card__btn}
                            >
                                <div className="card__btn__icon">
                                    <svg
                                        width="38px"
                                        height="38px"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z"
                                            stroke="#222222"
                                        />
                                    </svg>
                                </div>
                            </button>

                            <button
                                title="Добавить в корзину"
                                className={style.card__btn}
                            >
                                <div className="card__btn__icon">
                                    <svg
                                        width="38px"
                                        height="38px"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M8 12L8 8C8 5.79086 9.79086 4 12 4V4C14.2091 4 16 5.79086 16 8L16 12"
                                            stroke="#222222"
                                            stroke-linecap="round"
                                        />
                                        <path
                                            d="M3.69435 12.6678C3.83942 10.9269 3.91196 10.0565 4.48605 9.52824C5.06013 9 5.9336 9 7.68053 9H16.3195C18.0664 9 18.9399 9 19.514 9.52824C20.088 10.0565 20.1606 10.9269 20.3057 12.6678L20.8195 18.8339C20.904 19.8474 20.9462 20.3542 20.6491 20.6771C20.352 21 19.8435 21 18.8264 21H5.1736C4.15655 21 3.64802 21 3.35092 20.6771C3.05382 20.3542 3.09605 19.8474 3.18051 18.8339L3.69435 12.6678Z"
                                            stroke="#222222"
                                        />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        </li>
    );
};

export default SingleDevice;
