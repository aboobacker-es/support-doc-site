---
title: "Jazz - HackerRank Tests integration"
slug: /integrations-1/applicant-tracking-systems/jazz/jazz-hackerrank-tests-integration
pylon_id: 7582c9f6-bd1f-4d28-801c-6b7c98b629dd
published_url: https://support.hackerrank.com/articles/5164370576-Jazz---HackerRank-Tests-integration
last_edited: "2026-05-06"
is_published: true
---

## Overview

HackerRank integrates with Jazz, an Applicant Tracking System (ATS) previously known as _Resumator_. The integration enables recruiters to access HackerRank Tests directly within Jazz and invite their Candidates to attempt these tests. The Candidates' scores in these Tests are also updated in Jazz, allowing recruiters to select the best-performing Candidates for the further stages in the hiring process.

**Tests**

The table below describes the features supported for HackerRank tests in Jazz.

**Feature**| **Jazz Support**  
---|---  
View the full list of HackerRank tests| ✅  
Invite candidates to a specific test| ✅  
Cancel an invite| ❌  
Reinvite| ✅  
(only if a candidate has not completed the test)  
Status update from invite to completion| ✅  
View total candidate score| ✅  
View maximum score| ✅  
Link to the detailed test report| ✅  
View question-wise scores| ❌  
View candidate feedback| ❌  
View reviewer comments| ❌  
View code| ❌  
Play code| ❌  
Templates| owner default  
Invite sent from| owner  
Public URL sync| ❌  
Update results after editing HackerRank| ❌  
Result sharing and validity| ❌  
Add time accommodation| ❌  
  
**Interviews**

The table below describes the features supported for HackerRank interviews in Jazz.

**Feature**| **Jazz Support**  
---|---  
Create an interview link| ❌  
Schedule an interview| ❌  
View result| ❌  
View scorecard| ❌  
Link to the detailed report| ❌  
  
## Reaching Out for the Integration Help

To know more about how to integrate the Jazz ATS with HackerRank, you can reach out to the HackerRank point of contact or raise a support request by writing to [support@hackerrank.com](<mailto:support@hackerrank.com>).

## Configuring Test Integration

![image2016-2-1_7-38-32.png](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1734047205707-?Expires=253370764800&Signature=CzK6gAkznTEr25QBrdjhjccdUrTgtBvSrRU1UzC9FlWpPQhSZ0DXsWi~uDyqmMTNzX6rK7nkhGgIyda1eKzY-NOiiNn~Rj7qfI829O5G9LltuzNiIVJmW0W-XuYEKajo9v32krHo-8Fyn68wqQjq6rMyY47JiX1uoEyup9HBNrVL7TzhXzh23t65TkFTHS~T85hOcw2T3fbdxFAo0Z~ID~c7ekgFvsHBB~P1Cce-vcDkeXeiH8sutywSSiJCEV3LncThIE1D0D8ZBI8P3Ijmh9S6O9C1vkrcOtpRX9o8baFjFFhwRxTZ9F~30Yv-RjmUqhaRHBO15DEX0oIHhqQGyw__&Key-Pair-Id=K3NV4LZ47N8M46)

**Prerequisites** :

  * You need to have a HackerRank for Work account.

  * You must log in to HackerRank for Work as a Company Admin user to obtain the API key.

  * You can log in as a **Recruiter-type**  user to HackerRank for Work to create and design Tests.

