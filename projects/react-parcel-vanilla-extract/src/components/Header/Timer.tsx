import { label, output, stats } from "./stats.css";

export function Timer() {
  return (
    <div className={stats}>
      <label htmlFor="timer-output" className={label}>
        Timer
      </label>
      <output id="timer-output" className={output}>
        01:12
      </output>
    </div>
  );
}
