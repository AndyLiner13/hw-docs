Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/instant-replay

# Instant Replay

Important

 This feature is not available to all creators.

Instant Replay is an experimental feature that allows world creators to add video recording start and stop points to key moments in their world. It records up to 60 seconds of first-person video on behalf of the player who is triggering the moment. This feature enables users to collect and share interesting footage from their gameplay without interrupting the immersive experience.

## How Instant Replay works

- Worlds that have integrated Instant Replay have a disclaimer for users who view or visit them. <details>
                                                                                                 <summary>Image Content</summary>
                                                                                                 
                                                                                                 <p></p>
                                                                                                 
                                                                                                 [All image details and metadata](../../image_data/3cf78215a4715acd73d8bf0e7fd87f02030285752a7b3486eb1a626e613e765f.md)
                                                                                                 
                                                                                                 ### Overview
                                                                                                 This image depicts a user interface from a virtual world platform, specifically showcasing a game titled "Super Rumble." The layout includes a profile section on the left, a game preview in the center, and a party chat on the right.
                                                                                                 
                                                                                                 ### Key Elements
                                                                                                 - **Profile Section (Left)**:
                                                                                                   - **Visual description**: A circular profile picture with a gradient background.
                                                                                                   - **Location**: Top-left corner.
                                                                                                   - **Contents**: "Robyn_H" written below the profile picture.
                                                                                                   - **Visual styling**: Orange and white gradient background, circular shape.
                                                                                                 
                                                                                                 - **Game Preview (Center)**:
                                                                                                   - **Visual description**: A rectangular box displaying the game title "Super Rumble" with vibrant graphics.
                                                                                                   - **Location**: Center of the image.
                                                                                                   - **Contents**: Game artwork showing a colorful, action-packed scene with characters and weapons.
                                                                                                   - **Visual styling**: Bright colors, bold text, and a dynamic design.
                                                                                                 
                                                                                                 - **Party Chat (Right)**:
                                                                                                   - **Visual description**: A vertical list of usernames with small profile pictures next to them.
                                                                                                   - **Location**: Right side of the image.
                                                                                                   - **Contents**: Names like "Vyker_meta," "CoolDude," "Sunny_rainbow," etc., along with their respective status indicators.
                                                                                                   - **Visual styling**: White background with blue accents for usernames and green for the "In CyberCo" status.
                                                                                                 
                                                                                                 - **Navigation Bar (Bottom)**:
                                                                                                   - **Visual description**: A row of icons for navigation purposes.
                                                                                                   - **Location**: Bottom-center of the image.
                                                                                                   - **Contents**: Icons for location, favorites, friends, and settings.
                                                                                                   - **Visual styling**: Circular icons with distinct symbols.
                                                                                                 
                                                                                                 ### Visual Flow / Relationships
                                                                                                 - **Most prominent visually**: The game preview in the center.
                                                                                                 - **Arrows/lines/connectors**: None.
                                                                                                 - **Spatial relationships**: The profile section is on the left, the game preview is central, and the party chat is on the right. The navigation bar at the bottom connects the sections horizontally.
                                                                                                 
                                                                                                 </details>
                                                                                                 
                                                                                                 <p></p>
                                                                                                 
                                                                                                 <details>
                                                                                                 <summary>Image Content</summary>
                                                                                                 
                                                                                                 <p></p>
                                                                                                 
                                                                                                 [All image details and metadata](../../image_data/b935830c183d94ad07b7b2ddbd6d175677a9217b5b1ed254471b5177855dad50.md)
                                                                                                 
                                                                                                 ### Overview
                                                                                                 This image depicts a user interface showing notifications within a social or gaming application. The central focus is a notification panel displaying messages and a party invitation. On the left side, there's a profile card, and on the right, a party invitation section.
                                                                                                 
                                                                                                 ### Key Elements
                                                                                                 - **Profile Card (Left)**:
                                                                                                   - **Visual description**: A circular profile picture with a username below it.
                                                                                                   - **Location**: Top-left corner.
                                                                                                   - **Contents**: "Robyn_H" with a home icon and a shield icon below.
                                                                                                   - **Visual styling**: Orange background for the profile picture, white card with rounded corners.
                                                                                                 
                                                                                                 - **Notification Panel (Center)**:
                                                                                                   - **Visual description**: A rectangular panel with a bell icon at the top left.
                                                                                                   - **Location**: Center of the image.
                                                                                                   - **Contents**:
                                                                                                     - **Message 1**: "[World name] now records instant replays of your most action-packed moments. You have 7 days to save your replay to your gallery after it's recorded."
                                                                                                     - **Message 2**: "Sammy would like to be your friend!"
                                                                                                     - **Message 3**: "Gregory would like to be your friend!"
                                                                                                     - **Party Invitation**: "An open party for <World name> only needs 1 more member. Join it now."
                                                                                                   - **Visual styling**: White background with blue borders around the messages.
                                                                                                 
                                                                                                 - **Party Invitation Section (Right)**:
                                                                                                   - **Visual description**: A vertical list with icons and usernames.
                                                                                                   - **Location**: Right side of the image.
                                                                                                   - **Contents**:
                                                                                                     - **Party Invite**: "Party (2/8)" with icons for phone, headphones, and a red circle.
                                                                                                     - **Users**: "Vyker_meta In The Plaza", "CoolDude In CyberCo", "Sunny_rainbow In CyberCo", "Robyn_H In CyberCo", "GregoGary In CyberCo", "CoolDude".
                                                                                                   - **Visual styling**: White cards with green and blue accents for usernames.
                                                                                                 
                                                                                                 ### Visual Flow / Relationships
                                                                                                 - **Most prominent visually**: The notification panel in the center.
                                                                                                 - **Arrows/lines/connectors**: None.
                                                                                                 - **Spatial relationships**: Messages are stacked vertically within the notification panel, and users are listed vertically in the party invitation section.
                                                                                                 
                                                                                                 </details>
                                                                                                 
                                                                                                 <p></p>
                                                                                                 
                                                                                                 
