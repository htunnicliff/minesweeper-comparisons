import clsx from "clsx";
import "./App.css";
import { appStyle } from "./App.css";
import { themeStyle } from "./theme.css";

export function App() {
  return (
    <div className={clsx([themeStyle, appStyle])}>
      <h1>Hello world!</h1>
    </div>
  );
}
