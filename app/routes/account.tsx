import { Link } from 'react-router';

export function meta() {
  return [{ title: 'Your account · IRAI' }, { name: 'robots', content: 'noindex' }];
}

// Placeholder for /account, /account/login, /account/authorize and
// /account/orders/:orderId until the Customer Account API is connected.
export default function Account() {
  return (
    <div className="empty" style={{ padding: '120px 16px' }}>
      <strong>Customer accounts are coming soon.</strong>
      <p>For help with an order, write to hello@irai.in with your order number.</p>
      <Link className="btn btn--dark" to="/">Back to home</Link>
    </div>
  );
}
