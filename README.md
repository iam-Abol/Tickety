# Event Ticketing Platform 🎟️

> A production-style microservices application built with **Node.js**, **TypeScript**, **React**, **Docker**, and **Kubernetes**, following an event-driven architecture.

This project demonstrates how modern distributed systems communicate asynchronously, maintain service independence, and scale using cloud-native technologies.

---

## 📌 Overview

The Event Ticketing Platform is a distributed application that simulates a real-world online ticket marketplace.

Instead of using a monolithic architecture, the application is composed of multiple independent microservices. Each service owns its own database, communicates through asynchronous events, and can be deployed independently.

The project focuses on backend engineering concepts commonly used in production environments, including Event-Driven Architecture, Kubernetes orchestration, containerization, and service isolation.

---

## ✨ Features

- 🔐 JWT Authentication
- 🍪 Cookie-based Sessions
- 👤 User Signup / Signin / Signout
- 🎫 Create Tickets
- ✏️ Update Tickets
- 🛒 Purchase Tickets
- ⏳ Automatic Order Expiration
- 📡 Event-Driven Communication
- 🔄 Optimistic Concurrency Control
- 🧩 Shared Common Package
- 🐳 Dockerized Microservices
- ☸ Kubernetes Deployment
- 🌐 NGINX Ingress Controller
- 🔥 Independent Databases per Service

---

# 🏗 Architecture

```text
                           React Client
                                │
                                ▼
                        NGINX Ingress Controller
                                │
      ┌──────────┬──────────┬──────────┬──────────┬──────────┐
      ▼          ▼          ▼          ▼          ▼
   Auth      Tickets      Orders    Payments   Expiration
      │          │            │          │           │
      ▼          ▼            ▼          ▼           ▼
   MongoDB    MongoDB      MongoDB    MongoDB      Redis
                     │
                     ▼
              NATS Streaming
                 Event Bus
```

---

# 🧩 Microservices

| Service | Description |
|----------|-------------|
| Auth | User authentication & authorization |
| Tickets | Ticket CRUD operations |
| Orders | Ticket reservation and order management |
| Payments | Stripe payment processing |
| Expiration | Automatically expires unpaid orders |
| Client | React / Next.js frontend |

Each service:

- Owns its own database
- Can be deployed independently
- Communicates only through events
- Has a single business responsibility
- Is loosely coupled from other services

---

# 🔄 Event Flow

### Ticket Purchase Workflow

```text
User
 │
 ▼
Create Ticket
 │
 ▼
TicketCreated Event
 │
 ▼
Orders Service
 │
 ▼
OrderCreated Event
 │
 ▼
Expiration Service
 │
 ▼
ExpirationComplete Event
 │
 ▼
Orders Service
 │
 ▼
OrderCancelled Event

OR

Payment Service
 │
 ▼
PaymentCreated Event
 │
 ▼
OrderCompleted
```

---

# 🛠 Tech Stack

## Backend

- Node.js
- TypeScript
- Express.js
- MongoDB
- Mongoose

## Frontend

- React
- Next.js

## Infrastructure

- Docker
- Kubernetes
- Skaffold
- NGINX Ingress

## Messaging

- NATS Streaming

---

# 📂 Project Structure

```text
client/
auth/
tickets/
orders/
payments/
expiration/
common/
infra/
k8s/
```

---

# 🧠 Engineering Concepts

This project demonstrates practical knowledge of:

- Microservices Architecture
- Event-Driven Architecture
- Distributed Systems
- Domain Driven Design (DDD)
- Event Bus Pattern
- Kubernetes
- Docker
- API Gateway
- Optimistic Concurrency Control
- Eventual Consistency
- Service Isolation
- Asynchronous Communication
- Independent Database Pattern

---

# ⚙ Running Locally

## Prerequisites

- Docker
- Kubernetes
- Skaffold
- Node.js

Clone the repository

```bash
git clone https://github.com/iam-Abol/Tickety.git
```

Install dependencies

```bash
npm install
```

Run the application

```bash
skaffold dev
```

The application will:

- Build Docker images
- Push images to the local cluster
- Deploy Kubernetes resources
- Watch source files for changes

---

# 🎯 Learning Outcomes

Through building this application I gained hands-on experience with:

- Designing distributed backend systems
- Building event-driven microservices
- Service communication using NATS Streaming
- Kubernetes deployments
- Docker containerization
- Independent service architecture
- Managing asynchronous workflows
- Building scalable backend applications

---

# 🚀 Future Improvements

The following enhancements would move the project closer to a production-grade architecture:

- GitHub Actions CI/CD
- Prometheus Monitoring
- Grafana Dashboards
- Jaeger Distributed Tracing
- Centralized Logging (Pino + Loki)
- Helm Charts
- Redis Caching
- API Rate Limiting
- Health Checks
- Dead Letter Queue
- OpenAPI / Swagger Documentation
- Distributed Configuration Management
- Secrets Management
- Horizontal Pod Autoscaling
- Load Testing (k6)

---

# 💡 Why This Project?

This project was built to deepen my understanding of modern backend engineering and distributed systems.

Instead of focusing solely on CRUD operations, the goal was to understand how real-world services communicate, scale independently, recover from failures, and maintain consistency across distributed environments.

---

# 📚 Acknowledgements

This project was developed while following the **Microservices with Node.js and React** course by **Stephen Grider**.

The implementation has been used as a hands-on learning experience for understanding production-inspired backend architecture, event-driven systems, Kubernetes orchestration, and microservices design principles.

---

# ⭐ If you found this repository useful

Feel free to give it a ⭐ on GitHub!

---

# ⚠️ Payment Integration Notice

This project includes the architecture and service design for **Stripe-based payment processing**.

Due to regional restrictions and sanctions that prevent developers in **Iran** from accessing Stripe services, the payment workflow could not be completed and validated against Stripe's API.

All other services—including authentication, ticket management, order processing, event publishing/subscribing, Kubernetes deployment, and inter-service communication—are fully implemented and functional.

The missing payment integration is solely due to external platform restrictions rather than architectural or implementation limitations.
