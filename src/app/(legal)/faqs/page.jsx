import styles from '../legal.module.css';

export const metadata = {
  title: 'Frequently Asked Questions | BABA Car Wash',
  description:
    'Frequently Asked Questions about BABA Car Washing & Cleaning L.L.C services, pricing, and policies.',
};

export default function FaqPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Frequently Asked Questions</h1>
      <div className={styles.content}>
        <p>
          Here are some of the most common questions we receive from our
          customers. If you can't find the answer you're looking for, please feel
          free to contact us.
        </p>

        <h2>General Questions</h2>
        <h3>What services does BABA Car Wash offer?</h3>
        <p>
          We offer a comprehensive range of car cleaning services including Dust Removal, Body Wash, Glass Cleaning, Wheel Cleaning, and Tire Polishing. We provide both exterior and interior cleaning services.
        </p>
        <h3>Where are you located?</h3>
        <p>
          We are based in Dubai, UAE. Our main office is at P.O.Box: 126297. We provide mobile car wash services at various locations including residential and commercial parking areas.
        </p>

        <h2>Booking and Service</h2>
        <h3>Do I need to book an appointment?</h3>
        <p>
          While we accept walk-ins at some locations, we highly recommend booking an appointment through our website or by phone to ensure timely service.
        </p>
        <h3>How long does a car wash take?</h3>
        <p>
          The duration depends on the service package you choose. A standard exterior wash typically takes 20-30 minutes, while a full detailing service can take 1-2 hours.
        </p>
        <h3>Do I need to be present during the wash?</h3>
        <p>
          No, you do not need to be present as long as we have access to the vehicle. However, for interior cleaning, we will need the car keys.
        </p>

        <h2>Payment and Pricing</h2>
        <h3>What payment methods do you accept?</h3>
        <p>
          We accept cash and major credit/debit cards. Payment is usually collected after the service is completed.
        </p>
        <h3>Are there any hidden charges?</h3>
        <p>
          No, our pricing is transparent. The price you see or are quoted is the price you pay. Any additional services requested on-site will be charged accordingly.
        </p>

        <h2>Safety and Environment</h2>
        <h3>Are your cleaning products safe for my car's paint?</h3>
        <p>
          Yes, we use high-quality, eco-friendly, and paint-safe cleaning products to ensure your vehicle is cleaned effectively without any damage.
        </p>
        <h3>What if it rains after my car wash?</h3>
        <p>
          Unfortunately, we cannot control the weather. However, we offer a rain guarantee for certain premium packages where we will provide a quick exterior wash if it rains within 24 hours of your service. Please check with our staff for details.
        </p>

        <h2>Contact</h2>
        <h3>How can I contact customer support?</h3>
        <p>
          You can reach us via email at customerregistartion@babagroup.ae or call us at (+971) 43556460.
        </p>
      </div>
    </div>
  );
}
