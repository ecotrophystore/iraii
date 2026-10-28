import {Link} from 'react-router';

const groups = [
  {title: 'Help', links: [['Contact', '/pages/help'], ['Shipping', '/policies/shipping-policy'], ['Returns', '/policies/refund-policy']]},
  {title: 'Shop', links: [['Wall art', '/collections/wall-art'], ['Sacred objects', '/collections/sacred-objects'], ['Gifting', '/collections/gifting']]},
  {title: 'IRAI', links: [['Our story', '/pages/our-story'], ['Materials & care', '/pages/care'], ['Journal', '/blogs/journal']]},
];

export function IraiFooter() {
  return (
    <footer className="irai-footer">
      <section className="newsletter-signup">
        <p className="eyebrow">A note from IRAI</p>
        <h2>New rituals, limited editions, and meaningful gifts.</h2>
        <form action="/contact" method="post">
          <label className="sr-only" htmlFor="newsletter-email">Email address</label>
          <input id="newsletter-email" name="email" type="email" placeholder="Email address" required />
          <button type="submit">Join the circle</button>
        </form>
      </section>
      <div className="footer-links">
        {groups.map((group) => (
          <section key={group.title}>
            <p>{group.title}</p>
            {group.links.map(([label, to]) => <Link key={to} to={to}>{label}</Link>)}
          </section>
        ))}
      </div>
      <div className="footer-legal"><span>© {new Date().getFullYear()} IRAI</span><Link to="/policies/privacy-policy">Privacy</Link><Link to="/policies/terms-of-service">Terms</Link></div>
    </footer>
  );
}
