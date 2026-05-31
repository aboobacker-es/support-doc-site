---
title: "Eightfold - HackerRank Integration Guide"
slug: hackerrank---eightfold-integration-configuration-guide
collection: integrations-1/applicant-tracking-systems/eightfold
pylon_id: 59a06be5-1133-467b-b7c0-6ee97ea1a9bf
published_url: https://support.hackerrank.com/articles/2732992835-Eightfold---HackerRank-Integration-Guide
last_edited: "2026-05-29"
is_published: true
---

HackerRank integrates with Eightfold to let you invite candidates to HackerRank assessments and interviews and view results directly from Eightfold. 

This guide explains how to integrate Eightfold with HackerRank for Work.

# Prerequisites

Before you begin, ensure you meet the following requirements:

  * You have admin access to your HackerRank and Eightfold accounts.

  * Your organization has an active Enterprise plan with HackerRank.

# Integrating Eightfold with HackerRank

To integrate Eightfold with HackerRank:

## Step 1: Generate an integration API token in HackerRank

The integration API token allows Eightfold to connect securely with your HackerRank account.

  1. Log in to your **HackerRank for Work** account using your credentials.

  2. Go to **Settings > Integrations > Eightfold > Connect**, or open the [Eightfold integration](<https://www.hackerrank.com/work/settings/integrations/eightfold/configuration>) page directly.

  3. In the Configuration tab, click **Generate an API Token.**

![image.png](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1779213765452-image.png?Expires=253370764800&Signature=R5vhhhcv-TDj9TGy7iOMobkme6lCq1R9zFaUsv~x1qtspkV6aYB7dB5cr2T9VsKjc3V9xtUxZa2Sf72b4g61XPsinl-7cOqj1bZOC2GIuZah07Wn~4OlFLtE3F-9WULg9xQzlYxCaOvcNMtkLEaJHwFjx6DLIh3VtC1KWGZnHddPK9w-GDhOURdCbRTjXlgIYeg0IACyLbrAFbw6Ol13~SJXAg8EH5bxVkyolfqK~p6GQwz0pWubUU2o6nU1SsvyQF-19VWVYUwSsGFpo4yA-AAfrkbAZVjXCxsMzS~5Ojoce04AVJzZR7pAVXd495Dr7Ol0eAer2eV2LWMv-bP-tA__&Key-Pair-Id=K3NV4LZ47N8M46)
  4. Click **Copy and close** to copy your token.

**Note:** You need this token in **Step 2: Add the HackerRank API token in Eightfold**.

## Step 2: Add the HackerRank API token in Eightfold

This step authorizes Eightfold to connect with your HackerRank account. 

  1. Log in to your **Eightfold** account using your credentials.

  2. Go to **More > Admin Console > Apps** **>** **App Marketplace**.

![image.png](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1779214088232-image.png?Expires=253370764800&Signature=jx0XmyTgFpIlpamI-NSSv~~rql3VBFozNknAohRI9H8FDugSJN8m6k4g0YADDkx5GTsNCwRQziEthberLZHruv3uL~Ki010fjByQaOuucvic7DwEwb~GshR~~3PEkeJhziJcz~3no72puzg4Il6dyzIWFCyBbzt45kC9m3Q0780MYXC7OZsIbsETxf24S1ZubiJmAvHYgPuSwbl~zuCwtsqMtjm0J2us8K26QI4Cif2tq-P0-mgrgxVyPVhoJVr8Vwtg2OnkCImiIuAX7TCERu0BflP7tuLHTbG9~gS9fsmbRBjNTjrMKFhohq6PJ6SGUZzLN5UwIoxddsD1EqpJPQ__&Key-Pair-Id=K3NV4LZ47N8M46)
  3. Select **HackerRank - Assessments & Interviews**.

![image.png](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1779214204828-image.png?Expires=253370764800&Signature=MgBuBe2Yq8nG7tDNYXl3K8qurv3ILzWH7Y7u9b68-bovNae1mf3wjB8HuSIFMKQ3fvKD02MyLG2i0nLhOE4hYO~dXIlrZaiFJE6gK2WGQuLlGQ0dYygmOzKc1erfn9zP8w6etUP0p3z5s5suc0mbQ2~xr7k0sYbGqslOn4R5N0CeoPkELF4ctTDI1I~2LDO2qqloQfZeB7mkhIOOcIU7DRryicg4ajA79VkA0Kiq7L9Wk0vBZlhu6IDxQRnYMOq4d3y1ecFDtjrDdX-Ot2pxu31HRIPszFe4TsPSGHv1E8FQ2gY7VYpXn-fQorAE2U0EbvDbuigwVCtvOOhTsB8DvQ__&Key-Pair-Id=K3NV4LZ47N8M46)
  4. Click **Install**.

  5. In **Configure Settings to Install App** dialog:

     * Paste the HackerRank API token generated from Step 1 into **Authorization** under **App Settings**.

![image.png](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1779284612240-image.png?Expires=253370764800&Signature=W6ABCcTUi67mWCJdWMGPmVa-cGioJbzEwEGB7en8FNYXMv6g0WZaRm6HLBFOFJ03J8oSsCiTGeu4eakKBRsMt9O21-5kFAptvg5df1qe2XYEF786yZ8onaVCUQCa1MDHxRlienGeQFy-bq8DjukpkP6oRNsKD76YDxV7UOetsKSBWs0vjKhOma1E-OKTN3LSePlgK5z17DrRXBWmKkWIr98ftVjsbzgFPpdDJA0QxF4XR7wfopNwd2k2a7tVyAZHG3AJSk9Qc-U9H6Iia4CdRjmBA~1X2xzwyvxlgQajfD2~cphZIvnI-fzY~osoX~NXxrQVC2W9zFpYTN1hwg-C~A__&Key-Pair-Id=K3NV4LZ47N8M46)
     * Enter the stage where the app triggers in **Stage** under**System Settings** (for example, Recruiter Screen).

![image.png](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1779284467138-image.png?Expires=253370764800&Signature=lqcwgMk57fPGYPC15zo9PiUirgS00Tv~T9nIbSl~P6rCKmRC~ppTnjNr7NWwXCXLSp-l4ufNjn9L1gS6ZW-sobJEcTrwSe40Yijr5GiMrKFSn4fS7iL9zcpZouuuRnDisSHPYTZyK110ZJ-vbD~xG0HzNt-xazF~JqLBA4Yy8pYiOWRNA1MxdxB3MZrIbOUXaiVrTMJrJ95DxtFBTcn-LLkeWhzQ8m8G5wdXxnN8wzPR81xMYgS7Ni~sL6zNzL5PnWOuCdDJmypbbxaZn22ubLxy7-ZRy3lZwD7PGGc50JzvGllErEfc6qJIbzOzsFJZsCtiTHaPzi1zrjOtBwQ5qg__&Key-Pair-Id=K3NV4LZ47N8M46)
     * Set **Webhook Authentication Type** to **no_auth** under **Authentication/Authorization**.

![image.png](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1779214386942-image.png?Expires=253370764800&Signature=ohjeDb2yz0NP1XOCY~76zo4mwbxE-iQdZHr6bL6RQvKdDIbCwBOKqGqCdL9HSRADWGRa2ERpRxgo0OD1df2aLmdcBI7b5IscTbHsAdmoUs4eog8to5nxyPw41uIcSlqZ968hAVXVjv426O5Cr~QgNt17ipOqbMaoEDOo8g4JOfQtUDxHvbuntnTDSJnJ1ThroQqURtnG4r2I9MTrql56eiVD4ofyvsfr9JU2T1l20wwXQ3tBvhWLbr8I8e3C1a4Qmd7swqToEIJC3OeLgIPdHzrtvo0b0d~g2XPMRg2RnjzswXhJVAiG7bXP56Y3~kansK8VJXa~GNUv~f2-xrdyIQ__&Key-Pair-Id=K3NV4LZ47N8M46)
  6. Click **Save Settings** **& Install**.

To verify the integration, go to **More > Admin Console > Apps > Install Apps **and confirm that **HackerRank – Assessments & Interviews** appears in the list.

![image.png](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1779214507611-image.png?Expires=253370764800&Signature=F8EZ6kNuBH8t4EUsjc3h4NzGwZRX~7UvDL4WOu8XBQfhPL9PWJmM-hWazYMSAzOJxNxuxKW7cZ2u0DruovWqu0s6TBwUedFHwpw2KN2zmpB9GAvpnuAHHryozUx1kf6dvxVnMEe8-MwClrA-yf7foLD32Nb-kC2dHVenNFXoS5FviURE082LBvfB-p9H~kF64baNoIKRibhfr2CpS7gxTgTgix0T8-d6b9FYm9XecMc~~USrxGpo96fak12ZO53OgStEbePdYIXHqCkJQS5G5Ch9nYRmHNX-DEI~XVb239DhWL9my8lF2CcSetrBVYuAuUy7yPsMPoXrFGf7NlQR0w__&Key-Pair-Id=K3NV4LZ47N8M46)

**Tip:** To update the app configuration settings:

  1. Go to **More > Admin Console > Apps > Install Apps**.

  2. Select **HackerRank - Assessments & Interviews**.

  3. Click **Update Settings**.

![image.png](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1779214604658-image.png?Expires=253370764800&Signature=WQD2ZZveCn4hDfhxmAwU68~32zpfW50lD-B~e5ixJhnjTiWJFry1WO9xMhKkkR-q8eWejhvUzrMNty6owRgwTNLngBR5Ef9C7jA2xBle6Ys7PKdEoB42~KRrOGD-6HXHKdpu6LttodnivSo8uSNx~kfqROsHnIBaW25aGyW4Wsui55euj6GOzGpA2fLCQ00E2sNC6jXBardPgryW0UvHqO--qQxJsD0x4lIXqWRPk~RbQSA4huJCf4oRZ5V0X9p-fan3eqPMvNiRVnjG8BzwkBuWznV914DqeKX5yuQa4Nv4ngTJuqLF5H1Fu2kUpGdAwzFNSeBLp1-H~FNlrmcjsg__&Key-Pair-Id=K3NV4LZ47N8M46)
