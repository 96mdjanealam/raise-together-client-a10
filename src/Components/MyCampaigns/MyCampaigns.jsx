import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import { DateTime } from "luxon";

export default function MyCampaigns() {
  const { user } = useContext(AuthContext);



  const allCampaigns = useLoaderData();

  const myCampaigns = allCampaigns.filter(
    (campaign) => campaign.email == user?.email
  );

  const [myNewCampaigns, setMyNewCampaigns] = useState(myCampaigns);

  const handleDelete = (id) => {
    fetch(`https://b10-a10-server-side-96mdjanealam.vercel.app/allCampaigns/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
      
        const remainingCampaigns = myNewCampaigns.filter(
          (campaign) => campaign._id !== id
        );
        setMyNewCampaigns(remainingCampaigns);
      });
  };

  return (
    <div>
      {myNewCampaigns.length === 0 ? (
        <div className="w-11/12 md:w-4/5 mx-auto my-20 text-center">
          <h2>Oops! No Campaigns here.</h2>
        </div>
      ) : (
        <div className=" md:w-4/5 mx-auto my-10 w-11/12">
          <h2 className="text-2xl font-semibold text-center pb-10">
            My Campaigns
          </h2>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Sl</th>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Min Donation</th>
                  <th>Deadline</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {myNewCampaigns.map((campaign, idx) => {
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
                      <td className="flex gap-2 justify-end">
                        <Link to={`/updateCampaign/${campaign._id}`}>
                          <button className="btn btn-sm text-green-600">
                            Update
                          </button>
                        </Link>
                        <button
                          onClick={() => handleDelete(campaign._id)}
                          className="btn btn-sm text-red-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
