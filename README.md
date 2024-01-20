# Shopify-to-Elasticsearch Integration with React, NestJS, TypeScript, Redux Toolkit Query, and Docker

![Project Screenshot](img/splash.png)

This project is a full-stack web application that integrates Shopify GraphQL API with Elasticsearch. It utilizes React with TypeScript for the frontend, NestJS with TypeScript for the backend, Redux Toolkit Query for state management, and Docker for containerization.

## Prerequisites

Before running the application, make sure you have the following installed:

- Docker
- Node.js
- npm or yarn

## Table of Contents

- [Getting Started](#getting-started)
  - [Frontend (React)](#frontend-react)
  - [Backend (NestJS)](#backend-nestjs)
  - [Docker](#docker)
- [Shopify Data Synchronization](#shopify-data-synchronization)
- [Frontend UI Libraries](#frontend-ui-libraries)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Frontend (React)

1. Navigate to the `frontend` directory:

```bash
cd frontend
npm install
# or
yarn install
```

2. Create a .env file in the frontend directory with the following content:

```bash
VITE_BASE_URL="http://localhost:3002"
```

3. Start the React development server:

```bash
npm start
# or
yarn start
```

The React app should now be running at http://localhost:3000.

### Backend (NestJS)

```bash
cd backend
```

1. Install dependencies:

```bash
npm install
# or
yarn install
```

2. Create a .env file in the backend directory with the following content:

```bash
NODE_ENV=production
PORT=3002

# ELASTICSEARCH
ELK_NODES="http://es01:9200"
ELK_INDEX="spotify_cache"
ELK_USERNAME="elastic"
ELK_PASSWORD=""

# Shopify
SHOPIFY_URL="https://cpb-new-developer.myshopify.com/admin/api/2023-10/graphql.json"
SHOPIFY_API_KEY="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"
```

3. Start the NestJS server:

```bash
npm run start:dev
# or
yarn start
```

The NestJS server should now be running at http://localhost:3002.

### Docker

To run the entire application using Docker, execute the following commands from the project root:

```bash
docker-compose up
# or
docker-compose up --build  # To rebuild the images
# or
sudo docker-compose up  # If necessary
```

This will start both the elasticsearch, React frontend and NestJS backend in separate containers.

### Shopify Data Synchronization

The NestJS backend includes a cron job that fetches data from the Shopify API and inserts it into Elasticsearch every 10 minutes. The cron job is configured in the src/modules/scheduler/scheduler.service.ts directory.

### Frontend UI Libraries

This project uses a combination of Material-UI (MUI) and Ant Design for the user interface components.

#### Features

    Redux Toolkit Query: Efficient state management.
    Infinity Scroll Pagination: For a smooth user experience.
    Automatic Synchronization: Shopify data with Elasticsearch.

### Folder Structure

The project is organized as follows:

```bash
/shopify-cache-store
|-- frontend
|   |-- public
|   |-- src
|   |   |-- components
|   |   |-- pages
|   |   |-- services
|   |   |-- ...
|   |-- .env
|-- backend
|   |-- src
|   |   |-- modules
|   |   |-- database
|   |   |-- interfaces
|   |   |-- ...
|   |-- .env
|-- docker-compose.yml
|-- README.md
```

### Environment Variables

#### Frontend (.env)

    VITE_BASE_URL: Your Shopify Cache store backend URL.

#### Backend (.env)

    NODE_ENV: production | development
    PORT: NestJS backend port

    # ELASTICSEARCH
    ELK_NODES: Elasticsearch nodes to connect. For eg: "http://localhost:9200" | "http://es1:9200", if multiple nodes: "http://es1:9200,http://es2:9200"
    ELK_INDEX: Elasticsearch index (table) name
    ELK_USERNAME: Auth username to connect elasticsearch
    ELK_PASSWORD: Auth password to connect elasticsearch

    # Shopify
    SHOPIFY_URL: Shopify graphql url to GET products and ingest to elasticsearch.
    SHOPIFY_API_KEY: Shopify api key to put header get-products request

### Usage

Feel free to explore and customize the code according to your needs!
