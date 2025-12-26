import styles from '../legal.module.css';

export const metadata = {
  title: 'Privacy Policy | BABA Car Wash',
  description:
    'Privacy Policy for BABA Car Washing & Cleaning L.L.C detailing how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Privacy Policy</h1>
      <div className={styles.content}>
        <p>
          At <strong>BABA Car Washing & Cleaning L.L.C</strong>, accessible from
          https://www.babacarwash.com, one of our main priorities is the privacy
          of our visitors and customers. This Privacy Policy document contains
          types of information that is collected and recorded by BABA Car Wash
          and how we use it.
        </p>
        <p>
          If you have additional questions or require more information about our
          Privacy Policy, do not hesitate to contact us.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We collect information to provide better services to all our users. The
          types of information we collect include:
        </p>
        <ul>
          <li>
            <strong>Personal Identification Information:</strong> Name, email
            address, phone number, and location address when you register or
            book a service.
          </li>
          <li>
            <strong>Vehicle Information:</strong> Car make, model, plate number,
            and parking location details to facilitate our cleaning services.
          </li>
          <li>
            <strong>Payment Information:</strong> Transaction details when you
            purchase our services (note: we do not store sensitive credit card
            details on our servers; they are processed securely by our payment
            partners).
          </li>
          <li>
            <strong>Usage Data:</strong> Information on how you access and use
            our website and services.
          </li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect in various ways, including to:</p>
        <ul>
          <li>Provide, operate, and maintain our car washing services.</li>
          <li>Improve, personalize, and expand our service offerings.</li>
          <li>Understand and analyze how you use our website and services.</li>
          <li>Develop new products, services, features, and functionality.</li>
          <li>
            Communicate with you, either directly or through one of our
            partners, including for customer service, to provide you with
            updates and other information relating to the website, and for
            marketing and promotional purposes.
          </li>
          <li>Send you emails or SMS notifications regarding your bookings.</li>
          <li>Find and prevent fraud.</li>
        </ul>

        <h2>3. Log Files</h2>
        <p>
          BABA Car Wash follows a standard procedure of using log files. These
          files log visitors when they visit websites. All hosting companies do
          this and a part of hosting services' analytics. The information
          collected by log files includes internet protocol (IP) addresses,
          browser type, Internet Service Provider (ISP), date and time stamp,
          referring/exit pages, and possibly the number of clicks. These are not
          linked to any information that is personally identifiable. The purpose
          of the information is for analyzing trends, administering the site,
          tracking users' movement on the website, and gathering demographic
          information.
        </p>

        <h2>4. Cookies and Web Beacons</h2>
        <p>
          Like any other website, BABA Car Wash uses 'cookies'. These cookies
          are used to store information including visitors' preferences, and the
          pages on the website that the visitor accessed or visited. The
          information is used to optimize the users' experience by customizing
          our web page content based on visitors' browser type and/or other
          information.
        </p>

        <h2>5. Third Party Privacy Policies</h2>
        <p>
          BABA Car Wash's Privacy Policy does not apply to other advertisers or
          websites. Thus, we are advising you to consult the respective Privacy
          Policies of these third-party ad servers for more detailed
          information. It may include their practices and instructions about how
          to opt-out of certain options.
        </p>

        <h2>6. Data Security</h2>
        <p>
          We value your trust in providing us your Personal Information, thus we
          are striving to use commercially acceptable means of protecting it.
          But remember that no method of transmission over the internet, or
          method of electronic storage is 100% secure and reliable, and we
          cannot guarantee its absolute security.
        </p>

        <h2>7. Children's Information</h2>
        <p>
          Another part of our priority is adding protection for children while
          using the internet. We encourage parents and guardians to observe,
          participate in, and/or monitor and guide their online activity.
        </p>
        <p>
          BABA Car Wash does not knowingly collect any Personal Identifiable
          Information from children under the age of 13. If you think that your
          child provided this kind of information on our website, we strongly
          encourage you to contact us immediately and we will do our best
          efforts to promptly remove such information from our records.
        </p>

        <h2>8. Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. Thus, we advise
          you to review this page periodically for any changes. We will notify
          you of any changes by posting the new Privacy Policy on this page.
          These changes are effective immediately, after they are posted on this
          page.
        </p>

        <h2>9. Contact Us</h2>
        <p>
          If you have any questions or suggestions about our Privacy Policy, do
          not hesitate to contact us.
        </p>
        <p>
          <strong>BABA CAR WASHING & CLEANING L.L.C</strong>
          <br />
          P.O.Box: 126297, Dubai, UAE
          <br />
          Email: customerregistartion@babagroup.ae
          <br />
          Phone: (+971) 43556460
        </p>
      </div>
    </div>
  );
}
