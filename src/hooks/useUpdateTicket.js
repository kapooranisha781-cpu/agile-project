import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTicket } from "../api/ticketsApi";
import toast from "react-hot-toast";

export default function useUpdateTicket() {

  const queryClient = useQueryClient();


  return useMutation({

    mutationFn: updateTicket,


    onMutate: async (updatedTicket) => {

      await queryClient.cancelQueries({
        queryKey: ["tickets"],
      });


      const previousTickets =
        queryClient.getQueryData([
          "tickets",
        ]);


      queryClient.setQueryData(
        ["tickets"],
        (oldTickets = []) =>
          oldTickets.map((ticket) =>
            ticket.id === updatedTicket.id
              ? {
                  ...ticket,
                  ...updatedTicket,
                }
              : ticket
          )
      );


      return {
        previousTickets,
      };

    },


    onError: (error, updatedTicket, context) => {

      if (context?.previousTickets) {

        queryClient.setQueryData(
          ["tickets"],
          context.previousTickets
        );

      }


      console.error(error);

      toast.error(
        "Failed to update ticket"
      );

    },


    onSuccess: () => {

      toast.success(
        "Ticket updated successfully"
      );

    },


    onSettled: () => {

      queryClient.invalidateQueries({
        queryKey: ["tickets"],
      });

    },

  });

}
