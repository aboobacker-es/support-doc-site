---
title: "Set up SCIM Provisioning with Microsoft Entra ID"
slug: set-up-scim-provisioning-with-microsoft-entra-id
collection: integrations-1/single-sign-on-(sso)-
pylon_id: 293e4986-cb8b-49bc-84cb-da88d00efdbe
published_url: https://support.hackerrank.com/articles/9508675839-Set-up-SCIM-Provisioning-with-Microsoft-Entra-ID
last_edited: "2026-05-27"
is_published: true
---

HackerRank supports SCIM provisioning to automatically manage users and teams from Microsoft Entra ID.

# Key features

SCIM provisioning with Microsoft Entra ID supports the following:

  * **Create users** : Creates users in HackerRank when you assign them to the application in Entra.

  * **Update profiles** : Updates user profile attributes in HackerRank when profile changes occur in Entra.

  * **Deactivate users** : Deactivates users in HackerRank when you remove user access in Entra.

  * **Sync groups (teams)** : Syncs Entra groups as teams in HackerRank and maps group membership to the corresponding team.

  * **Silent provisioning** : Provisions users without sending welcome or activation emails.

# Prerequisites

Before you begin, ensure you meet the following requirements:

  * You have Company Admin access in HackerRank.

  * You have admin access in Microsoft Entra ID.

  * You have configured SAML-based SSO for your organization.

# Setting up SCIM provisioning with Microsoft Entra ID

To set up SCIM provisioning with Microsoft Entra ID:

## Step 1: Generate an API key in HackerRank

  1. Log in to your **HackerRank for Work** account using your credentials.

  2. Click your profile icon in the upper-right corner and select **Settings**.

  3. Go to **Company > Single Sign On**.

  4. Scroll to **Configure automatic user provisioning**.

  5. Click **Generate Key** under **SCIM protocol.**

![image.png](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1779689373420-image.png?Expires=253370764800&Signature=TKNkdK9kRvs21TUHlPQ3oOAa02qjjHQtB-tjFBv3PuY4Fyow7eNXHjz-aaiLIGFI9n-RdeewAeBvo7wEpxl2KE~YDkGiAjAcTxOuS4~RLdL56RxXM8lDyOtux349NuiWpGLuDXClnoCaUUH7IrA~aNJ0wf733Rt2yAkQPK3kTwcrqig7Pm5ZEdlJ1fOQaS3VvZ0NKJG2LrMkDd3BE~ouJOgTqIE9EOVWkD9L3LAl08R8c0cSfbswyT-nfZdJAc69KCt06Nwi9JvVIcVoeAq2~qSr7cWi0ckICAv~mPFJBH~SG2-OwSZV-TBLgYOl-pSKdtKzosBi4d2ua8JrM0GT8w__&Key-Pair-Id=K3NV4LZ47N8M46)
  6. Copy the generated API key.

