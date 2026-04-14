import "./animations.css";
import "./App.css";
import { animations } from "./data/animations";
import AnimationCard from "./components/AnimationCard";

function App() {
  return <AnimationCard animation={animations[0]} />;
}

export default App;
