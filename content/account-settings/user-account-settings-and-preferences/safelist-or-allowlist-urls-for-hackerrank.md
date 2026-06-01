---
title: "Safelist/Allowlist URLs and IP Addresses for HackerRank"
slug: /account-settings/user-account-settings-and-preferences/safelist-or-allowlist-urls-for-hackerrank
pylon_id: efe9d978-dccb-4b74-a8f0-fc9217f12aac
published_url: https://support.hackerrank.com/articles/6769658535-Safelist/Allowlist-URLs-and-IP-Addresses-for-HackerRank
last_edited: "2025-11-19"
is_published: true
---

When you create questions or answer tests, you may encounter errors caused by blocked domains. The HackerRank platform notifies you of blocked domains in the IDE and identifies the ones you must safelist to ensure seamless interaction across various features.

## Affected areas

The IDE displays the notification for the blocked domains in the following areas:

### Screen

When you access blocked domains through the screen functionality in the IDE, you receive a notification that specifies the domain you need to safelist.

![](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1734046399487-?Expires=253370764800&Signature=a1p7pfrGU0rET~~M4b23tZ5NvqmH35OGMvftv6NCVY8u0nkPkn7~duez1dqkuADawFUVgAjBZrawsMSHVGos8lZLz~mxZ1kDiTwEmx3DFzSMfK~0T48PXzY~9qLX6XgFpnZKrP2dZ9RFTleVgmtSyIwkbQj-7nWwnmVtZ8BfXGYHXJIsqcXm8CIFoSThcBGoPIwAROXx2hB1B0UVqWTZ4X0Sp4D1oLLTWNtzGtC4pRPiYRi74nFg1lvltK2cPK81z5cToBOhpJnVHvjTsydwXkBZWSIBoua686psgKrG6mULMjZXJO1aiezzSJ-66QtQIfi1xLK0cWAwX3jY7wZD2A__&Key-Pair-Id=K3NV4LZ47N8M46)

### Question creation

When you create questions and attempt to include content from a blocked domain, a notification appears to alert you to the domain that requires safelisting.

![](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1734046399944-?Expires=253370764800&Signature=h56qNp~jg0IEs9RtpWTP17p-FARz~h4u4omCleD5b9kXGb6LNLn5m70Gsp10DxjCbq2dl7S9bj5CQc2UDW6MqkGkQvEjSQj6Ju4X0jJGmbVP8LHDLrC9OFhsQHXfOCQRFnGpyFnI48CORlTeNkGAHaPP08I9BUn~lbM45U9xhn-M2BPjEG8dzrfVjAODs~45IQXRAyCHMmiXPBxKN-4Je8u7Mu7-E3AG0dS3NqbCrj2au-Q7EXDYOfea8mOF0NYD43PchgDUKRJOPZBZIvH6xD3cMSeZRpKklNfXkO5cOFrqCxwA1JmiI6B94EiBBU1bVgREV~g5Yms4sIBJdjmjtA__&Key-Pair-Id=K3NV4LZ47N8M46)

### Reports

When you generate or access reports in the IDE, any blocked domains referenced in the report content trigger a notification.  
The notification displays the blocked domains, making it easy to determine which ones you must safelist for uninterrupted access and functionality in the IDE.

![](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1734046400318-?Expires=253370764800&Signature=Am0XVhexeooZnxGno6~RCLUMx1F5edaF5XPQE3m-s7zzif-bipni1C13aHeO47ycPZFelNB1fJym5VT2hkzg~r0xjb6y3aC5Tk6lVj08WgJYIxUnq6vvcarD7l-xsXvBLwUnecH4snsgwAgVKwr4XCvQNzYJGUumXPoVFOMgt9SzT4T8IUMurM6l2NiUxXeYodoLnrGBBMdyocEwpJgRu80zQi8DB3IqUlk9wXxoNzwMaA8k0qu0b8-rr8--mzMSoXunEOof1FRDfIB0L5GQ4vRepqcqTUdcs1~V0C3xvUElg~u-bnYDsOOx~qBGnECbxITOZg4r~sOSv7L3RuZIsg__&Key-Pair-Id=K3NV4LZ47N8M46)

