import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { ROUTES } from "../../utils/constants";

import style from "./Header.module.css";
import { Context } from "../..";

const Header = observer(() => {
    const { user } = useContext(Context);
    return (
        <header className={style.header}>
            <div className={style.container}>
                <div className={style.header__inner}>
                    <div className={style.logo}>
                        <Link to={ROUTES.SHOP_ROUTE}>IntShop</Link>
                    </div>

                    <search className={style.search}>
                        <input
                            name="search"
                            type="search"
                            placeholder="Введите название товара..."
                            autoComplete="off"
                            
                        />
                    </search>

                    <nav>
                        <ul className={style.menu__list}>
                            <li className={style.menu__item}>
                                <Link
                                    className={style.menu__link}
                                    to={ROUTES.CART_ROUTE}
                                >
                                    <span>
                                        <svg
                                            width="48px"
                                            height="48px"
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
                                    </span>
                                    <p>Корзина</p>
                                </Link>
                            </li>

                            <li className={style.menu__item}>
                                <Link
                                    className={style.menu__link}
                                    to={ROUTES.CART_ROUTE}
                                >
                                    <span>
                                        <svg
                                            width="48px"
                                            height="48px"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z"
                                                stroke="#222222"
                                            />
                                        </svg>
                                    </span>
                                    <p>Избранное</p>
                                </Link>
                            </li>

                            <li className={style.menu__item}>
                                {user.isAuth ? (
                                    <Link
                                        className={style.menu__link}
                                        to={ROUTES.CART_ROUTE}
                                    >
                                        <span>
                                            <svg
                                                width="48px"
                                                height="48px"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle
                                                    cx="12"
                                                    cy="10"
                                                    r="3"
                                                    stroke="#222222"
                                                    stroke-linecap="round"
                                                />
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    r="9"
                                                    stroke="#222222"
                                                />
                                                <path
                                                    d="M18 18.7059C17.6461 17.6427 16.8662 16.7033 15.7814 16.0332C14.6966 15.3632 13.3674 15 12 15C10.6326 15 9.30341 15.3632 8.21858 16.0332C7.13375 16.7033 6.35391 17.6427 6 18.7059"
                                                    stroke="#222222"
                                                    stroke-linecap="round"
                                                />
                                            </svg>
                                        </span>
                                        <p>Профиль</p>
                                    </Link>
                                ) : (
                                    <Link
                                        className={style.menu__link}
                                        to={ROUTES.LOGIN_ROUTE}
                                    >
                                        <span>
                                            <svg
                                                width="48px"
                                                height="48px"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle
                                                    cx="12"
                                                    cy="10"
                                                    r="3"
                                                    stroke="#222222"
                                                    stroke-linecap="round"
                                                />
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    r="9"
                                                    stroke="#222222"
                                                />
                                                <path
                                                    d="M18 18.7059C17.6461 17.6427 16.8662 16.7033 15.7814 16.0332C14.6966 15.3632 13.3674 15 12 15C10.6326 15 9.30341 15.3632 8.21858 16.0332C7.13375 16.7033 6.35391 17.6427 6 18.7059"
                                                    stroke="#222222"
                                                    stroke-linecap="round"
                                                />
                                            </svg>
                                        </span>
                                        <p>Войти</p>
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
});

export default Header;
