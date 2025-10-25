import { useState } from 'react';
import { ticketInstance } from '../axios/ticketAxiosInstance';
import type { Ticket, CreateTicketFormData } from '../features/tickets/types';

export const useTickets = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createTicket = async (data: CreateTicketFormData): Promise<Ticket> => {
    setLoading(true);
    setError(null);
    console.log('Sending ticket creation data:', data);
    try {
      const response = await ticketInstance.post<Ticket>('/ticket-create', data);
      setLoading(false);
      console.log('Created ticket:', response.data);
      return response.data;
    } catch (err: any) {
      console.error('Full error details:', err);
      console.error('Response data:', err.response?.data);
      if (err.response?.data?.errors) {
        console.error('Validation errors:', err.response.data.errors);
      }
      const errorMessage = err.response?.data?.message || 'Failed to create ticket';
      console.error('Create ticket error:', err);
      setError(errorMessage);
      setLoading(false);
      throw new Error(errorMessage);
    }
  };

  const getTicket = async (name: string): Promise<Ticket> => {
    setLoading(true);
    setError(null);
    try {
      const response = await ticketInstance.get<Ticket>(`/ticket-read/${name}`);
      setLoading(false);
      return response.data;
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || 'Failed to fetch ticket';
      setError(errorMessage);
      setLoading(false);
      throw new Error(errorMessage);
    }
  };

  const updateTicket = async (name: string, data: CreateTicketFormData): Promise<Ticket> => {
    setLoading(true);
    setError(null);
    try {
      const response = await ticketInstance.patch<Ticket>(`/ticket-update/${name}`, data);
      setLoading(false);
      return response.data;
    } catch (err: any) {
      console.error('Update ticket error details:', err);
      console.error('Response data:', err.response?.data);
      const errorMessage = err.response?.data?.message || 'Failed to update ticket';
      setError(errorMessage);
      setLoading(false);
      throw new Error(errorMessage);
    }
  };

  const deleteTicket = async (name: string): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      await ticketInstance.delete(`/ticket-delete/${name}`);
      setLoading(false);
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || 'Failed to delete ticket';
      setError(errorMessage);
      setLoading(false);
      throw new Error(errorMessage);
    }
  };

  return { createTicket, getTicket, updateTicket, deleteTicket, loading, error };
};