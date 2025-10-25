import { TicketStatus, TicketPriority } from './enums';

// Mock data for tickets list
export const mockQuery = {
  tickets: [
    {
      id: "45672",
      name: "Login page down for EU region",
      description: "Users in EU cannot access login. Observed 502s from edge POPs since 08:12 UTC.",
      status: TicketStatus.OPEN,
      priority: TicketPriority.HIGH,
      assignee: "Alice",
      tags: ["auth", "incident"]
    },
    {
      id: "45641",
      name: "Email replies delayed",
      description: "Email notifications are delayed by 2-3 hours",
      status: TicketStatus.IN_PROGRESS,
      priority: TicketPriority.MEDIUM,
      assignee: "Marcus",
      tags: ["email"]
    },
    {
      id: "45590",
      name: "Payment gateway timeout",
      description: "Payment processing times out after 30 seconds",
      status: TicketStatus.CLOSED,
      priority: TicketPriority.LOW,
      assignee: "High",
      tags: ["payments"]
    }
  ]
};

// Mock root props (if any additional data needed from parent)
export const mockRootProps = {
  currentUser: "Admin User"
};