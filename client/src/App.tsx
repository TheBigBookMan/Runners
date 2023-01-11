import { Provider as UserProvider } from "./assets/contexts/UserContext";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import Pages from "./assets/pages/Pages";
import { setContext } from "@apollo/client/link/context";

// * running application where import strava data on runs
// https://developers.strava.com/docs/reference/

//* have user login and have friends

//* create specific groups with people

//* strava API gets the users logged runs everyday and uploads the data to the page

// * can have categories- most km run this week/month/year, quickest run, furthest run etc

//* goup can create a betting system and it automaticall calculate the winner by calculating that specific category

//* if wanted to take step further, add in crypto wallet and smart contracts so users can actually put friendly wages on and automatically gets transacted

//* database use MongoDB because not relational, just adding running data and then comparing to others

const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
});

const authLink = setContext((_, { headers }) => {
  const user = JSON.parse(localStorage.getItem("user") as string);
  if (user === null) {
    return;
  }

  const { token } = user;
  console.log(headers);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <UserProvider>
        <Pages />
      </UserProvider>
    </ApolloProvider>
  );
}

export default App;
