import { Footer, Header } from '@/components/Layout';
import { FloatingButtons } from '@/components/UI';

export default async function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
