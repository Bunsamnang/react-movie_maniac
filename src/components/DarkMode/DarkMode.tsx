import { useEffect, useState } from "react";
import "./DarkMode.css";

const previousTheme = JSON.parse(localStorage.getItem("is-dark") || "false");

const DarkMode = () => {
  const [isDark, setIsDark] = useState(previousTheme);
  useEffect(() => {
    localStorage.setItem("is-dark", JSON.stringify(isDark));
  }, [isDark]);

  const setDarkTheme = () => {
    document.querySelector("body")?.setAttribute("data-theme", "dark");
  };

  const setLightTheme = () => {
    document.querySelector("body")?.setAttribute("data-theme", "light");
  };

  const handleChangeTheme = () => {
    setIsDark(!isDark);
  };

  if (isDark) {
    setDarkTheme();
  } else {
    setLightTheme();
  }

  return (
    <div>
      <input
        type="checkbox"
        className=""
        id="darkmode-toggle"
        onChange={handleChangeTheme}
        defaultChecked={isDark}
      />
      <label htmlFor="darkmode-toggle" id="label">
        <svg
          width="800px"
          height="800px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="sun"
          fill="currentColor"
        >
          <circle cx="12" cy="12" r="5" strokeWidth="1.5" />
          <path d="M12 2V4" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M12 20V22" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M4 12L2 12" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M22 12L20 12" strokeWidth="1.5" strokeLinecap="round" />
          <path
            d="M19.7778 4.22266L17.5558 6.25424"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M4.22217 4.22266L6.44418 6.25424"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M6.44434 17.5557L4.22211 19.7779"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M19.7778 19.7773L17.5558 17.5551"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>

        <svg
          width="800px"
          height="800px"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="moon"
        >
          <path
            d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </label>
    </div>
  );
};

export default DarkMode;
