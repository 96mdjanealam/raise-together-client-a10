import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export default function UpdateCampaign() {
  const campaign = useLoaderData();
  // console.log(campaign);

  const { _id, name, photo, type, description, min_donation, deadline } =
    campaign;

  const { user } = useContext(AuthContext);
  // console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const type = form.type.value;
    const description = form.description.value;
    const min_donation = parseInt(form.min_donation.value);
    const deadline = form.deadline.value;
    const email = form.email.value;
    const username = form.username.value;

    const updatedCampaign = {
      name,
      photo,
      type,
      description,
      min_donation,
      deadline,
      email,
      username,
    };
    // console.log(updatedCampaign);
    fetch(`https://b10-a10-server-side-96mdjanealam.vercel.app/updateCampaign/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCampaign),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount) {
          toast.success("Campaign Updated", {
            position: "top-center",
          });
        }
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10 my-4">
        <h2 className="text-2xl font-semibold text-center pb-10">
          Update Campaign
        </h2>
        <form onSubmit={handleSubmit} className="card-body p-0">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Campaign Name</span>
            </label>
            <input
              name="name"
              defaultValue={name}
              type="text"
              placeholder="name"
              className="input input-bordered rounded-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image / Thumbnail</span>
            </label>
            <input
              name="photo"
              defaultValue={photo}
              type="text"
              placeholder="photo-URL"
              className="input input-bordered rounded-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Campaign type</span>
            </label>
            <select
              name="type"
              className="select select-bordered rounded-full"
              defaultValue={type}
              required
            >
              <option value="" disabled>
                Select a type
              </option>{" "}
              {/* Placeholder option */}
              <option value="personal-issue">Personal Issue</option>
              <option value="startup">Startup</option>
              <option value="business">Business</option>
              <option value="creative-ideas">Creative Ideas</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              name="description"
              defaultValue={description}
              type="text"
              placeholder="Description"
              className="input input-bordered rounded-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Minimum donation amount</span>
            </label>
            <input
              name="min_donation"
              defaultValue={min_donation}
              type="number"
              placeholder="Donation amount"
              className="input input-bordered rounded-full no-arrows"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Deadline</span>
            </label>
            <input
              name="deadline"
              defaultValue={deadline.split("T")[0]}
              type="date"
              className="input input-bordered rounded-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              value={user?.email}
              placeholder="email"
              className="input input-bordered rounded-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">User name</span>
            </label>
            <input
              name="username"
              type="text"
              value={user?.displayName}
              placeholder="email"
              className="input input-bordered rounded-full"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-neutral rounded-full">
              Update
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
