import React, { useState } from "react";
import style from "./Auth.module.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/constants";

const Auth = () => {
    const [isActive, setIsActive] = useState(false);
    const Left = () => {
        setIsActive(false);
    };

    const Right = () => {
        setIsActive(true);
    };

    return (
        <main className={style.main}>
            <article className={style.container}>
                <div className={style.block}>
                    <section
                        className={`${style.block__item} ${style.blockItem}`}
                    >
                        <h2 className={style.blockItem__title}>
                            Уже есть аккаунт?
                        </h2>
                        <Link to={ROUTES.LOGIN_ROUTE}>
                            <button
                                onClick={Left}
                                className={`${style.blockItem__btn} ${style.signIn__btn}`}
                            >
                                Войти
                            </button>
                        </Link>
                    </section>

                    <section
                        className={`${style.block__item} ${style.blockItem}`}
                    >
                        <h2 className={style.blockItem__title}>
                            Нет аккаунта?
                        </h2>
                        <Link to={ROUTES.REG_ROUTE}>
                            <button
                                onClick={Right}
                                className={`${style.blockItem__btn} ${style.signUp__btn}`}
                            >
                                Зарегистрироваться
                            </button>
                        </Link>
                    </section>
                </div>

                <div
                    className={
                        isActive
                            ? `${style.form__box} ${style.form__box__left}`
                            : `${style.form__box} ${style.form__box__right}`
                    }
                >
                    {isActive ? (
                        <form
                            action=""
                            className={`${style.form}  ${style.form__signUp}`}
                        >
                            <h3 className={style.form__title}>Регистрация</h3>
                            <p>
                                <input
                                    type="email"
                                    className={style.form__input}
                                    placeholder="Email"
                                />
                            </p>
                            <p>
                                <input
                                    type="password"
                                    className={style.form__input}
                                    placeholder="Пароль"
                                />
                            </p>

                            <p>
                                <input
                                    type="password"
                                    className={style.form__input}
                                    placeholder="Повторите пароль"
                                />
                            </p>
                            <p>
                                <button className={style.form__btn}>
                                    Зарегистрироваться
                                </button>
                            </p>
                        </form>
                    ) : (
                        <form
                            action=""
                            className={`${style.form} ${style.form__signIn}`}
                        >
                            <h3 className={style.form__title}>Вход</h3>
                            <p>
                                <input
                                    type="email"
                                    className={style.form__input}
                                    placeholder="Email"
                                />
                            </p>
                            <p>
                                <input
                                    type="password"
                                    className={style.form__input}
                                    placeholder="Пароль"
                                />
                            </p>
                            <p>
                                <button className={style.form__btn}>
                                    Войти
                                </button>
                            </p>
                        </form>
                    )}
                </div>
            </article>
        </main>
    );
};

export default Auth;
