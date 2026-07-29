import { useQuery } from "@tanstack/react-query";
import { getTickets } from "../api/ticketsApi";

export const useTickets = () => {
  return useQuery({
    queryKey: ["tickets"],
    queryFn: getTickets,
  });
};