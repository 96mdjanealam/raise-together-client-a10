import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";

export default function AddNewCampaign() {
  const { user } = useContext(AuthContext);
 
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

    const newCampaign = {
      name,
      photo,
      type,
      description,
      min_donation,
      deadline,
      email,
      username,
    };
 

    fetch("https://b10-a10-server-side-96mdjanealam.vercel.app/addCampaigns", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCampaign),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Campaign Created Successfully", {
          position: "top-center",
        });
        form.reset();
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10 my-4">
        <h2 className="text-2xl font-semibold text-center pb-10">
          Add New Campaign
        </h2>
        <form onSubmit={handleSubmit} className="card-body p-0">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Campaign Name</span>
            </label>
            <input
              name="name"
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
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select a type
              </option>{" "}
      
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
              Add Campaign
            </button>
          </div>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
}
