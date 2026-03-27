# 📚 Sistema de Biblioteca Digital (Full-Stack)

Este proyecto es un sistema web completo que integra un frontend en Angular con dos opciones de backend (Node.js y Spring Boot), demostrando la aplicación práctica del patrón de diseño MVC, operaciones CRUD y consumo de APIs RESTful.

## 🧱 Arquitectura del Proyecto

El repositorio está dividido en tres aplicaciones independientes:

1. **/frontend-project1**: Interfaz de usuario desarrollada en Angular 17+ con Angular Material.
2. **/backend-node**: API RESTful construida con Node.js, Express y base de datos MongoDB.
3. **/backend-spring**: API RESTful construida con Java Spring Boot y base de datos H2 (en memoria).

---

## 🚀 Instrucciones de Instalación y Ejecución

### 1. Requisitos Previos
* [Node.js](https://nodejs.org/) (v18 o superior) y npm.
* [Angular CLI](https://angular.io/cli) (`npm install -g @angular/cli`).
* [Java JDK 17](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html).
* MongoDB (Local o Atlas) si se desea usar el backend de Node.js.

### 2. Levantar el Backend (Elige una opción)

**Opción A: Node.js + MongoDB (Puerto 3000)**
1. Navega a la carpeta: `cd backend-node`
2. Instala las dependencias: `npm install`
3. Configura tus variables de entorno en un archivo `.env` (puerto y MONGODB_URI).
4. Inicia el servidor: `npm run dev`

**Opción B: Spring Boot + H2 (Puerto 8081)**
1. Navega a la carpeta: `cd backend-spring`
2. Ejecuta el servidor usando Maven Wrapper: `./mvnw spring-boot:run`
*(La base de datos H2 se inicializará automáticamente en memoria).*

### 3. Levantar el Frontend (Angular)
1. Abre una nueva terminal y navega a la carpeta: `cd frontend-project1`
2. Instala las dependencias: `npm install`
3. Inicia el servidor de desarrollo: `ng serve -o`
4. La aplicación se abrirá automáticamente en `http://localhost:4200/`.

*Nota: Por defecto, el servicio de Angular (`libro.service.ts`) apunta al puerto 8081 (Spring Boot). Si usas Node.js, cambia la URL en el servicio al puerto 3000.*

---

## 🛠️ Tecnologías Utilizadas
* **Frontend:** Angular, RxJS, Angular Material, CSS.
* **Backend Node:** Express.js, Mongoose, Cors, Dotenv.
* **Backend Java:** Spring Web, Spring Data JPA, H2 Database.