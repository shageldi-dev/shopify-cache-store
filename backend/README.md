# Shopify-cache-store - Backend (Nest.js)

## Overview

This project is the backend implementation for a full-stack application designed to display and manage products fetched from the Shopify store. The backend is built using Nest.js, a powerful and extensible Node.js framework.

## Getting Started

### Prerequisites

Before running the project, ensure you have the following installed:

- Node.js (version 18)
- npm or yarn
- Elasticsearch

### Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Configuration:

   ```bash
   NODE_ENV=production
   PORT=3002

   # ELASTICSEARCH
   ELK_NODES="http://es01:9200"
   ELK_INDEX="spotify_cache"
   ELK_USERNAME="elastic"
   ELK_PASSWORD=""

   # Shopify
   SHOPIFY_URL=""
   SHOPIFY_API_KEY=""
   ```

3. Running the Application:

   ```bash
   npm run start:dev
   The server will run on http://localhost:3001 by default.

   ```

4. API Endpoints

Sync Products:

```javascript
Endpoint: /sync
Method: POST
Description: Manually trigger the synchronization of products from the Shopify
```

store to the database.

```javascript
Get Products:
Endpoint: /public-api/get-products
Method: GET
Description: Retrieve a list of products from the database.
```
