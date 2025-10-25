export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How it works</h2>
          <p className="text-base text-gray-600">
            From intake to resolution in three simple steps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-sky-50 rounded-2xl p-8 text-center shadow-md">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <span className="text-3xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Capture</h3>
            <p className="text-base text-gray-600 mb-6">
              Connect email, chat, and forms. Everything lands in your inbox.
            </p>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <p className="text-sm font-semibold text-gray-900">Intake Channels</p>
            </div>
          </div>
          
          <div className="bg-sky-50 rounded-2xl p-8 text-center shadow-md">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <span className="text-3xl font-bold text-blue-600">2</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Route</h3>
            <p className="text-base text-gray-600 mb-6">
              Use rules and SLAs to prioritize and assign automatically.
            </p>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <p className="text-sm font-semibold text-gray-900">Smart Routing</p>
            </div>
          </div>
          
          <div className="bg-sky-50 rounded-2xl p-8 text-center shadow-md">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <span className="text-3xl font-bold text-blue-600">3</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Resolve</h3>
            <p className="text-base text-gray-600 mb-6">
              Reply with templates, collaborate, and close with confidence.
            </p>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <p className="text-sm font-semibold text-gray-900">Resolution</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
