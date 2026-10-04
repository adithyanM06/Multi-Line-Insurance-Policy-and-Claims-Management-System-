# Multi-Line Insurance Policy and Claims Management System

An automated insurance claim routing and review system built on the Salesforce Lightning Platform using Apex, Lightning Web Components (LWC), and Record-Triggered Flows.

## Key Features
- **Automated Claim Routing**: Intelligent assignment of claims to dedicated queues based on policy parameters.
- **Claims Review Flow**: Custom screen flow for claims adjusters to evaluate, approve, or reject submissions.
- **Claims Adjuster Dashboard (LWC)**:
  - `claimTileLwc`: Modular card component displaying key claim metrics.
  - `claimsDashboardLwc`: Responsive dashboard querying active claims via Apex (`ClaimsAdjusterController`) with record page navigation.
