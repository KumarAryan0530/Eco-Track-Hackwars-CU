# Eco Track

## Background

Global warming, primarily driven by human activities like fossil fuel combustion, deforestation, and inefficient agriculture, has significantly worsened climate change. India, being the third-largest emitter of greenhouse gases (GHGs), faces substantial challenges in controlling emissions, particularly in coal-based electricity production and agriculture. These inefficiencies result in environmental degradation and extreme weather events.

## Problem

India's reliance on coal for energy and inefficient agricultural water management contribute heavily to GHG emissions. Furthermore, the lack of real-time data on energy usage and emissions hinders efforts to reduce these emissions effectively at the urban and national levels.

## Objective

To design and develop a prototype system combining hardware and software that enables real-time tracking of GHG emissions, improving urban energy efficiency and reducing the carbon footprint. This system should also support a marketplace for carbon credits, helping individuals, businesses, and governments to monitor, predict, and manage emissions.
## Overview
Eco Track is a decentralized platform designed for eco-friendly transactions using blockchain technology. The project consists of both a web and a mobile application, allowing users to interact with the platform on various devices.

## Prerequisites
For both the web and mobile applications, ensure the following are installed:
- **Node.js** (https://nodejs.org/)
- **npm** (comes with Node.js)
- **Yarn** (for mobile) (https://yarnpkg.com/)
- **XDC Wallet**  
  The XDC Wallet is required for handling transactions. Install it from the Chrome Web Store:  
  [XDC Wallet Extension](https://chrome.google.com/webstore/detail/xdc-wallet)

## Web Application

### Installation


**Install Node Modules**
  
   npm install

### Running the Web Application

1. **Start the Node.js Server**
   nodemon app.js
   The application will start at: `localhost:52331`

2. **Configure XDC Wallet**
   Ensure that the XDC Wallet is installed and configured for managing transactions on the platform.


## Mobile Application

### Installation
**Install Dependencies**
   
   yarn

### Running the Mobile Application

1. **Start the App**
   yarn start

2. **Run on Specific OS**
   For iOS:
   yarn ios
   For Android:
   yarn android

