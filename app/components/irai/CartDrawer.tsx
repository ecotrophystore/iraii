import {Await} from 'react-router';
import {Suspense} from 'react';
import type {CartApiQueryFragment} from 'storefrontapi.generated';
import {Aside} from '~/components/Aside';
import {CartMain} from '~/components/CartMain';

export function CartDrawer({cart}: {cart: Promise<CartApiQueryFragment | null>}) {
  return <Aside type="cart" heading="YOUR BAG"><Suspense fallback={<p>Preparing your bag…</p>}><Await resolve={cart}>{(resolvedCart) => <CartMain cart={resolvedCart} layout="aside" />}</Await></Suspense></Aside>;
}
