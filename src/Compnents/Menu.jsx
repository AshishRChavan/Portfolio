import "./Menu.css";
export default function Menu() {
  function menuCloser(){
    document.getElementById("menu").style.left="-100%";
  }
  return (
    <>
      <div id="menu" className="menu">
        <span onClick={menuCloser}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="tabler-icon tabler-icon-x"
          >
            <path d="M18 6l-12 12"></path>
            <path d="M6 6l12 12"></path>
          </svg>
        </span>
        <ul>
          <li><a onClick={menuCloser} href="#home">Home</a></li>
          <li><a onClick={menuCloser} href="#about">About</a></li>
          <li><a onClick={menuCloser} href="#projects">Projects</a></li>
          <li><a onClick={menuCloser} href="#contact">Contact</a></li>
        </ul>
      </div>
    </>
  );
}
