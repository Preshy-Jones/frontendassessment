This blog application using built with Nextjs and consumed a graphql api created with a headless content management system, GraphCMS(now recetly known as Hygraph).

Chakra ui was chosen as the ui library and typescript for more support.

I queried the back end api using Apollo client and redux toolkit for global state management.

I used Apollo client's useQuery hook to query teh graphql api when the page is rendered, and dispayed the data on the front end.
Using the gql function from Apollo and I gueried the title, category, excerpt, image url,date created and minute read fields of each post from the graphql Api