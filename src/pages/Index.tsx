import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Layout } from '@/components/layout/Layout';
import { useAuth } from '@/contexts/AuthContext';
import { Tractor, Warehouse, TestTube, Users, Sprout, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-farm.jpg';

const Index = () => {
  const { t } = useTranslation();
  const { user } = useAuth();

  const features = [
    {
      icon: Tractor,
      title: t('tools.title'),
      description: t('tools.subtitle'),
      link: '/tools'
    },
    {
      icon: Warehouse,
      title: t('warehouse.title'),
      description: t('warehouse.subtitle'),
      link: '/warehouse'
    },
    {
      icon: TestTube,
      title: t('soil.title'),
      description: t('soil.subtitle'),
      link: '/soil-check'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {user ? (
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-strong">
                  <Link to="/tools">
                    {t('hero.getStarted')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              ) : (
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-strong">
                  <Link to="/auth">
                    {t('hero.getStarted')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              )}
              <Button asChild variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-white/30">
                <Link to="/tools">{t('hero.learnMore')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Smart Farming Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our comprehensive platform designed to revolutionize modern agriculture
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-6 text-base">
                    {feature.description}
                  </CardDescription>
                  <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Link to={feature.link}>
                      Explore
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="mb-4 p-4 bg-accent/20 rounded-full w-fit mx-auto group-hover:bg-accent/30 transition-colors">
                <Users className="h-12 w-12 text-accent-foreground" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">1000+</h3>
              <p className="text-muted-foreground">Active Farmers</p>
            </div>
            <div className="group">
              <div className="mb-4 p-4 bg-primary/20 rounded-full w-fit mx-auto group-hover:bg-primary/30 transition-colors">
                <Tractor className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">500+</h3>
              <p className="text-muted-foreground">Tools Available</p>
            </div>
            <div className="group">
              <div className="mb-4 p-4 bg-secondary/40 rounded-full w-fit mx-auto group-hover:bg-secondary/50 transition-colors">
                <Sprout className="h-12 w-12 text-secondary-foreground" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">95%</h3>
              <p className="text-muted-foreground">Success Rate</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
