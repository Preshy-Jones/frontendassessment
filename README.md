This blog application using built with Nextjs and consumed a graphql api created with a headless content management system, GraphCMS(now recetly known as Hygraph).

Chakra ui was chosen as the ui library and typescript for more support.

I queried the back end api using Apollo client and redux toolkit for global state management.

I used Apollo client's useQuery hook to query teh graphql api when the page is rendered, and dispayed the data on the front end.
Using the gql function from Apollo and I gueried the title, category, excerpt, image url,date created and minute read fields of each post from the graphql Api.

I used the refetch function returned from the useQuery hook to handle filtering of data to make subsequent requests to the api and change the query parameters.
To handle search, I used Apollo client's useLazyQuery instead because unlike the useQuery hook which queries the Api once the it is initialized, the useLazyQuery hook allows me to only query graphql api when I decide to(in this case when a user submits his search value).

I used the redux toolkit to save the search Value of the user and a boolean "isSearch" to check if a user in the default mode or search mode.
