import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../style/layout.css";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import Slider from "./promo/Slider";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function switchMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  function closeMenu() {
    setIsMenuOpen(false);
  }
  return (
    <>
      <MainMenu
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
        closeMenu={closeMenu}
      />
      <Header switchMenu={switchMenu} isMenuOpen={isMenuOpen} />
      <Slider />
      <Outlet />
      <div className="page">
        <Footer />
      </div>
    </>
  );
}

function Header({ switchMenu, isMenuOpen }) {
  const { t } = useTranslation();
  return (
    <header className="header">
      <div className="header-elements">
        <div className="logo-header">
          <Link className="logotext" to="/">
            <img src="/imgs/fav.webp" />
            TeleMeow
          </Link>
        </div>
        <nav className="nav">
          <NavLink to="/promo" className="nav-link btn">
            {t("promotions")}
          </NavLink>
          <a translate="no" className="menu">
            <label className="hamburger">
              <input
                checked={isMenuOpen}
                onChange={switchMenu}
                type="checkbox"
              />
              <svg viewBox="0 0 32 32">
                <path
                  className="line line-top-bottom"
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                ></path>
                <path className="line" d="M7 16 27 16"></path>
              </svg>
            </label>
          </a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  const { i18n, t } = useTranslation();
  function changeLang(event) {
    i18n.changeLanguage(event.target.value);
  }
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <Link to="connect" className="menulink">
          {t("connect")}
        </Link>
        <br />
        <Link to="/help">{t("help")}</Link>|
        <Link to="/terms">{t("terms")}</Link>|
        <select
          onChange={changeLang}
          value={i18n.language}
          className="locale-switcher langselector"
        >
          <option value="ru">Русский(Original)</option>
          <option value="kg">Кыргызча(Google)</option>
          <option value="en">English(Google)</option>
        </select>
        <p>TeleMeow © 2022-{new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

function MainMenu({ isOpen, setIsOpen, closeMenu }) {
  const { t } = useTranslation();
  const location = useLocation();
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  return (
    <SlidingPane
      closeIcon={<div />}
      isOpen={isOpen}
      hideHeader
      from="right"
      width="300px"
      onRequestClose={closeMenu}
    >
      <div className="menu">
        <NavLink
          className="promotions menulink"
          data-i18n-key="promotions"
          to="/promo"
        >
          {t("promotions")}
        </NavLink>
        <NavLink className="menulink" data-i18n-key="promotions" to="/tarifs">
          {t("tarifs")}
        </NavLink>
      </div>
    </SlidingPane>
  );
}
