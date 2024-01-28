import React from "react";

const ReadingTimeIndicator = ({ minutes }) => {
    const renderCoffeeCups = () => {
      const coffeeCupsCount = Math.ceil(minutes / 5);
      return Array.from({ length: coffeeCupsCount }, (_, index) => (
        <span key={index} role="img" aria-label="Coffee Cup">
          ☕️
        </span>
      ));
    };
  
    const renderBentoBoxes = () => {
      const bentoBoxesCount = Math.ceil(minutes / 10);
      return Array.from({ length: bentoBoxesCount }, (_, index) => (
        <span key={index} role="img" aria-label="Bento Box">
          🍱
        </span>
      ));
    };
  
    return (
      <div>
        {minutes < 30 ? renderCoffeeCups() : renderBentoBoxes()}
        {` ${minutes} min read`}
      </div>
    );
  };

export default function Article({
    title, 
    date= "January 1, 1970",
    preview,
    minutes
}){
    return(
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            <ReadingTimeIndicator minutes={minutes} />
        </article>
        
    )
}