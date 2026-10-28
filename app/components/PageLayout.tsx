import type {
  CartApiQueryFragment,
  FooterQuery,
  HeaderQuery,
} from 'storefrontapi.generated';
import {Aside} from '~/components/Aside';
import {AnnouncementBar} from '~/components/irai/AnnouncementBar';
import {CartDrawer} from '~/components/irai/CartDrawer';
import {IraiFooter} from '~/components/irai/IraiFooter';
import {IraiHeader} from '~/components/irai/IraiHeader';
import {MobileNavigation} from '~/components/irai/MobileNavigation';
import {SearchPanel} from '~/components/irai/SearchPanel';

interface PageLayoutProps {
  cart: Promise<CartApiQueryFragment | null>;
  footer: Promise<FooterQuery | null>;
  header: HeaderQuery;
  isLoggedIn: Promise<boolean>;
  publicStoreDomain: string;
  children?: React.ReactNode;
}

export function PageLayout({
  cart,
  children = null,
}: PageLayoutProps) {
  return (
    <Aside.Provider>
      <CartDrawer cart={cart} />
      <SearchPanel />
      <MobileMenuAside />
      <AnnouncementBar />
      <IraiHeader />
      <main>{children}</main>
      <IraiFooter />
    </Aside.Provider>
  );
}

function MobileMenuAside() {
  return <Aside type="mobile" heading="MENU"><MobileNavigation /></Aside>;
}