**Note** : You need this API Key in [Step 3: Configure automatic provisioning in Entra](<https://support.hackerrank.com/articles/9508675839-set-up-scim-provisioning-with-microsoft-entra-id?lang=en#step-3-configure-scim-provisioning-in-microsoft-entra-id>).

## Step 2: Create a HackerRank enterprise application in Microsoft Entra ID

Follow the steps outlined in [📄 Setting up HackerRank Single Sign-On with Azure AD](</articles/3007497492>)to create and configure the HackerRank enterprise application.

## Step 3: Configure SCIM provisioning in Microsoft Entra ID

  1. Log in to your [Microsoft Entra ID](<https://entra.microsoft.com/>) account using your credentials.

  2. Go to **Entra ID** > **App registrations.**

  3. Select the HackerRank enterprise application created in Step 2.

  4. Click **Go to Enterprise Application**.

![image.png](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1779688815601-image.png?Expires=253370764800&Signature=UNXxPt1qtuD6cZtHtZMCes1ZEtI1R48cANceD9hfYQT8F43qCMtRAdt8~lQzGCyELz6KIfDgRvZfpU6C8ByplWVqnT6zyPb41WDTYbu83crj6rm~RDNiocA6m90RzGs7SiCBhmtRT63MECcoCl9MY3dlR9czHYXrqRc07mMq7DtUi~TvQYnkIQfbARnvhdRza-NpaS0r5XNpqRrH1uaNztSrSXyqCMys-XJJw5WE8VHHwXfLaCxksAagkn8eEKxsZWR7VfNvbRHRgfoJEDRTNTiq0nIFfEQ3eDUTpWQD1vApsMw7yM-THXWdtyI3BCL1Br9O5H3enrD7S40wFalvPQ__&Key-Pair-Id=K3NV4LZ47N8M46)
  5. Select **Provisioning.**

![image.png](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1779688742526-image.png?Expires=253370764800&Signature=Rbg0nXYOgDtnzsGM1YQQim2YlmFjXBb2CJ2MzG8cMWa7aR106sS1A9cpWY4W11ZlXEi4hdvlY95FVASW4WVvwG~umb-bQN9-hJzCd-J58rHU~o-IQ0kMDCifGIY38nFUTiZ1330oyt~Ln9YHrTGHxSqyvbplfupxyZa0pSAGmoAnOXAH1fbVHKdgL874Ilk2LxOVXdtbbLkFYK765VeW7Woc7WwUDDWjPWTsy9rUbSrpZqg8tayvRcABI9uSOLPh-22wfkxVbkAzV0cMP7d-XmTjQVgDNFfuXiOEh2SW~B~usw7D0KmDxK3pFvnMtgvfKAR4q23Zp4NZeaQ-44D09w__&Key-Pair-Id=K3NV4LZ47N8M46)
  6. Click **Connect your application** under **Create configuration**.

![image.png](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1779688872450-image.png?Expires=253370764800&Signature=GPpR8ZoY-PxmuyE70E7kIWgHB-tsovblMPe43qqPWMpC4BnPg8nSt4GGH3KGipAr3YFXRa9Vr~UK3FUMRAhajx4CBtNsu8MXPTgdM9shnV-xAPpkHUt1l5kgaKP8sH8RTolq0hQGukPPlIFOWATi9oAWRIWv2RkGpqzxD7FWRhs39amuO~uBZlinY-oHghW8w3YphVuXtTFb4f3Uss8ZCibUeo6vvyc1O-7~s2JgZPm1NG0tjw5q-rFaIqfqWN8R2~z4oxEkA9fAey7cOT8Gs6sVva5AUhHDmUQJNHwzzXKZXBmx3SG9IIl0m0r9m47NaATUmLU595E4MQgMVYvqxw__&Key-Pair-Id=K3NV4LZ47N8M46)
  7. In the **New provisioning configuration** page:

![image.png](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1779817010410-image.png?Expires=253370764800&Signature=ZH3UagLzwW8Xp~LXFliwmfXofRkZoomJSXF1KVI2Xy4LJqaiKUrmRUUeJPWU3FscnLhzCbRS1lyGpPgLppSxeZrdTORwvCNMJMH1m~R9Sxl91bmhgc1VWDSjMXwOXh7wDO9yu5eZdT0OKAKGdhQanf3VefVu7EmjpBGkkfmD49-hZOj6U1BGA6zPzlN0qYrluK1bo7bw8CPbZcndAKB2RTGUJsmdBtfPt08m9HO4retQJDEcM9rGvPC4D17j0poTdF8Mb6Wwq8MieXHujksP51EwFCnh7Lhynl-hCyEiMt2Rzy5uAM-R6k4OMABk5sSZjMV6fo-i29FzWYOigabTqQ__&Key-Pair-Id=K3NV4LZ47N8M46)
     * Select **Bearer authentication** as the authentication method.

     * Enter <https://services.hackerrank.com/scim/v2> in the **Tenant URL** filed**.**  

     * Paste the HackerRank API key from Step 1 into the **Secret token** field.

  8. Click **Test connection.** A success message appears confirming that the connection to HackerRank is successful.

  9. Click **Create**.

## Step 4: Create Microsoft Entra app roles

Create app roles in Microsoft Entra ID to map users and groups to corresponding roles in HackerRank. 

**Note:** Ensure that you create app roles for **Company Admin** , **Recruiter** , and **Developer**.

  1. Go to**Entra ID >** **App registrations**.

  2. Open your HackerRank enterprise application.

  3. Select **App roles.**

  4. Click **Create app role**.

  5. In the **Create app role** dialog:

![image.png](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1779689049672-image.png?Expires=253370764800&Signature=fK1jfmYWgy2w5F5Tm2UM95XTTUCpHHKcjpJ7qlmt0WlHGoK-g~gJKjGKHw9gX7vqJDA3OiuftcWSsWbFDR7sd33TzcqEHX6AA~caPPqVodkv9-1N9ch1t9-1oOb~kgD0wGmeo1UVKyYXfwZewZ0EbtjgBRZYz~4B62GASookKfu2Nuy3W-qLqdYNa6lqzWrQoO30TrMsIuJMGBwfAhTL4C2prXKQjcgZt02nAuveqsne7rZGfmlhl0~wShbkvrbTVjyGzYM~SaS3IjjE6w4vQVz2CHrabTI0crfcapMcZLxipX7KAh-nibMqN9C6kJ4UigKx4xAmFYRe0HZeLczaNA__&Key-Pair-Id=K3NV4LZ47N8M46)
     1. Enter one of the following in **Display name:**

        * Company Admin

        * Recruiter

        * Developer

     2. Select Users/Groups for **Allowed member types**.

     3. Enter one of the following in **Value** :

        * `CompanyAdmin`

        * `Recruiter`

        * `Developer`

     4. Enter a short description in **Description**.

     5. Select the check box to enable the app role.

     6. Click **Apply**.

**Note:** When you create Entra app roles for custom roles, use the customer-facing role name.

## Step 5: Configure attribute mappings

Configure attribute mappings to control how Microsoft Entra ID provisions users and groups in HackerRank.

  1. Open your **HackerRank enterprise application** in Microsoft Entra ID.

  2. Go to**Provisioning > Attribute mappings**.

![image.png](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1779689193726-image.png?Expires=253370764800&Signature=JPbGaRFWo0fv0ZnT-2ZpegVp6BVClnCXFCSr~pKCx2N7kdi1hhK5R8YjjFnbV7Sdv3RsGs4IaQeKtYZ~IbA7yQ6IkwMyELMvyfNM20ggAK27gjcTZ-akZbh-mVtWMrrc~hqrARnmS8h1Qcut1HPlzXZ3d6ztF~BwcpPtdkinapvK5cA9MqNgxwg0Ly9TNCGfY5Bm6miuDeTrUPySBOFfT8S9yIp84ec2GKPNXx~mH3qxFY3U6sKSaQ9MOk~K-T8UDscQxluZIt-NnZJUnVaWws0fWtg~-HCeASGekNhhIN-MDzY88d9TBAENkhz8Dkj5imNjsTkr~57o~GL81FfkYA__&Key-Pair-Id=K3NV4LZ47N8M46)

### Configure user attribute mappings

  1. Select **Provision Microsoft Entra ID Users**.

  2. Configure the following mappings:

![image.png](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1779689210136-image.png?Expires=253370764800&Signature=R-H944Y1sOWqfv7RwyJbjbQiVnvNzrbSC1Uofiz2rN~Gk0onRk2hGQbaM4taTX833g5Z~WkRsc3lqtW~VxOosYcDx0l54MXG9JT6FRo3vZ~yVPyuQS5Oi1CaYV3ke-GyCO8Yqhd0b9-hAKXtMWiDP9XRsbYeYqxNxPKgcn1cmu-7uGH5Y34tVQm6Oajq4QsSA-FINRKhOOSCdIe6HXYI6PZdSSJB7FApt7AIT1csosP7uATMJ~w2al1Tqr28dXtJhzHM8bsOQJK~uLMd8qQiykIVJ0Tq2yOtJEiZoZROP268xr-NgezgpDvhStsREPMbx~gryWsGUemgVa-IPcQ-Yw__&Key-Pair-Id=K3NV4LZ47N8M46)

**Target attribute**| **Source (In Entra ID)**| **Description**  
---|---|---  
`userName`| `Coalesce([mail],[userPrincipalName])`| Uses the email address as the SCIM username. Falls back to the user principal name (UPN) if the email is empty  
`name.givenName`| `[givenName]`| Maps the user’s first name.  
`name.familyName`| `[surname]`| Maps the user’s last name.  
`emails[type eq "work"].value`| `[userPrincipalName]`| Keeps the email aligned with `userName`.  
`active`| `[accountEnabled]`| Disables the user in HackerRank when set to false.  
`roles[primary eq "True"].value`| `SingleAppRoleAssignment([appRoleAssignments])`| Assigns the user role in HackerRank based on Entra app role assignments.  
  
### Configure group attribute mappings

  1. Select **Provision Microsoft Entra ID Groups**.

  2. Configure the following mappings:

     * Map group displayName to the HackerRank team name.

     * Map group member to HackerRank team membership.

**Note** : Keep only these two attributes. Remove any additional attributes such as externalId.

## Step 6: Assign users/groups to the application

  1. Open your **HackerRank enterprise application** in Microsoft Entra ID.

  2. Go to **Users and groups**.

  3. Click **Add user/group.**

![image.png](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1779689301677-image.png?Expires=253370764800&Signature=tuYW5-ltsDIZF0W5oap1hDy7TRfhy1X~x-Ekve8q98-gBFR9ejxzoxUnrE9OV~RD3ETAb9l8~iVG27BACjkkag3JD8NBCkX~y4MzuQXgSali4RkoXiH~yOAJZI21A0AYVxQNQh-EhfpWsJU6aldS0EOvagURVBc1d8wdizmHMF-11EmUnWB3rwQ7ZfqJhm1KsiKNqP9Ds3lPOqEKXss8IIUsNadOjb7gbIKriViZYOhHnebUHoVCSivVi7uTp4UbHwpT4ts4UinP87Qpqy4dxoNfbbis-ENUf8RH2JeAcX~j3bMT-rbfGAOTBCVnAID~GfhQnr2Ske3evK-oecn5zA__&Key-Pair-Id=K3NV4LZ47N8M46)
  4. Select the users or groups that you want to assign under **Users and groups**.

  5. Select one of the following roles under **Select a role** :

![image.png](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1779688216005-image.png?Expires=253370764800&Signature=WE73LOmmD3KLMGbb7jUzztV9JcvkhbEVpPCgP2gttANC0iHS0k1hhCJwIZHfLh-455Dz2Lt~PKh5zth8Ahe0XYMkmfbfseRFIW7NWtMae4TWPGVegoyS5i0WedDoyIKQGIe1RuWnouZnRHPgT~9DbFwyHH7l38qMrGQiEWJcBc7c-07C8J5BuUKyjIZlr8iMkArFEcg~yHb5QeqGiyrR8JZDkNaVWIrSwL-X7FGoeyxyhn1dpgOqJP6bvoJjG10RE-ZV8~BpDXVeCW1aQQsDCIwTggcxhez5M4OHLgchcfsz~-uMQF1lryEEzgkNl2iRQ3TrRDnkWUSo05sFgyImig__&Key-Pair-Id=K3NV4LZ47N8M46)

  * Company Admin

  * Recruiter

  * Developer

  6. Click **Assign**.

**Note:** Create Microsoft Entra ID groups such as HackerRank Recruiters or HackerRank Developers, and assign each group to the application with the corresponding role.

## Step 7: Enable provisioning

  1. Open your **HackerRank enterprise application** in Microsoft Entra ID.

  2. Select **Provisioning**.

  3. Set **Provisioning Status** to **On**.

  4. Click **Save**.

## Step 8: Verify provisioning in HackerRank

Verify that users and teams are created and active in HackerRank.

  1. Log in to your **HackerRank for Work** account using your credentials.

  2. Click your profile icon in the upper-right corner and select **Teams Management**.

**Note:** Use **Provision on demand** to quickly test provisioning for a single user.

### Verify users

  1. Go to the **Users** tab.

  2. Verify that:

     * Users appear in the list.

     * **Status** shows **Activated**.

     * The correct **User Role** is assigned.

### Verify teams

  1. Go to the **Teams** tab.

  2. Verify that:

     * Teams appear in the list.

     * Team names match the group **displayName** from Microsoft Entra ID.

     * Users are assigned as team members.

# Troubleshooting

Use the following guidance to resolve common provisioning issues.

### Authentication errors (401/403)

  * Confirm that the **secret token** is the HackerRank SCIM API key.

  * Ensure that you paste the token exactly, without extra spaces.

### No users are provisioned

  * Confirm that you assign users or groups to the enterprise application.

  * Ensure that **Provisioning Status** is set to **On**.

### Name or email is not populated

  * Confirm that you configure attribute mappings for:

    * `name.givenName`

    * `name.familyName`

    * `emails`

### Group membership does not sync

  * Confirm that group provisioning is enabled under **Mappings**.

  * Ensure that the required groups and their members are in scope for provisioning.

### Role does not sync

  * Confirm that users have an app role assigned in Microsoft Entra ID.

  * Ensure that role mapping uses:

    * `SingleAppRoleAssignment([appRoleAssignments])`

    * or `AppRoleAssignmentsComplex(...)`for multi-role scenarios
