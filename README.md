# Final_Project_Frontend

The Front end of this project is composed by:

React:

Core Components:
- Header

- Search Bar

- Radio cards : That was used across different views, such as radio by country, radios by genre and most popular ones, to make use of modularity and reuse of code.

- AuthWrapper - We wrapped components with this component and accessing the provided AuthContext, we could easily access and manage authentication-related data and functions in our application. 

- We created a authenticateUser function that accesses the verification route (/auth/verify) in the backend to confirm the validity of the JWT (JSON Web Token) provided by the client. 

- The client sends the JWT as a bearer token in the request headers when making the GET request to the verification route. 

Context:
Player 
Auth 


- The information from one component to another was passed by props and context, and to manage and update the state of the components we used the React hooks such as useState and useEffect.

- We created a Radio Service file, with a class that encapsulates API communication for radio-related operations. it uses the Axios library to make HTTP requests to a specific API endpoint.

- CSS

- Figma to create the visual style of the website

- Deployment was made with netlify : https://www.radiowonders.netlify.com
