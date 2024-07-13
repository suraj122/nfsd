import { Link } from "react-router-dom";

const Header = ({ lang, setLang }) => {
  return (
    <header className="bg-gray-900 text-white px-4 py-2">
      <nav>
        <ul className="flex justify-center items-center gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/team/profile/suraj">suraj</Link>
          </li>
          <li>
            <Link to="/accordion">Accordion</Link>
          </li>
          <li>
            <Link to="/comments">Comments</Link>
          </li>
          <li>
            <select
              className="text-gray-900"
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              name=""
              id=""
            >
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="sp">Spanish</option>
              <option value="ru">Russian</option>
            </select>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
