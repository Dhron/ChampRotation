# ChampRotation
Using the League of Legends API to display the free champs of the week. 
This is in development and not usable at this point.

## To implement:  

### Back-end  
- Create database schema for champions
- Make api calls to serve champion name and image url to front end

### Front-end

- Expandable list structure using React
- Navigation, header, footer

## Quick Start Up:

```
 cd ChampRotation
 cd server
 npm install
 npm start
```

### Create Riot Game API Key

Make in api.js file in server:
```
var api = {}

api.key = 'YOUR_API_KEY'; 


///////////////////////////////////

module.exports = api;

```

Then in a new terminal tab:

```
cd client
npm install
yarn start
```

Note: to get MongoDB running, you need to install, and remove the comment in the models/Champions.js folder


