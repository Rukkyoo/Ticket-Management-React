import { MdModeEdit, MdDelete } from 'react-icons/md';
import { BsEye } from 'react-icons/bs';
import StatusBadge from './StatusBadge';
import type { Ticket } from '../types';
import { formatTicketId } from '../utils/formatters';

interface TicketCardProps {
  ticket: Ticket;
  onEdit: (ticket: Ticket) => void;
  onView: (ticket: Ticket) => void;
  onDelete: (ticket: Ticket) => void;
}
export default function TicketCard({ ticket, onEdit, onView, onDelete }: TicketCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-semibold text-gray-500">{formatTicketId(ticket.id)}</span>
            <span className="text-sm text-gray-400">•</span>
            <span className="text-sm font-semibold text-gray-900">{ticket.name}</span>
          </div>
          <StatusBadge status={ticket.status} />
        </div>
      </div>

      {/* Details */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Priority</span>
          <span className="font-semibold text-gray-900">{ticket.priority}</span>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Description</span>
          <div className="flex items-center gap-2">
            <span className="text-gray-900">{ticket.description}</span>
          </div>
        </div>

        {ticket.tags && ticket.tags.length > 0 && (
          <div className="flex items-start justify-between text-sm">
            <span className="text-gray-600">Tags</span>
            <div className="flex flex-wrap gap-1 justify-end">
              {ticket.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
        <button
          onClick={() => onEdit(ticket)}
          className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded transition-colors"
        >
          <MdModeEdit size={16} />
          <span>Edit</span>
        </button>
        <button
          onClick={() => onView(ticket)}
          className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded transition-colors"
        >
          <BsEye size={16} />
          <span>View</span>
        </button>
        <button
          onClick={() => onDelete(ticket)}
          className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-red-600 hover:bg-red-50 rounded transition-colors ml-auto"
        >
          <MdDelete size={16} />
          <span>Delete</span>
        </button>
      </div>
    </div>
  );
}