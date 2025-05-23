---
title: "Counting CamelCase Words: A Step-by-Step Python Function"
description: Learn to count words in CamelCase strings with Python. Simple function, detailed explanation, and practical examples. Master strings, lists, and 'isupper' to improve your Python code. Come in and discover how!
pubDatetime: 2025-05-22T23:51:00Z
tags:
  - functions
  - practical-exercise
  - strings
  - isupper
  - python
  - list-comprehension
featured: false
draft: false
---

Tired of deciphering indecipherable variable names? Today we will unravel the mystery of CamelCase, a ubiquitous naming convention in the world of development. 🐫

## 🔮 Problem Statement

We must create a function in Python that is able to count the number of words present in a text string written using the CamelCase convention.

**Parameters:**

- `string text`: The text in CamelCase format that we want to analyze.

**Returns:**

- `int`: The number of words identified in the text.

**Examples:**

```python
>>> camelcase('holaMundo')
2
>>> camelcase('profesorAyudemeConElExamenEstaBienDificil')
8
>>> camelcase('alumnoEsteEsUnEjercicioMuyFacil')
7
```

**Additional Notes:**

- CamelCase is a writing style where words are concatenated and distinguished by the capitalization of the first letter of each word, except, in this case, the first.
- It is widely used in languages like Java for method and variable names, as the use of uppercase at the beginning is usually reserved for class names.
- In this exercise, we assume that the first word is _not_ capitalized, but we still count it.

## 🧩 **Step-by-Step Solution**

The key to solving this problem lies in identifying uppercase letters within the string. Each uppercase letter indicates the beginning of a new word (except for the first, which we already counted). We will use a list comprehension to extract these uppercase letters and then count them.

**Detailed explanation of the code:**

We begin by defining the `camelcase` function, which receives a text string called `text` as input. This function will be responsible for counting the words.

```python
def camelcase(text):
```

The magic happens in the next line. Here, we use a list comprehension to iterate over each character in the text string. Filtering only those characters that are uppercase using `c.isupper()`.

```python
[c for c in text if c.isupper()]
```

Then, the `len()` function calculates the length of the resulting list, which gives us the number of uppercase letters found. We add 1 to this number (for the first word that is not capitalized) and return the result. ➕

```python
return 1 + len([c for c in text if c.isupper()])
```

**Complete Solution:**

```python
def camelcase(text):
	"level: easy; points: 2"
	return 1 + len([c for c in text if c.isupper()])
```

## 🧠 **Key Concepts**

**List comprehension** is an elegant syntactic construction in Python that allows you to create new lists from existing iterables concisely. In this case, we use it to filter the uppercase characters from the input string. Its efficiency and readability make it an invaluable tool.

The `isupper()` function is a method of strings in Python that returns `True` if all characters in the string are uppercase and `False` otherwise. This function is crucial for identifying the uppercase letters that delimit the words in CamelCase.

Did you know...? List comprehensions are, in many cases, faster than traditional `for` loops for performing the same task. This is because list comprehension is optimized at the Python interpreter level. 🚀

## 💫 **Final Thoughts**

This problem, although simple in its implementation, illustrates the power of the tools that Python offers us for string manipulation. A possible improvement would be to consider edge cases such as empty strings or strings that do not follow the strict CamelCase format (for example, "HolaMUNDO"). It could also be extended to handle different variations of CamelCase, such as UpperCamelCase (PascalCase), where the first word is also capitalized.

The ability to identify and manipulate patterns in text strings is fundamental to many aspects of software development, from log analysis to data validation.

I hope this immersion in CamelCase has been useful to you! If you want to continue learning about Python and problem solving, I invite you to explore other articles on this blog. The world of software development awaits you! ✨
