import { useNavigate } from 'react-router-dom';
import { MdCheck } from "react-icons/md";
import Button from "../ui/Button";

export default function PricingSection() {
  const navigate = useNavigate();
  return (
    <section id="pricing" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple pricing
          </h2>
          <p className="text-base text-gray-600">
            Start free. Upgrade as your team grows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-gray-200 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Starter
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              For individuals and small teams.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <MdCheck
                  size={20}
                  color="#2563EB"
                  className="mt-0.5 shrink-0"
                />
                <span className="text-sm text-gray-600">Up to 3 agents</span>
              </li>
              <li className="flex items-start gap-3">
                <MdCheck
                  size={20}
                  color="#2563EB"
                  className="mt-0.5 shrink-0"
                />
                <span className="text-sm text-gray-600">Basic automations</span>
              </li>
              <li className="flex items-start gap-3">
                <MdCheck
                  size={20}
                  color="#2563EB"
                  className="mt-0.5 shrink-0"
                />
                <span className="text-sm text-gray-600">Standard SLAs</span>
              </li>
            </ul>

            <Button variant="primary" className="w-full" onClick={() => navigate('/auth/signup')}>
              Get Started
            </Button>
          </div>

          <div className="border-2 border-blue-600 rounded-2xl p-8 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs px-4 py-1 rounded-full">
              Popular
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Growth
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              For growing support teams.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <MdCheck
                  size={20}
                  color="#2563EB"
                  className="mt-0.5 shrink-0"
                />
                <span className="text-sm text-gray-600">Unlimited agents</span>
              </li>
              <li className="flex items-start gap-3">
                <MdCheck
                  size={20}
                  color="#2563EB"
                  className="mt-0.5 shrink-0"
                />
                <span className="text-sm text-gray-600">
                  Advanced workflows
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MdCheck
                  size={20}
                  color="#2563EB"
                  className="mt-0.5 shrink-0"
                />
                <span className="text-sm text-gray-600">Analytics</span>
              </li>
            </ul>

            <Button variant="primary" className="w-full" onClick={() => navigate('/auth/signup')}>
              Contact Sales
            </Button>
          </div>

          <div className="border border-gray-200 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Enterprise
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Security and control at scale.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <MdCheck
                  size={20}
                  color="#2563EB"
                  className="mt-0.5 shrink-0"
                />
                <span className="text-sm text-gray-600">SAML SSO</span>
              </li>
              <li className="flex items-start gap-3">
                <MdCheck
                  size={20}
                  color="#2563EB"
                  className="mt-0.5 shrink-0"
                />
                <span className="text-sm text-gray-600">Custom SLAs</span>
              </li>
              <li className="flex items-start gap-3">
                <MdCheck
                  size={20}
                  color="#2563EB"
                  className="mt-0.5 shrink-0"
                />
                <span className="text-sm text-gray-600">Dedicated support</span>
              </li>
            </ul>

            <button className="w-full cursor-pointer border-2 border-blue-600 text-blue-600 py-2.5 px-6 rounded-lg font-semibold hover:bg-sky-50 transition-colors">
              Talk to Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/*     */
