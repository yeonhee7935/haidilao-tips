import React, { useState } from "react";
import "./HacksWiki.css";

interface HackTip {
  id: string;
  category: "order" | "service" | "secret";
  title: string;
  content: string;
}

const DEFAULT_TIPS: HackTip[] = [
  {
    id: "tip_1",
    category: "order",
    title: "네칸탕 - 탕값 반으로 줄이기",
    content:
      "태블릿에서 네칸탕 선택\n→ 2칸: 원하는 국물 (마라, 토마토 등)\n→ 2칸: 맑은국물 (무료)\n→ 반반탕보다 6,000-12,000원 절약\n\n맑은국물 활용:\n• 매운 고기 헹굼\n• 셀프 소스 섞어서 내 맘대로 마라탕 만들기",
  },
  {
    id: "tip_2",
    category: "order",
    title: "반 접시(하프) 주문으로 더 많이 먹기",
    content:
      "같은 가격으로 2가지 종류 주문 가능\n\n예) 1인분 가격 = 반접시 소고기 + 반접시 양고기\n\n처음 방문할 때나 2명이 갈 때 추천",
  },
  {
    id: "tip_3",
    category: "order",
    title: "거름망 옵션 추가하기",
    content:
      "마라탕, 토마토탕 주문 시 필수\n\n체크 항목: 거름망\n\n효과:\n• 고추씨, 화자오 걸러짐\n• 깔끔하게 먹을 수 있음\n• 처음이면 맵기 1단계 추천",
  },
  {
    id: "tip_4",
    category: "order",
    title: "필수 음료 3가지",
    content:
      "차파이 (복숭아홍차)\n→ 상큼한 산미\n\n빙홍차 (아이스티)\n→ 차갑고 상큼함\n\n예쩔 (코코넛밀크)\n→ 마라탕 매움 중화 (추천!)",
  },
  {
    id: "tip_5",
    category: "service",
    title: "무료 젤 네일 서비스",
    content:
      "대기 공간 기기에서 번호표 예약\n→ 식사 중간이나 후에 받음\n\n무료로 젤 손톱 케어\n\n보드게임도 있어서 웨이팅 시간 즐겁게",
  },
  {
    id: "tip_6",
    category: "service",
    title: "직원 도움 서비스",
    content:
      "직원에게 요청 가능:\n\n• 새우완자를 유부로 감싸주기\n• 완자를 예쁘게 둥글려 익혀주기\n• 과일 껍질 깔끔하게 까주기\n\n모두 무료! 편하게 요청하세요",
  },
  {
    id: "tip_7",
    category: "service",
    title: "생일 서비스",
    content:
      "생일날 직원에게 알려주세요\n\n받을 수 있는 것:\n• LED 생일 판\n• 축하 노래\n• 무료 생면 국수\n• 깜짝 플레이트",
  },
  {
    id: "tip_8",
    category: "secret",
    title: "토마토 리조또",
    content:
      "1. 토마토탕 남은 국물 준비\n2. 대접에 밥 담기\n3. 소고기 다진 것 + 대파 얹기\n4. 참기름 한두 방울\n5. 약불에서 3분 끓이기\n\n완성: 맛있는 토마토 리조또",
  },
  {
    id: "tip_9",
    category: "secret",
    title: "버섯 국밥",
    content:
      "1. 대접에 밥 담기\n2. 소고기 고명 + 대파 올리기\n3. 참기름, 간장 한두 방울\n4. 펄펄 끓는 버섯탕 국물 부으기\n5. 한두 번 휘저으며 먹기\n\n완성: 든든한 해장국밥",
  },
  {
    id: "tip_10",
    category: "secret",
    title: "희수국밥",
    content:
      "1. 버섯탕 주문\n2. 야채와 고기 넣으며 끓임\n3. 엑기스만 남을 때까지 진하게\n4. 공기밥 시킴\n5. 소스바에서 다진고기 + 대파 가져옴\n6. 버섯탕 국물 부어서 말아줌\n\n완성: 찐한 국물밥",
  },
  {
    id: "tip_11",
    category: "secret",
    title: "두유피튀김 완자",
    content:
      "1. 두유피 튀김 주문\n2. 우삼겹과 새우살 끓임\n3. 두유피에 우삼겹 + 새우살 넣기\n4. 위생장갑 요청 (요청하면 무료)\n5. 풀리지 않도록 꼼꼼하게 말아서 먹기\n\n완성: 쫀득한 식감의 완자",
  },
  {
    id: "tip_12",
    category: "secret",
    title: "토마토 계란밥",
    content:
      "1. 토마토탕에 재료 넣고 계란 풀기\n2. 국자로 저어가며 계란 익히기\n3. 육수 진해지면 공깃밥 주문\n4. 밥 위에 계란·야채 올리기\n5. 토마토탕 국물 부어서 말아먹기\n6. 우삼겹 올리면 더 맛있음\n\n완성: 진한 토마토 계란밥",
  },
];

export const HacksWiki: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredTips = DEFAULT_TIPS.filter((tip) => {
    const categoryMatch = filter === "all" || tip.category === filter;
    const searchMatch =
      searchQuery.trim() === "" ||
      tip.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tip.content.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div className="hacks-wiki-container">
      {/* Toolbar */}
      <div className="wiki-toolbar">
        <div className="search-input-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="꿀팁 키워드 검색..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="category-tabs">
        <button
          className={`btn-tab ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          전체 보기
        </button>
        <button
          className={`btn-tab ${filter === "order" ? "active" : ""}`}
          onClick={() => setFilter("order")}
        >
          주문 꿀팁
        </button>
        <button
          className={`btn-tab ${filter === "service" ? "active" : ""}`}
          onClick={() => setFilter("service")}
        >
          무료 서비스
        </button>
        <button
          className={`btn-tab ${filter === "secret" ? "active" : ""}`}
          onClick={() => setFilter("secret")}
        >
          시크릿 & 요리
        </button>
      </div>

      {/* Tips Cards List */}
      <div className="tips-grid">
        {filteredTips.map((tip) => (
          <div key={tip.id} className="tip-card">
            <div className="tip-card-header">
              <span className={`tip-badge ${tip.category}`}>
                {tip.category === "order"
                  ? "주문 꿀팁"
                  : tip.category === "service"
                    ? "무료 서비스"
                    : "시크릿 & 요리"}
              </span>
            </div>

            <h3 className="tip-title">{tip.title}</h3>
            <p className="tip-content">{tip.content}</p>
          </div>
        ))}

        {filteredTips.length === 0 && (
          <div className="empty-tips-text">
            해당 조건과 매칭되는 꿀팁이 없습니다.
          </div>
        )}
      </div>
    </div>
  );
};

export default HacksWiki;
