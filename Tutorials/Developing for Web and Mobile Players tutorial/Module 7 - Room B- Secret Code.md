Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/developing-for-web-and-mobile-players-tutorial/module-7-room-b-secret-code

# Module 7 - Room B: Secret Code

In this module, we create the second puzzle room in the world. To solve the puzzle, the player must turn over four objects to reveal numeric codes. These codes must be entered into the keypad in the correct order, after which the closed exit door opens.

These interactions are straightforward to manage in VR. Players can simply grab objects and rotate them, or your code can check for collisions when a player pushes a button.

On web and mobile, however, we must use the Focused Interaction API to rotate objects and gather player input (mouse clicks or taps) on a 2D screen.

Since this module is lengthy, it’s been broken up into smaller units. All units apply to the Secret Code puzzle room.

ON THIS PAGE