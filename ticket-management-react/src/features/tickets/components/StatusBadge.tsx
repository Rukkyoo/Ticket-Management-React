import { TicketStatus } from '../enums';
import { formatStatus } from '../utils/formatters';

interface StatusBadgeProps {
  status: TicketStatus;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const getStatusColor = () => {
    switch (status) {
      case TicketStatus.OPEN:
        return 'bg-green-100 text-green-700 border-green-200';
      case TicketStatus.IN_PROGRESS:
        return 'bg-amber-100 text-amber-700 border-amber-200';
      case TicketStatus.CLOSED:
        return 'bg-gray-100 text-gray-700 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <span className={`px-3 py-1 rounded-md text-xs font-semibold border ${getStatusColor()}`}>
      {formatStatus(status)}
    </span>
  );
}