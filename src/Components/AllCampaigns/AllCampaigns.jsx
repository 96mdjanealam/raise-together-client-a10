import { DateTime } from "luxon";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

export default function AllCampaigns() {
  const allCampaigns = useLoaderData();
  // console.log(allCampaigns);
  const [campaigns, setCampaigns] = useState(allCampaigns);
  const [sort, setSort] = useState(false);
  const handleSortByMinDonation = () => {
    setSort(!sort);
    if (sort) {
      setCampaigns(allCampaigns);
    } else {
      const sortedCampaigns = [...campaigns].sort(
        (a, b) => a.min_donation - b.min_donation
      );
      setCampaigns(sortedCampaigns);
    }
  };

  return (
    <div className=" w-11/12 md:w-4/5 my-10 mx-auto">
      <h2 className="text-2xl font-semibold text-center pb-10">
          All Campaigns
        </h2>
      <button
        className={`btn ${
          sort
            ? "text-green-600 bg-green-100 hover:bg-green-200"
            : "text-gray-700"
        } btn-sm mb-4 `}
        onClick={handleSortByMinDonation}
      >
        {sort ? "Sorted" : "Sort"} by minimum donation amount
      </button>
      <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th >Sl</th>
            <th>Name</th>
            <th>Type</th>
            <th>Min Donation</th>
            <th>Deadline</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {campaigns.map((campaign, idx) => {
            const formattedDeadline = DateTime.fromISO(
              campaign.deadline
            ).toFormat("dd MMMM, yyyy");
            return (
              <tr key={campaign._id}>
                <th>{idx + 1}</th>
                <td>{campaign.name}</td>
                <td>{campaign.type}</td>
                <td>{campaign.min_donation}</td>
                <td>{formattedDeadline}</td>
                <td className="flex justify-end">
                  <Link to={`/allCampaigns/campaignDetails/${campaign._id}`}>
                    <button className="btn btn-sm text-blue-600">
                      See More
                    </button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
      
    </div>
  );
}
