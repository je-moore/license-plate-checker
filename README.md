For some of the cars that we list there is a need to show a formatted styled license plate and verify the car details for a specific license number.

After inputing a licensePlate number and a country it will:

- Validate (if possible).  A licence plate has a length of 6-9 character including depending on the country.
- Get some car data if this is a dutch licenceplate using the following end-point:

		https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken=licensePlate

- Show a styled license plate of the selected country as a result.  Use the following as a visual reference 

		https://upload.wikimedia.org/wikipedia/commons/e/eb/NL_license_plate.jpg

And some rules of the dutch licence plate and other countries:

		https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_the_Netherlands
		https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_France
		https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Belgium

Existing NL license plates for demonstration: `ZBLH89 PL39YG D644TB ZN74SX`

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
