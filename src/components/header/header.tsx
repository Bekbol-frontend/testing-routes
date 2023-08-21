import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="py-[20px] shadow-sm bg-white sticky top-0 left-0 right-0 z-[99999999999999999999]">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-[30px] font-bold text-[royalblue] uppercase"
          >
            logo
          </Link>
          <div className="flex items-center gap-[20px]">
            <Link to="/" className="text-[15px] uppercase">
              home
            </Link>
            <Link to="/about" className="text-[15px] uppercase">
              about
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
