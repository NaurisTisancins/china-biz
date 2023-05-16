import MainLayout from '@/components/main-layout/MainLayout';
import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import AdultTrainingSection from '@/components/education-page-components/AdultTrainingSection';
import PreUniEducationSection from '@/components/education-page-components/PreUniEducationSection';
import ExecutiveCourses from '@/components/education-page-components/ExecutiveCourses';
import ContactUsSection from '@/components/common-components/ContactUsSection';

const EducationPage: NextPageWithLayout = () => {
  return (
    <main className="education-page-container">
      <h1 className="education-page-title">Education</h1>
      <AdultTrainingSection />
      <PreUniEducationSection />
      <ExecutiveCourses />
      <ContactUsSection />
    </main>
  );
};

EducationPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default EducationPage;
