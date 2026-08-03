import { useQuery } from "@tanstack/react-query";
import { getTickets } from "../api/ticketsApi";

export default function useTickets() {
  return useQuery({
    queryKey: ["tickets"],
    queryFn: getTickets,

  });
}