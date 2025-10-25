import type { TicketStatus, TicketPriority } from './enums';

// Ticket type definition
export interface Ticket {
  id: string;
  name: string;
  description: string;
  status: TicketStatus;
  priority: TicketPriority;
  assignee: string;
  tags: string[];
}

// Query types (API response data)
export interface TicketsQueryResponse {
  tickets: Ticket[];
}

// Props types (data passed to components)
export interface TicketManagementProps {
  currentUser?: string;
}

// Form data types
export interface CreateTicketFormData {
  name: string;
  description: string;
  status: TicketStatus;
  priority: TicketPriority;
}

export interface UpdateTicketFormData extends CreateTicketFormData {
  id: string;
}

// Validation error type
export interface ValidationError {
  field: string;
  message: string;
}

// API error response type
export interface ApiErrorResponse {
  message: string;
  statusCode: number;
}