import React from "react";
import { useNavigate } from "react-router-dom";
//import { quizService } from "../services/quiz";
import "./Home.css";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const user = false;

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>
            <span className="block">즐거운 퀴즈</span>
            <span className="block highlight">함께 풀어보세요</span>
          </h1>
          <p>
            친구들과 함께 재미있게
            문제를 풀어보세요.
          </p>

    <button
    onClick={() => navigate("/quizplay")}
    className="play-quiz-button"
    >
    퀴즈 참여하기
    </button>
          {user && (
            <div className="hero-button">
              <button
                onClick={() => navigate("/quizzes/create")}
                className="create-quiz-button"
              >
                퀴즈 만들기
              </button>
            </div>
          )}
        </div>
      </div>



      {/* 안내 섹션 */}
      <div className="guide-section">
        <div className="guide-grid">
          <div className="guide-item">
            <div className="guide-number">1</div>
            <h3>PIN 번호 받기</h3>
            <p>퀴즈 생성자로부터 PIN 번호를 받으세요.</p>
          </div>
          <div className="guide-item">
            <div className="guide-number">2</div>
            <h3>PIN 번호 입력</h3>
            <p>받은 PIN 번호를 입력하고 참여하기를 클릭하세요.</p>
          </div>
          <div className="guide-item">
            <div className="guide-number">3</div>
            <h3>퀴즈 풀기</h3>
            <p>제한 시간 내에 문제를 풀고 결과를 확인하세요.</p>
          </div>
        </div>
      </div>

      {/* CTA 섹션 */}
      {!user && (
        <div className="cta-section">
          <div className="cta-content">
            <h2>
              <span className="block">퀴즈를 만들어보세요</span>
              <span className="block highlight">
                나만의 퀴즈를 만들고 친구들과 공유하세요
              </span>
            </h2>
            <button
              onClick={() => navigate("/signup")}
              className="start-button"
            >
              시작하기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
