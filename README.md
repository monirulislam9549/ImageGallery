## 🔗 Live Links
[![portfolio](https://img.shields.io/badge/ImageGallery-00000?style=for-the-badge&logoColor=white)](https://gallery-image-unsplash.netlify.app/)
# Image Gallery Project Description
## Project Overview

This frontend-based project involves the creation of an image gallery that harnesses the power of the Unsplash API. Developed using React.js, Tailwind CSS, DaisyUI, and Headless UI, the project is geared towards delivering an engaging and user-friendly image browsing experience.

#### Key Features:
#### 1. Real-Time Search Functionality:
* The project incorporates real-time search functionality, thanks to the utilization of the useContext API. Users can input specific keywords to search for relevant images.
#### 2. Dynamic Image Results:
* The project incorporates real-time search functionality, thanks to the utilization of the useContext API. Users can input specific keywords to search for relevant images.
#### 3.Modal Display:
* The project incorporates real-time search functionality, thanks to the utilization of the useContext API. Users can input specific keywords to search for relevant images.
#### 4. Image Details:
* The project incorporates real-time search functionality, thanks to the utilization of the useContext API. Users can input specific keywords to search for relevant images.

#### Technologies Used:
 * React.js: The project is built using React, a popular JavaScript library for building user interfaces, enabling the creation of dynamic and responsive components.
* Tailwind CSS: Tailwind CSS is employed for styling the application. Its utility-first approach makes it easier to design and customize the UI.
* DaisyUI: DaisyUI complements Tailwind CSS by offering additional components and plugins for streamlining the design process.

## API Reference

#### Get all photos

```http
  GET /api/photos
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get photo details

```http
  GET /api/photos/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of photo to fetch details |


#### Seacrh photo

```http
  GET /api/photos/$query=office
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Search terms`      | `string` | **Required**. Search terms of photo to fetch |



## Upcoming Features

- Light/dark mode toggle
- Responsive
- Pagination
- Search Functionalites Improvement

