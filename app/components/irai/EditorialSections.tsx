const values = [
  ['Rooted in craft', 'Every piece begins with material chosen for its warmth, grain, and presence.'],
  ['Made with meaning', 'Sacred imagery and Tamil cultural memory shape the stories we bring into the home.'],
  ['Made to keep', 'Designed as considered objects for gifting, ritual, and the years that follow.'],
];

export function EditorialSections() {
  return (
    <section className="editorial-sections" aria-label="The IRAI approach">
      <div className="editorial-intro"><p className="eyebrow">THE IRAI APPROACH</p><h2>Objects that make space for memory, ritual, and beauty.</h2></div>
      <div className="value-blocks">{values.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
    </section>
  );
}
