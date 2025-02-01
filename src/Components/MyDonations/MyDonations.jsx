import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

export default function MyDonations() {
  const allCampaigns = useLoaderData();

  const { user } = useContext(AuthContext);

  const myDonations = allCampaigns.filter((campaign) =>
    campaign?.donatedEmails?.includes(user?.email)
  );

  return (
    <div>
      {myDonations.length === 0 ? (
        <div className="w-11/12 md:w-4/5 mx-auto my-20 text-center">
          <h2>Oops! No donations here.</h2>
        </div>
      ) : (
        <div className="my-10">
          <h2 className="text-2xl font-semibold text-center pb-10">
            My Donations
          </h2>
          <div className="w-11/12 md:w-4/5 mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {myDonations.map((donation) => (
              <div key={donation._id} className="card bg-base-100 shadow-xl">
                <figure className="h-52">
                  <img
                    className="object-cover h-full w-full"
                    src={donation.photo}
                    alt="image"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {donation.name}
                    <div className="badge badge-secondary">donated</div>
                  </h2>
                  <p>{donation.description}</p>
                  <div className="card-actions justify-start">
                    <div className="badge badge-outline">{donation.type}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
