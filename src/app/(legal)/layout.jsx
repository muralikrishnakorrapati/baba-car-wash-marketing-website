import { Header } from '@/components/Layout';
import FooterBottom from '@/components/Layout/Footer/FooterBottom';

export default async function LegalLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <FooterBottom />
    </>
  );
}
