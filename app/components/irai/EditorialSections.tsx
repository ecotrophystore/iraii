import heroImage from '~/assets/irai-hero-v1.png';

const values = [
  ['01', 'Rooted in material', 'We choose wood for its warmth, grain, and ability to age beautifully.'],
  ['02', 'Made with intention', 'Every relief, finish, and proportion earns its place in the home.'],
  ['03', 'Designed to be kept', 'For rituals today and stories that travel through generations.'],
];

export function EditorialSections() {
  return (
    <section className="editorial-sections" aria-label="The IRAI approach">
      <div className="editorial-image"><img src={heroImage} alt="Wood art and brass objects in a crafted home" /></div>
      <div className="editorial-copy">
        <p className="eyebrow">THE IRAI APPROACH</p>
        <h2>Beauty becomes meaningful when it is lived with.</h2>
        <p className="editorial-lede">IRAI begins with the belief that the things we live beside should carry care—in the hand, in the material, and in the memory they hold.</p>
        <div className="value-blocks">{values.map(([index, title, body]) => <article key={title}><span>{index}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
      </div>
    </section>
  );
}
