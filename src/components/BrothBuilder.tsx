import React from "react";
import "./BrothBuilder.css";

interface BrothCombo {
  id: string;
  name: string;
  layout: "two" | "four";
  description: string;
  grids: { name: string; color: string; textColor: string }[];
  hacks: string[];
  pairings: string[];
}

const BROTH_COMBOS: BrothCombo[] = [
  {
    id: "combo_1",
    name: "네칸탕 (가성비 최고)",
    layout: "four",
    description: "탕값을 반으로 줄일 수 있는 단골 필수 조합입니다.",
    grids: [
      { name: "청유마라탕", color: "#800000", textColor: "#ffffff" },
      { name: "토마토탕", color: "#d32f2f", textColor: "#ffffff" },
      { name: "맑은국물", color: "#e6f7ff", textColor: "#1890ff" },
      { name: "맑은국물", color: "#e6f7ff", textColor: "#1890ff" },
    ],
    hacks: [
      "맑은국물로 매운 고기 헹굼",
      "셀프 소스바의 마라소스 + 굴소스를 타서 내 맘대로 마라탕 만들기",
    ],
    pairings: ["소고기", "새우완자", "두부", "쿵푸면"],
  },
  {
    id: "combo_2",
    name: "반반탕 (매운맛 + 순한맛)",
    layout: "two",
    description: "마라탕과 우육탕의 정석 조합. 밸런스 있는 훠궈 경험.",
    grids: [
      { name: "청유마라탕", color: "#800000", textColor: "#ffffff" },
      { name: "우육탕", color: "#faf6eb", textColor: "#5d4037" },
    ],
    hacks: [
      "처음이면 마라탕 맵기 1단계로 주문",
      "거름망 추가 옵션으로 고추씨 걸러내기",
    ],
    pairings: ["소고기/양고기", "천엽", "야채 모둠", "만두"],
  },
  {
    id: "combo_3",
    name: "버섯 + 토마토 (순한맛)",
    layout: "four",
    description: "매운 음식 못 드실 때나 깔끔하게 즐기고 싶을 때.",
    grids: [
      { name: "버섯탕", color: "#795548", textColor: "#ffffff" },
      { name: "토마토탕", color: "#d32f2f", textColor: "#ffffff" },
      { name: "맑은국물", color: "#e6f7ff", textColor: "#1890ff" },
      { name: "맑은국물", color: "#e6f7ff", textColor: "#1890ff" },
    ],
    hacks: [
      "토마토탕 남은 국물 + 밥 + 소고기 = 토마토 리조또",
      "버섯탕 국물 + 밥 + 고기 = 국밥",
    ],
    pairings: ["버섯 모둠", "새우완자", "밥", "대파"],
  },
];

export const BrothBuilder: React.FC = () => {
  return (
    <div className="broth-builder-container">
      <div className="broth-list-view">
        {BROTH_COMBOS.map((combo) => (
          <div key={combo.id} className="bold-combo-card">
            <div className="combo-card-header">
              <h3 className="combo-title">{combo.name}</h3>
            </div>

            <p className="combo-description">{combo.description}</p>

            <div className="combo-details-grid">
              <div className="combo-pot-visualizer">
                <div
                  className={`combo-pot-box ${combo.layout === "two" ? "two-split" : "four-split"}`}
                >
                  {combo.grids.map((grid, index) => (
                    <div
                      key={index}
                      className="combo-pot-cell"
                      style={{
                        backgroundColor: grid.color,
                        color: grid.textColor,
                      }}
                    >
                      <span className="combo-cell-name">{grid.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="combo-info-panel">
                <div className="info-section">
                  <h4 className="info-title">이 조합의 꿀팁</h4>
                  <ul className="hacks-bullet-list">
                    {combo.hacks.map((hack, idx) => (
                      <li key={idx}>{hack}</li>
                    ))}
                  </ul>
                </div>

                <div className="info-section">
                  <h4 className="info-title">추천 재료 Basket</h4>
                  <div className="combo-pairings-list">
                    {combo.pairings.map((item, idx) => (
                      <span key={idx} className="combo-pairing-tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrothBuilder;
