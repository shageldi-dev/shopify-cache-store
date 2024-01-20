# Shopify-cache-store - Backend (Nest.js)

## Overview

This project is the backend implementation for a full-stack application designed to display and manage products fetched from the Shopify store. The backend is built using Nest.js, a powerful and extensible Node.js framework.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)

## Getting Started

### Prerequisites

Before running the project, ensure you have the following installed:

- Node.js (version X.X.X)
- npm or yarn
- MongoDB (optional, based on your database choice)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-project.git
   cd your-project-backend
   npm install

   ```

2. Configuration:

   ```bash
   PORT=3000
   NODE_ENV=development
   MONGODB_URI=mongodb://localhost:27017/your-database-name
   SHOPIFY_ACCESS_TOKEN=your-shopify-access-token

   ```

3. Running the Application:

   ```bash
   npm run start:dev
   The server will run on http://localhost:3000 by default.

   ```

4. API Endpoints

Sync Products:

```javascript
Endpoint: /api/sync-products
Method: POST
Description: Manually trigger the synchronization of products from the Shopify
```

store to the database.

```javascript
Get Products:
Endpoint: /api/products
Method: GET
Description: Retrieve a list of products from the database.
```

5. Testing:

```bash
npm run test
```
