---
title: "Setting Up SCIM Provisioning for SkillUp"
slug: /skillup/skillup_integrations/setting-up-scim-provisioning-for-skillup
pylon_id: cbb0f48f-b167-4220-bd43-02dadc9625e7
published_url: https://support.hackerrank.com/articles/9005750838-Setting-Up-SCIM-Provisioning-for-SkillUp
last_edited: "2026-03-11"
is_published: true
---

SkillUp supports automated user provisioning through SCIM. This integration allows your organization to manage SkillUp users directly from any SCIM 2.0 compliant IdP, such as Azure AD, Ping, or OneLogin. 

With SCIM, user accounts in SkillUp are automatically synced with your organization’s directory, ensuring user data remains current and consistent.

## Prerequisites

Before you configure SCIM provisioning, ensure that:

  * SAML-based SSO is configured for your organization. For more information, see [📄 Configure Single Sign-On (SSO) for SkillUp](</articles/7581923631>).

  * You have generated a **SCIM Access Key** in your HackerRank for Work account. For more information, see [_Generating an API Key from HackerRank_](<https://support.hackerrank.com/articles/3939437783-setting-up-scim-provisioning-with-okta#generating-an-api-key-from-hackerrank-18>) section.

## SCIM endpoint and authentication details

**Item**| **Value**  
---|---  
**Base URL**| `https://services.hackerrank.com/scim/v2`  
**Users Resource Path**| `/Users`  
  
## Supported SCIM operations

**Operation**| **HTTP Method**| **Endpoint**| **Description**  
---|---|---|---  
Create User| `POST`| `/Users`| Creates a new user record in SkillUp  
Retrieve Users| `GET`| `/Users`| Lists all users provisioned in SkillUp  
Retrieve Single User| `GET`| `/Users/{id}`| Retrieves details of a specific user  
Update User| `PUT` or `PATCH`| `/Users/{id}`| Updates user attributes  
Deactivate User| `DELETE`| `/Users/{id}`| Deactivates a user in SkillUp  
  
## SCIM user schema 

Sample SCIM user object:
    
    
    {
      "schemas": ["urn:ietf:params:scim:schemas:core:2.0:User"],
      "userName": "runscope757dsftiqzde471@atko.com",
      "name": {
        "givenName": "Joe",
        "familyName": "Doe"
      },
      "emails": [
        {
          "primary": true,
          "value": "runscope757dsftiqzde471@atko.com",
          "type": "work"
        }
      ],
      "skillup_role": "developer",
      "manager_email": "",
      "job_title": "",
      "active": true
    }
    

## SkillUp-specific attributes

**Attribute**| **Type**| **Required**| **Description**  
---|---|---|---  
`job_title`| string| Yes| The user’s job title.  
`skillup_role`| string (enum)| Yes| Defines the user’s access level in SkillUp. Allowed values: `individual`, `manager`, `admin`, `developer`.  
`manager_email`| string| Conditional| Required only for users with the `individual` SkillUp role. Leave blank for others.  
`active`| boolean| Yes| Indicates if the user account is active.  
  
All SkillUp-specific attributes use the following namespace:  
`urn:ietf:params:scim:schemas:core:2.0:User`
