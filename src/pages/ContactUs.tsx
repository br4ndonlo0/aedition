import './ContactUs.css'

const WHATSAPP_NUMBER = '6580682338'
const EMAIL = 'sales@aedition.asia'
const PHONE = '+65 80682338'

export default function ContactUs() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <h1>Better yet, see us in person!</h1>
        <p>We love our customers, so feel free to drop us a line.</p>
        <a
          className="whatsapp-btn"
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
            <path d="M16 2C8.28 2 2 8.28 2 16c0 2.46.66 4.76 1.8 6.76L2 30l7.44-1.76A13.93 13.93 0 0 0 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.4a11.34 11.34 0 0 1-5.78-1.58l-.42-.24-4.42 1.04 1.06-4.3-.28-.44A11.36 11.36 0 0 1 4.6 16C4.6 9.7 9.7 4.6 16 4.6S27.4 9.7 27.4 16 22.3 27.4 16 27.4zm6.22-8.52c-.34-.17-2-.98-2.3-1.1-.32-.1-.54-.17-.76.18-.22.34-.86 1.1-1.06 1.32-.18.22-.38.24-.72.08-.34-.18-1.44-.53-2.74-1.68-1.02-.9-1.7-2-1.9-2.34-.2-.34-.02-.52.14-.7.16-.16.34-.4.52-.6.18-.2.22-.34.34-.56.1-.22.06-.42-.02-.6-.08-.18-.76-1.84-1.04-2.52-.28-.66-.56-.56-.76-.58h-.64c-.22 0-.58.08-.88.42-.3.34-1.16 1.12-1.16 2.74s1.18 3.18 1.36 3.4c.16.22 2.34 3.56 5.66 4.98.8.34 1.42.54 1.9.7.8.26 1.52.22 2.1.14.64-.1 2-.82 2.28-1.6.28-.8.28-1.48.2-1.62-.1-.14-.3-.22-.64-.38z" />
          </svg>
          Message us on WhatsApp
        </a>
      </section>

      <section className="contact-info">
        <h2>Aedition Technology</h2>
        <p className="contact-tagline">Feel free to chat with us</p>

        <div className="contact-details">
          <div className="contact-row">
            <span className="contact-label">email:</span>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
          <div className="contact-row">
            <span className="contact-label">call:</span>
            <a href={`tel:${PHONE.replace(/\s/g, '')}`}>{PHONE}</a>
          </div>
        </div>
      </section>
    </main>
  )
}
