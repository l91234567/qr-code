# qrCodeByText
A simple app for generate QR code by text, also work with website address
## Tools
Please have below installed in the system
1. npm
2. Redis

## How to use
1. Go to `client` folder in the terminal, and run the following commands
    - `npm install`
    - `npm run dev`
2. Go to `server` folder in the terminal, and run the following commands
    - `npm install`
    - `npm run dev`
3. Go to the page `http://localhost:5173` in browser

## Options
1. Uncomment `lines 22-23` in the `controllers.js` file inside the `server` folder to save the QR code locally in `QRImages` folder as .png file
2. Change `PORT` variable in the `.env` file inside the `server` folder to change the running port in case the port was in used by other process
    - make sure change `VITE_SERVER_PORT` variable in the `.env` file inside the `client` folder to the same value as the `PORT` variable to avoid error