import type { Ticket } from '../types';
import StatusBadge from './StatusBadge';

interface RecentActivityTableProps {
  tickets: Ticket[];
}

export default function RecentActivityTable({ tickets }: RecentActivityTableProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Recent activity</h3>
      </div>
      
      <div className="divide-y divide-gray-200">
        {tickets.map((ticket) => (
          <div
            key={ticket.id}
            className="grid grid-cols-4 gap-4 p-6 hover:bg-gray-50 transition-colors items-center"
          >
            <div className="col-span-1">
              <p className="font-semibold text-gray-900">
                #{ticket.id} • {ticket.title}
              </p>
            </div>
            
            <div className="col-span-1">
              <span className="text-sm text-gray-600">{ticket.priority}</span>
            </div>
            
            <div className="col-span-1">
              <StatusBadge status={ticket.status} />
            </div>
            
            <div className="col-span-1 flex justify-end">
              <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg font-medium hover:bg-blue-100 transition-colors">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-6 bg-gray-50 border-t border-gray-200">
        <p className="text-sm text-gray-600 text-center">
          Navigate to Ticket Management to triage and work on tickets.
        </p>
      </div>
    </div>
  );
}