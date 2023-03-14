# MERNHotelBooking
MERN Stack Hotel Booking App

MongoDB Express React NodeJs

## Run Server [NodeJs at server folder]

##### DB Configuration

Please edit **db.js** mongodb connection string 

<img src="https://github.com/ongyishen/MERNHotelBooking/blob/main/ServerDBConfig.PNG?raw=true" />

You may import the sample collections at **mongodb_collections** folder

**mongodb screenshot**

<img src="https://github.com/ongyishen/MERNHotelBooking/blob/main/SampleDB.PNG?raw=true" />

##### Stripe API Key Configuration

Please edit **bookingRoute.js** and put your stripe **private api key**

<img src="https://github.com/ongyishen/MERNHotelBooking/blob/main/StripePrivateAPIKey.PNG?raw=true" />

execute following command

```bash
npm i
```

start the server

```bash
nodemon server
```

##### npm package use:

- nodemon
- mongoose
- express
- router
- moment
- stripe
- uuid



## Run Client [ReactJs at client folder]

##### Server API Configuration

Please edit the **package.js** to correct Server API URL

<img src="https://github.com/ongyishen/MERNHotelBooking/blob/main/ClientServerProxy.PNG?raw=true" />

##### Stripe API Key Configuration

Please edit Bookingscreen.js and put your stripe **public api key**

<img src="https://github.com/ongyishen/MERNHotelBooking/blob/main/StripePublicAPIKey.PNG?raw=true" />

execute following command

```bash
npm i
```

start the client

```bash
npm start
```

##### npm package use:

- antd
- aos
- axios
- moment
- react-bootstrap
- react-router-dom
- react-stripe-checkout
- sweetalert2
