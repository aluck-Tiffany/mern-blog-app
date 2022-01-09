import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">JS & React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        // src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        src="https://images.pexels.com/photos/9887155/pexels-photo-9887155.jpeg?cs=srgb&dl=pexels-lada-rezantseva-9887155.jpg&fm=jpg"
        alt="JS & React & Node Blog"
      />
    </div>
  );
}
