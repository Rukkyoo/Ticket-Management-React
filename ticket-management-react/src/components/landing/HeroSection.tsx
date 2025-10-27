import { useNavigate } from 'react-router-dom';
import Button from "../ui/Button";

export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <section className="relative pt-10 pb-20 overflow-hidden max-w-[1440px]">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg
          className="absolute bottom-0 left-0 w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="xMidYMax slice"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#E0F2FE', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#BAE6FD', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#7DD3FC', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient)"
            fillOpacity="0.8"
            d="M0,192L48,181.3C96,171,192,149,288,149.3C384,149,480,171,576,149.3C672,128,768,64,864,80C960,96,1056,192,1152,218.7C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col lg:w-[120%] items-center text-center lg:items-start lg:text-left">
            <p className="text-sm text-gray-600 mb-4">
              Modern ticket management
            </p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
              Resolve requests faster with a clean, powerful workflow
            </h1>
            <p className="text-base text-gray-600 mb-8 max-w-xl leading-relaxed">
              TicketFlow centralizes customer requests, automates routing, and
              gives your team the clarity to respond quickly and consistently—at
              any scale.
            </p>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => navigate('/auth/login')}
                className="bg-transparent cursor-pointer text-gray-900 px-6 py-2.5 rounded-lg font-semibold hover:bg-sky-50 transition-all"
              >
                Login
              </button>
              <Button variant="primary" onClick={() => navigate('/auth/signup')}>Get Started</Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-gray-900">
                    New ticket
                  </span>
                  <span className="text-sm text-gray-400">•</span>
                  <span className="text-sm text-gray-600">Website bug</span>
                </div>
                <span className="text-xs px-2 py-1 bg-sky-50 text-gray-600 rounded">
                  Open
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Priority</span>
                  <span className="text-sm font-semibold text-gray-900">
                    High
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">SLA</span>
                  <span className="text-sm text-gray-600">2h remaining</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Channel</span>
                  <span className="text-sm text-gray-900">Email</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Assigned to</span>
                  <div className="flex items-center gap-2">
                    <img
                      src="https://i.pravatar.cc/150?img=1"
                      alt="User avatar"
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="text-sm text-gray-900">Dana</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm text-gray-600">Next step</span>
                  <span className="text-xs px-3 py-1 bg-emerald-500 text-white rounded-full font-semibold">
                    Reply
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}