import "../index.css";
import Header from "./Header";
import Posts from "./Posts";

export default function Views(props) {
  return (
    <div>
      <Header keyConceptsImage={props.keyConceptsImage} />
      <ul id="concepts">
        <Posts
          title={props.concepts[0].title}
          image={props.concepts[0].image}
          description={props.concepts[0].description}
        />
        <Posts
          title={props.concepts[1].title}
          image={props.concepts[1].image}
          description={props.concepts[1].description}
        />
        <Posts
          title={props.concepts[2].title}
          image={props.concepts[2].image}
          description={props.concepts[2].description}
        />
      </ul>
    </div>
  );
}
