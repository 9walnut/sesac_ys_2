import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="Header">
        <div className="logo">Router Study</div>
        <nav>
          {/* a태그는 페이지를 새로고침 */}
          {/* Link Component는 변경되는 Component만 변경하면서 컴포넌트만 변경함 */}
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/products">Product</Link>
          </div>
          <div>
            <Link to="/photos">Photos</Link>
          </div>
        </nav>
      </header>
    </>
  );
}
