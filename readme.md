# **Eco Track**

## **Background**

Global warming, primarily driven by human activities such as fossil fuel combustion, deforestation, and inefficient agricultural practices, has significantly accelerated climate change. India, the third-largest emitter of greenhouse gases (GHGs), faces major challenges in reducing emissions, particularly in coal-based electricity production and agriculture. These inefficiencies result in environmental degradation and extreme weather events.

## **Problem**

India's heavy reliance on coal for energy production and inefficient agricultural water management are major contributors to GHG emissions. Additionally, the lack of real-time data on energy usage and emissions hampers efforts to reduce them at both urban and national levels.

## **Objective**

The goal is to design and develop a prototype system combining hardware and software that enables **real-time tracking of GHG emissions**, with the aim of improving urban energy efficiency and reducing the overall carbon footprint. This system should also support a marketplace for carbon credits, enabling individuals, businesses, and governments to monitor, predict, and manage emissions effectively.

---

## **Overview**

**Eco Track** is a decentralized platform designed for eco-friendly transactions utilizing **blockchain technology**. The project consists of both a **web application** and a **mobile application**, allowing users to interact with the platform across different devices.

---

## **Prerequisites**

For both the web and mobile applications, ensure the following tools are installed:

- **Node.js**: [Node.js Download](https://nodejs.org/)
- **npm**: (Automatically installed with Node.js)
- **Yarn**: (for mobile application) [Yarn Installation](https://yarnpkg.com/)
- **XDC Wallet**:  
  The XDC Wallet is required for managing transactions. You can install it from the Chrome Web Store:  
  [XDC Wallet Extension](https://chrome.google.com/webstore/detail/xdc-wallet)

---

## **Web Application**

### **Installation**

1. **Install Node Modules:**

   ```bash
   npm install
   ```

### **Running the Web Application**

1. **Start the Node.js Server:**

   ```bash
   nodemon app.js
   ```

   The application will start and be accessible at: `http://localhost:52331`

2. **Configure XDC Wallet:**

   Ensure that the XDC Wallet is installed and properly configured to handle transactions on the platform.

---

## **Mobile Application**

### **Installation**

1. **Install Dependencies:**

   ```bash
   yarn
   ```

### **Running the Mobile Application**

1. **Start the App:**

   ```bash
   yarn start
   ```

2. **Run on a Specific OS:**

   - For **iOS**:  
     ```bash
     yarn ios
     ```

   - For **Android**:  
     ```bash
     yarn android
     ```