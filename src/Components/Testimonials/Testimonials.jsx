import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { FaStar } from "react-icons/fa6";

export default function Testimonials() {
  return (
    <div className="py-16 bg-teal-200">
      <h2 className="text-center text-4xl mb-10 text-white">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-10/12 sm:w-11/12 mx-auto gap-14 my-10">
        <Card
          color="transparent"
          shadow={false}
          className="w-full max-w-[26rem]"
        >
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="mx-0 flex items-center gap-4 pt-0 pb-8"
          >
            <Avatar
              size="lg"
              variant="circular"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Ayesha"
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <Typography variant="h5" className="text-blue-900">
                  Ayesha
                </Typography>
                <div className="5 flex items-center gap-0">
                  <FaStar className="text-white" />
                  <FaStar className="text-white" />
                  <FaStar className="text-white" />
                  <FaStar className="text-white" />
                  <FaStar className="text-white" />
                </div>
              </div>
              <Typography className="text-blue-900">Noakhali</Typography>
            </div>
          </CardHeader>
          <CardBody className="mb-6 p-0">
            <Typography>
              &quot;Thanks to your generous donations, my family received the
              medical aid we desperately needed after the flood. We are forever
              grateful for your kindness and support during such a difficult
              time.&quot;
            </Typography>
          </CardBody>
        </Card>
        <Card
          color="transparent"
          shadow={false}
          className="w-full max-w-[26rem]"
        >
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="mx-0 flex items-center gap-4 pt-0 pb-8"
          >
            <Avatar
              size="lg"
              variant="circular"
              src="https://images.unsplash.com/photo-1583341612074-ccea5cd64f6a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Rahim"
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <Typography variant="h5" className="text-blue-900">
                  Rahim
                </Typography>
                <div className="5 flex items-center gap-0">
                  <FaStar className="text-white" />
                  <FaStar className="text-white" />
                  <FaStar className="text-white" />
                  <FaStar className="text-white" />
                  <FaStar className="text-white" />
                </div>
              </div>
              <Typography className="text-blue-900">
                Community Leader
              </Typography>
            </div>
          </CardHeader>
          <CardBody className="mb-6 p-0">
            <Typography>
              &quot;Your contributions helped us rebuild our school after the
              disaster. Today, children can learn in a safe and supportive
              environment again. Thank you for giving us hope and a fresh
              start.&quot;
            </Typography>
          </CardBody>
        </Card>
        <Card
          color="transparent"
          shadow={false}
          className="w-full max-w-[26rem]"
        >
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="mx-0 flex items-center gap-4 pt-0 pb-8"
          >
            <Avatar
              size="lg"
              variant="circular"
              src="https://plus.unsplash.com/premium_photo-1670282393321-b34c6a4695b0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Selina"
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <Typography variant="h5" className="text-blue-900">
                  Selina
                </Typography>
                <div className="5 flex items-center gap-0">
                  <FaStar className="text-white" />
                  <FaStar className="text-white" />
                  <FaStar className="text-white" />
                  <FaStar className="text-white" />
                  <FaStar className="text-white" />
                </div>
              </div>
              <Typography className="text-blue-900">Flood Survivor</Typography>
            </div>
          </CardHeader>
          <CardBody className="mb-6 p-0">
            <Typography>
              &quot;I had lost everything, but the relief packages provided
              through this organization gave me a chance to stand on my feet
              again. Every donation truly makes a difference.&quot;
            </Typography>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
