# **Bluestock Fintech - IPO Web Application & REST API**

## **Introduction**

Welcome to the **Bluestock Fintech IPO Web Application & REST API** project! This repository contains the development tasks for building an IPO-related web application and a REST API, designed to serve public and client needs. The project is part of the internship program at Bluestock Fintech, providing practical exposure to full-stack web development.

Our goal is to develop a feature-rich platform that displays detailed IPO-related information and offers users the ability to download essential documents like **RHP** and **DRHP** PDFs. 

This repository contains both the **web application** (UI) and the **REST API** backend components that deliver IPO-related data.

---

## **Objective**

The main objective of this project is to develop a **web application** and **REST API** to display IPO-related information to the public and integrate it into Bluestock Fintech’s website and our clients' websites. 

Key features of the application include:
- **IPO Information:** Company logo, name, price band, opening/closing dates, issue size, issue type, listing date, status, IPO price, listing price, listing gain, current market price (CMP), and current return.
- **Downloadable PDFs:** Users can download **RHP** (Red Herring Prospectus) and **DRHP** (Draft Red Herring Prospectus) documents.
- **Real-time Data:** Fetch live market data related to IPOs, including current returns and listing prices.

---

## **Project Structure**

- **Frontend (Web App):** 
  - Developed using modern web technologies (e.g., React, Angular, or Vue.js).
  - Responsive UI for a smooth user experience.
  - Displays IPO data in a clean and readable format.
  - Allows PDF downloads for RHP and DRHP.

- **Backend (REST API):**
  - Developed using **Node.js/Express** (or any other backend technology).
  - Serves IPO data through RESTful endpoints.
  - Handles real-time data fetching and processing.

---

## **Tech Stack**
- **Frontend:**
  - HTML5, CSS3, JavaScript (React, Angular, or Vue.js)
  - Responsive design (Bootstrap, Material UI)
  
- **Backend:**
  - Django 5.0.2 (or any other suitable backend framework)
  - RESTful API
  - Database: (MongoDB, MySQL, or PostgreSQL - depending on project needs)
  
- **Others:**
  - Git for version control
  - Postman for API testing
  - Docker for containerization (if required)

---

## **Installation Guide**

### Prerequisites
- **Node.js** and **npm** (or **yarn**) must be installed on your system.
- **Git** for cloning the repository.

### Clone the Repository

```bash
git clone https://github.com/your-username/ipo-web-app.git
cd ipo-web-app
```

### Install Dependencies

For frontend:
```bash
cd frontend
npm install
```

For backend:
```bash
cd backend
npm install
```

### Run the Application

- To run the frontend:
```bash
cd frontend
npm start
```

- To run the backend:
```bash
cd backend
npm start
```

The application will now be running at [http://localhost:3000](http://localhost:3000).

---

## **API Documentation**

For detailed API documentation, refer to the **`/docs`** directory (or the respective section in the repo) that contains information on all the RESTful endpoints.

Key Endpoints:
- **GET /api/ipos:** Fetch all IPO data.
- **GET /api/ipo/:id:** Fetch detailed information for a specific IPO.
- **GET /api/ipo/:id/download/rhp:** Download the RHP PDF for a specific IPO.
- **GET /api/ipo/:id/download/drhp:** Download the DRHP PDF for a specific IPO.

---

## **Team Members**

This project is part of our internship program at Bluestock Fintech. Below are the key team members working on this project:

| **No** | **Name**             | **Email**                        | **Mobile No.** | **Role**        |
|--------|----------------------|----------------------------------|----------------|-----------------|
| 1      | Mayank Ghatawal       | mayank1ghatawal@gmail.com        | 8690512211     | Team Lead       |
| 2      | Divyansh Singh        | arsh8004105292@gmail.com         | 9517593294     | Co-Team Lead    |
| 3      | Kartik Chausali       | chausalikartik98@gmail.com       | 9897981016     | Developer       |
| 4      | Jayanta Rana          | jayantarana1208@gmail.com        | 8101188031     | Developer       |
| 5      | Megha ML              | meghalalin@gmail.com             | 7736642608     | Developer       |

---

## **Contributing**

We welcome contributions to this project! If you'd like to help, please follow these steps:

1. Fork this repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes and commit them (`git commit -m 'Add your feature'`).
4. Push to your forked repository (`git push origin feature/your-feature-name`).
5. Open a pull request to the main repository.

Please ensure your changes do not break existing functionality and include tests where applicable.

---

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## **Acknowledgments**

- Thanks to **Bluestock Fintech** for providing the opportunity to work on this project.
- Special thanks to our mentors and supervisors for guiding us throughout the development process.

---

This README provides a modern and structured approach for presenting the project, including installation instructions, API documentation, team member info, and more. You can adjust the text and sections depending on the further needs of your project.
