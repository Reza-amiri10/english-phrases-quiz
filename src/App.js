import { useState } from "react";
import "./App.css";

const quiz = [
  {
    question: "Break the ice",
    description:
      "To start a conversation in a social setting, making people feel more comfortable.",
  },
  {
    question: "Hit the sack",
    description: "To go to bed or go to sleep.",
  },
  {
    question: "Piece of cake",
    description: "Something that is very easy to do.",
  },
  {
    question: "Under the weather",
    description: "Feeling sick or unwell.",
  },
  {
    question: "Spill the beans",
    description: "To reveal a secret or share confidential information.",
  },
  {
    question: "Bite the bullet",
    description:
      "To do something unpleasant or difficult that you have been avoiding.",
  },
  {
    question: "Throw down the gauntlet",
    description:
      "To issue a challenge, often in a dramatic or confrontational way.",
  },
  {
    question: "Cut the Gordian knot",
    description:
      "To solve a complicated problem in a quick and decisive manner.",
  },
  {
    question: "Carry coals to Newcastle",
    description:
      "To do something redundant or unnecessary because it is already well supplied.",
  },
  {
    question: "Bury the hatchet",
    description: "To end a quarrel or make peace after a disagreement.",
  },
  {
    question: "Fly in the ointment",
    description:
      "A small defect or problem that spoils something otherwise perfect.",
  },
  {
    question: "Burn the midnight oil",
    description:
      "To work late into the night, especially on a task that requires effort.",
  },
  {
    question: "Ride roughshod over",
    description:
      "To treat others harshly or without considering their feelings.",
  },
];

function App() {
  return (
    <div className="App">
      <Accordion data={quiz} />
    </div>
  );
}

export default App;

function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((item, i) => (
        <AccordionItem
          key={i}
          number={i}
          question={item.question}
          answer={item.description}
        />
      ))}
    </div>
  );
}

function AccordionItem({ question, answer, number }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      tabIndex="0"
      onClick={handleClick}
      className={` ${isOpen ? "acc-continer is-open-style" : "acc-continer"}`}
    >
      <div className="title-box">
        <div className="title">
          <h3 className={`${isOpen ? "is-open-style-color" : ""}`}>
            {number < 9 ? `0${number + 1}` : number + 1}
          </h3>
          <h3 className={`${isOpen ? "is-open-style-color" : ""}`}>
            {question}
          </h3>
        </div>
        <p>{isOpen ? "-" : "+"}</p>
      </div>
      {isOpen ? (
        <div>
          <p className="answer">{answer}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
