import { Footer, Header } from '@/components/Layout';

export default async function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
