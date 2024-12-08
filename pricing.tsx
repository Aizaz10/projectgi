const Pricing = () => {
    return (
      <div className="pricing py-16 text-center">
        <h2 className="text-4xl font-bold">Pricing Plans</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold">Basic Plan</h3>
            <p className="text-gray-600">$10/month</p>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Subscribe
            </button>
          </div>
          <div className="border rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold">Premium Plan</h3>
            <p className="text-gray-600">$20/month</p>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Subscribe
            </button>
          </div>
          <div className="border rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold">Pro Plan</h3>
            <p className="text-gray-600">$30/month</p>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Pricing;
  