Source: https://developers.meta.com/horizon-worlds/learn/documentation/mhcp-program/community-tutorials/debugging-in-meta-horizon-worlds-using-print-codeblocks

# Debugging in Meta Horizon Worlds Using Print Codeblocks

## Author: SeeingBlue

#### Target Audience

Beginner to intermediate scripter

#### Recommended Prerequisite Background Knowledge

* Beginner understanding of CodeBlock scripting

## Description

The Debug Print CodeBlock in Meta Horizon Worlds is a powerful tool for understanding and troubleshooting your scripts. It allows you to print messages to the console from within your scripts, which can help you track your code’s execution and pinpoint where things may not be working as expected. Below is a comprehensive guide tailored for beginner to intermediate scripters on how to use the Debug Print CodeBlock effectively and efficiently.

#### Learning Objectives

* Understand the function and purpose of the Debug Print CodeBlock in a scripting environment as well as identify where the Debug Print CodeBlock is located within the script editing tools.
* Understand how the Debug Print CodeBlock can be used to output useful information to the debug console for debugging purposes.
* Be able to utilize the Debug Print CodeBlock to confirm code paths and values to track down bugs.

## Understanding Debug Print

The Debug Print CodeBlock outputs a string message to the debug console, which is accessible in the scripting panel of your build menu. This feature is invaluable for debugging because it provides insight into the script’s behavior in real-time.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/5900e071dfb4898167bcb6ca4e87eaa8638da5987fc5ef4bb679e0599172c87c.md)

### Overview
The image depicts a user interface layout commonly found in development environments, specifically a console and script editor. The layout includes a sidebar labeled "Script," a main area labeled "Console," and a footer with various icons representing different functionalities.

### Key Elements
- **Sidebar ("Script")**: Located on the left side of the screen. Contains a single tab labeled "Console."
- **Main Area ("Console")**: Occupies the right side of the screen. Displays a message stating "Messages" and "Console is empty." There is a search bar with a magnifying glass icon and a "Clear" button next to it.
- **Footer Icons**: At the bottom of the screen, there are several icons arranged horizontally. These include a cube, a paintbrush, a bag, a globe, a funnel, a code tag, and a gear.

### Visual Flow / Relationships
- **Most Prominent Element**: The "Console" area is the most prominent due to its larger size and central placement.
- **Arrows/Connectors**: No arrows or connectors are present.
- **Spatial Relationships**: The "Script" sidebar is adjacent to the "Console" area, and the footer icons are at the bottom of the screen.

</details>

<p></p>



## Basic Usage

Getting started with the Debug Print CodeBlock is a straightforward yet essential skill for debugging in codeblocks. The following section will guide you through the fundamental steps of utilizing the Debug Print codeblock, from locating and inserting it into your script to customizing messages for comprehensive debugging.

Whether you’re aiming to inspect variable values, verify script execution, or clarify the logic flow within your script, the Debug Print CodeBlock provides a versatile and powerful tool for real-time debugging insights.

#### Locate the Debug Print CodeBlock

In your script, find the Debug Print CodeBlock under the “Values” category. It’s specifically listed under “Debugging.”

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/da49ea3b844f6a17cb67c2464dd821784053fd785db3215d6a7a42a2ace23d1f.md)

### Overview
This image depicts a simple interface element resembling a button labeled "debug print". The button has a rounded rectangular shape with a gradient fill and a shadow effect.

### Key Elements
- **Visual description**: The button has a rounded rectangle shape with a gradient fill transitioning from a lighter shade at the top to a darker shade at the bottom.
- **Location**: Positioned centrally in the image.
- **Contents**: The text "debug print" is written in white font on the button.
- **Visual styling**: The button has a light blue gradient as its primary background color, with a darker blue shade at the bottom. There is a subtle shadow effect underneath the button, giving it a slight elevation.

### Visual Flow / Relationships
The button is the most prominent visual element in the image. There are no arrows, lines, or connectors present, and the reading order is implied to be from left to right, starting with the button itself.

</details>

<p></p>



#### Insert the Debug Print

Drag the Debug Print CodeBlock into your script wherever you want to check the value of a variable, see if a part of the script is executed, or confirm the flow of logic.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/a605d9e20076afd48f6df348ffd757161746a027c210ddc527abe8cf8a143a57.md)

### Overview
This image depicts a user interface element consisting of two distinct sections: a label and a button-like element. The layout is simple, with clear separation between the two components.

### Key Elements
- **Visual description**: The first part is a label that reads "Debug Print," and the second part resembles a button labeled "message."
- **Location**: The label is on the left side, while the button-like element is on the right.
- **Contents**: 
    - Label: "Debug Print"
    - Button-like element: "message"
- **Visual styling**: The label has a white background with black text. The button-like element has a blue background with white text.

### Visual Flow / Relationships
- **Most prominent visually**: The button-like element ("message") stands out due to its blue background.
- **Arrows, lines, connectors, or implied reading order**: There are no arrows, lines, or connectors present.
- **Spatial relationships**: The label and the button-like element are adjacent to each other, with the label on the left and the button-like element on the right.

</details>

<p></p>



#### Customize the Message

You can type any message within the Debug Print CodeBlock. Often, you’ll want to include variable values in your message for inspection. To do this, you can use the “variable as string” codeblock (found under “Type Casting”) to convert variables to strings and append them to your debug message.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/0e7b8d070883592193e9d3f110df2877d97eae59f0f1f6e2af92c4843d687630.md)

