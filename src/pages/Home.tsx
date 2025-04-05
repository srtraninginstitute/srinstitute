import React from 'react';
import Button from '../components/shared/Button';
import Card from '../components/shared/Card';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col space-y-16 w-full animate-fade-in">
      {/* Hero Section */}
      <section className="relative w-full py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative container mx-auto px-4">
          <div className="flex flex-col items-center max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Welcome to Our Platform</h1>
            <p className="text-lg md:text-xl mb-8 text-primary-100">Discover amazing features and possibilities</p>
            <Button
              variant="secondary"
              size="lg"
              className="font-semibold"
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="flex flex-col transform hover:scale-105 transition-transform duration-300"
              >
                <div className="text-primary-500 text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-secondary-50 py-16 rounded-2xl">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-8 text-lg">Join thousands of satisfied users today</p>
            <Button
              variant="primary"
              size="lg"
              className="font-semibold"
            >
              Sign Up Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

const features = [
  {
    icon: "🚀",
    title: "Lightning Fast",
    description: "Experience blazing fast performance with our optimized platform."
  },
  {
    icon: "🛡️",
    title: "Secure",
    description: "Your data is protected with enterprise-grade security measures."
  },
  {
    icon: "💡",
    title: "Intuitive",
    description: "Easy to use interface designed with user experience in mind."
  }
];

export default Home; 