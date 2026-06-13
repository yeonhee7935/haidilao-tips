import { useState } from "react";
import SauceMixer from "./components/SauceMixer";
import BrothBuilder from "./components/BrothBuilder";
import HacksWiki from "./components/HacksWiki";
import "./App.css";

type ActiveTab = "sauce" | "broth" | "wiki";

function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("sauce");

  return (
    <div className="app-wrapper">
      {/* Tab Switcher Navigation */}
      <div className="nav-tabs-wrapper">
        <nav className="nav-tabs">
          <button
            className={`btn-nav-tab ${activeTab === "sauce" ? "active" : ""}`}
            onClick={() => setActiveTab("sauce")}
          >
            소스 비법
          </button>
          <button
            className={`btn-nav-tab ${activeTab === "broth" ? "active" : ""}`}
            onClick={() => setActiveTab("broth")}
          >
            탕 조합
          </button>
          <button
            className={`btn-nav-tab ${activeTab === "wiki" ? "active" : ""}`}
            onClick={() => setActiveTab("wiki")}
          >
            꿀팁 모음
          </button>
        </nav>
      </div>

      {/* Main Content Area */}
      <main className="main-content container">
        {activeTab === "sauce" && <SauceMixer />}
        {activeTab === "broth" && <BrothBuilder />}
        {activeTab === "wiki" && <HacksWiki />}
      </main>

      {/* Footer Section */}
      <footer className="app-footer">
        <div className="footer-content">
          <div className="footer-logo">
            HAIDILAO <span>HACKS</span>
          </div>
          <p>
            본 웹사이트는 하이디라오 훠궈 러버들을 위해 제작된 팬 메이드 꿀팁
            저장소입니다.
            <br />
            실제 매장의 메뉴판 구성 및 가격은 시기에 따라 상이할 수 있습니다.
          </p>
          <div className="footer-links">
            <a
              href="https://www.haidilao.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              하이디라오 공식 홈페이지
            </a>
            <span>|</span>
            <span style={{ color: "var(--hdl-gold)" }}>
              Enjoy your hotpot! 🥩
            </span>
          </div>
          <p style={{ fontSize: "11px", marginTop: "8px", opacity: 0.5 }}>
            © {new Date().getFullYear()} Haidilao Tips Repository. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
