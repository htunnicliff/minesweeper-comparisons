import { label, output, stats } from "./stats.css";

export function FlagCount() {
  return (
    <div className={stats}>
      <label htmlFor="flag-count" className={label}>
        Flags
      </label>
      <output id="flag-count" className={output}>
        12/20
      </output>
    </div>
  );
}