### Overview
This image displays a series of debug print statements arranged vertically against a dark background. Each statement contains a label "Debug Print" followed by a variable name or value enclosed in brackets. The variables are represented with icons next to them, indicating their data types.

### Key Elements
- **Debug Print Label**: Located at the beginning of each line, consistently displayed in white text within a purple rectangular box.
- **Variable Name/Value**: Followed by the variable name or value enclosed in brackets. The brackets contain text and icons representing the variable's type.
    - **name of player**: A green rectangular box with a person icon and the word "player".
    - **position of self**: A blue rectangular box with a cube icon and the word "self".
    - **boolean**: A purple rectangular box with a circle icon labeled "boolean".
    - **vector**: A green rectangular box with a vector icon labeled "vector".
    - **#0 == #0**: Two yellow rectangular boxes with the number "0" inside, connected by an equality sign.
    - **length of [ ] list**: A blue rectangular box with a list icon and the word "list".

### Visual Flow / Relationships
The elements are arranged in a vertical column, with each debug print statement occupying its own row. There are no arrows or lines connecting the elements, and the reading order is top-to-bottom.

</details>

<p></p>



## Tips for Effective Debugging

* **Pinpointing Logic Flows**: Place Debug Print statements at different points in your script to see which parts are being executed. This can help you understand the flow of logic and identify where things might be going awry.
* **Variable Inspection**: Frequently print out the values of variables before and after changes. This can help you catch unexpected values or confirm that your code is modifying variables as intended.
* **Conditional Debugging**: Sometimes, you only want a Debug Print to execute under specific conditions. Use Debug Print within an “if” statement to only output messages when certain conditions are met.
* **Iterative Debugging** : In loops or iterative processes, use Debug Print to monitor the loop’s progress or to check values at each iteration. Be cautious, as printing in a high-frequency loop can flood your console.
* **Cleaning Up** : Once you’ve resolved issues, remember to remove or comment out unnecessary Debug Print codeblocks to keep your script clean and efficient.

## Example Usage

Imagine you have a script where a variable score is supposed to increment when a player triggers an event, but it’s not working as expected. Here’s how you might use Debug Print to debug this issue:

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/81c1b3099756f008dab94b897de46ee08c428cf5d7742455cc2b46efe807b2a0.md)

### Overview
This image depicts a visual programming interface with a series of blocks representing code snippets. The blocks are arranged in a vertical sequence, each containing text and some graphical elements like icons and colored backgrounds. The interface seems to be designed for creating logic or scripts, possibly for a game or simulation.

### Key Elements
1. **Block 1: "when world is started"**
   - **Visual description**: A rectangular block with rounded corners.
   - **Location**: Top-left corner.
   - **Contents**: Text "when world is started" in white font on a purple background.
   - **Visual styling**: Purple background, white text, no borders.

2. **Block 2: "Debug Print World has started."**
   - **Visual description**: A rectangular block with rounded corners.
   - **Location**: Below Block 1.
   - **Contents**: Text "Debug Print World has started." with "Debug Print" in white and "World has started." in purple.
   - **Visual styling**: Purple background with white text, no borders.

3. **Block 3: "when trigger is entered by player"**
   - **Visual description**: A rectangular block with rounded corners.
   - **Location**: Below Block 2.
   - **Contents**: Text "when trigger is entered by player" with "player" highlighted in green.
   - **Visual styling**: Blue background with white text, green highlight for "player".

4. **Block 4: "Debug Print name of player + entered the trigger"**
   - **Visual description**: A rectangular block with rounded corners.
   - **Location**: Below Block 3.
   - **Contents**: Text "Debug Print name of player + entered the trigger" with "name of player" in blue and "entered the trigger" in purple.
   - **Visual styling**: Blue background with white text, purple background with white text, no borders.

5. **Block 5: "set score to #score + #1"**
   - **Visual description**: A rectangular block with rounded corners.
   - **Location**: Below Block 4.
   - **Contents**: Text "set score to #score + #1" with "score" in yellow and "#1" in orange.
   - **Visual styling**: Yellow background with white text, orange background with white text, no borders.

6. **Block 6: "Debug Print New score: + #score"**
   - **Visual description**: A rectangular block with rounded corners.
   - **Location**: Bottom of the image.
   - **Contents**: Text "Debug Print New score: + #score" with "New score:" in blue and "#score" in yellow.
   - **Visual styling**: Blue background with white text, yellow background with white text, no borders.

### Visual Flow / Relationships
The blocks are arranged vertically, with each block building upon the previous one. There are no arrows or lines connecting the blocks, indicating a linear flow of logic. The blocks are aligned horizontally within their respective rows, and there is a slight indentation between the blocks to distinguish them.

</details>

<p></p>



This setup allows you to see in the console when the world starts, when the trigger event occurs, and what the score is after it’s supposed to have been incremented. If you don’t see “Trigger entered by player,” you know the issue lies with the trigger detection. If the score doesn’t increment as expected, the issue is with how the score is being updated.

## Summary

The Debug Print CodeBlock is a simple yet powerful tool for understanding how your script behaves in real-time. By strategically placing debug statements throughout your code, you can gain insights into the execution flow and variable states, helping you quickly identify and resolve issues. Remember, debugging is an iterative process, and patience is key. With practice, you’ll become more adept at pinpointing issues and using Debug Print effectively in your Meta Horizon Worlds projects.

## Further Assistance

For any questions or further assistance, creators are encouraged to join the discussion on the Discord server or to schedule a mentor session for personalized guidance.