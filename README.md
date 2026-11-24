# Sales Management System

A web-based sales management application designed to help sales teams organize customer prospects, manage follow-up activities, and monitor sales operations through a centralized platform.

**Live Demo:** [Sales Management System](https://alfiriansyah.github.io/Sales-lead-management/)

**GitHub Repository:** [Sales-lead-management](https://github.com/alfiriansyah/Sales-lead-management)

---

## Project Overview

Sales Management System is a personal portfolio project focused on improving sales activity management through a simple and centralized digital platform.

The application is designed to support sales teams in managing customer leads, tracking follow-up schedules, monitoring lost sales opportunities, and reviewing sales performance.

This project explores the implementation of business processes into a web-based application, combining sales operations knowledge with database management and web development.

## Key Features

### 1. Sales Dashboard
- Overview of total leads.
- Successful deals and conversion rate indicators.
- Lead pipeline monitoring.
- Recent customer prospects.
- Lost sales overview.

### 2. Lead Management
- Create and manage customer prospects.
- Store customer contact information.
- Track product interests and lead sources.
- Update prospect status.
- Search and filter lead records.
- Export lead data to CSV.

### 3. Follow-up Management
- Create customer follow-up schedules.
- Record customer contact details and product interests.
- Set follow-up priorities.
- Monitor scheduled and completed activities.
- Track overdue follow-up activities.

### 4. Lost Sales Management
Designed to record and categorize lost sales opportunities, helping businesses identify potential reasons behind unsuccessful deals.

### 5. Sales Performance
Designed to support sales performance monitoring and provide visibility into sales targets and achievements.

## Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Application structure |
| CSS3 | Styling and responsive layout |
| JavaScript | Application logic and interactions |
| Supabase | Backend database and authentication |
| PostgreSQL | Relational database |
| Row Level Security (RLS) | Data access control |
| GitHub Pages | Application deployment |

## System Architecture

The application uses a frontend and backend architecture:

1. **Frontend:** HTML, CSS, and JavaScript provide the user interface and application functionality.
2. **Backend:** Supabase provides authentication and database services.
3. **Database:** PostgreSQL stores sales leads, follow-up activities, and related records.
4. **Security:** Supabase Row Level Security (RLS) controls access to records based on user roles.
5. **Deployment:** GitHub Pages hosts the web application.

## User Roles & Access Control

The application is designed with two user roles:

| Role | Access |
|---|---|
| Manager | Access to team-wide sales data |
| Sales | Access to individually assigned sales data |

Authentication is handled through Supabase Auth, while Row Level Security policies enforce data access at the database level.

## Database Structure

The project uses the following main database tables:

- `profiles` — User profiles and role information.
- `leads` — Customer prospect records.
- `follow_ups` — Customer follow-up schedules and activities.
- `lost_sales` — Records of unsuccessful sales opportunities.
- `sales_performance` — Sales performance records.

## Project Screenshots

Screenshots of the application will be added here to demonstrate the user interface and main features.

Suggested screenshots:
- Sales Dashboard
- Lead Database
- Follow-up Management
- Lost Sales Management
- Sales Performance

## Current Development Status

This project is actively under development.

Current implementation includes:
- Supabase authentication.
- Manager and Sales role identification.
- Database integration for Lead Management.
- Database integration for Follow-up Management.
- Row Level Security policies.
- Login and logout functionality.

Other modules and reporting capabilities are being progressively developed and tested.

## Learning Objectives

Through this project, I aim to develop practical skills in:

- Translating business requirements into digital solutions.
- Sales operations and customer relationship management.
- Database design and relational data management.
- Authentication and role-based access control.
- Frontend development and JavaScript programming.
- Backend integration using Supabase.
- Deploying web applications using GitHub Pages.

## Future Improvements

- Complete Lost Sales database integration.
- Complete Sales Performance reporting.
- Advanced dashboard analytics.
- Lead assignment and team management.
- Improved reporting and data visualization.
- Enhanced user experience and responsive design.

## Author

**Alfi Riansyah**

Business Development | Marketing | Sales Operations | Digital Business Solutions

- GitHub: [@alfiriansyah](https://github.com/alfiriansyah)
- LinkedIn: [Alfi Riansyah](https://www.linkedin.com/)

---

*This project is developed as a personal portfolio project to explore the intersection of business operations, sales management, and technology.*
