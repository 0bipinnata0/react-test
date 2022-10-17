import Card from "./components/card";
import "bulma/css/bulma.css";

const cards = [
  {
    title: "Neat Tree",
    imageUrl: "assets/tree.jpg",
    username: "nature",
    content: "I saw this neat tree today",
  },
  {
    title: "Snowy Mountain",
    imageUrl: "assets/mountain.jpg",
    username: "mountainlover",
    content: "Here is a picture of a snowy mountain",
  },
  {
    title: "Mountain Biking",
    imageUrl: "assets/biking.jpg",
    username: "biking light",
    content: "I did some biking today",
  },
  {
    title: "Neat Tree",
    imageUrl: "assets/tree.jpg",
    username: "nature",
    content: "I saw this neat tree today",
  },
];

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {cards.map((card, index) => {
        const { title, imageUrl, username, content } = card;
        return (
          <Card
            key={title + index}
            title={title}
            imageUrl={imageUrl}
            username={username}
            content={content}
          />
        );
      })}
    </div>
  );
}

export default App;
