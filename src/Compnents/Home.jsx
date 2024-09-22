import "./Home.css";
export default function Home() {
  return (
    <>
      <section id="home" className="hero">
        <div className="container">
          <div className="content">
            <div className="hero-area">
              <div className="text-area">
                <h1>Front-End React Developer</h1>
                <p>
                  Hi, I'm Ashish Chavan. A passionate Front-end React Developer
                  based in Pune, India. 📍
                </p>
                <span>
                  <a target="_blank" href="https://www.linkedin.com/in/ashishchavan09/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="tabler-icon tabler-icon-brand-linkedin"
                    >
                      <path
                        id="color"
                        d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"
                      ></path>
                      <path id="color" d="M8 11l0 5"></path>
                      <path id="color" d="M8 8l0 .01"></path>
                      <path id="color" d="M12 16l0 -5"></path>
                      <path id="color" d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                    </svg>
                  </a>
                  <a target="_blank" href="https://www.linkedin.com/in/ashishchavan09/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="tabler-icon tabler-icon-brand-github"
                    >
                      <path
                        id="color"
                        d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
                      ></path>
                    </svg>
                  </a>
                </span>
              </div>
              <div className="img-area"></div>
            </div>
            <div className="tech-stack">
              <p>Tech Stack</p>
              <ul>
                <li>React</li>
                <li>Redux</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>C# .Net</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
