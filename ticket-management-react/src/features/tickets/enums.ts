// Status enum for tickets
export const TicketStatus = {
  OPEN: "open",
  IN_PROGRESS: "in_progress",
  CLOSED: "closed"
} as const;

export type TicketStatus = typeof TicketStatus[keyof typeof TicketStatus];

// Priority enum for tickets
export const TicketPriority = {
  HIGH: "High",
  MEDIUM: "Medium",
  LOW: "Low"
} as const;

export type TicketPriority = typeof TicketPriority[keyof typeof TicketPriority];

// Action types for ticket operations
export const TicketAction = {
  CREATE: "create",
  READ: "read",
  UPDATE: "update",
  DELETE: "delete"
} as const;

export type TicketAction = typeof TicketAction[keyof typeof TicketAction];