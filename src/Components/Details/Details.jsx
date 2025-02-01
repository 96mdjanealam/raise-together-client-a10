import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import { DateTime } from "luxon";
import { toast, ToastContainer } from "react-toastify";
import { Tooltip } from "react-tooltip";

export default function Details() {
  const allCampaigns = useLoaderData();

  const { id } = useParams();

  const { user } = useContext(AuthContext);

  const campaign = allCampaigns.find((campaign) => campaign._id == id);

  const {
    _id,
    deadline,
    description,
    email,
    min_donation,
    name,
    photo,
    type,
    username,
  } = campaign;

  const handleDonate = (id, email) => {
    const currentDate = DateTime.now();
    const campaignDeadline = DateTime.fromISO(deadline);



    if (currentDate > campaignDeadline) {
      toast.error("Sorry, the deadline has passed.", {
        position: "top-center",
      });
      return;
    }

    const donationInfo = { email };
    fetch(`https://b10-a10-server-side-96mdjanealam.vercel.app/donation/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(donationInfo),
    })
      .then((res) => res.json())
      .then((data) => {
       
        if (data.modifiedCount) {
          toast.success("Thank you for your donation!", {
            position: "top-center",
          });
        } else {
          toast.warn("You already donated for this campaign!", {
            position: "top-center",
          });
        }
      });
  };
  const formattedDeadline =
    DateTime.fromISO(deadline).toFormat("dd MMMM, yyyy");

  return (
    <div className="py-16">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-11/12 lg:w-2/3 mx-auto my-10 border-slate-500 border-2">
        <img
          src={photo}
          alt=""
          className="w-full md:w-1/2 h-48 md:h-auto object-cover"
        />

        <div className="flex flex-col justify-between p-6 w-full md:w-1/2">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
            <p className="text-gray-600 mb-4">{description}</p>
          </div>

          <div>
            <div className="text-sm text-gray-500 mb-2">
              <strong>Type:</strong>{" "}
              <span className="text-blue-600">{type}</span>
            </div>
            <div className="text-sm text-gray-500 mb-2">
              <strong>Deadline:</strong>{" "}
              <span className="text-blue-600">{formattedDeadline}</span>
            </div>
            <div className="text-sm text-gray-500 mb-2">
              <strong>minimum donation amount: BDT </strong>{" "}
              <span>{min_donation}</span>
            </div>
            <div className="text-sm text-gray-500 mb-2">
              <strong>Added by: </strong> <span>{username}</span>
            </div>
            <p className="text-gray-500 font-semibold">
              Contact{" "}
              <a className="text-blue-500 font-bold" href={`mailto:${email}`}>
                {email}
              </a>
            </p>
            <button
              onClick={() => handleDonate(_id, user?.email)}
              className="btn mt-4 btn-success w-full" data-tooltip-id="my-tooltip" data-tooltip-content="Donate and contribute to the humankind 😊" data-tooltip-place="bottom"
            >
              Donate
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
      <Tooltip id="my-tooltip"/>
    </div>
  );
}
