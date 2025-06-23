import './NavBar.css';

export default function NavBar() {
  return (
    <header>
      <div className="container">
        <div className="row column-full code-journal-header">
          <div id="code-journal-header-title">Code Journal</div>
          <Link id="code-journal-header-entries" href="">
            Entries
          </Link>
        </div>
      </div>
    </header>
  );
}
