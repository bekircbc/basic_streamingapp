import { useContext } from "react";
import { AppContext } from "../AppContext";

export function PageFavorites() {
  const { context } = useContext(AppContext);
  return <div>Favorites Page</div>;
}
