import { applications } from "../../../utils/applications";
import { ADD_APPLICATION } from "../../../graphql/queries";

// TODO This will be an add activity to database component and where the OAuth will happen once click on an app to link to the user will then be taken to the page to connect up their account and once that is PROPERLY DONE then the name is added to the database of the user

const ConnectApp = () => {
  return (
    <div className="rounded-2xl shadow-md flex flex-col h-5/6 p-2 bg-orange-200 m-2">
      <h1 className="font-bold text-3xl mx-auto text-orange-500">
        Connect Application
      </h1>
      <ul className="flex flex-col gap-2 p-2 h-full overflow-y-auto">
        {applications.map((app) => (
          <li
            key={app.name}
            className={`flex justify-between border-b p-2 cursor-pointer  hover:rounded-lg transition-all ${
              app.name === "Strava"
                ? "hover:bg-orange-300"
                : app.name === "Nike Training Club"
                ? "hover:bg-lime-500"
                : app.name === "Map My Run"
                ? "hover:bg-sky-300"
                : ""
            } `}
          >
            <h1
              className={`font-bold text-lg ${
                app.name === "Strava"
                  ? "text-orange-600"
                  : app.name === "Nike Training Club"
                  ? "text-lime-200"
                  : app.name === "Map My Run"
                  ? "text-sky-600"
                  : ""
              } `}
            >
              {app.name}
            </h1>
            <img
              src={app.logo}
              alt={app.name}
              className="h-20 w-20 rounded-lg"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConnectApp;
