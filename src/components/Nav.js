const Nav = () => {
  const menu = ["Features", "Pricing", "Resources"];
  const bar = menu.map((menuBar) => <li key={menuBar}>{menuBar}</li>);
  return (
    <ul className="nav">
      {bar}
      <div className="border"></div>
      <p>Login</p>
      <button>Sign Up</button>
    </ul>
  );
};

export default Nav;
