// Priority levels for tickets
export const TicketPriority = {
  HIGH: "High priority",
  MEDIUM: "Medium priority",
  LOW: "Low priority"
} as const;

export type TicketPriority = typeof TicketPriority[keyof typeof TicketPriority];

// Status types for tickets
export const TicketStatus = {
  OPEN: "Open",
  RESOLVED: "Resolved",
  IN_PROGRESS: "In Progress",
  CLOSED: "Closed"
} as const;

export type TicketStatus = typeof TicketStatus[keyof typeof TicketStatus];

// Navigation menu items
export const NavigationItem = {
  DASHBOARD: "Dashboard",
  TICKET_MANAGEMENT: "Ticket Management",
  REPORTS: "Reports",
  SETTINGS: "Settings"
} as const;

export type NavigationItem = typeof NavigationItem[keyof typeof NavigationItem];