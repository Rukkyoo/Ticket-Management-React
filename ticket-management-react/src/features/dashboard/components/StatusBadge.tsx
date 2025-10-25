import type { TicketStatus } from '../enums';

interface StatusBadgeProps {
  status: TicketStatus;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const isOpen = status === "Open";
  const isResolved = status === "Resolved";
  
  return (
    <span
      className={`px-3 py-1.5 rounded-md text-sm font-semibold ${
        isOpen ? 'bg-orange-500 text-white' : 
        isResolved ? 'bg-green-500 text-white' : 
        'bg-gray-200 text-gray-700'
      }`}
    >
      {status}
    </span>
  );
}