The notification displays the blocked domains, making it easy to determine which ones you must safelist for uninterrupted access and functionality in the IDE.

## Allowlist URLs

The table below lists the URLs and endpoints you must safelist to ensure proper connection with HackerRank for Work.

**Component**| **URL's to be safelisted**  
---|---  
**Screen and Library**|  *.hackerrank.com, *.*.hackerrank.com, *.amazonaws.com, *.*.amazonaws.com, *.hrcdn.net (HTML/CSS/JS question), [hr.gs](<http://hr.gs>), *.googleapis.com, *.firebaseio.com (Keystroke tracking), [unpkg.com](<http://unpkg.com>) (Whiteboard), [hr-code-generator.appspot.com](<https://hr-code-generator.appspot.com>)  
**Interviews**|  zoom.us, *.zoom.us, *.*.zoom.us, [twilio.com](<http://static.twilio.com>), [twiliocdn.com](<http://media.twiliocdn.com>), *.[twilio.com](<http://twilio.com>), *.*.[twilio.com](<http://twilio.com>), *.[twiliocdn.com](<http://twiliocdn.com>) (Audio/Video call), *.[firebaseio.com](<http://firebaseio.com>), [firebaseio.com](<http://firebaseio.com>), [googleapis.com](<http://googleapis.com>), [hr.gs](<http://hr.gs>), *.hackerrank.com, *.*.hackerrank.com, *.*.projects.hackerrank.net (REPL), *.sudorank.hackerrank.net (DevOps Terminal), *.hrcdn.net (HTML/CSS/JS question), [unpkg.com](<http://unpkg.com>) (Whiteboard)  
**Projects**|  *.[hackerrank.net](<http://hackerrank.net>), *.*.[hackerrank.net](<http://hackerrank.net>) (Online IDE) [*.s3.amazonaws.com](<https://hr-projects-assets-prod.s3.amazonaws.com/>) (File upload)  
*.[amazonaws.com](<http://amazonaws.com>), *.*.[amazonaws.com](<http://amazonaws.com>) (Report download), *.[hackerrank.](<http://hackerrank.io>)com, *.*.[hackerrank.](<http://hackerrank.io>)com,  *.*.[projects.hrcdn.net](<http://projects.hackerrank.net>),**Workspaces**

  * *.[in-vmprovider.projects.hrcdn.net](<http://projects.hrcdn.net>), *.[us-vmprovider.projects.hrcdn.net](<http://projects.hrcdn.net>)
  * *.[sudorank.hackerrank.net](<http://sudorank.hackerrank.net>) (DevOps Interviews)
  * *.vscode-web.hrcdn.net (Containerless IDE)

  
**Cloud-based question**|  Allowlist all URLs referenced in the official documentation for your cloud provider:

  * [Microsoft Azure documentation](<https://learn.microsoft.com/en-us/azure/azure-portal/azure-portal-safelist-urls?tabs=public-cloud>)
  * [Amazon Web Services (AWS) documentation](<https://docs.aws.amazon.com/signin/latest/userguide/allowlist-domains.html>)

  
**Platform and editors**| <https://cdn.jsdelivr.net/gh/interviewstreet/theia-assets/*>,  *.[projects.hackerrank.net](<http://projects.hackerrank.net>),  
*.[hackerrank.](<http://hackerrank.io>)com, *.*.[hackerrank.](<http://hackerrank.io>)com, *.[hackerrank.net](<http://hackerrank.net>), *.*.[hackerrank.net](<http://hackerrank.net>)  
*.[hackerrank.io](<http://hackerrank.io>), *.*.[hackerrank.io](<http://hackerrank.io>), *.[dev.hackerrank.io](<http://dev.hackerrank.io>), *.[eu.hackerrank.io](<http://eu.hackerrank.io>), *.*.[projects.hrcdn.net](<http://projects.hackerrank.net>), [*.*.vmprovider.hackerrank.com](<http://vmprovider.hackerrank.com>), [*.*.vmprovider.hrcdn.net](<http://vmprovider.hrcdn.net>)**Workspaces**

  * *.[in-vmprovider.projects.hrcdn.net](<http://projects.hrcdn.net>), *.[us-vmprovider.projects.hrcdn.net](<http://projects.hrcdn.net>)
  * *.[sudorank.hackerrank.net](<http://sudorank.hackerrank.net>) (DevOps Interviews)
  * *.vscode-web.hrcdn.net (Containerless IDE)

  
**Self-serve  **| *.[hrcdn.net](<http://hrcdn.net/>), [cdn.ravenjs.com](<http://cdn.ravenjs.com/>), *[hackerrank.com](<http://hackerrank.com/>), *.[jquery.com](<http://jquery.com/>), *[cloudfront.net](<http://cloudfront.net/>), *[stripe.com](<http://stripe.com/>), *[stripe.network](<http://stripe.network/>), *.[googletagmanager.com](<http://googletagmanager.com/>) (pages currently break if this is blocked.), *[gstatic.com](<http://gstatic.com/>)  
**Teams management**|  *.[hrcdn.net](<http://hrcdn.net/>), [*.fullstory.com](<http://rs.fullstory.com/rec/bundle>), [*.nr-data.net](<http://bam.nr-data.net/events>), [hrcdn.net](<http://hrcdn.net>), [cdn.ravenjs.com](<http://cdn.ravenjs.com>), [fonts.googleapis.com](<http://fonts.googleapis.com>), [www.googletagmanager.com](<http://www.googletagmanager.com>), *.[licdn.com](<http://licdn.com>), [px.ads.linkedin.com](<http://px.ads.linkedin.com>), [p.adsymptotic.com](<http://p.adsymptotic.com>), [www.google-analytics.com](<http://www.google-analytics.com>), *[.newrelic.com](<http://js-agent.newrelic.com>), *[pendo.io](<http://pendo.io>), *[googleapis.com](<http://googleapis.com>), *[doubleclick.net](<http://doubleclick.net>)  
**Insights**|  *.looker.hackerrank.com  
**Services**|  *.[pusher.com](<http://pusher.com>), *.[pusherapp.com](<http://pusherapp.com>), *.*.hackerrank.dev, _._[fullstory.com](<http://fullstory.com>) _,_ *.[usepylon.com](<http://usepylon.com>) _,_ *.[zopim.com](<http://zopim.com>), *.[zopim.io](<http://zopim.io>), *.[zdassets.com](<http://zdassets.com>),  
[metrics.hackerrank.com](<http://metrics.hackerrank.com>), [cloud.typography.com](<http://cloud.typography.com>), [click.pstmrk.it](<http://click.pstmrk.it>), *.[pendo.io](<http://pendo.io>), [cdn.ravenjs.com](<http://cdn.ravenjs.com>),  
*.google-analytics.com,  
*.[googleapis.com](<http://googleapis.com>),  
*.[hrcdn.net](<http://hrcdn.net>),  
[cdn.mxpnl.com](<http://cdn.mxpnl.com>),  
[sentry.io](<http://sentry.io>), *.[sentry-cdn.com](<http://sentry-cdn.com>),  
[hr.gs](<http://hr.gs>),  
<https://d3keuzeb2crhkn.cloudfront.net>,  
*.nr-data.net, *.newrelic.com  
[www.googletagmanager.com](<http://www.googletagmanager.com>)  
[www.googletagmanager.com](<http://www.googletagmanager.com>)  
  
## Allowlist IP addresses

Add the following IP addresses to your allowlist:

  * `54.208.181.131`

  * `52.45.142.226`

  * `3.210.87.173`

  * `100.25.76.193`

  * `3.233.184.164`

  * `34.193.128.94`

  * `52.73.33.136`

  * `98.83.17.111`

  * `52.22.20.80`

  * `44.219.119.87`

  * `44.208.240.181`

:::note
These IP addresses are subject to change. For assistance, contact [support@hackerrank.com](<mailto:support@hackerrank.com>).
:::
