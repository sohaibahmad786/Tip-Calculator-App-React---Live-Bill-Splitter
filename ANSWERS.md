ANSWERS

1. How to run

Run the following commands in the project directory:

```bash
npm install
npm start

Then open: http://localhost:3000


---

2. Stack & design choices

I used React because it makes live UI updates simple and efficient using state management.

Design choices:

I used preset tip buttons (10%, 15%, 20%) so users can quickly select common tip percentages without typing every time.

I used a centered responsive card layout to keep the calculator clean and easy to use on both desktop and mobile devices.



---

3. Responsive & accessibility

On mobile screens (around 360px), the layout stacks vertically and buttons become full width for easier tapping.
On larger screens (1440px and above), the calculator stays centered with balanced spacing.

Accessibility:

I used labels for all input fields to improve usability and screen reader support.


Skipped:

I did not add advanced keyboard shortcuts due to limited time.



---

4. AI usage

I used ChatGPT for:

React component structure

CSS responsiveness suggestions

README formatting help


One change I made:

The initial AI-generated button layout used fixed widths. I changed it to responsive full-width buttons on smaller screens for better mobile usability.



---

5. Honest gap

One thing that is not fully polished is the visual styling and animations.

With more time, I would improve the overall UI design, add smoother transitions, and improve validation feedback styling.