- When the player explores the world and triggers the [START API](Instant%20Replay.md#examples), recording begins but the player is not notified yet.
- When the recording finishes, the player receives a pop-up notification inviting them to view the recording.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/4b8162e3ab3bb72e7a684b47d1715e8dac0ff9ebd649d20959e1e5e3e26f9e58.md)
  
  ### Overview
  This image depicts a scene from a video game or simulation environment. The player character is holding a red gun, facing away from the camera towards a rocky terrain with some greenery. There is a notification at the bottom of the screen indicating that a replay is ready to be watched.
  
  ### Key Elements
  - **Player Character**: A figure with dark hair and glasses, wearing a black shirt, holding a red gun.
  - **Gun**: A red firearm held in both hands, positioned as if aiming.
  - **Notification Box**: Located at the bottom of the screen, contains a small profile picture on the left side and text that reads, "Let's run it back. Your replay is ready." To the right of the text is a blue button labeled "Watch."
  - **Background**: A rocky landscape with some green plants and a large red structure resembling a building or monument in the distance.
  - **Terrain**: The ground is sandy or dirt-like, with scattered rocks and patches of grass.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the player character holding the gun. The notification box is secondary but draws attention due to its placement and the "Watch" button. The background provides context to the setting but is less immediately engaging than the foreground elements.
  
  </details>
  
  <p></p>
  
  
- Once the player reviews the video, it is stored locally and removed from the server. The player will need to “review” the video in order to keep it permanently, otherwise it will be deleted after 7 days.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/e810ebb14f75a2f4faaa2035ee21fc88da38a473ef77156669e0b1b0713fba75.md)
  
  ### Overview
  This image depicts a user interface element from a digital media management application. The main focus is on a media library section titled "My Media," showing a thumbnail preview of a media item dated "Mon, Jul 24, 2023." The layout includes navigation options, filtering choices, and interactive elements.
  
  ### Key Elements
  - **Profile Section**: Located on the left side, containing a circular profile picture of a character named "Robyn_H," a home icon, and a shield icon.
  - **Media Library Title**: Positioned centrally at the top, reads "My Media."
  - **Navigation Buttons**: Below the title, there are two buttons labeled "All" and "For review."
  - **Media Preview**: A thumbnail image is displayed below the date, showing a scene from a game or virtual environment.
  - **Filter Options**: To the right of the media title, there are buttons for selecting multiple items, a camera icon, and an "X" icon.
  - **Grouping Options**: At the bottom right, there’s a dropdown menu labeled "Group by Newest first."
  
  ### Visual Flow / Relationships
  The most prominent visual element is the media preview thumbnail. The navigation buttons and filter options are arranged horizontally above the media preview. The grouping options are positioned at the bottom right, indicating a secondary level of interaction.
  
  </details>
  
  <p></p>
  
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/11ea36dc15b549f6f2223eabe1732fcdb165311d29100a691942401a191a7386.md)
  
  ### Overview
  This image depicts a screenshot of a video player interface within a digital environment. The main focus is on a video thumbnail and its associated metadata displayed in a floating window.
  
  ### Key Elements
  - **Video Thumbnail**: Located on the left side, showing a gameplay scene with a character in a futuristic setting. The thumbnail has a play button overlayed on it.
  - **Play Button**: A white triangle pointing right, indicating the play action.
  - **Video Duration**: "00:45" displayed in the top-left corner of the thumbnail.
  - **Metadata Panel**: Positioned on the right side of the image.
      - **Title**: "Super Rumble"
      - **Date**: "Sat, Jul 22, 2023"
      - **Time**: "2:20 PM"
      - **Save Notice**: "5 days left to save this video."
  - **Buttons**: Two buttons at the bottom of the metadata panel.
      - **Save Button**: A purple button labeled "Save" with a download icon.
      - **Delete Button**: A white button with a trash can icon labeled "Delete."
  
  ### Visual Flow / Relationships
  The most prominent visual element is the video thumbnail, which draws attention due to its central placement and the play button overlay. The metadata panel is secondary but crucial as it provides context about the video. The buttons at the bottom are designed to be easily accessible for user interaction.
  
  </details>
  
  <p></p>
  
  
