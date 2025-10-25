import { MdInbox, MdAutoAwesome, MdInsights } from 'react-icons/md';

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything your team needs</h2>
          <p className="text-base text-gray-600">
            Simple, powerful tools to receive, triage, and resolve tickets.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg border border-gray-200 shadow-xl">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              <MdInbox size={28} color="#2563EB" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Unified Inbox</h3>
            <p className="text-base text-gray-600 mb-4">
              All requests from email, chat, and forms in one queue with clear ownership.
            </p>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600">• Merge duplicates</li>
              <li className="text-sm text-gray-600">• Bulk actions</li>
              <li className="text-sm text-gray-600">• SLA timers</li>
            </ul>
          </div>
          
          <div className="p-6 rounded-lg border border-gray-200 shadow-xl">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              <MdAutoAwesome size={28} color="#2563EB" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Automation</h3>
            <p className="text-base text-gray-600 mb-4">
              Auto-assign, tag, and escalate based on rules—keep work moving.
            </p>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600">• Rules & triggers</li>
              <li className="text-sm text-gray-600">• Macros</li>
              <li className="text-sm text-gray-600">• Workflows</li>
            </ul>
          </div>
          
          <div className="p-6 rounded-lg border border-gray-200 shadow-xl">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              <MdInsights size={28} color="#2563EB" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Insights</h3>
            <p className="text-base text-gray-600 mb-4">
              Understand performance with dashboards for volume, SLAs, and CSAT.
            </p>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600">• Team metrics</li>
              <li className="text-sm text-gray-600">• Trends</li>
              <li className="text-sm text-gray-600">• Exports</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/*  */