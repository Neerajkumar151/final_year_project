import React from 'react';
import { useTranslation } from 'react-i18next';
import { Layout } from '@/components/layout/Layout';

const Profile: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">{t('nav.profile')}</h1>
        <div className="mt-8">
          <p>Profile management coming soon...</p>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;