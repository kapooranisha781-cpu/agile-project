import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTicket } from "../api/ticketsApi";
import toast from "react-hot-toast";

export default function useDeleteTicket() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTicket,

    onMutate: async (id) => {
      await queryClient.cancelQueries({
        queryKey: ["tickets"],
      });

      const previousTickets =
        queryClient.getQueryData(["tickets"]);

      queryClient.setQueryData(
        ["tickets"],
        (oldTickets = []) =>
          oldTickets.filter(
            (ticket) => ticket.id !== id
          )
      );

      return { previousTickets };
    },

    onError: (error, id, context) => {
      if (context?.previousTickets) {
        queryClient.setQueryData(
          ["tickets"],
          context.previousTickets
        );
      }

      console.error(error);

      toast.error("Failed to delete ticket");
    },

    onSuccess: () => {
      toast.success("Ticket deleted");
    },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["tickets"],
      });
    },
  });
}