---
title: "InterviewPlanner-HackerRank Integration FAQs "
slug: /integrations-1/scheduling/interviewplanner-hackerrank-integration-faqs
pylon_id: 575bc202-0c62-496f-b01f-d1741899c6d5
published_url: https://support.hackerrank.com/articles/7401637722-InterviewPlanner-HackerRank-Integration-FAQs-
last_edited: "2025-01-22"
is_published: true
---

HackerRank Interview integrates with InterviewPlanner to enable a seamless and efficient candidate screening process for recruiters.

This article provides useful troubleshooting tips for some common issues encountered while enabling and using the integration.

## API Token and Access

### I am unable to view the API keys in my HackerRank for Work account.

You must log in to HackerRank for Work with a **Recruiter-type**  **Company Admin** user account to view the API access page and generate the InterviewPlanner API key.

Refer to the **Prerequisites** section in the[📄 Using HackerRank Interviews in InterviewPlanner](</docs/3147b674-5cbb-4bde-9528-7699bb64b1a7/articles/f5ee2cbc-125a-4e12-bfcf-f6f27829afc1>) topic.

### Seems like the InterviewPlanner API key is not valid for my HackerRank for Work account. How can I reset the API key?

  * Log in to HackerRank for Work using the company admin user account which has the same email address as the InterviewPlanner user account.

  * Navigate to **Settings** -> **API access** -> **InterviewPlanner**.

  * Click **Delete** to delete the existing key and click **Generate API key** to create a new key.

  * Add this API key in InterviewPlanner to enable the integration.

Refer to the[📄 Configuring InterviewPlanner - HackerRank Integration](</docs/3147b674-5cbb-4bde-9528-7699bb64b1a7/articles/6f80d34e-c6bc-4049-8f07-721fe8dbdbec>)topic for detailed integration steps.

## Interviews

### Why do I receive an error message while trying to generate an interview link in InterviewPlanner?

  * Ensure that you have logged in to InterviewPlanner using the same email address as your HackerRank _for_ Work user account. This is required for generating the HackerRank interview link and logging in to an interview session.

  * The candidate's profile may not have a valid email address. Update the candidate's email address and try generating the interview link again.

### Who is treated as the Inviting Recruiter if I invite a candidate through InterviewPlanner?

InterviewPlanner sends us metadata about the recruiter who initiated the action to invite a candidate. That information is used to determine the inviting recruiter.

### Other Troubleshooting Tips

What are the other troubleshooting tips for any issues encountered with the integration?

  * Verify whether the API key added to your InterviewPlanner account is valid for your HackerRank for Work account. If you are unsure, you can generate a new InterviewPlanner API key in the HackerRank account settings page and configure the new key in InterviewPlanner.

  * Ensure that your HackerRank for Work user account is an activated **Recruiter** type account with **Company Admin** permissions. This user account must belong to any team. You cannot send invites using a Developer type user account.

  * While sending invites from InterviewPlanner, ensure that the candidate profile has a valid email address.

:::note
For more information about admin permissions and user activation, refer to the articles, [Company Admin Permissions](<https://support.hackerrank.com/articles/9603546665-types-of-user-roles#company-admin-2>), and[📄 Activating a Team Member](</docs/3147b674-5cbb-4bde-9528-7699bb64b1a7/articles/4885f8e4-7cf0-4f0c-8396-b753351f94e2>)
:::
