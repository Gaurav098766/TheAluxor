# MERNHotelBooking
MERN Stack Hotel Booking App

MongoDB Express React NodeJs

## Run Server [NodeJs at server folder]

##### DB Configuration

Please edit **db.js** mongodb connection string 

![image](https://user-images.githubusercontent.com/97042529/226100016-f52d4412-3d60-4e7b-9e56-ad11d049a708.png)

You may import the sample collections at **mongodb_collections** folder

**mongodb screenshot**

![image](https://user-images.githubusercontent.com/97042529/226100057-f588b9bb-0c50-49c4-9f08-483256ba4846.png)

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

## Sample Screenshots

#### Landing Page

username: user@gmail.com

password: 123456

![SampleCancel](https://user-images.githubusercontent.com/97042529/224918631-f195d2d6-7610-495d-8b97-84296101aaac.gif)


#### Profile

![SampleCancel-min](https://user-images.githubusercontent.com/97042529/224918705-a91c1ce8-fb31-4d4c-b30c-b9a2e8a03ba5.gif)


#### Admin Page

![SampleAdmin-min](https://user-images.githubusercontent.com/97042529/224918741-a69baaa2-c523-4288-9b6d-5035bf23f681.gif)


