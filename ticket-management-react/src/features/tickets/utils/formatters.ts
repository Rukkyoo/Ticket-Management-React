import { TicketStatus, TicketPriority } from '../enums';

// Format status to display text
export const formatStatus = (status: TicketStatus): string => {
  const statusMap: Record<TicketStatus, string> = {
    [TicketStatus.OPEN]: "Open",
    [TicketStatus.IN_PROGRESS]: "In Progress",
    [TicketStatus.CLOSED]: "Closed"
  };
  return statusMap[status];
};

// Format priority to display text
export const formatPriority = (priority: TicketPriority): string => {
  return priority;
};

// Format ticket ID
export const formatTicketId = (id: string): string => {
  return `#${id}`;
};