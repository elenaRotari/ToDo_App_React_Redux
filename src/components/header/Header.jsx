import HeaderBar from "../headerBar/HeaderBar";
import "./Header.scss";

const Header = () => {
  return (
    <div className="title">
      <p> Best ToDo List App</p>
      <HeaderBar />
    </div>
  );
};

export default Header;
