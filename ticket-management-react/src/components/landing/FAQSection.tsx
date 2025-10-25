export default function FAQSection() {
  return (
   <section id="faq" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">FAQs</h2>
          <p className="text-base text-gray-600">
            Answers to common questions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Can I import from my current tool?</h3>
            <p className="text-base text-gray-600">
              Yes. Use our CSV importer or API to migrate tickets and users.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Do you offer SLAs?</h3>
            <p className="text-base text-gray-600">
              Absolutely. Create SLA policies by priority and channel.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Is there an API?</h3>
            <p className="text-base text-gray-600">
              Yes, a REST API is available for custom integrations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
