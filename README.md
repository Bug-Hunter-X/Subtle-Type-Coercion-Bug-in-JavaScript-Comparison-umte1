# Subtle Type Coercion Bug in JavaScript Comparison

This repository demonstrates a common, yet often overlooked, bug in JavaScript related to type coercion during comparison. The issue arises from using loose comparison (`==`) instead of strict comparison (`===`).

## The Bug

The `foo` function aims to categorize numbers based on whether they're null, negative, or positive. However, due to loose comparison, strings and other non-numeric values may lead to unexpected results.

## The Solution

The solution involves replacing the loose comparison (`==`) with the strict comparison (`===`) to prevent unintended type coercion and ensure accurate categorization based on the type and value of the input.

## How to Run

1. Clone this repository.
2. Open `bug.js` to see the buggy code.
3. Open `bugSolution.js` to see the corrected code.
4. Run both files using Node.js or your preferred JavaScript environment.

This example showcases the importance of using strict equality when type safety is critical and helps avoid potentially frustrating and difficult-to-debug issues.