# Postgres Database Performance Analysis

This project involves creating a simple PostgreSQL database, populating it with over a million entries, and analyzing the search performance with and without indexing the `user_id` in the `post` table as a foreign key. The performance was tested with and without using Prisma.

## Project Details

### 1. Database Setup

- **Without Prisma:**

- **With PRisma**

### 2. Database Population

- Populated the database with over 1 million entries.

### 3. Performance Analysis

- **Search Performance:**
  - Analyzed the performance of searching particul posts of a user particular user.
  - Compared the performance with and without indexing the `user_id` in the `post` table as a foreign key.

### 4. Results

- **Without Prisma:**
  - Time shift from 100ms to 20ms. after indexing

- **With Prisma:**
  - Average time shift from 100ms to 50ms. after indexing
