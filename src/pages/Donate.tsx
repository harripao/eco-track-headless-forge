
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, DollarSign, CreditCard, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Donate = () => {
  const { t } = useLanguage();
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');

  const donationAmounts = [25, 50, 100, 250, 500];

  const handleDonate = () => {
    const amount = customAmount ? parseFloat(customAmount) : selectedAmount;
    // For now, just show an alert. In a real app, this would integrate with a payment processor
    alert(`Thank you for your donation of $${amount}! This would redirect to payment processing.`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Support Our Environmental Mission
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your donation helps us continue building tools and resources for a sustainable future. 
              Every contribution makes a difference in the fight against climate change.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Make a Donation
                  </h2>
                  <p className="text-muted-foreground">
                    Choose an amount to support our environmental initiatives
                  </p>
                </div>

                {/* Amount Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Select Amount (USD)
                  </label>
                  <div className="grid grid-cols-3 lg:grid-cols-5 gap-3 mb-4">
                    {donationAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount('');
                        }}
                        className={`p-3 rounded-lg border transition-all ${
                          selectedAmount === amount && !customAmount
                            ? 'border-green-600 bg-green-50 text-green-600'
                            : 'border-border hover:border-green-300'
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                  
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Or enter custom amount
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input
                        type="number"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setSelectedAmount(0);
                        }}
                        placeholder="Enter amount"
                        className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Impact Information */}
                <div className="bg-green-50 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-foreground mb-2">Your Impact:</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• $25 helps track 1,000 tons of CO2 emissions</li>
                    <li>• $50 supports one sustainability report</li>
                    <li>• $100 funds environmental education resources</li>
                    <li>• $250 sponsors a small business carbon audit</li>
                  </ul>
                </div>

                {/* Donate Button */}
                <Button 
                  onClick={handleDonate}
                  className="w-full bg-green-600 hover:bg-green-700 text-lg py-3"
                  disabled={!selectedAmount && !customAmount}
                >
                  <CreditCard className="mr-2 h-5 w-5" />
                  Donate ${customAmount || selectedAmount} Now
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  Secure payment processing. Your donation supports environmental sustainability initiatives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Your Support Matters
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Community Impact</h3>
                <p className="text-muted-foreground text-sm">
                  Help us reach more organizations and individuals working towards sustainability goals.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Tool Development</h3>
                <p className="text-muted-foreground text-sm">
                  Fund the creation of new features and tools for carbon tracking and environmental reporting.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Future Generations</h3>
                <p className="text-muted-foreground text-sm">
                  Invest in a sustainable future for our children and the planet they will inherit.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;
