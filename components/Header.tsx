import React from "react";
import classNames from "classnames";

import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";
import {
  setMainCurrentPage,
  setFavoritesCurrentPage,
} from "../redux/appReducer";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { mainPage, favoritesPage }: any = useSelector(
    (state: StateSelector) => ({
      favoritesPage: state.app.favoritesPage,
      mainPage: state.app.mainPage,
    })
  );

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.location.pathname === "/"
        ? dispatch(setMainCurrentPage())
        : dispatch(setFavoritesCurrentPage());
    }
  }, [dispatch]);

  const OnMainPage = () => {
    dispatch(setMainCurrentPage());
  };

  const OnFavoritesPage = () => {
    dispatch(setFavoritesCurrentPage());
  };

  return (
    <nav className="nav">
      <ul>
        <Link href="/">
          <li onClick={OnMainPage} className={classNames({ active: mainPage })}>
            <a>Главная</a>
          </li>
        </Link>
        <Link href="/favorites">
          <li
            onClick={OnFavoritesPage}
            className={classNames({ active: favoritesPage })}
          >
            <a>Избранное</a>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
