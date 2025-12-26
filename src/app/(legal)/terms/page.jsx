import styles from '../legal.module.css';

export const metadata = {
  title: 'Terms and Conditions | BABA Car Wash',
  description: 'Terms and Conditions for using BABA Car Washing & Cleaning L.L.C services.',
};

export default function TermsPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Terms and Conditions</h1>
      <div className={styles.content}>
        <p>
          Welcome to <strong>BABA Car Washing & Cleaning L.L.C</strong>! These terms and conditions outline the rules
          and regulations for the use of our Website and Services, located at
          https://www.babacarwash.com.
        </p>
        <p>
          By accessing this website and booking our services, we assume you accept these terms and
          conditions. Do not continue to use BABA Car Wash if you do not agree to
          take all of the terms and conditions stated on this page.
        </p>

        <h2>1. Definitions</h2>
        <p>
          The following terminology applies to these Terms and Conditions,
          Privacy Statement and Disclaimer Notice and all Agreements: "Client",
          "You" and "Your" refers to you, the person log on this website and
          compliant to the Company’s terms and conditions. "The Company",
          "Ourselves", "We", "Our" and "Us", refers to our Company. "Party",
          "Parties", or "Us", refers to both the Client and ourselves.
        </p>

        <h2>2. Services</h2>
        <p>
          BABA Car Washing & Cleaning L.L.C provides professional car washing and detailing services, including but not limited to:
        </p>
        <ul>
            <li>Dust Removal</li>
            <li>Body Wash</li>
            <li>Glass Cleaning</li>
            <li>Wheel Cleaning</li>
            <li>Tire Polishing</li>
        </ul>
        <p>
            We reserve the right to refuse service to any vehicle that we deem unsafe or unsuitable for our cleaning processes.
        </p>

        <h2>3. Booking and Cancellations</h2>
        <p>
            Bookings can be made through our website or by contacting our customer service.
            Cancellations must be made at least 24 hours in advance to avoid any cancellation fees.
            We reserve the right to cancel or reschedule appointments due to weather conditions, equipment failure, or other unforeseen circumstances.
        </p>

        <h2>4. Payment</h2>
        <p>
            Payment is due upon completion of the service, unless otherwise agreed upon. We accept cash and major credit cards.
            Prices are subject to change without prior notice, but confirmed bookings will be honored at the booked price.
        </p>

        <h2>5. Liability</h2>
        <p>
            While we take the utmost care with your vehicle, BABA Car Washing & Cleaning L.L.C is not responsible for:
        </p>
        <ul>
            <li>Damage to loose or non-standard parts (e.g., antennas, spoilers, mirrors).</li>
            <li>Damage caused by pre-existing conditions (e.g., rust, loose paint, scratches).</li>
            <li>Loss of personal items left in the vehicle. Please remove all valuables before service.</li>
        </ul>
        <p>
            Any claims for damage must be reported to our staff immediately upon completion of the service and before the vehicle leaves the premises.
        </p>

        <h2>6. Intellectual Property</h2>
        <p>
          Unless otherwise stated, BABA Car Washing & Cleaning L.L.C and/or its licensors own the
          intellectual property rights for all material on this website. All
          intellectual property rights are reserved. You may access this from
          our website for your own personal use subjected to restrictions set in these terms and conditions.
        </p>

        <h2>7. Governing Law</h2>
        <p>
            These terms and conditions are governed by and construed in accordance with the laws of the United Arab Emirates and the Emirate of Dubai.
            You irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
        </p>

        <h2>8. Changes to Terms</h2>
        <p>
            We reserve the right to amend these terms and conditions at any time. By continuing to use our services after any changes are made, you accept those changes.
        </p>

        <h2>9. Contact Information</h2>
        <p>
          If you have any questions about these Terms and Conditions, please contact us:
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
