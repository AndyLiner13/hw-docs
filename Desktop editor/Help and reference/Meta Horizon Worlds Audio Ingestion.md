Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/help-and-reference/horizon-worlds-audio-ingestion

# Meta Horizon Worlds Audio Ingestion

Meta Horizon Worlds supports the following formats:

* MP3 (.mp3)
* WAV (.wav)
* FLAC (.flac)
* Ogg Opus (.opus)

Supported sample rates are 16kHz, 22.5kHz, 24kHz, 44.1kHz and 48kHz.

Audio assets can be uploaded to your Asset library using a web interface or using the desktop editor.

| Audio type | File type | Loudness and Duration | Usage | Notes |
| --- | --- | --- | --- | --- |
| Mono | Channels: 1 | -18 LUFS Maximum Peak Value: <= -1.0dBTP | Sounds effects tied to a location in the world. | Avoid including reverb or spatialization pre-baked into asset files unless for expression/flavor |
| Ambisonic | First-Order Ambisonic (FOA) Channels: 4 Looping | -40 to -30 LUFS Duration: ~30 seconds | Ambience or general four-channel first-order ambisonic | Ambisonic content should not contain too much broadband noise, which may conflict with spatialized emitters. |
| Stereo | Channels: 2 Looping | -14 to -12 LUFS Maximum Peak Value: <= -1.5dB Duration: 90–120 seconds | Headset-locked content, no spatialization, e.g. Music. | Avoid including lyrics in your music. |

## Known limitations

* Audio uploads under 50MB.
  + Mono, Stereo, and First Order Ambisonic files are supported
  + All spatial SFX should be imported as mono assets to minimize memory usage.
  + First Order Ambisonic files must be Ambix format to ensure correct orientation.
* Audio assets that are larger than 2.5 MB are streamed from disk.
  + Only one audio asset larger than 2.5 MB should be playing at any time.
* Stereo assets that are uploaded and summed to mono costs memory and CPU.
  + Downmixing assets consumes CPU.

## Upload Audio

### Desktop Editor

- Open a world in the desktop editor.
- Click the Asset Library tab.
- From the Asset Library tab, click **Add New**. Select **Audio**.
- Navigate your local environment to select the .MP3, .WAV, .FLAC or Ogg Opus file to upload.
- Select the folder in your Asset Library tab where you wish to upload the asset. To share the asset with other team members, it must be uploaded or moved to a shared folder.
- Click **Upload**.
- Repeat the above steps for other audio files.

### Meta Horizon Worlds Creations

