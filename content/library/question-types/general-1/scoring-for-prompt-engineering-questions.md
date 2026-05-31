---
title: "Prompt Engineering Questions"
slug: /library/question-types/general-1/scoring-for-prompt-engineering-questions
pylon_id: b2048e70-73fc-42a4-8068-a1cd6d006a3d
published_url: https://support.hackerrank.com/articles/6081633644-Prompt-Engineering-Questions
last_edited: "2026-03-26"
is_published: true
---

Prompt engineering questions assess a candidate’s ability to write structured instructions that guide AI systems to generate accurate and reliable outputs.

To use prompt engineering questions, select them from the **HackerRank Library** when creating a test or interview.

## Scoring prompt engineering questions

Prompt engineering questions are scored automatically using preconfigured test cases. Each case compares the model's output to the expected output using exact text matching. 

### Scoring logic

When the candidates click **Run prompt** , the system uses a strict **Pass** or **Fail** scoring model based on text comparison. The system evaluates the response against a set of preconfigured test cases.

For each test case:

  * The system compares the model’s output with the expected output.

  * The comparison requires an exact match, including characters, casing, punctuation, accents, spacing, and word order.

  * Any deviation, such as extra words, explanations, code blocks, or formatting, results in a **Fail**.

  * Non-deterministic prompts may produce inconsistent outputs, which also result in failure.

  * The result for each case is either **Pass** or **Fail**.   
For example:

    * **Expected:** `Merci`

    * **Output:** `Merci!`

    * **Result:** **Fail** (extra punctuation)

The system calculates the final score as:

**Final score** =**Weight per test case** ×**Test case status**

**Tips:**

  * Make outputs deterministic and format-locked.

  * Return only the requested output.

  * Mirror exact casing, punctuation, accents, spacing, and order.

## FAQs

**Can a test case receive partial credit?**

No. The system scores each test case as either Pass or Fail. It does not assign partial credit.

**Do spaces and newlines affect scoring?**

Yes. Spacing and line breaks must match the expected output exactly, unless specified otherwise.
