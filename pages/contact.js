import Head from "next/head";
import { Fragment } from "react";
import ContactForm from "../components/contact/ContactForm"

const ContactPage = () => {
    return (
      <Fragment>
        <Head>
          <title>Benimle İletişime Geç</title>
          <meta
            name="description"
            content="Neslihan'a mesaj gönder"
          />
        </Head>
        <ContactForm />
      </Fragment>
    );
}

export default ContactPage;