[](https://video-dfw5-2.xx.fbcdn.net/v/t42.1790-2/452602942_1531891694363967_592376360678865435_n.mp4?_nc_cat=104&ccb=1-7&_nc_sid=6500a6&_nc_ohc=BM1e9I-dRRYQ7kNvwFG55JT&_nc_oc=AdmqIrqgX02tmwUyq8T_vetRIrwQfSSE9TYDxYooG-b5wPiR-pgTXfmNT3K7Pj2GY4M&_nc_zt=28&_nc_ht=video-dfw5-2.xx&_nc_gid=vPBAb-dr6o2l9Dk4vj-mlw&oh=00_AfmRSfDooN0h8m94tV62mbuUCPP8ZX_E1UaSGFarGc1Z9A&oe=694101CB)

- Navigate to the [Meta Horizon Worlds Creations site](https://horizon.meta.com/creator/).
- In the left nav bar, select **My Assets > View All**.
- At the top right, select + **Import > Sound**. <details>
                                                 <summary>Screenshot of the My Horizon Creations page showing Import button with Sound dropdown option.</summary>
                                                 
                                                 <p></p>
                                                 
                                                 [Screenshot of the My Horizon Creations page showing Import button with Sound dropdown option.](../../image_data/0d4a1d52c13299502dc7ab7c3a9ce6ff17299dedc55ecd905c43513e5ce89a68.md)
                                                 
                                                 ### Overview
                                                 The image displays a user interface from a platform called "My Horizon Creations." It shows a sidebar with options for "My Worlds" and "My Assets," with a focus on the "My Assets" section. The main area is titled "View All" and allows users to view and manage their assets. There is a search bar labeled "Search assets" and several asset thumbnails are partially visible. A dropdown menu is open, showing options for importing assets as either "3D object" or "Sound."
                                                 
                                                 ### Key Elements
                                                 - **Sidebar (Left Panel)**:
                                                   - **My Worlds**: Contains a globe icon and the text "My Worlds."
                                                   - **My Assets**: Contains a folder icon and the text "My Assets." Below it, there is a clickable "View All" button.
                                                   - **My Assets Button**: Located at the bottom-left corner of the sidebar.
                                                 
                                                 - **Main Area (Center)**:
                                                   - **Title**: "View All" with a subtitle "View and manage all of your assets."
                                                   - **Search Bar**: Labeled "Search assets" with a magnifying glass icon.
                                                   - **Asset Thumbnails**: Three blue gradient squares with white wave-like patterns, representing different asset types.
                                                 
                                                 - **Dropdown Menu (Top Right)**:
                                                   - **Header**: "Import" button with a plus sign.
                                                   - **Options**: Two items listed as "3D object" and "Sound."
                                                 
                                                 - **Visual Flow / Relationships**:
                                                   - The most prominent visual is the "View All" title.
                                                   - The dropdown menu is open, indicating interaction with the "Import" button.
                                                   - The asset thumbnails are arranged horizontally below the search bar.
                                                   - The sidebar elements are stacked vertically on the left side.
                                                 
                                                 </details>
                                                 
                                                 <p></p>
                                                 
                                                 
- Follow the instructions: <details>
                           <summary>Screenshot of the Import sound dialog box.</summary>
                           
                           <p></p>
                           
                           [Screenshot of the Import sound dialog box.](../../image_data/3e8f6403381b665aa7dee13599ada498be4be00809b776e3fb2d9d20f45b3f8c.md)
                           
                           ### Overview
                           This image depicts a user interface dialog box titled "Import sound." It instructs users on how to upload a sound file, specifying that the file should be in OGG Opus (.opus) format and should not exceed 25 MB in size. The dialog includes a drag-and-drop area and an option to choose files from the device.
                           
                           ### Key Elements
                           - **Title**: "Import sound"
                           - **Instruction Text**: "Sound file should be in OGG Opus (.opus) format. The maximum file size is 25 MB."
                           - **Drag-and-Drop Area**: A dashed rectangle indicating where to drop files. Inside the rectangle, there are icons representing a video file and a folder, suggesting acceptable file types.
                           - **Text within Drag-and-Drop Area**: "Drag and drop to upload\nOr choose files on your device"
                           - **Folder Selection**: A dropdown menu labeled "My Assets" with a downward arrow indicating more options.
                           - **Buttons**: Two buttons at the bottom right corner labeled "Cancel" and "Import."
                           
                           ### Visual Flow / Relationships
                           The most prominent visual elements are the title and the drag-and-drop area. The instruction text is positioned above the drag-and-drop area. The folder selection dropdown is located below the drag-and-drop area. The buttons are aligned horizontally at the bottom right corner, with "Cancel" on the left and "Import" on the right.
                           
                           </details>
                           
                           <p></p>
                           
                           
- When your audio file has been uploaded, select the context menu on the asset tile to edit, delete, or play the audio asset: <details>
                                                                                                                              <summary>Asset tile showing Play option highlighted in dropdown menu.</summary>
                                                                                                                              
                                                                                                                              <p></p>
                                                                                                                              
                                                                                                                              [Asset tile showing Play option highlighted in dropdown menu.](../../image_data/0346a57ca9753e1966b949bd9eaed1f91638d9afcf3c3ef3870f31d17bff181a.md)
                                                                                                                              
                                                                                                                              ### Overview
                                                                                                                              This image displays a user interface snippet showing a list of items with options for interaction. The layout includes two main sections, each containing an item thumbnail, title, and a dropdown menu with interactive options.
                                                                                                                              
                                                                                                                              ### Key Elements
                                                                                                                              - **Left Panel (Top Left)**: A gradient background with a white sound wave icon. Below it, the text reads: "Leaves Rustling Some descriptions...".
                                                                                                                              - **Right Panel (Top Right)**: A 3D model of a scooter with the text: "Scooter A scooter that you can ride...".
                                                                                                                              - **Dropdown Menu (Center Bottom)**: A white dropdown menu appears over the "Leaves Rustling" item. It contains three options: "Edit", "Delete", and "Play". The "Play" option has a hand cursor icon indicating interactivity.
                                                                                                                              - **Background (General)**: The overall background is light gray, providing contrast to the items and the dropdown menu.
                                                                                                                              
                                                                                                                              ### Visual Flow / Relationships
                                                                                                                              The most prominent visual element is the dropdown menu, as it is the focal point due to its central placement and the presence of the hand cursor. The items are arranged in a grid-like structure, with the dropdown menu partially obscuring the "Leaves Rustling" item. There are no arrows or lines connecting elements, but the arrangement suggests a logical flow from the item thumbnails to the dropdown options.
                                                                                                                              
                                                                                                                              </details>
                                                                                                                              
                                                                                                                              <p></p>
                                                                                                                              
                                                                                                                              

## Edit Assets

**Note**: Following steps reference editing assets through the Horizon Words Creations interface.

- To view an asset’s details, click on the asset you uploaded to your folder. The following video demonstrates this process: <details>
                                                                                                                             <summary>GIF showing clicking on an asset tile, which opens up a details dialog box showing "Description", "Tags", "Folder", "File size", "Owner", "Asset ID", and "Last edited" fields.</summary>
                                                                                                                             
                                                                                                                             <p></p>
                                                                                                                             
                                                                                                                             [GIF showing clicking on an asset tile, which opens up a details dialog box showing "Description", "Tags", "Folder", "File size", "Owner", "Asset ID", and "Last edited" fields.](../../image_data/cadbd52c77a7b2770f45ea05f4f0073384560b0e88d98a133da94eeff3daa090.md)
                                                                                                                             
                                                                                                                             ### Overview
                                                                                                                             This image depicts a user interface showing a collection of assets labeled under "My Assets." The layout includes a search bar at the top, followed by a grid of asset thumbnails with accompanying labels and descriptions.
                                                                                                                             
                                                                                                                             ### Key Elements
                                                                                                                             - **Search Bar**: Located at the top, spanning horizontally across the width of the page. Contains a magnifying glass icon and the placeholder text "Search assets."
                                                                                                                             - **Asset Thumbnails**: Arranged in a grid format beneath the search bar. Each thumbnail has a gradient background transitioning from blue to purple, featuring a white icon representing the asset type.
                                                                                                                               - **First Row**: Two thumbnails are visible. The first thumbnail has a sound wave icon labeled "stereo_opusenc," and the second has a similar sound wave icon labeled "ambisonic faadfd."
                                                                                                                               - **Second Row**: Two more thumbnails are partially visible. The first shows a 3D model labeled "Gauntlet" with a description underneath. The second shows a cube icon labeled "stress package 424."
                                                                                                                             - **Labels and Descriptions**: Below each thumbnail, there are labels and descriptions providing information about the assets.
                                                                                                                             - **Ellipsis Icons**: Small ellipsis icons appear next to some thumbnails, likely indicating additional options or actions related to the asset.
                                                                                                                             
                                                                                                                             ### Visual Flow / Relationships
                                                                                                                             The most prominent visual elements are the asset thumbnails, which are arranged in a grid layout. There are no arrows or lines connecting elements, but the layout suggests a logical reading order moving from left to right and then down to the next row.
                                                                                                                             
                                                                                                                             </details>
                                                                                                                             
                                                                                                                             <p></p>
                                                                                                                             
                                                                                                                             
- To edit the asset, click the context menu on the asset tile, or click **Edit** in the Details view.
- Modify the name, description, tags, folder, and associated audio file for the asset: <details>
                                                                                       <summary>Screenshot showing the "Edit sound" dialog box with "Title", "Description", "Tags", and "Folder" fields and a drag and drop area to replace the sound file.</summary>
                                                                                       
                                                                                       <p></p>
                                                                                       
                                                                                       [Screenshot showing the "Edit sound" dialog box with "Title", "Description", "Tags", and "Folder" fields and a drag and drop area to replace the sound file.](../../image_data/457d3270b12be44ff4597b3fca7c33ff04e2601de8477d7c6300c794fe45ee27.md)
                                                                                       
                                                                                       ### Overview
                                                                                       This image depicts a modal window titled "Edit sound." It contains fields for entering a title, description, tags, and selecting a folder. There is also a section for replacing a sound file with specific file format requirements.
                                                                                       
                                                                                       ### Key Elements
                                                                                       - **Title Field**: Located at the top-left, contains the text "stereo_opusenc."
                                                                                       - **Description Field**: Positioned below the title field, labeled as "Description · Optional," with the placeholder text "What is your sound?"
                                                                                       - **Tags Field**: Situated beneath the description field, labeled as "Tags · Optional," with a dropdown menu showing "Select relevant tags."
                                                                                       - **Folder Selection**: Below the tags field, labeled as "Folder," with a dropdown menu showing "My Assets."
                                                                                       - **Replace Sound File Section**: At the bottom, labeled as "Replace sound file · Optional," indicating that the sound file should be in OGG Opus (.opus) format with a maximum file size of 25 MB. There is a dashed area suggesting a drag-and-drop zone or a clickable area for choosing files.
                                                                                       - **Buttons**: Two buttons are located at the bottom-right corner, labeled "Cancel" and "Save."
                                                                                       
                                                                                       ### Visual Flow / Relationships
                                                                                       The most prominent visual elements are the title field, description field, tags field, and folder selection. The replace sound file section is less prominent but still noticeable due to its larger size and distinct dashed area. The buttons at the bottom are the least prominent but clearly defined.
                                                                                       
                                                                                       </details>
                                                                                       
                                                                                       <p></p>
                                                                                       
                                                                                       

**Note**: You can replace the audio assets only for assets that you own.

After the audio details are added, they are displayed:

<details>
<summary>Screenshot showing the audio asset's details dialog box.</summary>

<p></p>

[Screenshot showing the audio asset's details dialog box.](../../image_data/fdee67c4469bb4f4d2d619621b97d473fb895dd0b238a8379bf1edc16d5ae01a.md)

### Overview
This image depicts a modal window with various interactive elements and metadata information displayed against a semi-transparent background overlaying another interface.

### Key Elements
- **Title**: "Ambisonic City Noise" located at the top-left corner.
- **Edit Button**: A blue button labeled "Edit" with a pencil icon, positioned at the top-right corner.
- **Close Button**: A small 'X' icon next to the Edit button.
- **Progress Bar**: A horizontal progress bar indicating a time range from 0:00 to 0:29, with a blue dot marking the current position at 0:00.
- **Description Section**: Below the progress bar, there's a heading "Description" followed by a clickable link "Add description".
- **Tags Section**: Contains tags "Ambisonic" and "Audio" within gray rectangular buttons.
- **Folder Section**: Displays "My Assets" with a folder icon preceding the text.
- **File Size**: Shows "401.62 KB" as the file size.
- **Owner Section**: Includes a circular profile picture icon, the username "metamandycho", and the asset ID "15348481369999734".
- **Last Edited Section**: Indicates the last edit date and time as "January 20 at 1 PM".

### Visual Flow / Relationships
The most prominent visual elements are the title, Edit button, and progress bar. The layout follows a top-to-bottom, left-to-right flow, with each section clearly delineated by headings and content blocks.

</details>

<p></p>



## Use audio

Your new audio asset can be accessed from your Asset Library. From the Desktop Editor, you can drag the asset into your world and place it and modify its properties as needed.

### Runtime limits

* A maximum of **1024 virtual audio sources** can be available at any one time.
* A maximum of **64 audible sounds** can be played at any time.
  + If there are more than 64 audio sources, the quietest sounds are muted to limit the number to 64.
  + If enabled, player-to-player voice-over (VOIP) counts as 1 audible sound source.

### Memory usage

As soon as an audio asset is instantiated in the world, its referenced audio data is loaded into runtime memory. This applies to spawned audio or audio entities in the world at startup.

### Preview playback

To preview the audio, select it. In the Properties panel, click **Play**.

You can also preview in your headset. See the following video for a demonstration of this process:

[](https://video-dfw5-1.xx.fbcdn.net/v/t42.1790-2/452642051_2470008526538904_689802133705749551_n.mp4?_nc_cat=111&ccb=1-7&_nc_sid=6500a6&_nc_ohc=_7f7_eiioigQ7kNvwGjv09S&_nc_oc=Adk0V53j8i14ep4c727_zlZFQf1P4U80x2RwjGJr7XtWqB_OK23pz939-XV0ApvSBLg&_nc_zt=28&_nc_ht=video-dfw5-1.xx&_nc_gid=vPBAb-dr6o2l9Dk4vj-mlw&oh=00_AfkW3uyFdR1lqm7y5y5Qk6Ymw_jTEqrby5i4qzlr0HIWmA&oe=69410198)

<details>
<summary>Screenshot of VR showing My Assets pane in the Build menu.</summary>

<p></p>

[Screenshot of VR showing My Assets pane in the Build menu.](../../image_data/dbec001578a7606d645d988d61aa49c93abac400cf669c78beb3c30a73d99260.md)

### Overview
This image depicts a user interface (UI) screen from a software application, likely related to asset management or building tools. The layout includes a sidebar menu on the left and a main content area on the right displaying assets.

### Key Elements
- **Sidebar Menu (Left Panel)**:
  - **Visual description**: A vertical menu with a dark background and light text.
  - **Location**: Left side of the image.
  - **Contents**: Contains options such as "Build," "Shapes," "Gizmos," "Sounds," "My assets," "View all," "Animals," "Attachables," and "Trash."
  - **Visual styling**: Dark background with white text, some elements highlighted in purple.

- **Main Content Area (Right Panel)**:
  - **Visual description**: A large central area with a title "My Assets."
  - **Location**: Right side of the image.
  - **Contents**: Displays three asset cards labeled "Asset" with placeholder text "Lorem ipsum dolor sit amet..." and a small icon resembling a sound wave.
  - **Visual styling**: Each card has a gradient background transitioning from blue to purple, with white text and a light gray icon.

- **Top Bar (Right Panel)**:
  - **Visual description**: A small bar at the top-right corner with a search icon and a "New" button.
  - **Location**: Top-right corner of the main content area.
  - **Contents**: Contains a magnifying glass icon for search and a "New" button with a downward arrow indicating a dropdown menu.
  - **Visual styling**: Dark background with white text and a purple accent color.

### Visual Flow / Relationships
- **Most prominent visually**: The main content area with the asset cards.
- **Arrows, lines, connectors, or implied reading order**: None explicitly shown.
- **Spatial relationships**: The sidebar menu is on the left, the main content area is centered, and the top bar is at the top-right corner. The asset cards are arranged horizontally within the main content area.

</details>

<p></p>



### Audio properties

When you add a sound into your world, it is encapsulated in an Audio gizmo. Select the gizmo, and the following properties are displayed in the Properties panel:

| Property | Description |
| --- | --- |
| Preview | Use the **Play** and **Stop** buttons to preview how the sound asset is presented in the world. Make adjustments to the playback properties of the asset and then retest playing. |
| Play on Start | When enabled, the sound asset is played when the world starts. If Play on Start is disabled, you must manage the playback of this ambient asset through TypeScript. |
| Loop | When enabled, the sound asset is played repeatedly. |
| Volume | Set the volume of asset playback on a scale from `0` to `1`. |
| Volume randomness | Sets the randomness of volume around the current Volume setting as the midpoint of the range. Range is `0.00` to `1.00`. Example: Setting to `1.00` means that actual volume in Volume +/- `6db`, which is an internal limit on randomness. |
| Pitch | You can pitch the general playback of the sound up (positive values) and down (negative values). The pitch is on a scale of `-24` and `24` semitones, which is manipulated by changing the speed. 12 semitones -> 1 Octave → 2x speed |
| Pitch randomness | Sets the total range in semitones. Example: Setting this value to `4.00` means that the pitch value is selected at random in the range from (Pitch - `2` semitones) to (Pitch + `2` semitones). |
| Global | When enabled, the asset is played back without any falloff due to distance. |
| Minimum Distance | When Global is disabled, set the minimum distance that a player must be from the sound asset in order to trigger playback. Minimize the minimum and maximum distance values, where possible. |
| Maximum Distance | When Global is disabled, set the maximum distance that a player must be from the sound asset in order to trigger playback. Minimize the minimum and maximum distance values, where possible. Minimum and maximum distance are three-dimensional vector distances. |
| Low-pass cutoff | Frequency in hertz that defines the low-pass cutoff, which accentuates sounds below this frequency and attenuates sounds above it. Default is `20000` hertz. |
| Send Audio Complete | When enabled, an event is sent to all subscribers to indicate when the sound playback is complete. For ambient music, do not enable this option. |