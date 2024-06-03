"use client";
import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TbHandClick } from "react-icons/tb";
import axios from "axios";

export default function FormDialog() {
  const [data, setData] = useState(null);
  const [message, setMessage] = useState("");
  const [mainStatus, setMainStatus] = useState("Pending");
  const [status, setStatus] = useState("Pending");
  const [isPending, setIsPending] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://91htv6ktm9.execute-api.us-east-1.amazonaws.com/dev/invitation/a3768607-75fd-4d77-a591-5b3b80de88c1"
        );

        console.log(response.data)
        setData(response.data);
       
        setMainStatus(response.data.data.invitor_main_name.rspv_status);
        setStatus(response.data.data.other_invitor[0].rspv_status);
        
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once

  const handleSubmit = (e) => {
    e.preventDefault(); //prevent refreshing while submitting
    setIsPending(true);

    const updatedData = data.data
    updatedData.invitor_main_name.rspv_status = mainStatus
    updatedData.other_invitor[0].rspv_status = status

    // const updatedData = {
    //   invitation_id: "665de4535c1bbad6a691a3cd",
    //   invitation_count: 3,
    //   invitor_name_for_card: "Aminda aiya and Bavi akka",
    //   invitor_main_name: {
    //     invitor_id: "665de4535c1bbad6a691a3cb",
    //     invitor_name: "Aminda aiya",
    //     rspv_status: mainStatus,
    //     invitor_type: "main",
    //   },
    //   other_invitor: [
    //     {
    //       invitor_id: "665de4535c1bbad6a691a3cc",
    //       invitor_name: "Bavi akka",
    //       rspv_status: status,
    //       invitor_type: "sub",
    //     },
      
    //   ],
    // };

    const headers = {
      "Content-Type": "application/json", // Example header
      // Add more headers if needed
    };
    axios
      .put(
        "https://91htv6ktm9.execute-api.us-east-1.amazonaws.com/dev/invitation/665de4535c1bbad6a691a3cd",
        updatedData,
        { headers }
      )
      .then((response) => {
        // Handle success
        console.log("PUT request successful:", response.data);
        console.log({ updatedData });
        console.log(data.data.invitor_main_name.invitor_name);
        console.log(data.data.invitation_id);
        setIsPending(false);
        setOpen(false); // Close the dialog after successful submission
      })
      .catch((error) => {
        // Handle error
        console.error("Error making PUT request:", error);
        setIsPending(false);
      });
  };

  return (
    <React.Fragment>
      <div className="pt-10 pb-10 text-center justify-center">
        <button
          onClick={handleClickOpen}
          className="border border-black sm:pr-20 pr-3 pt-1 pb-1 pl-3 sm:pl-20 rounded text-smd font-m text-black"
        >
          RSVP
          <TbHandClick className="ml-3 scale-75" />
        </button>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className="font-gilda-display">
          Please confirm your participation
        </DialogTitle>
        <DialogContent>
          <DialogContentText className="font-gilda-display">
            We truly appreciate your presence. Please RSVP at the end of May if
            possible.
          </DialogContentText>
          {data && (
            <form onSubmit={handleSubmit}>
              <div className="flex justify-between pt-3">
                <label className="pb-1 text-lg font-gilda-display text-black ">
                  {data.data.invitor_main_name.invitor_name}
                </label>
                <div className="relative">
                  <select
                    className="appearance-none border border-gray-300 rounded px-4 py-2 pr-8 focus:outline-none focus:border-blue-500"
                    value={mainStatus}
                    onChange={(e) => setMainStatus(e.target.value)}
                  >
                    <option className="bg-white text-gray-800" value="pending">
                      Pending
                    </option>
                    <option className="bg-white text-gray-800" value="confirm">
                      Confirm
                    </option>
                    <option className="bg-white text-gray-800" value="denied">
                      Denied
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    {/* <!-- Replace 'Dropdown Icon SVG' with your SVG code or icon --> */}
                    <svg
                      className="w-6 h-6 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              {data.data.other_invitor.map((invitor) => (
                <div
                  key={invitor.invitor_id}
                  className="flex justify-between pt-3"
                >
                  <label className="pb-1 text-lg font-gilda-display text-black ">
                    {invitor.invitor_name}
                  </label>

                  <div className="relative">
                    <select
                      className="appearance-none border border-gray-300 rounded px-4 py-2 pr-8 focus:outline-none focus:border-blue-500"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option
                        className="bg-white text-gray-800"
                        value="pending"
                      >
                        Pending
                      </option>
                      <option
                        className="bg-white text-gray-800"
                        value="confirm"
                      >
                        Confirm
                      </option>
                      <option className="bg-white text-gray-800" value="denied">
                        Denied
                      </option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      {/* <!-- Replace 'Dropdown Icon SVG' with your SVG code or icon --> */}
                      <svg
                        className="w-6 h-6 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
              <div className="pt-5">
                <label className="pb-1 text-lg font-gilda-display text-black pr-5">
                  Message
                </label>
                <div>
                  {" "}
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-black resize-none w-full"
                    style={{
                      maxWidth: "300px",
                      height: "80px",
                      overflowWrap: "break-word",
                    }}
                  />
                </div>
              </div>

              <div className="flex justify-end pt-10">
                {" "}
                <button onClick={handleClose} className="text-black pr-10">
                  Cancel
                </button>{" "}
                {!isPending && <button>Submit</button>}
                {isPending && <button disabled>Sending submission.....</button>}
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
