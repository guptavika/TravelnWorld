import React from 'react';

const PlansSection = () => {
  return (
    <div className="py-10 px-5 mx-auto max-w-7xl lg:py-20">
      {/* Heading */}
      <div className="text-center mb-8 lg:mb-12">
        <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Choose a plan That Fits
          <br />
          <span className="flex flex-col gap-3">Your Requirements,</span>
        </h1>
      </div>

      {/* Plans Grid */}
      <div className="space-y-8 lg:grid lg:grid-cols-3 md:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">
        {/* Basic Plan */}
        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-300 dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
          <h3 className="mb-4 text-2xl font-semibold">Basic</h3>
          <div className="flex justify-center items-baseline my-8">
            <span className="mr-2 text-5xl font-extrabold">2,999</span>
            <span className="text-gray-500 dark:text-gray-400">/90 Days</span>
          </div>
          <ul role="list" className="mb-8 space-y-4 text-left">
            {[
              'Social Media link',
              'Agent Dashboard',
              'Unlimited Inbound Inquiry',
              '10 Professional Graphics',
              '75 Domestic Verified Leads',
              '25 International Verified Leads',
              '24*7 Support Team',
            ].map((item) => (
              <li key={item} className="flex items-center space-x-3">
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Standard Plan */}
        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-300 dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
          <h3 className="mb-4 text-2xl font-semibold">Standard</h3>
          <div className="flex justify-center items-baseline my-8">
            <span className="mr-2 text-5xl font-extrabold">5,999</span>
            <span className="text-gray-500 dark:text-gray-400">/180 Days</span>
          </div>
          <ul role="list" className="mb-8 space-y-4 text-left">
            {[
              '1 Domain',
              '5 page website',
              'Social Media links',
              'Agent Dashboard',
              'Unlimited Inbound Inquiry',
              '25 Professional Graphics',
              '100 Domestic Verified Leads',
              '50 International Verified Leads',
              '24*7 Support Team',
              'Banner listing',
            ].map((item) => (
              <li key={item} className="flex items-center space-x-3">
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Premium Plan */}
        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-300 dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
          <h3 className="mb-4 text-2xl font-semibold">Premium</h3>
          <div className="flex justify-center items-baseline my-8">
            <span className="mr-2 text-5xl font-extrabold">10,999</span>
            <span className="text-gray-500 dark:text-gray-400">/365 Days</span>
          </div>
          <ul role="list" className="mb-8 space-y-4 text-left">
            {[
              '1 Domain',
              '10 page website',
              'Social Media links',
              'Agent Dashboard',
              'Unlimited Inbound Inquiry',
              '50 Professional Graphics',
              '200 Domestic Verified Leads',
              '100 International Verified Leads',
              '24*7 Support Team',
              'Banner listing',
            ].map((item) => (
              <li key={item} className="flex items-center space-x-3">
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// ✅ Check Icon Component
const CheckIcon = () => (
  <svg
    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

export default PlansSection;
