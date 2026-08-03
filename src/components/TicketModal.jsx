import { useEffect, useRef, useState } from "react";
import useUpdateTicket from "../hooks/useUpdateTicket";

import "../styles/TicketModal.css";


function TicketModal({ ticket, onClose }) {

  const titleRef = useRef(null);

  const { mutate } = useUpdateTicket();


  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "Medium",
    assignee: "",
  });


  // Load ticket data when modal opens
  useEffect(() => {

    if (ticket) {

      setFormData({
        title: ticket.title || "",
        description: ticket.description || "",
        priority: ticket.priority || "Medium",
        assignee: ticket.assignee || "",
      });


      titleRef.current?.focus();

    }

  }, [ticket]);



  // Escape key close
  useEffect(() => {

    function handleEscape(e) {

      if (e.key === "Escape") {
        onClose();
      }

    }


    document.addEventListener(
      "keydown",
      handleEscape
    );


    return () => {

      document.removeEventListener(
        "keydown",
        handleEscape
      );

    };

  }, [onClose]);



  if (!ticket) return null;



  const handleChange = (e) => {

    const { name, value } = e.target;


    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

  };



  const handleSave = () => {

    mutate(
      {
        ...ticket,
        ...formData,
      }
    );


    onClose();

  };



  return (

    <div
      className="modal-overlay"
      onClick={onClose}
    >


      <div
        className="modal"
        onClick={(e) =>
          e.stopPropagation()
        }
      >


        <div className="modal-header">

          <h2>Edit Ticket</h2>


          <button
            className="close-btn"
            onClick={onClose}
          >
            ✕
          </button>

        </div>



        <div className="modal-body">


          <label>
            Title
          </label>


          <input

            ref={titleRef}

            type="text"

            name="title"

            value={formData.title}

            onChange={handleChange}

          />



          <label>
            Description
          </label>


          <textarea

            rows="5"

            name="description"

            value={formData.description}

            onChange={handleChange}

          />



          <label>
            Priority
          </label>


          <select

            name="priority"

            value={formData.priority}

            onChange={handleChange}

          >

            <option value="High">
              High
            </option>


            <option value="Medium">
              Medium
            </option>


            <option value="Low">
              Low
            </option>


          </select>




          <label>
            Assignee
          </label>


          <input

            type="text"

            name="assignee"

            value={formData.assignee}

            onChange={handleChange}

          />


        </div>



        <div className="modal-footer">


          <button

            className="cancel-btn"

            onClick={onClose}

          >

            Cancel

          </button>



          <button

            className="save-btn"

            onClick={handleSave}

          >

            Save Changes

          </button>


        </div>



      </div>


    </div>

  );

}


export default TicketModal;