- Once the player saves the video, it will be treated like any of their other media and can be shared normally.

## How to Add Instant Replay to your World

- Enable **Generate instant replays** under Player Settings in your world before you publish.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/57d377b9b4d8703dc23bb6fdf7a57fe1953b91e7e67d11e11fadaec8f35d670c.md)
  
  ### Overview
  The image displays a user interface showing two settings panels side-by-side under the "Player Settings" category within a VR world management tool. The left panel is labeled "Players Settings," while the right panel is labeled "Desktop." Both panels contain toggle switches and checkboxes for various settings related to player interactions and features within the VR environment.
  
  ### Key Elements
  - **Left Panel - Players Settings**
    - **Toggle Switches**: There are four toggle switches, each with a label above it.
      - **Can Hands Collide With Static Objects**: The switch is toggled on, indicated by the purple color.
      - **Custom Player Movement**: The switch is toggled on, indicated by the purple color.
      - **Custom Name Tag Visibility**: The switch is toggled on, indicated by the purple color.
      - **Generate instant replays**: The switch is toggled on, indicated by the purple color.
    - **Text Descriptions**: Each toggle switch has a description underneath explaining its function.
    - **Visual Styling**: The toggles have a circular design with a gradient from light to dark purple. The descriptions are in white text against a black background.
  
  - **Right Panel - Desktop**
    - **Toggle Switches**: There are several toggle switches, each with a label above it.
      - **VOIP Settings**: The switch is toggled off, indicated by the gray color.
      - **Maximum Player Count**: The switch is toggled on, indicated by the blue color.
      - **Emotes**: The switch is toggled on, indicated by the blue color.
      - **Emote Audio**: The switch is toggled on, indicated by the blue color.
      - **Can Hands Collide With Physical Objects**: The switch is toggled off, indicated by the gray color.
    - **Text Descriptions**: Each toggle switch has a description underneath explaining its function.
    - **Visual Styling**: The toggles have a circular design with a gradient from light to dark blue. The descriptions are in white text against a black background.
  
  ### Visual Flow / Relationships
  - **Most Prominent Visually**: The toggle switches are the most prominent elements due to their size and distinct color changes when toggled.
  - **Arrows, Lines, Connectors**: There are no arrows, lines, or connectors present in the image.
  - **Spatial Relationships**: The toggles are arranged vertically with labels above them. The left panel and right panel are side-by-side, indicating a comparison or side-by-side configuration of settings.
  
  </details>
  
  <p></p>
  
  
- Enable the **horizon/capturing** library for TypeScript.

<details>
<summary>Screenshot 2024-01-31 at 1.07.49 PM.png</summary>

<p></p>

[Screenshot 2024-01-31 at 1.07.49 PM.png](../../image_data/6c7d47073fb9782a5bb6bcccdcfb9e6fa2b9912e86f23db5e1d285effe75d035.md)

### Overview
This image depicts a settings interface titled "Script Settings." It is a modal window with a dark theme, featuring a sidebar menu on the left and a main content area on the right. The interface allows users to toggle various API options for a script.

### Key Elements
- **Sidebar Menu**: Located on the left side, with options labeled "Script editing," "API," and "Console." The "API" option is currently selected, indicated by a blue highlight.
- **Main Content Area**: On the right, it displays a list of APIs with corresponding toggle switches next to them. Each API has a label indicating its functionality.
- **Toggle Switches**: Positioned to the far right of each API entry, these switches are currently in the "on" state for "horizon/capturing" and "horizon/unity_asset_bundles."
- **Buttons**: At the bottom, there are two buttons labeled "Cancel" and "Apply."

