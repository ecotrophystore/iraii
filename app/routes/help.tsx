export function meta() {
  return [{ title: 'Help · IRAI' }];
}

const FAQ: [string, string][] = [
  ['How do I care for wooden pieces?', 'Dust with a dry, soft cloth. Avoid direct sun and damp walls. Do not soak. Oil lightly once a year if the wood looks dry.'],
  ['How do I care for brass?', 'Wipe with a soft dry cloth. For tarnish, use a mild brass cleaner and rinse well. Keep away from wet kitchen surfaces.'],
  ['What does shipping cost?', 'Free within India on orders over ₹3,000. Other orders ship for a flat ₹150. Most orders dispatch within 3–5 working days.'],
  ['Can I return a piece?', 'Yes, within 15 days of delivery if unused and in original packing. Festival-edit pieces are final sale unless damaged.'],
  ['Do you ship outside India?', 'Not yet. Write to hello@irai.in for gifting arrangements abroad.'],
];

export default function Help() {
  return (
    <>
      <nav className="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> / Help</nav>
      <section className="cat-hero" style={{ ['--c' as string]: '#6f7f68' }}>
        <div className="cat-hero__copy">
          <h1>How can we help?</h1>
          <p>Write to hello@irai.in and a person replies within one working day.</p>
        </div>
      </section>
      <section className="seo" style={{ marginTop: 50 }}>
        <div>
          <h2>Returns</h2>
          <p>Not the right piece? Unused items in their original packing can come back within 15 days. Gifts can be returned with the order number printed on the gift card.</p>
        </div>
        <div className="acc">
          {FAQ.map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <div className="body">{a}</div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
