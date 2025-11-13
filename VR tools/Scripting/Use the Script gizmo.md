Source: https://developers.meta.com/horizon-worlds/learn/documentation/vr-creation/scripting/use-the-script-gizmo

# Use the Script gizmo

## To add a script to a world:

- From Build Mode, select **Gizmos**.
- Select and hold the script gizmo.

## To write a script:

- Select the script and select the **Three Dot** menu to open the Script Panel.
- At the top, name the script.
- In the left column, tap on a field to add the name of any object you’ll be referencing.
- In the right column, add variables.
- Tap **New Code Block** and select options from the dropdown.
- Tap **Compile** when you’re done to save the script.

## To attach a script to an object:

- Open the object’s Properties Panel.
- At the bottom of the panel, select the script from the dropdown for **Attached Script**.

## To connect an object reference:

- Open the Properties Panel of the object you want to reference.
- Grab the Entity Reference connector on the right side of the panel.
- Attach the connector to the input on the bottom left side of the Properties Panel for the object with the attached script.

## Additional things to know about scripting:

* Make sure to tap **Compile** after writing a script. Otherwise the script won’t be saved.
* Scripts need to be attached to an object in order to run.
* There can only be one script per object.
* The name of the script will be displayed on the gizmo itself. If you change the name of a script, it won’t automatically update references to that script.
* Collaborators can see the Script Panel, but they won’t be able to see changes unless the script is compiled and the panel is closed and reopened. Code Block Reference

To learn more, see our article on [using code blocks](/hw-docs/code-blocks-and-gizmos/use-code-blocks).