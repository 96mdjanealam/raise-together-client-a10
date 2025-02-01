import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function RunningCampaign() {
  const [runningCampaigns, setRunningCampaigns] = useState([]);

  useEffect(() => {
    fetch("https://b10-a10-server-side-96mdjanealam.vercel.app/runningCampaigns")
      .then((res) => res.json())
      .then((data) => {
        setRunningCampaigns(data);
      });
  }, []);

  return (
    <div className="w-11/12 md:w-4/5 mx-auto my-20">
      <h2 className="text-center text-4xl mb-10 text-gray-500">
        Running Campaigns
      </h2>

      <div className=" grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {runningCampaigns.map((campaign) => {
          const formattedDeadline = DateTime.fromISO(
            campaign.deadline
          ).toFormat("dd MMMM, yyyy");
          return (
            <div key={campaign._id} className="card bg-base-100 shadow-xl">
              <figure className="h-52">
                <img
                  className="object-cover h-full w-full"
                  src={campaign.photo}
                  alt="image"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{campaign.name}</h2>
                <div className="card-actions justify-start">
                  <div className="badge badge-outline">{campaign.type}</div>
                </div>
                <p>{campaign.description}</p>
                <p>
                  Deadline:{" "}
                  <span className="text-blue-600 font-semibold">
                    {formattedDeadline}
                  </span>{" "}
                </p>
                <p>
                  Minimum donation amount: BDT
                  <span className="font-semibold">
                    {" "}
                    {campaign.min_donation}
                  </span>
                </p>
                <Link to={`/allCampaigns/campaignDetails/${campaign._id}`}>
                  <button className="btn btn-outline btn-primary mt-4 w-full">
                    See More
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
