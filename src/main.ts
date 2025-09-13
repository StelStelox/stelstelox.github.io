import "./style.css";
import avatar from "/stel_stelox.png";
import github from "/github-mark-white.svg"

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <img src="${avatar}" class="avatar" alt="Avatar"/>
    <h1>Stel Stelox</h1>
    <a href="https://github.com/StelStelox" target="_blank">
      <img src="${github}" class="github_logo"/>
    </a>
  </div>
`;
