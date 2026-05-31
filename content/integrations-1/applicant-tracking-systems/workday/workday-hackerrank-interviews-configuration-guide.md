---
title: "Workday - HackerRank Interviews Configuration Guide"
slug: /integrations-1/applicant-tracking-systems/workday/workday-hackerrank-interviews-configuration-guide
pylon_id: 66975088-81cf-4683-b974-f8ac57aaf9a2
published_url: https://support.hackerrank.com/articles/4722432610-Workday---HackerRank-Interviews-Configuration-Guide
last_edited: "2026-05-25"
is_published: true
---

This guide describes how to configure the Workday integration for HackerRank Interviews.

## Prerequisites

Before you begin, ensure you meet the following requirements:

  * The Workday Recruiting Module must be enabled and in scope.

  * The Interview (Default Definition) business process must exist in the tenant.

    * Search for `bp: Interview` to verify it exists.

    * If it does not exist, set up and configure the Interview (Default Definition) business process using the **Create Business Process Definition (Default Definition)** task. For more information, see [Workday Community](<https://doc.workday.com/admin-guide/en-us/human-capital-management/recruiting/interviews/wks1564421850508.html?toc=3.12.0>)[ ](<https://www.workday.com/en-us/homepage.html>)guide.

  3. Download and install Workday Studio on your computer. For more information, see [Installation Guide](<https://community.workday.com/node/11810>).

## Configure Workday Studio

Configuring Workday Studio involves three steps:

### Step 1: Import CLAR file into Workday Studio

  1. On the Studio menu bar, select **File** > **Import**.

     1. Select the CLAR file import wizard in the **Workday** folder. You can find the CLAR file at this [link](<https://s3.amazonaws.com/downloads.hackerrank.com/ats/Hackerrank_Interview_Integration.clar>).

     2. Click **Browse** and select a CLAR file to import.

     3. Click **Next** to display the collections and projects in the CLAR file.

     4. Select collections and projects to import from the CLAR file.

     5. Edit all project name conflicts if applicable.

        * Select a project with a name conflict.

        * Click **Edit**.

        * In the **Project Name** field, rename the project.

     6. Edit all collection name conflicts if applicable.

        * Select a collection with a name conflict.

        * Click **Edit**.

        * In the **Collection Name** field, rename the collection.

     7. Click **Finish**.

### Step 2: Add a connection in Workday

  1. Select **Window** > **Preferences** > **Workday** > **Connections**.

**Note:** If this option is not accessible, go to **Window** > **Show View** > **Cloud Explorer**. Click the icon in the upper-left corner of the Cloud Explorer panel to open **Connection Details**.  

  2. Click **Add**.

     1. On the **Add Connection** window, enter values for the following fields:

**Field**| **Description**  
---|---  
Name| The name of the connection.  
URL| The URL of the connection.![](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1734046123055-?Expires=253370764800&Signature=OHkqvD51b3dcdSQz5V5WMXv38XSTrs~ajPWd6uXe08HG5Og-xaQR2YtHdLPIRy~5MrtYkg4Xhb64B6dUveWh2z0Tc7QDd~T~Sc2cTOwECyenLp882p59aJip9ADOq4hqvXqCdao0M~UK1XXH35kW~IJnJooAqeRnTkyktGX72qVDcE-EkyZd1s6g6LJTfi6fxl2nTc6H1OaG09Nd59Ew4kTR362AUTfAuJYIsTWpJVP7H35JajljdE9xL0jQx7MBtZwi76LneLXeIYP0Myj-zCIXvENUgii-dsfgUP8Irr-UEyCymbstinEbvdFvXANgbV-gwPdAY61RIViWwZNcIQ__&Key-Pair-Id=K3NV4LZ47N8M46)  
(Optional) Group| Adds the connection to a group.  
  
  3. In the **Credentials** section, specify the tenant and select an authentication method:

     * **Basic Auth:** Enter the **Username** and **Password** for the connection.

     * **OAuth 2.0:** Enter the **Grant Type** , **Client ID** , **Authorization Endpoint** , **Token Endpoint** , and **Access Token**.

**Note:** To use OAuth 2.0 authorization, you must first register an API client. For more information, see [Workday Community ](<https://doc.workday.com/admin-guide/en-us/authentication-and-security/authentication/oauth/dan1370797831010.html>)guide[.](<https://doc.workday.com/admin-guide/en-us/authentication-and-security/authentication/oauth/dan1370797831010.html>)

  5. Click **Test Connection**. Workday Studio confirms whether it can access the connection.

**Note:** The user must have certain permissions to deploy. Refer to the security group list in Workday Studio to confirm the user belongs to at least one security group for each section required to deploy the CLAR file to the tenant. For more information, see [Workday article for user-based security groups](<https://resourcecenter.workday.com/en-us/signin.html?fromURI=https://signin.resourcecenter.workday.com/app/workdayciam_aembetadoc2_1/exkd1j067lBdQMGYl4x7/sso/saml>).

![confg_guide1.png](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1734046123389-?Expires=253370764800&Signature=EUXEZqRnzLkuE~eez1n1v8ZPep6egPsCxsCW5S1-0S9TY7ot3U5L7sn7qnusVsZWqvxoKrOotYxx0VCpGCWsvSDSMfm1jtg-zLfbb5KlYWNu94xsccY9bj14fKAK~YEuoyR94cz5f5bydBD7mmSZExvmiY17SJI9sdxtS64XgQ9-b~xq4B18mJzDn~ag7wAf23EQLXBBk4s1kzR1m5Px10oOrpvweECcE1~KYibtwFRTgZW797EUAv7kyu8GOFZZHbawWpDp96eUAxSDGDt8oVV66SZVPYB4ikBBxJXnMSbpshy-rrG0PliksekDbfqJcy~WS2LsYV954gIdSev9TQ__&Key-Pair-Id=K3NV4LZ47N8M46)![confg_guide_testconnections.png](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1734046123815-?Expires=253370764800&Signature=F-EBc0fAOy1MSKm7Q46k0segf5G7WcefhZIbtd1rKrvA1-j4bJMCGG4gPxz8zC5IH6xkzykjOanHVLLJu5W9nsaAyLG-~bhIEHIn6uG0XuR6jJq0JrgeJXzDNG5yTrvsXCFIv7d-GM5cgwrIHBIG62Ip44TOde9CE1HquKpQVg7CCynDbQLP~8cC6fyKocR5LvDJoTFk-rtQYmQKKnDauThdo4js3E0FxIFk7tpgYFX0mufN-pgpctM2NHB68-EsFzVY1SynIGXNNQSCfq~K3OdRaoCznTOF-l~HrRcFJpfa2D0UML2GBK6tAu-h93FZFWY69D5bljnf~IgbhUszzw__&Key-Pair-Id=K3NV4LZ47N8M46)![confg_guide_testconnections2.png](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1734046124227-?Expires=253370764800&Signature=BoSpt7spaRVeZ4kQ-dhM065aL2eInLZCxmdPYp3etfD-JxgwoVX1fCnHagbyPikL~xmLuI4UwnpScKuRJSnJmphEmtw1V3CbdFgnhd-d~O~JBEENe91emeAFBwrUh-rA4pdTrAFCcWbpl3p43wFO0B9bGVkaMacjRQ8XlpxRaFxsv5XAt8E2HpXSJ-XV9JDuFBH-MxJ1mebVFoYf2hlaGupGJt8wxvBn~XjsC3s1Xr2PoIFZYM-cZxAk50nn90DeMP-vwAV4Oeuwkf2KoQaIwFkTLO96vimPBvgnSOhRV~17U0LP2yXrJTVi0gvwgthVVvR0~jCghU9R9ONx9QbXnA__&Key-Pair-Id=K3NV4LZ47N8M46)![confg_guide_testconnections3.png](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1734046124704-?Expires=253370764800&Signature=c-CjTRGsZJmzEcQrzWyj0hoNPNwiK3Crxs6Z3JqwApI1wuSiS3khoSJwiTpnQYk5XSdmyfSqZUVVjtYTHyWvuSkyjLr-QBSBeYKbd-od3lZSgFTQVZX4idKflZAr6QI5O-A465o1gHTo1UIHlAq4ehm5m5q-tUDWIwsz5JCwaFDEaOteh6Tkd4HKGaw9ITbkxU1g7D5QlOdniJJXffZ7~8b8xmS73fj-RocSUTimP705yjgBkDe1iXnuj3BruylRxAomjU7P2Ap0ebBN5reXHcUhTC1ZAqcpoa5YvHjnPPI0iT6ax-bihf~zpTxqNGEvgrI2v6pdGWXoEGEqkBOTPw__&Key-Pair-Id=K3NV4LZ47N8M46)![](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1734046125142-?Expires=253370764800&Signature=UoiXQUoY4054xcJu9ky4PmzPtgZIPjsKgnxNRUVja0muCV1Q6NIJZj-NNoIB15156WQXVCzVBGAncloHXAuOgUgCINdRsdZjqjXihHAVP59z2qgF8iIairwhI-t7tVrc~ddJ~fX6EGfie7MF6SQ-BDCXKbtjORz7bZ5pUdXd-YDA46ZuNXlB~yduuaH2ZhIWxiepfP8DXfsYKSk8uSWrAZr5UeY0EssIdwLIsZrxvbnpiZMoQUIirQAKeWmGGJdgqWX5cA-nNeQKBMVgpZEXGb8HzmTNItO-HkpM258UC9lagydCLwbc2l9bQ0DanmacJFFKhltf--at6-fBjbrT~A__&Key-Pair-Id=K3NV4LZ47N8M46)

### Step 3: Deploy CLAR file to Workday tenant using Workday Studio

  1. In Workday Studio, right-click the project and select **Deploy to Workday**.

  2. Select the Workday environment you wish to deploy the CLAR file. Make sure the option **Include source code in deployed CLAR** is selected.

  3. Click **Next.**

  4. Confirm your project appears under the **Configured** section.

  5. Click **Finish**.

## Configure Workday Tenant

**Important:** You must have access to the domain **Security: Security Configuration** to perform the steps in this section.

### Create and configure an Integration System User (ISU) account

**Note:** If you cannot access a specific task or report referenced in this guide, use the **View Security for Securable Item** report to review the domains required for that task and the associated security groups.

  1. Create Integration System Users.

     1. Access the **Create Integration System User** task and configure a Workday account for the integration.

![](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1734046125470-?Expires=253370764800&Signature=LhWwERvSxrzkUCSBpZr6GHZlsaKydBc7CA09s5d6kb1nsC9LDiwnSVtdq1B9ynUibHQeNg4rh9B9M8kDNU7XBp-TW95UXoK2yUxYfQV0K-UA82SRYiBngUbDPkDgkHGmiFoLHhcuXyG0vdeUg-XNyrIs3xSof~s7QTf5mGomYb7Et3J3BpwtkLY-xPEEI92hCq1e8~D14YFVLVUvCripspzPz5LLGJU9qFlI~UlwRIpoK6Tab7Eh~8zOIsWAduOzs9m5E8CowPl2tdnTQr173lMY-mvqY2pal5tiOsts-wLHN9Gj4MbVBCSlgOyB9~slUPjcmER5leBBLOlgcE44eQ__&Key-Pair-Id=K3NV4LZ47N8M46)
        * Name the account `HackerRank_Interview_Integration_User_Step1`.

        * Specify a password and save the credentials for future use.

        * Keep **Session Timeout Minutes** at the default value of zero to prevent session expiration. An expired session can cause the integration to stop before it completes.

        * Select **Do Not Allow UI Sessions**. This prevents the integration system user from signing in to Workday through the UI.

     2. Repeat the steps above to create an additional ISU named `HackerRank_Interview_Integration_User_Step2`.

  2. Create an Integration System Security Group.

     1. Access the **Create Security Group** task and configure an Integration System Security Group for the integration.

![A screenshot of a group

Description automatically generated](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1734046125817-?Expires=253370764800&Signature=gXRndnACieXePBqwNrauHQPEFy2X82tB78I8UqS-oO0zD7PyUBDUKc7r4DhGCJdV0RJZZFqLg-GF33Z3MtV0t7vIdVPQU~sM~AA2Wuor-KpSjQ7Giv2s2EUfCOWooFAme1NowQNp7Jcx5r8wS3c72CCvPiZ-V~~BhCFx610UwUwoRBjFTSou257Fc9XZrgAdopRWusCMcW-xhYXi2Q1cAzGxPxEzD4Cn6SWrh7IZPiPem0CoRjySxWr-03eNDELKy71~3Q1NXRLyp2rCxBrb6EZ3362ESx1a9av3F8vkTydcW33LB~fy9T09rWlwaOGA~YgTS0GQbUy5WFK0xfGAmw__&Key-Pair-Id=K3NV4LZ47N8M46)
        * Select **Integration System Security Group (Unconstrained)** as the **Type of Tenanted Security Group**.

        * Name the group `ISSG_HackerRank_Interview_Integration`.

     2. In the **Integration System User** field, select the ISUs created in step 1 above (**Create Integration System Users)**.

     3. Click **OK**.

  3. Edit the domain security policies.

     1. Grant the security group access to the following domains. 

        * Interview Integrations

        * Candidate Data: Interview Schedule

        * Candidate Date: Interview Feedback Results

        * Worker Data: Public Worker Reports

        * Person Data: Work Contact Information

     2. Repeat the steps below for each domain.

        1. Access the **View Domain**  report from the search bar and locate the domain.

        2. As a related action on the domain, select **Domain > Edit Security Policy Permissions.**

![](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1734046126100-?Expires=253370764800&Signature=V7mRnbC9cIplltpKIyX8Ut4tj33YM1S12~60qRo1HA99e7sNItj4DYLdS3Ue4H4XnrnuLbkrclbaA8Jw8w0rnRDr4Xb1fuKGiBcs6sjlFMrWsDhhAXQ5vpZZ3BLTg2rPkxAaTphWDTC~Ww~1zyJxmGxLG5aewkCaQz0O0QTwc6lqxCdEyh0IL3q3vR1vjIBahtJIFwPsc6i6W5IWdExzG-8jB7wcByxK-IzheDNBloR4S7HOXy65FOtZMj~iNMqUHxrdrJ9AZaMJOo-5ExT98X4IbYwuPLtJMtH2z5n2AbLUKBPB3pjo-WP1xLrHA9YzhojZMD4hZmWy9q95vV2ONw__&Key-Pair-Id=K3NV4LZ47N8M46)![A screenshot of a computer

Description automatically generated](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1734046126452-?Expires=253370764800&Signature=kyR3QSB~lbDUjJu3uqtGiS5rVQk1~BymsFUGfeuQF3EXEjfqmrXIg9lR5DWi~88mSXqJ7IOwtK6wd69bgDO89VupGRTYUN5-c3RYe1JcOaNStrEbtIvDoGYy76ElI-PAdGvFqPZtRAtnJhg2wyhuECNks9eVJdV9GkcfkJO25H6Mi1kF51QYoNFF~qQ4fHvkWQ8-AXJTKnJ6PuB1~x7wGe0UR6OjLUYfX2Mo82Pb0iQoCCKz8csaEL0n0TZ3GgmdJVdoy4vJ51sYbZuTWteHqVhBmibRmzHtsF41KhO2xqdVToaPxq7UF69UMZjOLhsSqIqMLOPXWLMQ8PISk-EtwA__&Key-Pair-Id=K3NV4LZ47N8M46)
     3. Add the security group you created to the Report or Task Permissions and Integration Permissions. Select **Get** , **Put** , **View** , and/or **Modify** as required.

        * Activate Pending Security Policy Changes.

        * Access the Activate Pending Security Policy Changes task.

        * Describe your changes in the Comment field.

        * Select the Confirm checkbox to activate your changes.

  4. Access the Maintain Password Rules task. 

Add the integration system users to the System Users exempt from the password expiration field.

**Note:** Workday recommends preventing Workday passwords from expiring to avoid integration errors caused by expired passwords.

  5. Assign ISU to the integration system.

     1. Search for `intsys: Hackerrank_Interview_Integration_Step2` and open the integration system.

     2. From the integration's related actions, go to **Workday Account** > **Edit**.

     3. Select your ISU named `HackerRank_Interview_Integration_User_Step2`.

     4. Repeat these steps for adding the other ISU for `Hackerrank_Interview_Integration_Step1` Integration System.

![confg_guide_editaccount.png](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1734046126740-?Expires=253370764800&Signature=BHBMwpwaMiTHy4od6Pn38Qi~Or-FbQWluY6PelqbFlQJ7ebszAkSXjTxJCXc6Zx29Bux6MMuZdEdQq8AP9a5gh56-yW6EHTGiszJPO9O36FyyzDD0SNKMAj0-f7UUSkrfbO289Cr77BZ2Ueaf0438EEMJZS0P12X8VJZrOuUxEqVc5ZldVFCfEm5P7NJSnoew-zIYW1bD7fP~lSbLm2rABwEcJ9XtV3nlJH6aQ9hz7Y-iIYxrQ3GOncD8nwGSfiDDWopsfm0gF7YCBuP5NI-hjl06QGxvEuqp-KsXlmeHcQBqP~kC~dWXq3F5QxbmuCZGf8aK2gzcTS5VzyXAv97Ig__&Key-Pair-Id=K3NV4LZ47N8M46)![confg_guide_unknown.png](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1734046127179-?Expires=253370764800&Signature=iYXqcQP210E-c2TlLerCUQuYAhZ8gMW8qcTQDgWqueQGa~aEK8GL~v8Ruvugd2pPQsLl84AiYxBtkUMJoabLgbVq8Fcu3BM6GPNv-pMx6Z6d66d64IkmWTnByq4J4dOoRfhvlcuam3Gm3DSP~nLbMWCLKacDFs1ZtbuP-1dguekZaRalY4STdr1iFWTXKUgEFj6glqC5Co-2r19SSZKAm5ie~CpEmb8t6s7wpFDuZiq~xTwBHcLzZ9Npp7p8dpF1aO~SxTe2CIlA4DHu3EkpIXGkaeS6C3fQpeUGY~fBghmwTxTe2bEu6e4SAv9zHNtWRnlLc35yDfkRKJR5xvaaCw__&Key-Pair-Id=K3NV4LZ47N8M46)
  6. Manage authentication policies for API access

     1. Go to **Manage Authentication Policies**.

     2. Edit the authentication policy for your current environment.

     3. Click the **Plus** icon in the upper-left corner to create a new authentication ruleset.

     4. Enter a **Rule Name**.

     5. Select your Integration System Security Group created above under **Security Group**.

     6. Enter a value for **Authentication condition name**.

     7. Under **Allowed Authentication Types** , select **User Name Password**.

     8. Click **OK**.

     9. Go to **Activate All Pending Authentication Policy Changes** to activate your changes.

**Note** : If authentication policies are not configured correctly, HackerRank may be unable to make web service calls to Workday. If there are issues with authentication, use the **Signons and Attempted Signons** report to troubleshoot the failed sign-on attempt.

### Configure the HackerRank Settings page

  1. Enter the username of one of the integration system users you created.

  2. Enter the corresponding integration system user password.

  3. Specify the**Recruiting Public Web Services Endpoint:**  
Search for the ‘Public Web Services’ report in your Workday tenant. Navigate to the **Recruiting (Public) Web Service**. Click on the **Related Actions** next to it and navigate to  **Web Service - > View WSDL**. Search for ‘soapbind:address’ in the WSDL.

  4. Enter the Interview Rating IDs from Workday that map to **Pass** and **Fail** in HackerRank.

     * Use the **Maintain Interview Feedback Ratings** task to configure ratings initially. After initial setup, this task can only update feedback descriptions.

     * Use the **Maintain Reference IDs** task to update or view reference IDs for the **Interview Feedback Rating** business object.

  5. Click **Save**. 

Saving the configuration generates the **Access Token** and **Company ID** in the [HackerRank Workday integration](<https://www.hackerrank.com/work/settings/integrations/workday/configuration>) page required for the next steps.

**Note** : If you move tenants, provide updated credentials to the HackerRank team.

### Add HackerRank-specific fields to the Integration

**Important Note:** Before configuring the integration attributes in Workday:

  * Go to the **Field Mapping** section on the [Workday integration ](<https://www.hackerrank.com/work/settings/integrations/workday/configuration>)page in HackerRank to copy the following values.

    * Access Token

    * Company ID

    * OAuth 2.0 Client Name

    * Client ID

    * Client Secret

    * Scope

    * Authorize Endpoint URL

    * Token Endpoint URL

Each value appears in a masked field. Click the copy button next to the field to copy the value.

  * Complete the setup in HackerRank by following the [Configure the HackerRank Settings](<https://support.hackerrank.com/articles/4722432610-workday---hackerrank-interviews-configuration-guide?lang=en#configure-the-hackerrank-settings-page>) section. This setup generates the **Access Token** and **Company ID** in the [HackerRank Workday integration](<https://www.hackerrank.com/work/settings/integrations/workday/configuration>) page required for the next steps.

  1. Search for the integration in the tenant by searching `intsys: HackerRank_Interview_Integration_Step2` in the Workday search bar.

  2. Go to **Related Actions** > **Integration System** > **Configure Integration Attributes.**

     1. Copy the **Access Token** available in the [HackerRank Workday integration](<https://www.hackerrank.com/work/settings/integrations/workday/configuration>) page to the **Access Token** integration attribute.

     2. Copy the **Company ID** available in the [HackerRank Workday integration](<https://www.hackerrank.com/work/settings/integrations/workday/configuration>) page to the **Company ID** integration attribute.

![](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1734046127669-?Expires=253370764800&Signature=pIZLOSooW7lE5bLyRsfV0sJ1ZMTLiyqwW1c~SQujWMqQgkX9IAiQ8ytZfRfC3HW9Se3XosF5ZLPzcRTlEP9frG-q1x2VWYHRHgM63roqY8dq1oFusXoZtAtjwD6SiolBE6kCEdJ8M1AnhMksMzBNP1RnHmHSJEu6~W-R6PFaKAi553cLRPeP11re7ETrkgHyZLO~jpXobu1tB7ZDgGstyXjlj7FnjJCR1uLgKFvU~a9xbtYNTvBfQ4ScN-lN7CRd38fFVASwdEUF50O3hPRANHh4NfN00EppTsJ-JbKfR4PvJz6cFbRxpGWYjpPjIzEvZNzwapA~2U-dsRhalA~2JQ__&Key-Pair-Id=K3NV4LZ47N8M46)
  3. Access the **Register External OAuth Client** task:

     * Go to the **Register External OAuth Client** task.

     * Find and select the integration system named `Hackerrank_Interview_Integration_Step1`.

     * Enter the following values available in the [HackerRank Workday integration](<https://www.hackerrank.com/work/settings/integrations/workday/configuration>):

       * OAuth 2.0 Client Name

       * OAuth 2.0 Client ID

       * OAuth 2.0 Client Secret

       * Scope

       * Authorize Endpoint URL

       * Token Endpoint URL

     * Click **OK**.

![workday_new_ss.png](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1734046127983-?Expires=253370764800&Signature=nVg9rVtppI5Osfo5z197sC5PMMG6myyI8CKuh08izirymgaJKGnEwfU8XcvzTebKGU0QtsJkMYCwCR2YaTny53wobMuQXadMqGxvz5H44t08ZRKyTY9sRBOH9x1U7qgopyxGU8toXa9lOW-4he4FvJuQnqKdXc6NbaZfHCOXYsBjact3nFCKP0l~yRDy76TadpBQ5EQFOB~66NsaqF3IDF9GPRLrCPj4MaRTxBZ697FRsF9~SEcfVJVTH0fCfOnwgKXGPUjb7P8dWMgPartSUqvQNjA4aVHG2rZGDxvt9U1nVAOu9M-R-ZiG56ONVldjBQ3FRjlaTajFJoP4TbiXRg__&Key-Pair-Id=K3NV4LZ47N8M46)

### Edit tenant setup - recruiting task

  1. Go to the **Edit Tenant Setup - Recruiting** task.

  2. From the **Web Conference Integration System** prompt, select `Hackerrank_Interview_Integration_Step1` and click **Save**.

![confg_guide_webconf.png](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1734046128305-?Expires=253370764800&Signature=CL9gHEOuwsWi8rXbkyGl~MVjTPs99SOleVmr0i9KyQZn~g~n1cY3M25CQC387J5KaghdfuFFueHJmVHn99P-2FDVsKHrSMRisPIbj7BVPJBYPKWbLwcYt0r3dHGoczI7twLrU8vcEJAOTzaMf3ywfO5QtUeqeGU4UNSWT7T285T~mLfkfj7tmwG5OyWGT1zF8WeP2IYK68yo4Y5vGNOu9GLrZ~yYWCpIOBrxCZ7VI4yjIq73VRM7eTGcKnqKcJRtFconRJkpIS~Sx97AVxZ~-QkVymMavuyF-VIBlf3lmqD4QLzq5I2hvuhBHBEu4VOfWWn~5C9Qu9a3KcI6Uv3rDQ__&Key-Pair-Id=K3NV4LZ47N8M46)

### Build calculated fields

Use the **Create Calculated Field** task to build the following fields:

  1. **Field Name: CFI LRV Candidate from Interview**

![A screenshot of a job search

Description automatically generated](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1734046128609-?Expires=253370764800&Signature=KMdK2OmkvqoGG7ub41AcF4A3ZDkbAWLElpitsVHse5kxqYgY3pYH3CUYTRppM0YnxuSYBUoqrayKn~ycNXzyFXKyKkzPmP9pCxxGr6QrQFRXfDNv8Vi-pNW72GFxlZdIjPZ4RstVf510jSRqpBFA5PNQwyj1tIe3VZ33hR9Hfq42Sqf6iuLPCprZUYthiBtIcYsf0w6xGalILdgGRgxIQjkp31jmh2d08yyh-VcM3IMoswdm3jn1-aumwsjwZF67TlZWnhkND2SALZiPNZ7DBhJd1IuwpIfortZrs9Ra3uI71QHXSryeJvsxqW18GtyXLWL1m5vJ6OUAAHPlY6AkzA__&Key-Pair-Id=K3NV4LZ47N8M46)
     * Function: Lookup Related Value

     * Business Object: Interview

     * Lookup Field: Job Application

     * Return Value: Candidate – Field Type: Self-referencing instance (Viewable from the Related Actions off of the field)

  2. **Field Name: CFI LRV Candidate Email for Candidate from Interview**

![A screenshot of a web page

Description automatically generated](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1734046128892-?Expires=253370764800&Signature=C6LrvCJyBfeyHlXTkixYeq0RFOub04C63dhv-ZiJpeKm7mIv81UTQz2rjfgob2w5BTMJK2CnHUzCBfpYSIBuuRciBwSgJBo1KxrMDytZZDen1BSiWygIWU2QWUzR1AOhxQihVoDZn6rZJAj~cVFHZOSnQhGU6zPD8aok7mfZS0nJ8tQXld9WhIq5zfOVIdqqRzsP9ccDYW09qfn0YonF-3pCuh5dTUk5Np7oK7C5OTcYuexxgldp0vjG63sb7vMfg7n80nFWzUj0Tm4sndpQ~88bkNTva10xCA272-NitenMsVVRORURvaZUisat5oHUn3tCNGW1l-zx40dJXUE~0g__&Key-Pair-Id=K3NV4LZ47N8M46)
     * Function: Lookup Related Value

     * Business Object: Interview

     * Lookup Field: CFI LRV Candidate from Interview

     * Return Value: Email

  3. **Field Name: CFI LRV Recruiter for Interview**

![A screenshot of a computer

Description automatically generated](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1734046129255-?Expires=253370764800&Signature=BmT8xtx48UYW2yskW3M3rJNKr3E~e5EiNTHZkdulOzyrXQHD8Ntqg5KueIPdFEmWzEIgQe~5QVAyzHVZkYN12ywRXhL0UTMrq2tUOTQ35ifAtDTjnPtTZTZ1cbOlLwR6brUw5IE9S8jROTyAjkmT9ncVZu6QJBgiFSRwMsZ21EtQzU5vWbPHasmTjqLhOdl~Rer8uucQlbI-G5r9A6bPnsv922-7TLTYxdq196Eq3Zs2Pk~xlgK3vjemLCxrUMHMbTor5mevkehQmpf8QWwRIUOyjAIEZQ18sfl8ia1~CE6qTT-rpqIK1fJ05KKzPPpU-vnlv85fYvwx4foUshuqhg__&Key-Pair-Id=K3NV4LZ47N8M46)
     * Function: Lookup Related Value

     * Business Object: Interview

     * Lookup Field: Job Application

     * Return Value: Recruiter

  4. **Field Name: CFI LRV Recruiter Email for Interview**

![A screenshot of a computer

Description automatically generated](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1734046129551-?Expires=253370764800&Signature=XhPnj30GcMcIl6U0pvLB5N3-EwdAVLlNu8T0TvLeXct-~3MdJNaQRlpVTRx5Zy4zqEU5BideUy-L96JJLvXpRa02iLA26M1DwJHU5n8nkOTW-h5mn-prlsm7G3H7wzz7lgyEN5E8R8gSVkW5xzdOCRlOZadmMASde6yv0EF17TaRBwpctFy4aaqsLJ3-0zZ-oDry04FTKL4IySDWSgMvECAEUwAxFwGE-LHTk27zMF~2bnpA4VtC~N1Z9JgElerwZJoga47Jpggmv5798maSjzzxsanBrlT0DQ5J31qwvyHfNLUKkvsOq53r-ytxlz037RJZ~AzKwTiliNiqMdu97w__&Key-Pair-Id=K3NV4LZ47N8M46)
     * Function: Lookup Related Value

     * Business Object: Interview

     * Lookup Field: CFI LRV Recruiter for Interview

     * Return Value: Email - Primary Work

### Business process configuration

**Note:** Workday recommends the following setup and has been tested for the integration to work. We recommend keeping all the steps mentioned below in the specified order. If you have additional steps in your setup, make sure first to test if the integration works for your setup.

![](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1734046129895-?Expires=253370764800&Signature=pzExGMHhLleUMjuIgmNENxi6IgiAtkUmWYAQwQiO0BHPqVBg3zgjQa6A8RLfcWfAmPnYx5s9XAT8y5Ejv7~P2MLtoVcg1yL0vDZcCuu0XN9zzsv4iKIOQwq-qsEm5VZIUWTDqamCIFSh9rXH9wZ3Df6NZYgH16gbDchuk9KWZjI-dukPQZllK1TiTL47JFzHSdrkY2CiLZlpnLXBLMNuEfQqBfihfTxclkj3WllYqr6r3YkVEP~x9GDf-SarwGM7Y4prW4BHcNeKfrGkSC6lDTFCNf8zpaDKQKuxUK7b4DEqmZX9Y~q7nYi3MQVzdCUNKnJXgYzon-ZEidFEZx313Q__&Key-Pair-Id=K3NV4LZ47N8M46)

  1. Search for `bp:interview` and open **Interview (Default Definition)**.

  2. Edit the business process definition using the Related Actions and go to **Business Process > Edit Definitio**n and click **OK.**

  3. Set up **Schedule Interview** step:

     1. Click the **Plus** icon to add a new step.

     2. Type a letter for **Order** that places the Schedule Interview step after the Initiation step.

     3. Select **Action** in the **Type** column.

     4. Select **Schedule Interview** in the **Specify** column.

     5. Choose a security group for the **Group** column that should handle the Schedule Interview step.

     6. (Optional) Populate the **Due Date** column.

  4. Set up **Integration** step:

     1. Click the **Plus** icon to add a new step.

     2. Type a letter for Order that places the Integration step after the **Schedule Interview** action step. For example, if the Schedule Interview step is Order b, make the Integration step Order c.

     3. Select **Integration** in the **Type** column and click **OK**.

     4. Hover over the magnifying glass for the Integration step and click **Related Actions**. Go to **Business Process** > **Maintain Redirect** and click **OK**. Select the **Move to Next Step** and **Rerun Integration** checkboxes, and select the allowed security groups for the redirect.

**Note** : If there are no security groups in the drop-down, click **Related Actions** off the Business Process Definition and navigate to **Business Process Policy - Edit**. Add the desired security groups in the Redirect Action box.

     5. Click **Configure** for the step you created.

     6. Select `Hackerrank_Interview_Integration_Step2` and click **OK**.

     7. Configure the Integration Criteria as follows:

![A screenshot of a computer

Description automatically generated](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1734046130252-?Expires=253370764800&Signature=ZfetuH2Opz5C0LeXgYNN2w9cwcs9ki73p2rS8rNGOYAO0tjcgksguuW1afuxdhMqQ90TN9LOzOjyRriITl9OOIMovrrwKNtLVCeW7Rrfy5-nC0JeffclL5IZoCVvPWuRABI3ZaIldlMMrn~rM75MIOembxSE2g6MJ50FxBhIP7wvXGRyHGkDCtqAUtRfnyRX9DiR7E3fEarukirNl0Jdm70V7xpypZgfkaJiHDbZyGbhWAZePbistx6Bt5Mw-wiBwMS6yDDLYHKSnXAs3UpwtAU4ko4raWhwck2i9V1so2NhQGHLa2LXthfC2s4VlqPO3Dj7gPKwzr1Fw7~fnIPDyg__&Key-Pair-Id=K3NV4LZ47N8M46)
  5. Set up **Manage Interview Feedback** step:

     1. Click the **Plus** icon to add a new step.

     2. Type a letter for Order that places the Manage Interview Feedback step after the Integration step.

     3. Choose **Shared Participation** from the **Type** column drop-down.

     4. Choose **Manage Interview Feedback** from the **Specify** column.

     5. Choose the appropriate security group(s) under the **Group** column.

  6. Set up **Make Interview Decision** Step:

     1. Click the **Plus** icon to add a new step.

     2. Type a letter for Order that places the Make Interview Decision step after the Manage Interview Feedback step.

     3. Choose **Action** from the **Type** column drop-down.

     4. Choose Make Interview Decision from the **Specify** column.

     5. Choose the appropriate security group(s) under the **Group** column.

     6. **(Optional**) Populate the **Due Date** column.

     7. Click **OK** to save.

     8. Hover over the magnifying glass for the **Make Interview Decision** step and click **Related Actions**. Go to **Business Process** > **Set** and set this step as **Completion**.

     9. Click **OK**.
