# Gashy App - Milestone 1

## Overview

Gashy is a white-labeled, real-money betting app for quick games like Carrom. Users can login with Google SSO, bet coins equivalent to real currency, and play 1v1 matches.

## Tech Stack

- Backend: Node.js, Express, Prisma, PostgreSQL
- Mobile: React Native
- Admin Dashboard: Next.js
- Redis for caching and session management
- Dockerized microservices architecture

## Setup

1. Clone repo
2. Create `.env` files for backend and admin-dashboard (see `.env.example`)
3. Run `docker-compose up --build` in `docker/` folder
4. Backend runs on `localhost:4000`
5. Admin Dashboard runs on `localhost:3000`
6. React Native app runs via Expo or CLI on emulator/device

## Seed Data

Seed data for users, games, and sessions are in the `seed/` folder. Use the seed script in backend to populate the DB.

## Features

- Google SSO login
- User wallet with coins
- 1v1 Carrom game play and betting
- Leaderboard display
- Admin game and betting management

## Roadmap

- Add Kafka/Zookeeper for messaging and scalability
- Add more games
- Add team games and tournaments
- Implement payment gateway integration
- Real-time gameplay with sockets

## License

MIT
