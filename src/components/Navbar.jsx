import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLanguageSwitcher } from "../../hooks/index";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navbar = () => {
  const { t } = useTranslation();
  const { changeLanguage } = useLanguageSwitcher();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* Desktop Version */}
      <div className="d-none d-lg-block">
        <div className="absolute top-0 left-0 w-full h-16 bg-[#e3f2fd]"></div>
        <div className="flex absolute top-0 left-0 m-3">
          <Link
            to="/"
            className="d-flex align-items-center no-underline text-black"
          >
            <img
              className="w-12 bottom-2 relative ml-0"
              src="/assets/images/worker.png"
              alt="Logo"
            />
            <h1 className="text-3xl ml-0">worknow</h1>
          </Link>
          <ul className="flex justify-center items-center ml-20 gap-2 mb-2 text-gray-500">
            <li className="mr-3">
              <Link
                to="/"
                className="text-lg font-normal text-gray-600 hover:text-gray-900 no-underline"
              >
                {t("community")}
              </Link>
            </li>
            <li className="mr-3">
              <Link
                to="/jobs"
                className="text-lg font-normal text-gray-600 hover:text-gray-900 no-underline"
              >
                {t("jobs")}
              </Link>
            </li>
            <li>
              <Link
                to="/facebook"
                className="text-lg font-normal text-gray-600 hover:text-gray-900 no-underline"
              >
                {t("facebookgroups")}
              </Link>
            </li>
            <li>
              <Link
                to="/salaries"
                className="text-lg m-2.5 font-normal text-gray-600 hover:text-gray-900 no-underline"
              >
                {t("salaries")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="d-flex align-items-center absolute top-0 right-12 m-3">
          <div className="dropdown me-2">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="languageDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Language
            </button>
            <ul className="dropdown-menu" aria-labelledby="languageDropdown">
              <li>
                <a
                  onClick={() => changeLanguage("en")}
                  className="dropdown-item"
                  href="#"
                >
                  English
                </a>
              </li>
              <li>
                <a
                  onClick={() => changeLanguage("ru")}
                  className="dropdown-item"
                  href="#"
                >
                  Russian
                </a>
              </li>
            </ul>
          </div>
          <button type="button" className="btn btn-warning">
            {t("premium")}
          </button>
          <div className="d-flex ml-5">
            <SignedOut>
              <SignInButton className="btn btn-primary" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <nav className="navbar navbar-expand-lg navbar-light bg-[#e3f2fd] d-lg-none fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              className="w-12 me-2"
              src="/assets/images/worker.png"
              alt="Logo"
            />
            <h1 className="text-3xl m-0">worknow</h1>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-controls="navbarNav"
            aria-expanded={isExpanded}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`navbar-collapse ${isExpanded ? "show" : "collapse"}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link text-lg font-normal text-gray-600 hover:text-gray-900 no-underline"
                  to="/"
                >
                  {t("community")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-lg font-normal text-gray-600 hover:text-gray-900 no-underline"
                  to="/jobs"
                >
                  {t("jobs")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-lg font-normal text-gray-600 hover:text-gray-900 no-underline"
                  to="/facebook"
                >
                  {t("facebookgroups")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-lg font-normal text-gray-600 hover:text-gray-900 no-underline"
                  to="/salaries"
                >
                  {t("salaries")}
                </Link>
              </li>
            </ul>

            <div className="d-flex flex-column gap-2 mt-3">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="mobileLanguageDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Language
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="mobileLanguageDropdown"
                >
                  <li>
                    <a
                      onClick={() => changeLanguage("en")}
                      className="dropdown-item"
                      href="#"
                    >
                      English
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => changeLanguage("ru")}
                      className="dropdown-item"
                      href="#"
                    >
                      Russian
                    </a>
                  </li>
                </ul>
              </div>
              <SignedOut>
                <SignInButton className="btn btn-primary" />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
              <button type="button" className="btn btn-warning">
                {t("premium")}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export { Navbar };
