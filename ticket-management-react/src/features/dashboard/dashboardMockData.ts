import { TicketPriority, TicketStatus } from './enums';

// Data passed as props to the root component
export const mockRootProps = {
  stats: {
    totalTickets: {
      count: 1248,
      change: 5,
      timeframe: "vs last week" as const
    },
    openTickets: {
      count: 342,
      change: -3,
      timeframe: "today" as const
    },
    resolvedTickets: {
      count: 876,
      change: 12,
      timeframe: "this week" as const
    }
  },
  recentActivity: [
    {
      id: 45672,
      title: "Login page down for EU region",
      priority: TicketPriority.HIGH,
      status: TicketStatus.OPEN
    },
    {
      id: 45641,
      title: "Email replies delayed",
      priority: TicketPriority.MEDIUM,
      status: TicketStatus.OPEN
    },
    {
      id: 45590,
      title: "Payment gateway timeout",
      priority: TicketPriority.HIGH,
      status: TicketStatus.RESOLVED
    }
  ],
  currentUser: {
    name: "User"
  }
};