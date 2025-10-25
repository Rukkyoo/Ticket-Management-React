import type { TicketPriority, TicketStatus } from './enums';


export interface DashboardProps {
  stats: StatsData;
  recentActivity: Ticket[];
  currentUser: User;
}

export interface StatsData {
  totalTickets: StatMetric;
  openTickets: StatMetric;
  resolvedTickets: StatMetric;
}

export interface StatMetric {
  count: number;
  change: number;
  timeframe: "vs last week" | "today" | "this week";
}

export interface Ticket {
  id: number;
  title: string;
  priority: TicketPriority;
  status: TicketStatus;
}

export interface User {
  name: string;
}