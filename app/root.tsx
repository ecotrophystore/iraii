import type { LinksFunction } from 'react-router';
import { Links, Meta, Outlet, Scripts, ScrollRestoration, isRouteErrorResponse, useRouteError } from 'react-router';
import appStyles from '~/styles/app.css?url';
import { AnnouncementBar, MobileMenu, SiteFooter, SiteHeader } from '~/components/Chrome';
import { CartDrawer, Modal, Scrim, SearchOverlay, Toast } from '~/components/Overlays';
import { CartProvider, UIProvider } from '~/lib/store';

export const links: LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Albert+Sans:ital,wght@0,400;0,500;0,600;0,700;1,600&display=swap',
  },
  { rel: 'stylesheet', href: appStyles },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#efe9df" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

/** Site shell: announcement, header, footer and overlays wrap every page. */
export default function App() {
  return (
    <CartProvider>
      <UIProvider>
        <div className="top">
          <AnnouncementBar />
          <SiteHeader />
        </div>
        <Scrim />
        <main id="main" tabIndex={-1} className="wrap">
          <Outlet />
        </main>
        <SiteFooter />
        <CartDrawer />
        <MobileMenu />
        <SearchOverlay />
        <Modal />
        <Toast />
      </UIProvider>
    </CartProvider>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  const message = isRouteErrorResponse(error) ? `${error.status} ${error.statusText}` : 'Something went wrong.';
  return (
    <div className="empty" style={{ padding: '120px 16px' }}>
      <strong>{message}</strong>
      <a className="btn btn--dark" href="/">Back to home</a>
    </div>
  );
}
