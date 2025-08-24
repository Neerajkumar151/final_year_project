import React from 'react';
import { useTranslation } from 'react-i18next';
import { Layout } from '@/components/layout/Layout';

const Tools: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">{t('tools.title')}</h1>
        <p className="text-xl text-muted-foreground">{t('tools.subtitle')}</p>
        <div className="mt-8">
          <p>Tools marketplace coming soon...</p>
        </div>
      </div>
    </Layout>
  );
};

export default Tools;