# About This Project

This is NFT minitng react appllication in which you can mint the nft (i used the doodles NFT uris). This project is deployed on the sepolia testnet and soon after complition this will be deployed on netlify. thanks.

## `Project Status : NOT COMPLETED`

### `Notes for next time (for admin  only) : `

1. the pre-sale schedule time is updated in the store successfully but when you came to the landing page its shows the initial value.

2. Some pages are not responsive

3. when you update the nft price in admin page (to goto admin page localhost:3000/secret manually ) then after updating it gives runtime error called can't convert "newPriceValue" to BigInt. but it successfully updates the value in the contract . so when you reload the page it runs correctly.

4. the featured NFTs pictures are not added yet add it by fetching the "generalURI/randomNumber" and then it will gives matadata then use it its name and the image URI.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
