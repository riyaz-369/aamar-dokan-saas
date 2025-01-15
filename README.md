# SaaS Dashboard for POS Application

### Live demo: https://aamardokan.online

## Table of Contents

- [Introduction](#introduction)
  - [Purpose](#purpose)
  - [Scope](#scope)
- [Features](#features)
  - [Public Pages](#public-pages)
  - [Admin Panel](#admin-panel)
  - [Customer Portal](#customer-portal)
- [System Architecture](#system-architecture)
- [Diagrams](#diagrams)
- [Technology Stack](#technology-stack)
- [Milestones](#milestones)
- [Glossary](#glossary)

---

## Introduction

### Purpose

This SaaS Dashboard is designed for managing subscriptions, billing, and access control for a Point of Sale (POS) application. It provides a centralized platform for:

- Admins to manage customers, billing, and subscriptions.
- Customers to manage their accounts, subscriptions, and invoices.

### Scope

The SaaS Dashboard operates as an independent system hosted separately from the POS application. It includes:

- **Public Pages**: Home, Pricing, About, Registration, and Blogs.
- **Admin Panel**: Customer management, billing, and access control.
- **Customer Portal**: Subscription management, payment history, and account self-service.

---

## Features

### Public Pages

1. **Home Page**

   - Overview of POS application features.
   - Embedded analytics (e.g., customer count, testimonials).
   - CTAs for registration and pricing exploration.

2. **Pricing Page**

   - Subscription tier comparison.
   - Add-ons and pricing breakdown.

3. **About Page**

   - POS product details, mission, and customer testimonials.

4. **Customer Registration Page**

   - Registration form for collecting customer details.
   - Integration with payment gateway for onboarding.

5. **Blogs**
   - Informative articles and updates related to the POS application.

---

### Admin Panel

1. **Dashboard**

   - Overview of customers, subscriptions, and revenues.
   - Real-time activity tracking.

2. **Customer Management**

   - Account activation/deactivation.
   - Role-based access control for POS features.

3. **Billing and Payments**

   - Automated invoicing through payment gateways.
   - Manage pending and overdue payments.

4. **Access Control**
   - Role-based management for admin and customer access to POS features.

---

### Customer Portal

1. **Dashboard**

   - Overview of active subscriptions.
   - Notifications for renewals and payment due dates.

2. **Billing and Payments**

   - Secure payment options.
   - Access to invoices and payment history.

3. **Subscription Management**
   - Upgrade/downgrade subscriptions dynamically.

---

## System Architecture

- **Frontend**: Built with Next.js for server-side rendering (SSR) and static site generation (SSG).
- **Backend**: Node.js with Express for API services.
- **Database**: PostgreSQL for structured data storage and Redis for caching and session management.
- **Payment Gateway**: Stripe for secure billing and invoicing.
- **Authentication**: OAuth and JWT for secure access.

---

## Technology Stack

- **Frontend**: Next.js, TypeScript, Tailwind CSS
- **Backend**: Next.js, Prisma ORM
- **Database**: MongoDB
- **Payment Gateway**: Bkash
- **Authentication**: OAuth, JWT
