import { Link } from 'react-router';

export function meta() {
  return [{ title: 'Page not found · IRAI' }];
}

export default function NotFound() {
  return (
    <div className="empty" style={{ padding: '120px 16px' }}>
      <strong>That page has moved.</strong>
      <Link className="btn btn--dark" to="/">Back to home</Link>
    </div>
  );
}
