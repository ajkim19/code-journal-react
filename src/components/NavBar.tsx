import { Link } from 'react-router-dom';
import './NavBar.css';

export function NavBar() {
  return (
    <div className="container">
      <div className="row column-full code-journal-header">
        <div id="code-journal-header-title">Code Journal</div>
        <Link id="code-journal-header-entries" to="/">
          Entries
        </Link>
      </div>
    </div>
  );
}
