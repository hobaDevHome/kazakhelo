import React from "react";
import "./App.css";
import CardItem from "./Card";
import data from "./data.json";

function App() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>المقامات الموسيقية</h1>
      <h3>مقدمة</h3>
      <div className="card-list">
        {data.map((card, index) => (
          <CardItem
            key={card.id}
            id={card.id}
            text={card.text}
            imgURL={card.imgURL}
            videoURL={card.videoURL}
            total={data.length}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
