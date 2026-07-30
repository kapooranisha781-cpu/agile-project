import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTicket } from "../api/ticketsApi";

export const useUpdateTicket = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTicket,

    onMutate: async (updatedTicket) => {
      await queryClient.cancelQueries({
        queryKey: ["tickets"],
      });

      const previousTickets =
        queryClient.getQueryData(["tickets"]);

      queryClient.setQueryData(["tickets"], (old = []) =>
        old.map((ticket) =>
          ticket.id === updatedTicket.id
            ? { ...ticket, ...updatedTicket }
            : ticket
        )
      );

      return { previousTickets };
    },

    onError: (error, updatedTicket, context) => {
      queryClient.setQueryData(
        ["tickets"],
        context.previousTickets
      );
    },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["tickets"],
      });
    },
  });
};