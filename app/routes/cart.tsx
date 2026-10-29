import { useEffect } from 'react';
import { Link } from 'react-router';
import { useUI } from '~/lib/store';

export function meta() {
  return [{ title: 'Cart · IRAI' }, { name: 'robots', content: 'noindex' }];
}

// The cart lives in the drawer; /cart opens it so links from Shopify emails work.
export default function Cart() {
  const ui = useUI();
  useEffect(() => {
    ui.setOpen('cart');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="empty" style={{ padding: '120px 16px' }}>
      <strong>Your cart</strong>
      <button className="btn btn--dark" onClick={() => ui.setOpen('cart')}>Open cart</button>
      <Link className="btn btn--outline" to="/collections/all">Continue shopping</Link>
    </div>
  );
}
