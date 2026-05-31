---
title: "iCIMS - HackerRank Prime Assessments Configuration Guide"
slug: /integrations-1/applicant-tracking-systems/icims/icims-hackerrank-prime-assessments-configuration-guide
pylon_id: b48e4f02-837d-4458-9fff-d079d7e39982
published_url: https://support.hackerrank.com/articles/2481948575-iCIMS---HackerRank-Prime-Assessments-Configuration-Guide
last_edited: "2026-05-27"
is_published: true
---

## Overview

HackerRank's Tests integrate with iCIMS Prime Assessments to facilitate an efficient candidate screening process for Recruiters. As part of their interview workflow, iCIMS Prime Assessments users can send HackerRank Test invites to candidates and obtain the Test report for further evaluation.

This article provides detailed configuration steps on HackerRank and iCIMS Prime Assessments.

### Prerequisites

**In HackerRank for Work**| **In iCIMS Prime Assessments**  
  
---|---  
  
  * You must own an Enterprise plan with a Recruiter license.
  * You must have an activated **Recruiter-type**  user account with **Company Admin** permissions.
  * Log in with this user account.

| 

  * Log in using the iCIMS Prime Assessments account. The Recruiter email address on the iCIMS job should match the HackerRank email address.

_Example: If the email address in HackerRank for Work is  _[_jackpeters@hackerrank.com,_](<mailto:jackpeters@hackerrank.com,>)_the iCIMS Prime Assessments user account must also include the same email address._

  * You must have relevant administrative permissions to the **Integrations** page.

  
  
## Configuring iCIMS Prime Assessments Integration With HackerRank

  1. Log in to HackerRank for Work with the Company Admin user account.  

  2. On the home page, click the drop-down next to the user icon in the top right corner.

  3. Click**Settings**.

![settings.png](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1734046183582-?Expires=253370764800&Signature=OeOqHWWGZTPgy9dZ~fqaT-Uvj-ghyJGzS5yYTzgdHuOsFNq40AHgayya7dqw-0PE4rxP5OIUCBhlNbIHJdgV8oT1cSGw~wbO4VbTf0h2~eKnCRU6dLxSJja40cmhQvM8TJQCreoAgRQhTCGx1fyv4rOASzvcoLwILQ8cZmw0PSd0dcaV53YFZT0344KbHHlFeK-Ya31Dhtg4xkMultjZ2T1PUSVvP2XQiItCB141EzF1rsJlrDe9xAmvXYXwofLQJqxArY69rWt9EBH6aNJi1tbfVSjlXCh0QoQHfpObFnqqn5jqMAvE7YlbWil~27hPpyIS3MPdg~xhIORnZSbjRQ__&Key-Pair-Id=K3NV4LZ47N8M46)
  4. On the left pane, click**Integrations.** The**Integrations** page is displayed. Scroll down and click **Configure** on the **iCIMS Prime Assessments** option. You can also search the Integration from the Search bar.

![icims_integ.png](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1734046183990-?Expires=253370764800&Signature=RjBl8EtN117m3l2QFuuQj6hwg1aWlyQQi7GT-LSKOFHhUN5jp~Uuqa9CNhggkBcn2xEEsFUOTuzaqs9NFKjO9z168ZCqUIlIFQMSXYw0AHryO1VuH-bDm5kFofUJCDrluELIILA4keYwOx9ywqndUyfpkwZ8Of8s35cgBpcZdbd23-LINaoIlUQsI0wY3CNa0XTULFbTInaeBWKA3WgrjKgvdjygnrYqP0TGd1EC15z0BCHgRoIsZln95UYQV4XclOqMAGRTTJMOLHUQezguB6ZpJZEz6hYxc5vWfOwYovH4rXrmJ8IA1ioYI57FNK80R~gaesV4nOazs8Bo2HFt9w__&Key-Pair-Id=K3NV4LZ47N8M46)
  5. On the **Integration Setup** page, specify the iCIMS Customer ID, provided by the iCIMS team.

  6. Specify a validity period for the assessments in **Set Validity Period**. This is a period in which a test taken by a candidate is valid. If a Recruiter sends an invite to take the same test within the validity period, then HackerRank does not send an invite. In place, HackerRank will send back the last Test results.

![icims_id_name.png](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1734046184364-?Expires=253370764800&Signature=e3R4c5B5yc-MRJ~PSTK-9DlzU-7fsqSRWpnIiQSWdwLkQ3EBt72iKO4oEwslG38nDe4u-m1DprD1IKSCnNjRNOl3EogIiC30Ap6gHWLZ8HeBki2ji0XDVuMNt2yt4x4mPxzn2Ia1~YlE92o8Kr25OBlTfr-TuIcubw2s0wiSujZAbDH7y8ws54ifolPtyM3rJov3HJde7XkdflKl9FBAb8lGAaLyJHuY3vZdajaFziIqOxiV8UiYxRcPEXtOn-amvmCBvSB1ywX4rl12RvWPmfhBBEsfmO514ebm1yzx96dPsPoZOHT2lWAvMt1QU0NNbFOvyMKFvn3JbFSD4fVxuQ__&Key-Pair-Id=K3NV4LZ47N8M46)
  7. Click **Save**. The iCIMS integration with HackerRank has been established.

Related Articles:

[📄 iCIMS - HackerRank Integration Guide](</articles/9631673147>)
