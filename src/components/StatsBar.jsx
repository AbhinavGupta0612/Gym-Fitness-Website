import "../styles/StatsBar.css";

const MARQUEE_ITEMS = [
  "STRENGTH TRAINING", "HIIT", "YOGA", "CARDIO BLAST", "POWERLIFTING",
  "CROSSFIT", "PILATES", "BOXING", "ZUMBA", "FOREVER FIT",
  "STRENGTH TRAINING", "HIIT", "YOGA", "CARDIO BLAST", "POWERLIFTING",
];

export default function StatsBar() {
  return (
    <div className="stats-bar">
      <div className="marquee-track">
        <div className="marquee-inner">
          {MARQUEE_ITEMS.map((item, i) => (
            <span key={i} className="marquee-item">
              {item} <span className="marquee-sep">✦</span>
            </span>
          ))}
        </div>
        <div className="marquee-inner" aria-hidden>
          {MARQUEE_ITEMS.map((item, i) => (
            <span key={i} className="marquee-item">
              {item} <span className="marquee-sep">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
