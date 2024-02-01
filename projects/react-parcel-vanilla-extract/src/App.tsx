import clsx from "clsx";
import { themeStyle } from "../theme.css";
import "./App.css";
import { appStyle } from "./App.css";

export function App() {
  return (
    <div className={clsx([themeStyle, appStyle])}>
      <h1>Hello world!</h1>
    </div>
  );
}
