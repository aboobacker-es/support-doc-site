---
title: "Adding Candidates to Lever ATS from a Public Link"
slug: /integrations-1/applicant-tracking-systems/lever/adding-candidates-to-lever-ats-from-a-public-link
pylon_id: bbd23e0c-40b5-4449-8907-24d7c01cf64a
published_url: https://support.hackerrank.com/articles/9868451767-Adding-Candidates-to-Lever-ATS-from-a-Public-Link
last_edited: "2024-12-27"
is_published: true
---

## Overview

HackerRank enables you to assess candidates' skills as a first step in your recruiting process even before they enter your Lever ATS system. With this feature, any candidates taking an assessment from a public link are automatically created within the Lever. (Currently, this is available only for Lever and Greenhouse users). [Click here for a similar article for Greenhouse.](<https://support.hackerrank.com/hc/en-us/articles/360023468373-Adding-Candidates-to-ATS-from-a-Public-Link>)

By mapping a test to a particular job on Lever, recruiters can obtain detailed candidate test reports for that job role whenever a candidate attempts the test on HackerRank for Work. This is done using an API access token (which queries the recruiter's ATS for their job list) and embedding that API key onto HackerRank. 

This article explains the steps to enable a public test URL for Lever integration.

**Supported Applicant Tracking System:**

You must be using the Lever Applicant Tracking System (ATS).

### **Prerequisites**

**HackerRank for Work**| **On Lever**  
---|---  
  
  1. Code Pair and Test must have API integrated (integration should already be set up)
  2. You must own an Enterprise plan with a Recruiter license.
  3. You must have an activated **Recruiter**  type user account with **Company Admin** and/or **Team Admin**  permissions. This user account must belong to a team with access to the test.
  4. The test needs to have a public or private test URL. 

| Global configuration settings on Lever:

  * Create candidate
  * List Postings

  
  
### Integration and Configuration Steps

  1. Log in to your HackerRank for Work account.

  2. Under **Test Access Settings**  of the required test, ensure that the test has a Public Test URL (accessible by anyone who has the link to the test). Refer to the[📄 Modifying Test Access Settings](</docs/3147b674-5cbb-4bde-9528-7699bb64b1a7/articles/fd2099d7-31fb-42f5-b5e9-d8365b0cef4f>)article to quickly create a public test URL in case your test does not have one.

  3. Ensure that Lever has been integrated with HackerRank Tests: 

     * If your Lever Integration(s) need to be set up, refer to the[📄 Lever - HackerRank Tests Integration](</docs/3147b674-5cbb-4bde-9528-7699bb64b1a7/articles/3d334428-956d-47ea-9992-a4b609bb67e0>) article.

![image5.jpg](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1735338033117-image5.jpg-c9eab7d9-4282-441e-9fb8-9a924b456023?Expires=253370764800&Signature=g290Vf0Ck3m1kcf74I0-xMhw9JgfimOo3pLc1FlxdOVqdDEz1q6MOGyOCmv4SKloJS8J7Gf4-nAOeXEHigH1VSkemCsEPPYuh-KBdmJB2DaYjnVCJkfqWbJ-E5YJvzN6L1R-QpgpjVFsAqdklZMBRDhzUVx-T0psgq8bZnFEHnCeS3Mbg~cDrjvuVqEaKpFAXxYJcEn8z~2IMpdsE0oaYRNgPz0fPUHPMCLBNsAPJSt9t6rpJ~RE20d2ZvEJzq5TdIcwaPFthRFPEqYXhpW6ihpz9X8~EeQVkmD~sdiCvWwh67oS5Az0CatQOxpC-q86u~BOYzwT1DN1PuB6SAOWiw__&Key-Pair-Id=K3NV4LZ47N8M46)

  4. Then, within **Lever** , you'll need to access **Settings** and click on the Integrations and API tab, to ensure that the HackerRank Tests integration is connected. 

![API_Integrations_within_Lever_.jpg](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1735338069383-API_Integrations_within_Lever_.jpg-531c2e45-d094-4cc9-ae21-480913694684?Expires=253370764800&Signature=b2pD7Dbo4pbpiS805qK2vXwn4Hlt85ZPJ6c~j7ggSiwTEwpq1ABlvC3MtrQ~QH3CV8HDxaLbclyPlWivF7enjXWVK~G20oU4dZH0MoHg929~8ZeRxZa-NoklyJLN2dHbhFgNyDEnwmXR5pfHhAR36U4NZt7ZF-TH8yFSmiJ8PhguOLb2IW9rJf7OepH05J3u8owqmAPDYcPfvIfHctBC~L-DpeUyNNZQ9anJtfxTFxj9SAf0yhqjgnt6dJT06WFeOod-j7rJ8neD2OX21HaIpconkm0dDsWlXK65vEF09bbonQvqan9XTX~4IuHvAtS-U6Ep1I9IXYP62JjbyJmMHg__&Key-Pair-Id=K3NV4LZ47N8M46)

  5. After checking on the connection status of HackerRank Tests, scroll up to the top of the page and access the **API Credentials Tab  **(At the top of the screen)

![Lever_Integrations_and_API___API_Credentials_Tab_Access_Image.jpg](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1735338092215-Lever_Integrations_and_API___API_Credentials_Tab_Access_Image.jpg-3842be90-686c-4291-9ce0-3ade8c3266c1?Expires=253370764800&Signature=cFvGLQv2pZ0I7ZjKC1ipGeyE1SQtAWpkuJUHGXCCrYmhbEE9Hnc~Sscp3HqQugheNCX5hRR0DemwhGIO8PDh5mIwR-rP9VzMdaZKe79xFVGZQLBXTD-lDtLQB0cwCUcEjVF3pMseAD81kc-kvQsL-4rAts0uItrr93FshNq11u09alHObQGg801t1-TMkQnvpE0oA6VrbzkllHrDc6lRYZC0vGI~rUpRYz1EdjM2W3kEkmkmfGSWAQPGszjSpf6b0R2nrh1xlVgBOsMlnLgKwlYB1-8xz-bv~S23VvKjFUhAa0O5LKphvY7HNkTDcAl3KwlK7DaBTYwJn8tOKybqKg__&Key-Pair-Id=K3NV4LZ47N8M46)

  6. From the **API Credentials t** ab, scroll down to the **Lever API credentials** section**.**(As seen highlighted above within the API Credentials tab)

  * You'll then need to ensure that the Key that you'll be working with for **HackerRank Tests** and **HackerRank Interviews** has the proper **Read  **and **Write endpoints** assigned, including both:

    * Create Candidate

    * List Posting

      * The **Read endpoints** and **Write endpoints** are two separate sections, make sure both fields are checked in each section.

        * Scroll down past the **Read endpoints** section (as seen below) to access the **Write endpoints** section.

![Endpoint_Sections.jpg](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1735338121317-Endpoint_Sections.jpg-f71c5d9f-44c0-4880-9a05-bb9da97fd0a2?Expires=253370764800&Signature=eTQ0CUsCuw0fiI-OtxlMlT~wZ4DYGFq8yxBbVbaKAb8eLGNbU0BnRM2yfixatFMfwpo5xzjXcDgw9dWPHw5byYwuwCHG6uD7yUjW3-n6C4cs3p6sAB7f8Pi7QIt0ow0nzt~-ysoes~oiexOviyGRCoh5cIp1vpfYx26UZRsvSwB9cAA8KmHvZzGxxQBlXp9sgr9opKeQe7dWuflK5i4BWtLEW8XicxF5ZlJS~6mklus6yULOwPeOUF8iWN9qq8RFOGMQd6U-XOD6WkkuvD00hgilvESlridZJ0I3caq9CqCg834FVTagXXvp5QEjT-SB1TZl~31DPEHQ8ymo5GKPXw__&Key-Pair-Id=K3NV4LZ47N8M46)

  7. Select the**Integration** option from the left-hand pane.

  8. Click the **Configure** option associated with Lever.

  9. After you complete the configuration, open **Test.**

  10. **G** o to **Test Settings - > ATS integration** and ensure you see the connected ATS.

Clicking on **ATS Settings** takes you back to the ATS integration setup page, shown in the previous steps, to reconfigure the ATS or choose a different ATS.

![Connected_Lever_ATS_in_Settings_taab_of_test.jpg](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1734047085626-?Expires=253370764800&Signature=ufUwhWUVC1-5KEUIMPf8FdH~lVRb5QF050PVRvijZSidiMfqoXtW41i2bLitvgKH-zq21JEhxFjSQtxfZ4m5T8XTDE94FsTMYMwqArWPq~N0lPXiX4AfS7ENamd8lKYWl3X7~H0utk7SqY3GgHwPKvisyVhNcxaU8BKiHmUbP5I7xiavAkM9dAf8RNiUJFc2BDw4E4C3Y7KZEuk9pRos3xuYWVJOv~igWMmK7gCZ5TRiRK1JwRYQ6omOljFQ8O8vRZReKCYSUt7wptw1an33jIKT86g8TafuHGQgxee9yhZnrwUxOg1fxS66~JmWUDR9zh4cEzqM89G3YG-2d6-REQ__&Key-Pair-Id=K3NV4LZ47N8M46)

### Selecting a Job for the Candidates to Take a Test

  1. After the configuration, candidates taking a particular test from a public link are added to your ATS in this Job. Click **Choose Job** and select the appropriate job role for which candidates are taking this test.

![ATS5.jpg](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1734047086042-?Expires=253370764800&Signature=QsqxzU7TWCr~VQQPfFpTfBLh1PBdj2SrJNqr1oYMLldt1MKXsb6TowzDnTdhdX927hE7VLQOD2r-LtxF8U~GNfRBu5VzUK01~0IfglvgRVSH61pY84jwES1CY95x2mA4CpYNwANdjkNSqiTLxYqUMttfZjXRxCb55EQGTHtPS~mFxyR0sSq2l8fYk1Mr-seV9RIB0~rXhggAd5cQ2B~h-KHktUaTJPIGUNj6SRgdU2GJLe8bUgC578ohSBX175X5ltrPICfk0oSVBjbSVi2FzZp1V8rMl8KtJOy3~yoRVxfGn8yml4zwro1~A2qj-sBcrkrMjehTjOc-F8J89F8Eww__&Key-Pair-Id=K3NV4LZ47N8M46)
  2. Mapping a job from the ATS to the test can fail under the following circumstances:

     * **The job has no owner** \- You can see a prompt screen where you can assign an appropriate HackerRank for Work user as the owner for the job.

     * **The owner of the job does not have a HackerRank for Work account** \- You can see a prompt to create a user account.

       * **The owner of the job does not have test access** \- You can see a prompt to add the recruiter to a team on HackerRank for Work, thereby granting them test access.

  3. After you choose a job that is mapped to the test successfully, the candidate test reports are pushed to your ATS. You can change the job that is mapped for the particular test, or remove the mapping.

![Change_job_-_ATS.jpg](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1734047086332-?Expires=253370764800&Signature=EMJBMtvIxK373c5tWiZgdsS1281e78wp-y4x1XMqma2Fdgtx99N-81fLWooIEXH-fCTGZkwPgZZZDbafvB3HmaEqIp331sQNwab7PLr53szwZu9~CwfoMqU8bHvT6ShuQlSYIZuaVnMGeJk665Y07BAnA415JZPzNUqv76aZLR3ky97T-GR~yVrFY4aAMsDn3UgLFAsPfUYVmEzzWxKfL7uaeMKqgLSqQ5nVLtHmPfc38-sS6o1wTqooRCWtPQ31BULgnVO6JMB49q2o3pIP0i018QsU~UPrHZmRZpG6hqoV3a-e0SCLRSbyZnEfzuYx550-73iPPdVLwOIA6wvnQA__&Key-Pair-Id=K3NV4LZ47N8M46)
  4. With a successful test to job mapping, on your ATS, you should be able to see the candidate test reports and other details every time a candidate attempts the test.

For example, on Lever, sign in and navigate to the **Candidates** section for the job mapped to the public test link. You can see the candidate's test report, score, and test name as shown. This information is also available in the Activity Feed.

![Scores_in_Lever.jpg](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1734047086880-?Expires=253370764800&Signature=El7aOxjbFe11Ovky56cBkBeQEQLQghZZKIvEhvii3uKnwIuFME26o8dSkbP4yxAus8fpzcw~I147uXd897J7RzmLyICpJyKU34LeyIZZeSNe830oODX8UGzqbM8njWjuKQTao-EHWULIkWnlBRhNUStI9MU5qTPBte5j5pAgtT6f7VaUtWrP4k7R4YZR0XjEa0F2AWyxXCb2PEpyJyVSEjldehmqtC1ca-9UpEoR6vNsVNxDfFLAz9qk2EaBazdmAROMNGRW3aD1yqDfJ9mZgmr4CMyLKlxiN8h6Cgf5oE02vHQAlgOd6wtKIliyCCOpoq9zy3xCbP81Myptmq~T5w__&Key-Pair-Id=K3NV4LZ47N8M46)
