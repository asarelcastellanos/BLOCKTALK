## ChatSnap - A Snapchat base built on React Native & Expo

This was the base that was used to by all the teams during the Snap Academies 2022.

## Acknowledgements

Huge shoutout to the [Snap Engineering Academy 2022 Teaching Team](https://github.com/orgs/Snap-Engineering-Academy-2022/teams/teaching-team)

The base was built with knowledge and inspiration from this [React Native Activity](https://github.com/Snap-Engineering-Academy-2022/chapsnat_2022)

## Mobile Screenshots (Taken on iPhone 12 Pro)
[Screenshots](https://github.com/asarelcastellanos/BLOCKTALK/blob/base/SCREENSHOTS.md)

## Features
- Camera Page (with ablity to take pictures)
- Chat Page (with user chats from database)
- Conversation Page (conversations from database)
- Map Page (with React-Native-Maps integration and)
- Stories Page
- Spotlight Page

## Tech Stack

**Client:** React Native & Expo

**Server:** Firebase (FireStore & Storage)

## Additinal Files
 
In order for this app to run you will need a `fireabse.js` file that should look something like this: 

```javascript
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: [your info here],
  authDomain: [your info here],
  projectId: [your info here],
  storageBucket: [your info here],
  messagingSenderId:[your info here],
  appId: [your info here],
  measurementId: [your info here]
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;

```

## Run Locally

Clone the project

```bash
  ggit clone -b base https://github.com/asarelcastellanos/BLOCKTALK/

```

Go to the project directory

```bash
  cd BLOCKTALK
```

Install dependencies

```bash
  yarn install
```

Run on IOS

```bash
  expo start i
```

Run on ANDRIOD

```bash
  expo start a
```


