---
title: "Generating Code Stubs"
slug: generating-code-stubs
collection: library/creating-custom-questions/programming
pylon_id: 77053a7c-9b9a-44c9-9fe1-5865a84c2861
published_url: https://support.hackerrank.com/articles/9168425479-Generating-Code-Stubs
last_edited: "2024-12-12"
is_published: true
---

## Overview

You can generate a boilerplate code that saves your time while setting up a coding question. This boilerplate code or code stub handles the inputs and outputs in the code.

Adding code stubs is strongly recommended to save candidates time to avoid minor errors pertaining to the input and output format. The pre-generated code stub allows them to focus on the algorithm required to solve the problem instead of the input and output syntax.

## Code Stub Parameters

The code stub can be automatically generated for most the languages by specifying the following:

  * **Function Name** : You can only specify one function for the automated code stub generation. However, if you require more than one function, you can select the language and manually type the code stub for that particular language.
  * **Return Type** : The function's return type defines the type of value returned by the function. It can be a string, integer, boolean, long integer, integer array, etc. 
  * **Function Parameters** : Function parameters are the particular variables or input arguments used to refer to a particular data provided as an input. Optionally, you can specify the parameters along with their input type. You can specify more than one function parameter if required.

## Sample

**Problem Description** Write a program that reads a string and finds the first non-repeated character in that string. Treat the characters as case-sensitive. Therefore, "a" and "A" are different. You will be required to complete a given function _nonRepeated._ **Input Format** There is one sentence in the input that contains String Str. **Constraints**

  * The length of the string is less than 256 characters.
  * It is guaranteed that there will be at least one non-repeated character in the given string

**Sample Test Case with Explanation** Sample Input:
    
    
    balloonbA

Sample Output:
    
    
    a

Explanation "a" is the first character that is not repeated in the given string. **Output Format** A single character that represents the first character in _Str_ that is not repeated. **Code Stub**

  * Function Name: _nonRepeated_
  * Return Type: String
  * Function Parameters
    * Type: String
    * Name: _Str_

  
---  
  
However, if you expect candidates to be familiar with the handling of input and output, you might choose not to generate any code stubs. Candidates have to write the complete code from scratch in this case.

Currently, you cannot generate code stubs automatically for the following languages:

  * Cobol
  * Elixir
  * F#
  * OCaml
  * Racket
  * Smalltalk
  * VB.NET
  * D
  * Fortran
  * Groovy
  * Pascal
  * Common Lisp (SBCL)
  * Verilog

For these languages, you can type the code stub manually in the editor.

### Test Case Input Format

To learn more about the input format for test cases, check out the [Test Case Input Format](<https://support.hackerrank.com/hc/en-us/articles/115008319188-Test-Case-Input-Format>) article. 

###
