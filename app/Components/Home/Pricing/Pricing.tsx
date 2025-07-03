import React, { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

const plans = [
  {
    name: 'Free',
    price: 0,
    period: 'Month',
    description: 'Perfect for getting start and trying out basic features',
    features: [
      { text: '5 Posts/month', included: true },
      { text: 'AI Caption & Hashtag Generation', included: true },
      { text: 'Instagram Integration', included: true },
      { text: 'Post History (Limited)', included: false },
      { text: 'Facebook Integration', included: false },
    ],
    button: 'Get started fee',
    highlight: false,
  },
  {
    name: 'Pro',
    price: 29,
    period: 'Month',
    description: 'Ideal for growing businesses and active content creators.',
    features: [
      { text: 'Unlimited Posts', included: true },
      { text: 'Advanced AI Features', included: true },
      { text: 'Instagram & Facebook Integration', included: true },
      { text: 'Full Post History', included: true },
      { text: 'Priority Support', included: true, highlight: true },
    ],
    button: 'Choose Pro',
    highlight: true,
  },
  {
    name: 'Business',
    price: 99,
    period: 'Month',
    description: 'For agencies and large teams requiring extensive automation.',
    features: [
      { text: 'All Pro Features', included: true },
      { text: 'Multi-user Access', included: true },
      { text: 'Dedicated Account Manager', included: true },
      { text: 'Custom Integrations (API Access)', included: true },
      { text: 'Enhanced Analytics', included: true },
    ],
    button: 'Get started fee',
    highlight: false,
  },
];

const Pricing = () => {
  const [billing, setBilling] = useState('Monthly');
  return (
    <div className="py-16 px-2 md:px-0 max-w-6xl mx-auto my-[5%] ">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
        Simple and transparent <span className="text-purple-600">pricing</span>
      </h1>
      <p className="text-center text-gray-500 mb-8 text-lg max-w-2xl mx-auto">
        Choose a plan that fits your business needs and budget. No hidden fees, no surprises—just straightforward pricing.
      </p>
      <div className="flex justify-center mb-10">
        <div className="inline-flex bg-gray-100 rounded-full p-1">
          <button
            className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200 ${billing === 'Monthly' ? 'bg-purple-600 text-white' : 'text-gray-600'}`}
            onClick={() => setBilling('Monthly')}
          >
            Monthly
          </button>
          <button
            className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200 ${billing === 'Yearly' ? 'bg-purple-600 text-white' : 'text-gray-600'}`}
            onClick={() => setBilling('Yearly')}
          >
            Yearly
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {plans.map((plan, idx) => (
          <div
            key={plan.name}
            className={`flex-1 bg-white rounded-2xl border ${plan.highlight ? 'border-2 border-purple-600 shadow-lg scale-105 z-10' : 'border-gray-200'} p-8 flex flex-col items-center transition-all duration-300`}
          >
            <div className="w-full">
              <span className="block text-lg font-semibold mb-1 text-gray-500">{plan.name}</span>
              <span className="text-3xl md:text-4xl font-bold">${plan.price}<span className="text-base font-normal">/{plan.period}</span></span>
              <p className="mt-2 mb-4 text-gray-500 min-h-[48px]">{plan.description}</p>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    {feature.included ? (
                      <FaCheck className={`text-green-500 ${feature.highlight ? 'bg-green-100 rounded px-1' : ''}`} />
                    ) : (
                      <FaTimes className="text-red-400" />
                    )}
                    <span className={feature.highlight ? 'bg-green-100 text-green-700 px-2 py-0.5 rounded font-medium' : ''}>{feature.text}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-full font-bold mt-auto ${plan.highlight ? 'bg-purple-600 text-white' : 'bg-gray-100 text-purple-600'} transition-colors duration-200`}
              >
                {plan.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
