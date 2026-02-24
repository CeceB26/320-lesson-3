📘 Learner Dashboard – React useState Lab
📌 Overview

This lab focused on practicing:

Initializing state using useState

Passing data as props

Rendering lists using .map()

Breaking UI into reusable components

Understanding component structure and file organization in React

The application renders a list of learners and their test scores using three components:

<App />

<Learner />

<Score />

🎯 Assignment Requirements

Initialize state in <App /> as an object containing a learners array.

Render a <Learner /> component for each learner.

Each <Learner /> must:

Render the learner’s name

Render the learner’s bio

Render a <Score /> component for each score

Each <Score /> must render:

date

score

No state updates were required — only initialization and rendering.

🧠 Concepts I Needed to Understand Better
1️⃣ State Structure Inside App

Instead of storing the array directly, the assignment required:

const [learnerData] = useState({
  learners: [ ... ]
});

This forced me to understand:

Why state was wrapped inside an object

How to access nested properties (learnerData.learners)

Why we destructure state from useState

2️⃣ Rendering Lists with .map()

I needed to clearly understand:

.map() returns a new array

React requires a key prop when rendering lists

Data flows downward via props

Example:

{learnerData.learners.map((learner) => (
  <Learner key={learner.name} learner={learner} />
))}
3️⃣ Passing Props Between Components

I had to understand:

How <App /> passes a learner object to <Learner />

How <Learner /> passes individual score objects to <Score />

How props are destructured in function parameters

Example:

function Learner({ learner }) { ... }
function Score({ score }) { ... }
4️⃣ Component Folder Structure

Understanding correct file structure was critical:

src
 ├── App.jsx
 └── components
      ├── Learner.jsx
      └── Score.jsx

React depends heavily on proper file paths and naming.

🛠 Errors I Had to Work Through
❌ Error 1: Failed to Resolve Import

Error message:

Failed to resolve import "./componets/learners"
🔎 What Was Wrong

Folder name was misspelled:

componets ❌

components ✅

File name was incorrect:

learners ❌

Learner ✅

Case sensitivity issue:

React/Vite is case-sensitive.

Learner.jsx must be imported as:

import Learner from "./components/Learner";
✅ What I Learned

Imports must match file names exactly.

Capitalization matters.

Folder names must be spelled correctly.

React will not “guess” file paths.

❌ Error 2: Incorrect Pluralization

I initially imported:

import Learner from "./components/learners";

But the file was named:

Learner.jsx

The singular/plural mismatch caused the module resolution error.

🪜 Steps Taken to Complete the Lab

Created components folder.

Created:

Learner.jsx

Score.jsx

Initialized state inside App.jsx.

Used .map() to render learners.

Passed learner objects as props.

Used .map() again inside <Learner /> to render scores.

Ensured each mapped element had a key prop.

Fixed import path spelling and capitalization errors.

Verified the app compiled with no Vite errors.

📊 Final Component Structure
App.jsx

Holds state

Maps learners

Renders <Learner />

Learner.jsx

Displays learner name & bio

Maps scores

Renders <Score />

Score.jsx

Displays score date and score value

🧩 What This Lab Reinforced

React state is often passed down, not modified.

Clean component separation improves readability.

Proper file naming prevents runtime errors.

Most React errors are not logic errors — they are path or structure errors.

🚀 Reflection

The most important takeaway from this lab was understanding how data flows through components in React and how strict file naming conventions can immediately break an application if not followed carefully.

The debugging process reinforced:

Attention to detail

Case sensitivity awareness

Confidence in reading Vite error messages

If you want, I can also give you:

A shorter version (for quick submission)

A more technical version (for impressing instructors)

Or a more reflective/personal version (if required for grading)

Which tone do you want?
