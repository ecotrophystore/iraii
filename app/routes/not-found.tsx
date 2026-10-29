import { data, Link } from 'react-router';

// Unknown URLs must answer 404, not 200, so search engines drop them.
export function loader() {
  return data(null, { status: 404 });
}

export function meta() {
  return [{ title: 'Page not found · IRAI' }, { name: 'robots', content: 'noindex' }];
}

export default function NotFound() {
  return (
    <div className="empty" style={{ padding: '120px 16px' }}>
      <strong>That page has moved.</strong>
      <Link className="btn btn--dark" to="/">Back to home</Link>
    </div>
  );
}
