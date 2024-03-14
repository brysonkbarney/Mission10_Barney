import logo from './bowlerlogo.png';

function Header(props: any) {
  return (
    <header className="row navbar navbar dark bg-black">
      <div className="col-1">
        <img
          src={logo}
          className="logo"
          alt="logo"
          style={{ width: '200px', height: 'auto' }}
        />
      </div>
      <div className="col subtitle">
        <h1 className="text-white">{props.title}</h1>
      </div>
    </header>
  );
}

export default Header;