### Visual Flow / Relationships
The most prominent visual elements are the toggle switches, as they are highlighted and indicate active selections. The layout follows a vertical list format within the main content area, with each API listed sequentially. The buttons at the bottom suggest a workflow where changes can be canceled or applied after selection.

</details>

<p></p>



## Experimental camera angles

The instant replay feature records from the avatar’s first person point of view by default. Meta Horizon Worlds is running an experiment where creators can choose from the existing first person or two new angle options.

For Instant Replays set up with one of the two experimental angles, world visitors in the experiment will trigger Instant Replays with the experimental angle. Visitors not in the experiment won’t trigger Instant Replays.

Recording angle options:

* Default - First person: `FirstPersonMovementCameraMovementPreset`
* Experimental - Third person over the shoulder: `ThirdPersonOverShoulderCameraMovementPreset`
* Experimental - Avatar fixed in center of frame: `FixedPositionTrackingPlayerCameraMovementPreset`

## Examples

### Starting a capture

- You must specify a unique moment name; we use this for logging and analysis. The moment name must contain only alphanumeric characters and spaces.
- Duration can be up to 60 seconds.
- When the duration is reached, you can choose to either save or discard the video, based on the outcome of an action in-game.
  * **Potential scenario:**

    You have a fishing mechanic and you start recording once a fish is on the hook. **If the fish breaks loose** you end the recording and discard. **If the fish is reeled in**, you end the recording and save.
- You can specify an optional [`CameraMovementPreset`](https://horizon.meta.com/resources/scripting-api/capturing.cameramovementpreset.md/?api_version=2.0.0) to configure the camera angle.

```
import * as cap from 'horizon/capturing'

let capture = new cap.PlayerCapturing(player.id);
let result = await capture.startVideoCapture("Trigger Test World Moment", {CameraMovementPreset: FirstPersonMovementCameraMovementPreset, duration: 15, saveOnDurationReached: false});
```

### Ending a capture

```
let capture = new cap.PlayerCapturing(player.id);
let result = awaitcapture.stopVideoCapture({save: true});
```

## Tips & Best Practices

* Identify fun or exciting moments in your world that you may want to record for the player. We recommend around one to three spots. Ideally, the spots should be a core part of the gameplay so that players will encounter it naturally. At least one spot should be commonly encountered, while the others could be more rare.
* Sometimes you may want to delay the stop API call a few seconds after the moment “concluded” in order to capture the player reaction.
* You may want to [leverage persistent variables](../Get%20started%20with%20TypeScript/Persistent%20Variables.md) to keep track of when the player has completed a recording to prevent too much duplication.

## Known Issues and Limitations

- Videos will only record up to 60 seconds.
- Worlds will limit recording a player to 10 times per session.
- Videos will not include name tags.
- While recording, the user may experience a small performance drop due to the extra recording cost. In our testing we noticed about 5 FPS
- Recording only works on Quest devices. Mobile devices do not support Instant Replay recording at this time.
- When enabling **Instant Replay** for the first time if the capture is not successful leave your world and then come back. Your captures should now work as intended.
- World visitors can opt out of Instant Replay in their settings.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/dd11483b77d737c5ed3db330a6a42f104ec533a698b75662e383cf200cf25dff.md)

### Overview
This image depicts a user interface showing notifications and a party invitation within a social or gaming application. The main focus is on the central "Notifications" section, which includes messages and a prompt to open settings. To the right, there's a "Party" invitation panel listing friends who are part of a party.

### Key Elements
- **User Profile**: Located at the top-left, featuring a circular profile picture of Robyn_H and the username "Robyn_H". Below the profile picture are two icons: a home icon and a shield icon.
- **Notifications Section**: Central to the image, containing a bell icon indicating notifications. Messages include "Sammy would like to be your friend!" and "Gregory would like to be your friend!". There’s also a prompt about instant replays and an option to "Open settings".
- **Open Settings Button**: A purple button labeled "Open settings" is located next to the instant replay message.
- **Party Invitation Panel**: Positioned to the right, showing a list of friends in a party called "In CyberCo". Each entry includes a profile picture, username, and location.
- **Party Invite Details**: At the top-right of the party panel, it states "Party (2/8)" indicating that the party has 2 members out of 8 total slots available.

### Visual Flow / Relationships
The visual hierarchy is clear, with the notifications taking precedence due to their central placement and the presence of the bell icon. The party invitation panel is secondary but still prominent due to its size and the green arrow pointing towards it. The layout suggests a linear reading order moving from left to right.

</details>

<p></p>

