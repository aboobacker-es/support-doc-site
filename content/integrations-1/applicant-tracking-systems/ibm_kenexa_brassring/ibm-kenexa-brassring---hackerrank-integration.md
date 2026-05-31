---
title: "IBM Kenexa BrassRing - HackerRank Integration"
slug: ibm-kenexa-brassring---hackerrank-integration
collection: integrations-1/applicant-tracking-systems/ibm_kenexa_brassring
pylon_id: 4cab21e3-ca8b-47de-9d77-449040b6c878
published_url: https://support.hackerrank.com/articles/7600349400-IBM-Kenexa-BrassRing---HackerRank-Integration
last_edited: "2026-05-06"
is_published: true
---

## Overview

HackerRank integrates with IBM Kenexa BrassRing through a standardized **Candidate Export** and **Form Import** XML API. If you have experience with these APIs and are a BrassRing Workbench administrator, you should be able to configure the integration yourself. If you are not familiar with these APIs, it is recommended that you work with IBM Kenexa professional services who can make the changes on your behalf. 

## Key Features for Tests Integration

  * Send Test invitations to HackerRank assessments from within BrassRing 

    * Optionally specify Time Accommodation% to extend assessment for certain candidates

  * Receive Test Results in a BrassRing form when a candidate completes an assessment.

  * Support for Candidates on Multiple Requisitions.

    * If a Candidate applies to multiple requisitions, they only need to take the HackerRank assessment once, the results will be sent to all requisitions that requested the test.

    * If a candidate has taken the test in the past, the historical result will be sent back to BrassRing.

  * Preserve HackerRank role-based access and permissions when taking actions in BrassRing

## Key Features for Interviews Integration

  * Create Interview link and scheduling link  

  * Receive results and report link in BrassRing form when Interview has finished

Please refer to the following articles to set up and use the BrassRing- HackerRank Integration:

  * [📄 IBM Kenexa BrassRing - HackerRank Tests Integration](</articles/7795424803>)

  * [📄 IBM Kenexa BrassRing - Interviews Integration](</articles/7390910463>)

**Tests**

The table below describes the features supported for HackerRank tests in Brassring.

**Feature**| **Brassring Support**  
---|---  
View full list of HRW tests| Must be added manually  
Invite candidates to a specific test| ✅  
Cancel an invite| ❌  
Status update from invite to completion| ✅  
View total candidate score| ✅  
View maximum score| ✅  
Link to the detailed test report| ✅  
View question-wise scores| ❌  
View candidate feedback| ❌  
View reviewer comments| ❌  
View code| ❌  
Play code| ❌  
Templates| Owner default  
Invite sent from| ❌  
Reinvite| ✅  
Public URL sync| ❌  
Update results after editing HR| ✅  
  
**Interviews**

The table below describes the features supported for HackerRank interviews in Brassring.

**Feature**| **Brassring Support**  
---|---  
Create an interview link| ✅  
Schedule an interview| ❌  
View result| ✅  
View interviewer notes| ✅  
Link to the detailed report| ✅
