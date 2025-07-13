# 🌦️ MyWeatherApp

A Java-based web application that fetches and displays real-time weather information using the **OpenWeatherMap API**. Built with **Servlets, JSP, HTML, CSS, and JavaScript**, and deployable via Docker.

---

## 🚀 Features

- 🔍 Search weather by city name
- ☁️ Real-time weather information (temperature, condition, wind, humidity)
- 🖥️ Clean, responsive user interface using JSP + CSS
- 🌐 Integration with OpenWeatherMap API
- 📦 Maven-based project for easy packaging
- 🐳 Docker support for seamless deployment
- 🧑‍💻 Servlet + JSP backend logic

---

## 🌐 Live Demo

👉 [Try it on Render](https://your-deployed-url.onrender.com)  
*(Replace this link after deployment)*

---

## 🖼️ Screenshots

### 🔸 Home Page
![Home Page](screenshots/homepage.png)

### 🔸 Weather Result Page
![Result Page](screenshots/result.png)

---

## 🎥 Video Demo

[![Watch the demo](https://img.youtube.com/vi/YOUR_VIDEO_ID/0.jpg)](https://www.youtube.com/watch?v=YOUR_VIDEO_ID)  
*(Optional — add if you upload a YouTube demo)*

---

## 🛠️ Tech Stack

- **Java 8/17**
- **JSP & Servlets**
- **HTML / CSS / JavaScript**
- **Apache Tomcat**
- **OpenWeatherMap API**
- **Maven**
- **Docker**

---

## 🧪 How to Run Locally

### Prerequisites:
- Java JDK
- Apache Maven
- Apache Tomcat
- Internet connection (for API calls)

### Steps:

```bash
# Clone the project
git clone https://github.com/maheshzalte/MyWeatherApp.git
cd MyWeatherApp

# Build the project
mvn clean package

# Move the generated WAR file to Tomcat's webapps
cp target/MyWeatherApp.war /path/to/tomcat/webapps/

# Start Tomcat
/path/to/tomcat/bin/startup.sh

# Access on browser
http://localhost:8080/MyWeatherApp
