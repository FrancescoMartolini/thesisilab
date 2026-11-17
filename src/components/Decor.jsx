const Blossom = ({ x, y, r }) => (
  <g transform={`translate(${x} ${y})`}>
    {[0, 1, 2, 3, 4].map((k) => {
      const a = (k * 72 * Math.PI) / 180;
      return <circle key={k} cx={Math.cos(a) * r * 0.8} cy={Math.sin(a) * r * 0.8} r={r * 0.7} fill="#E39AA4" opacity=".85" />;
    })}
    <circle r={r * 0.3} fill="#8B001A" />
  </g>
);

/** Ramo floreale provvisorio in SVG: sostituibile con le illustrazioni originali. */
export const Floral = ({ className = "" }) => (
  <svg className={`flor reveal ${className}`} viewBox="0 0 100 110" aria-hidden="true">
    <path d="M8 105C18 70 38 45 85 8M30 70c10-8 14-20 12-32M52 48c10-2 20-10 24-22" fill="none" stroke="#B5525F" strokeWidth="1.3" strokeLinecap="round" />
    <Blossom x={85} y={9} r={7} /><Blossom x={42} y={36} r={6} /><Blossom x={76} y={24} r={5} />
    <Blossom x={24} y={70} r={5} /><Blossom x={10} y={100} r={4} />
  </svg>
);

export const Bow = () => (
  <svg className="bow" viewBox="0 0 60 36" fill="none" stroke="#8B001A" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true">
    <path d="M30 18C20 4 4 6 6 16s20 4 24 2c4 2 22 8 24-2S40 4 30 18z" /><path d="M30 18l-8 16M30 18l8 16" />
  </svg>
);
