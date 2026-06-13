import React, { useState } from "react";
import "./SauceMixer.css";

interface Ingredient {
  id: string;
  name: string;
  category: string;
}

interface SauceRecipe {
  id: string;
  name: string;
  ingredients: { name: string; ratio: string }[];
}

const RECIPES: SauceRecipe[] = [
  {
    id: "gunhee",
    name: "건희 소스",
    ingredients: [
      { name: "땅콩소스", ratio: "1스푼" },
      { name: "고추맛소스", ratio: "2.5스푼" },
      { name: "다진마늘", ratio: "0.5스푼" },
      { name: "다진파", ratio: "0.5스푼" },
      { name: "참깨", ratio: "1스푼" },
      { name: "으깬 땅콩", ratio: "1스푼" },
      { name: "설탕", ratio: "한꼬집" },
      { name: "소고기장", ratio: "0.5스푼" },
    ],
  },
  {
    id: "spicy_sauce",
    name: "매운 소스",
    ingredients: [
      { name: "고추맛소스", ratio: "2스푼" },
      { name: "소고기장", ratio: "1스푼" },
      { name: "굴소스", ratio: "1스푼" },
      { name: "고추기름", ratio: "1스푼" },
      { name: "다진파", ratio: "1스푼" },
      { name: "다진양파", ratio: "2스푼" },
      { name: "다진마늘", ratio: "1스푼" },
      { name: "태국고추", ratio: "약간" },
    ],
  },
  {
    id: "korean_style",
    name: "한식 소스",
    ingredients: [
      { name: "다진파", ratio: "1스푼" },
      { name: "으깬 땅콩", ratio: "1스푼" },
      { name: "고추맛소스", ratio: "1스푼" },
      { name: "굴소스", ratio: "1스푼" },
      { name: "다진마늘", ratio: "1스푼" },
      { name: "소고기장", ratio: "1스푼" },
      { name: "마라기름", ratio: "0.5스푼" },
      { name: "땅콩소스", ratio: "약간" },
    ],
  },
  {
    id: "yongji_1",
    name: "영지소스 1",
    ingredients: [
      { name: "건희 소스", ratio: "기본" },
      { name: "매운 고추", ratio: "추가" },
    ],
  },
  {
    id: "yongji_2",
    name: "영지소스 2 (매움주의)",
    ingredients: [
      { name: "스위트칠리", ratio: "3" },
      { name: "고추", ratio: "3" },
      { name: "고춧가루", ratio: "3" },
    ],
  },
  {
    id: "cheonryeo",
    name: "천러 소스",
    ingredients: [
      { name: "간장", ratio: "1.5스푼" },
      { name: "다진마늘", ratio: "1스푼" },
      { name: "다진양파", ratio: "1스푼" },
      { name: "다진파", ratio: "1스푼" },
      { name: "참기름", ratio: "한바퀴" },
      { name: "고수", ratio: "선택" },
    ],
  },
];

export const SauceMixer: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="sauce-mixer-container">
      <div className="recipes-view">
        <div className="bold-recipes-grid">
          {RECIPES.map((recipe) => (
            <div key={recipe.id} className="bold-recipe-card">
              <button
                className="recipe-toggle-btn"
                onClick={() => toggleExpand(recipe.id)}
              >
                <span className="recipe-title-text">{recipe.name}</span>
                <span className="toggle-icon">
                  {expandedId === recipe.id ? "▼" : "▶"}
                </span>
              </button>

              {expandedId === recipe.id && (
                <div className="recipe-ingredients-list-flat">
                  {recipe.ingredients.map((ing, idx) => (
                    <div key={idx} className="flat-ingredient-badge">
                      <span className="flat-ing-name">{ing.name}</span>
                      <span className="flat-ing-ratio">{ing.ratio}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SauceMixer;
