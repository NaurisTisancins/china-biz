import { Inter } from 'next/font/google';
import { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import MainLayout from '@/components/main-layout/MainLayout';
import ContactForm from '@/components/contact-page-components/ContactForm';

const inter = Inter({ subsets: ['latin'] });

const ContactPage: NextPageWithLayout = () => {
  return (
    <main className="contact-page-container">
      <ContactForm />
    </main>
  );
};

ContactPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default ContactPage;