:::tip
Refer to the [Teams Management](<https://support.hackerrank.com/collections/8854641529-teams-management>) section of the Knowledgebase to learn about the different types of users and permissions in HackerRank for Work.
:::

### Generating the API Key/Token

  1. Log in to HackerRank for Work with the Company Admin user account.  

  2. On the home page, click the drop-down next to the user icon in the top right corner.

  3. Click**Settings**.

     ![settings.png](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1734047206032-?Expires=253370764800&Signature=TIWqGKabcEJfMpM-23e-W2hp~XqpK9E~jzHOSQ1ZoLkRL-ZAwPCS8G4ia9OGh7RO4ixwVZcaTq1zmMXuicYge0KrrNIPRLdbetIG8luTERAzuE-8neKCujAe-nWTDP0B9y5C9hpwQmj8Vul-w9416XSChvuL9GqEWwXH8K3ezXf5-i1jd416lYrWfdIgxXiWwAxewhoGuS460HfToY~rk1uCHYMYRAVE7Oc0m5BVgP~NdCtnOh7u2c-Nw0kxn3L6HlCXt3xOoMhd9KNM-M1NVOKJ7rlYJNvmK2mTRQl7SAruHsx35NqQML5mc0lvIoN0KMOPg9S9rc0v-rHvSQHPgg__&Key-Pair-Id=K3NV4LZ47N8M46)
  4. On the left pane, click**Integrations.** The**Integrations** page is displayed. Scroll down and click **Configure** on the **JazzHR** option. You can also search the Integration from the Search bar.

     ![integ_jazz.png](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1734047206523-?Expires=253370764800&Signature=YaQfM8kWd5FcfVIkpnvAAHtlHzdkqe01vxzfkunZQPEI816RgxaXB4pZwUYVAVZPSqzv39fd98mUb5xtSHAQ9YKmHZG~T0i3ZRaE8JxVwYm3lWxEgCgRbteeyC0Ktvlfaq0NFX7c3ql8C2I6NOHZN4odSa202F1RpJiCZhbBJxqZ0UladFsQ6c35bLYEtMLAKPxrkcsGqpURBPtwog~7TqjgHXHzRkdlt2HFJRUUeQ2lr1wSxUHRd~oQixSNq0ipl6II4yFTiUdUEojx54Xh3tqq4cI9LFmLUBViiUrNvIHIk7G7jjpAajV9EJpZ1lo0jvC8OVqtoTDj50P7Euzyfw__&Key-Pair-Id=K3NV4LZ47N8M46)
  5. Click **Generate API Token** to generate the API token.

     ![integ_jazz1.png](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1734047206915-?Expires=253370764800&Signature=q5XI7ZgCrviyV~qCIDsw1L6q3CyHn6EjgslzbqckBUccwZbpIIAJO9YvayJpOJLyggDlyOt1D0KM89e6dEOMl5PLdgY~bTOfL9UxzPAS8xCGHB1ZxgI9p0NKvYCOPNed~9Ou59n~vAO8gZCMwVv88MetoOEZcR~Nh1VNWvGN6wVFcUZduF3pZ8vgHJ3Yx7QnHht4maCPsFZbWCtZxwiLXrQitAoEvj6L73nYa7ahRhHnpp9iLKAXb07H9DH3yHadwzfwtmOuU2Y1KhNEg3KnfnRNjIHX-YxnWapb9DBol~V8P9p9OkGF3Sz9-Yc8On-SOIh6oDMNnInoz2RaKL3JvQ__&Key-Pair-Id=K3NV4LZ47N8M46)

A unique API Key is displayed.

![integ_jazz2.png](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1734047207371-?Expires=253370764800&Signature=SnFFCNK9ZWWKacNp6GSs2d5S5Z04V-mFExcajmSr5nal8xAGnr2AOe2uy3F6P8uqpkB7KkYRsQG8lH7bddtPmSpM~Modt2tp2iX09sg712OpgJ8dSO7H2pvpatS81Vg1DL~qO3i7rNoSvg5GYWUXxo6jZMoVJOYRbVa2~1h6jvEEgToCPom7KvZU9X8nelfGLSHgrpe9Y9nY1i2nbSKKoZv7Wyp0dYmml4ACFVz6A1gGhcHROzheUT7rzYFHgO1OO-tdJ8OLOwYJj3V~5biMS2Y6MEUjq1X73TEuQbwAxjxtnIo9aK9Ak8Ac0j6IkD7BYJyoWIEUIdjNiqK7q4s-bw__&Key-Pair-Id=K3NV4LZ47N8M46)
  6. Copy this key. You will need to add this key to the JazzHR account to establish the integration.

:::note
Ensure to store the API key safely. Once the popup is closed, you cannot retrieve the key again.
:::

To know the further steps required for integration, refer to the documentation on [Jazz support](<https://help.jazzhr.com/s/article/Setting-up-HackerRank-Integration>).
