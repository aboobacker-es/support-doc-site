---
title: "Defining the Problem Details: Coding and Database Engineer Questions"
slug: /library/creating-custom-questions/programming/defining-the-problem-details-coding-and-database-engineer-questions
pylon_id: 3cc4d44c-a645-496f-a2f2-cdd0978074c8
published_url: https://support.hackerrank.com/articles/7816600113-Defining-the-Problem-Details:-Coding-and-Database-Engineer-Questions
last_edited: "2026-05-27"
is_published: true
---

## Overview

The problem details are an integral part of creating any question. Particularly for the coding and database-related questions, a good problem statement should comprise a clear and detailed problem description, supporting data schema, at least one sample test case with an explanation, and problem constraints.

HackerRank for Work simplifies this process with predefined templates to describe your **Coding** and **Database Engineer** type questions. The templates are a simple and structured format to define your questions clearly.  

It is recommended that you use these templates to define your Coding and Database Engineer type question problem details because it provide a structured and clear view of the question to your candidates during Tests and Interviews.

## How to Define a Problem Statement?

**Steps**

  1. While creating a question, navigate to the **Problem Details** field on the **Question Details** page.

  2. On the extreme right of the toolbar, click on the **Use content templates** option.

     ![Use Templates.png](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1734046717053-?Expires=253370764800&Signature=g-V3y5JVTegRayaPtjxxWrIijdCiX1VhBCBsmT1JphY2ScvD-P-TfFV72H3zhLOwkGuJEeNMhWxnM9wX-kwHCqmFGO-hdTSaB5KIi3xMJW7RORcmP-L1MU6ItpTiSRLVlRZXTAXwFhtrj5v0VDdKLMxHWt6Y4xOKGwMEveQLm1sq82m2xYFdm38V-qSvQWdq~hCmhTT9IX644L3njRkAszNaBOn134EXtn1ZfCITw2gN6AnQAZ~plsZHUiqpm-V3rMumCsHxeNVQIeZc3-ukwhHDV1Fb6fPbhsmMczD250UaE5t1Td2bbuMdfZHafXWmPtwMTqvpzrlQ6Tc-NXsTVA__&Key-Pair-Id=K3NV4LZ47N8M46)

 The following templates are available for selection:

**Template  **| **Description**  
---|---  
HackerRank's Coding Question Template| Recommended for coding-type questions. Provides the format to define the:

  * problem statement
  * function
  * constraints
  * sample input values
  * sample output values

  
HackerRank's Database Question Template| Recommended for Database Engineer-type questions. Provides the format to define the:

  * problem description with any database queries
  * the database tables schema 
  * the input using the sample table schema
  * the output values

  
  
    ![Templates.png](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1734046717817-?Expires=253370764800&Signature=TZ~uUDGQb57qfWM95BlPuGPf4qdsyrCg1aGJwvW4Vjdm-V0xz8DPr265U5H80yBiVAsYAzyvSnNDXbpMtJZ7HtFuv45t4LNhXgfTKji~ry7kpTNekuvJ8IgQpnDXRh1sLDj7uY-GY3Vm7jcl7fEscvCAzcO0bt-9aEm1yO25u2gLarOnwL33XbUK33g6U-ycwX8syzTvGkI8vZBjIQ~ySL5LwKqrfvr-ncYLiq7CHc5A6fQZipNVB9Jo3G0SBJIZ48nP3OJo0qqfn0Cnn6kJFKhMvM6GY0HPs89yuBhvYfr~~bwXStsCX3nb-hV6I~aUftvtmZIvwDjau~m2VJXnXw__&Key-Pair-Id=K3NV4LZ47N8M46)

  3. You can select the required template based on your question type. The template format is added to your **Problem description**  area.

  4. Detail the question as per the format.

     ![Problem Description.png](https://assets.usepylon.com/e6a58e21-be80-4777-9eaf-f73beeee94d9%2F1734046718167-?Expires=253370764800&Signature=vJIK~hCUp4aYrFCypvgaMpLptqhoxWYnrkEo66BzrTFvy5-ErqyuOD6vcv0D2E40Nx266WlvnWCXXvIzuKJSSw-JgHtYkhEY4HAjR8jWvQPJejCoDSxKnOYUM3j~007-rsjym6OlFURcK8DBAwZO3VixNbUM9LCKx8Y6eCCPcLY0VhaR2EQPea4DaL1C4A4hhjMBwoZKGkLEHJh9Q5a3LaNUBx-bc~6WPuRZYtwdG0L6dm~kKH7jLPDawa~T6dqrwVU3V9x4lqjAMiSwsapn~X9EgcOPLwhmca2RAboCjdKcU~feFX8Pvy95Ao85MSYwLfXk-t70THAau37uyXm8tg__&Key-Pair-Id=K3NV4LZ47N8M46)

**For example** :

**Problem Description** Write a program that reads in a string and finds the first non-repeated character in that string. Treat the characters as case sensitive. Therefore, "a" and "A" are different. You will be required to complete a given function _nonRepeated._**Function Description** _Char nonRepeated(char * str)_**Constraints**

  * The length of the string is less than 256 characters.
  * It is guaranteed that there will be at least one non-repeated character in the given string

**Input Format** _There is one sentence in the input that contains String Str._**Sample Test Case with Explanation** Sample Input

  *  balloonbA

Sample Output

  * a

Explanation

  * "a" is the first character that is not repeated in the given string.

**Output Format** A single character that represents the first character in _Str_ that is not repeated.  
---  
  
## Recommended Practices to Define a Problem

  1. Problem Description

  * **Variable naming convention** :

    * The variables in the problem statement must match those in the code stubs. If you refer to a variable in the problem statement as "**N** ," it should be referred to as "**N** " (and not "_n_ ") in the code stubs as well. 

    * All variable names and function names should be italicized. For instance, **_nonRepeated_** is italicized in the above example.

  * **Terminology Usage** : Be specific and clear when writing a problem statement to avoid ambiguity. _For example:_ When you have to refer to "binary search tree,"; do not use "tree" or "binary tree," but instead use the "binary search tree" phrase.

  2. Input and Output format

  * To ensure a smooth experience for the candidates, you must clearly specify the input and output format while defining the problem statement. 

  3. Constraints

  * Unless you want the candidates to figure out all possible constraints of a problem, you should mention these constraints clearly.   
_For example:  _If the code has to read a number as an input, specify the range of that number. This will help the candidate to decide if **_int_ , _long int_ , or _long, long int_** has to be used. If the input is a string, specify the special characters such as:**? @  , . ^ %** are also present in the string. You can also specify if it contains consecutive spaces.

  4. Sample Test Case with Explanation

  * A sample test case, with input and expected output, is strongly recommended to clarify the problem statement to the candidates.
