import { GameView } from "@/components/GameView";
import { story } from "@/story";

export default function Home() {
  return <GameView story={story} />;
}
