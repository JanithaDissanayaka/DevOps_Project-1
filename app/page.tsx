import Hero from '@/components/Hero/page';
import Menu from '@/components/Menu/page';
import App from '@/components/App/page';
import Offers from '@/components/Offers/page';

export default function Page() {
  return (
    <main>
      <Hero />
      <Menu />
      <App  />
      <Offers />
    </main>
  );
}
