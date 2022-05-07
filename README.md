# Grocery List
## _Coding Exercise for Truxio_

This is a simple app created as a coding exercise for Truxio app using Angular and Dot Net core with Entity Framework.

The project is divided into two main folders:
### Backend: 
Created in visual studio 2022 using Entity Framework with Sqlite to manage the data. 
To run this application, go to the backend folder, then open the **GroceriesList-API** folder and then open the **GroceriesList-API.sln** solution. once the Visual Studio 2022 has opened the project, just Run the app by clicking the Play icon or just press F5 on your keyboard.

Once the app is running you'll see the swagger UI which will allow you to run the endpoints to test the functionality.

### Frontend:
Created using Angular 13 with Material UI. To run this app, open the folder in Visual Code and then run:

```sh 
 npm install
 npm start
```

The comunication between both environments is being done through web services and api. For external (non local) tests. Please refer to:

```sh
GroceryListApp/Frontend/GroceryList/src/environments/environment.ts
there, you'll find
apiUrl: 'https://localhost:7085/'
```

## Features

- Add a new Grocery to the list
- Delete a Grocery from the list
- Mark a grocery as done (or bought) from list
- Also you can run the tests by using the command 
```sh 
 ng test
```
For any other information contact me through: fidelduque@gmail.com

