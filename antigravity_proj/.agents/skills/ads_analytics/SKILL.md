---
name: Ads & Analytics Setup
description: Specialized instructions for implementing tracking pixels, Google Analytics, and optimizing for ad campaigns.
---

# Ads & Analytics Setup Framework

This skill extends your capabilities to integrate and audit tracking infrastructure, ensuring that the business can effectively run and measure advertising campaigns (Google Ads, Meta/Facebook Ads, etc.).

## 1. Analytics & Tracking Infrastructure
A solid foundation is required to measure website traffic and user behavior.
*   **Google Analytics 4 (GA4):** Ensure the global site tag (`gtag.js`) is correctly implemented in the `<head>` of all pages to track page views, user sessions, and demographics.
*   **Google Tag Manager (GTM):** For advanced setups, use GTM to deploy marketing tags without modifying code directly.
*   **Meta Pixel (Facebook Pixel):** Essential for tracking conversions from Instagram/Facebook ads and building retargeting audiences.

## 2. Setting Up Conversion Tracking
To measure the ROI of ads, specific user actions must be tracked as "Conversions" or "Events".
*   **Click-to-Call Tracking:** Attach event listeners to all `tel:` links (e.g., the Hero button, WhatsApp float, and contact numbers). When clicked, fire a conversion event to Google Ads and Analytics.
*   **Map Navigation Tracking:** Track when users click the "Get Directions" buttons.
*   **Lead Form Tracking:** (If applicable) track form submissions as high-intent leads.

## 3. SEO & Ad Scent (Message Match)
*   **Landing Page Relevance:** Ensure that the keywords used in ad copy (e.g., "Wheel Alignment Nashik") prominently match the `<h1>` and meta tags on the website.
*   **Page Load Speed:** Crucial for ad quality scores. Ensure images are optimized and external scripts are loaded asynchronously.

## 4. Execution Protocol
When requested to implement tracking or optimize for ads:
1.  **Analyze Current Setup:** Check the `<head>` and script files to see what tracking (if any) currently exists.
2.  **Generate Tracking Snippets (Mock or Real):** If actual tracking IDs aren't provided, create placeholder code blocks that outline exactly where and how tracking scripts should be placed.
3.  **Implement Event Listeners:** Modify JavaScript to add specific event triggers on the crucial highly-converting buttons (`tel:` links, WhatsApp button).
4.  **Reporting:** Provide a detailed report of what was implemented and how the ad campaign manager can use these events.
