import Header from './Header';
import Footer from './Footer';
import { Children, isValidElement } from 'react';

function PageLayout({ children }) {
  // Check if the first child is a PageHero component
  const firstChild = Children.toArray(children)[0];
  const hasHero = isValidElement(firstChild) && 
    (firstChild.type?.name === 'PageHero' || 
     firstChild.type?.displayName === 'PageHero');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className={`flex-1 ${!hasHero ? 'pt-32 md:pt-40' : 'pt-0'}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default PageLayout;
