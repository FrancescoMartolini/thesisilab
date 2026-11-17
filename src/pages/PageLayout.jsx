/** Layout editoriale condiviso dalle quattro pagine: testo a sinistra, immagine a destra, miniature sotto. */
export const Slot = ({ img, label = "[foto da inserire]" }) => (
  <div className="slot">{img ? <img src={img} alt="" /> : <span>{label}</span>}</div>
);

export default function PageLayout({ page, aside, extra }) {
  return (
    <>
      <div className="split">
        <div>
          <div className="num">{page.n}</div>
          <h1 id="pt" tabIndex={-1}>{page.label}</h1>
          <p>{page.intro}</p>
          {page.note && <div className="ph">{page.note}</div>}
          {extra}
        </div>
        {aside ?? <Slot img={page.img} />}
      </div>
      {page.tiles && (
        <div className="tiles">
          {page.tiles.map((t) => (
            <figure key={t.cap} style={{ margin: 0 }}>
              <Slot img={t.img} />
              <figcaption>{t.cap}{t.txt && <span>{t.txt}</span>}</figcaption>
            </figure>
          ))}
        </div>
      )}
    </>
  );
}
