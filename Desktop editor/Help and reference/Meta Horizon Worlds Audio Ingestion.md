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

[](https://video-dfw5-2.xx.fbcdn.net/v/t42.1790-2/452602942_1531891694363967_592376360678865435_n.mp4?_nc_cat=104&ccb=1-7&_nc_sid=6500a6&_nc_ohc=D3FK60l_5BQQ7kNvwFM1zkz&_nc_oc=AdmGy7SC_uZsiHXzT50LHvDQAKXP_SPkL7-NQKRFqQUkayPyCC4AlhDzDZueVlwADOU&_nc_zt=28&_nc_ht=video-dfw5-2.xx&_nc_gid=Spv-pM3ZSGHBnQcq0jGmfA&oh=00_Afmt2w1LtCH74gmjXVy5iLLJxdsLvazbM9v5oPLiBTPx5w&oe=693756CB)

- Navigate to the [Meta Horizon Worlds Creations site](https://horizon.meta.com/creator/).
- In the left nav bar, select **My Assets > View All**.
- At the top right, select + **Import > Sound**. <details>
<summary>Screenshot of the My Horizon Creations page showing Import button with Sound dropdown option.</summary>

<p></p>

[Screenshot of the My Horizon Creations page showing Import button with Sound dropdown option.](../../../../images/output/img_20251211_060032_20251211_060032.md)

### Overview
The image displays a user interface section titled "My Horizon Creations" with options for managing assets. There is a dropdown menu open showing categories for importing assets ("3D object" and "Sound").

### Key Elements
- **Left Panel**: Contains two sections labeled "My Worlds" and "My Assets". The "My Assets" section has a "View All" button highlighted.
- **Main Header**: "View All" is prominently displayed above a search bar with placeholder text "Search assets".
- **Dropdown Menu**: Opened under the "Import" button, showing two options: "3D object" and "Sound".
- **Search Bar**: Located below the main header, with a magnifying glass icon and the placeholder text "Search assets".
- **Asset Icons**: Three identical icons are partially visible at the bottom, suggesting placeholders for asset thumbnails.

### Visual Flow / Relationships
- **Most Prominent Element**: The open dropdown menu under the "Import" button.
- **Arrows/Connectors**: None visible.
- **Spatial Relationships**: The dropdown menu is positioned to the right of the "Import" button, and the search bar is below the main header.

</details>

<p></p>


- Follow the instructions: <details>
<summary>Screenshot of the Import sound dialog box.</summary>

<p></p>

[Screenshot of the Import sound dialog box.](../../../../images/output/img_20251211_060142_20251211_060142.md)

### Overview
This image depicts a user interface element designed for importing a sound file. It includes a drag-and-drop area, a folder selection dropdown, and buttons for canceling or importing the file.

### Key Elements
- **Drag-and-Drop Area**: Located centrally, outlined with dashed lines. Contains an icon depicting a folder with a play button inside, suggesting a media file. Below the icon, text reads "Drag and drop to upload Or choose files on your device."
- **Folder Dropdown**: Positioned below the drag-and-drop area, labeled "Folder." The selected option is "My Assets."
- **Buttons**: Two buttons are present at the bottom right. One is labeled "Cancel," and the other is labeled "Import."
- **Title**: At the top left, the title "Import sound" is displayed.
- **Instructions**: Above the drag-and-drop area, instructions state that the sound file should be in OGG Opus (.opus) format and that the maximum file size is 25 MB.
- **Close Button**: A small "X" button is located at the top right corner for closing the window.

### Visual Flow / Relationships
The most prominent visual element is the drag-and-drop area, as it is the central focus for user interaction. The folder dropdown and import/cancel buttons are secondary elements, providing additional options for file selection and submission. The layout follows a standard form-based interface design, with clear separation between the input area and the action buttons.

</details>

<p></p>


- When your audio file has been uploaded, select the context menu on the asset tile to edit, delete, or play the audio asset: <details>
<summary>Asset tile showing Play option highlighted in dropdown menu.</summary>

<p></p>

[Asset tile showing Play option highlighted in dropdown menu.](../../../../images/output/img_20251211_060236_20251211_060236.md)

### Overview
This image displays a user interface snippet featuring a list of items with interactive options. The layout includes a gradient icon, a 3D model image, and a dropdown menu with options.

### Key Elements
- **Gradient Icon**: Located at the top-left, it has a blue to purple gradient background with a white sound wave icon in the center.
- **Text Label**: Below the gradient icon, reads "Leaves Rustling" followed by placeholder text "Some descriptions...".
- **Dropdown Menu**: Positioned below the gradient icon, with options "Edit", "Delete", and "Play". The "Play" option is highlighted, indicating interaction.
- **3D Model Image**: To the right of the gradient icon, showing a black scooter with a handlebar and wheels.
- **Text Label**: Below the 3D model, reads "Scooter" followed by placeholder text "A scooter that you can ride...".

### Visual Flow / Relationships
The most prominent visual is the dropdown menu, as it is actively engaged by the user. The gradient icon and its associated text are secondary but still important. The 3D model image and its label are tertiary elements, providing additional context to the item being interacted with.

</details>

<p></p>



## Edit Assets

**Note**: Following steps reference editing assets through the Horizon Words Creations interface.

- To view an asset’s details, click on the asset you uploaded to your folder. The following video demonstrates this process: <details>
<summary>GIF showing clicking on an asset tile, which opens up a details dialog box showing "Description", "Tags", "Folder", "File size", "Owner", "Asset ID", and "Last edited" fields.</summary>

<p></p>

[GIF showing clicking on an asset tile, which opens up a details dialog box showing "Description", "Tags", "Folder", "File size", "Owner", "Asset ID", and "Last edited" fields.](../../../../images/output/img_20251211_060331_20251211_060331.md)

### Overview
This image depicts a user interface for managing assets, specifically a section labeled "My Assets." It features a grid layout displaying various asset thumbnails and metadata.

### Key Elements
- **Header**: Located at the top-left corner, reads "My Assets" with a smaller subtitle "Test Test Test."
- **Search Bar**: Positioned below the header, spans horizontally across the top of the grid. Contains a magnifying glass icon and the placeholder text "Search assets."
- **Asset Thumbnails**: The main content area consists of a grid of asset thumbnails. Each thumbnail has a gradient background transitioning from blue to purple, with a white icon representing the asset type.
    - **First Row**: 
        - **Leftmost**: A thumbnail labeled "stereo_opusenc" with a sound wave icon.
        - **Second**: Another sound wave icon labeled "ambisonic faadfd."
        - **Third**: Partially visible, showing a gradient background.
    - **Second Row**: 
        - **Leftmost**: A thumbnail labeled "Gauntlet" with a green and blue geometric design.
        - **Second**: A cube icon labeled "stress package 424."
        - **Third**: Partially visible, showing a gradient background.
- **Metadata**: Below each thumbnail, there is metadata such as the asset name and a brief description. For example, "Gauntlet Description" under the "Gauntlet" thumbnail.

### Visual Flow / Relationships
The visual hierarchy is clear, with the header providing context, the search bar for functionality, and the asset thumbnails arranged in a grid for easy browsing. The thumbnails are evenly spaced, and the metadata is aligned beneath them. There are no arrows or lines connecting elements, suggesting a straightforward reading order from left to right and top to bottom within rows.

</details>

<p></p>


- To edit the asset, click the context menu on the asset tile, or click **Edit** in the Details view.
- Modify the name, description, tags, folder, and associated audio file for the asset: <details>
<summary>Screenshot showing the "Edit sound" dialog box with "Title", "Description", "Tags", and "Folder" fields and a drag and drop area to replace the sound file.</summary>

<p></p>

[Screenshot showing the "Edit sound" dialog box with "Title", "Description", "Tags", and "Folder" fields and a drag and drop area to replace the sound file.](../../../../images/output/img_20251211_060428_20251211_060428.md)

### Overview
This image depicts a modal window titled "Edit sound" within a user interface. The window contains fields for entering a title, description, tags, and selecting a folder. There is also a section for uploading a sound file, with options to drag-and-drop or choose files from the device.

### Key Elements
- **Title Field**: Located at the top-left, contains the text "stereo_opusenc".
- **Description Field**: Positioned below the title field, labeled "Description · Optional". It has the placeholder text "What is your sound?".
- **Tags Field**: Below the description field, labeled "Tags · Optional". It includes a dropdown menu with the placeholder text "Select relevant tags".
- **Folder Field**: Situated beneath the tags field, labeled "Folder". It displays "My Assets" and has a dropdown arrow indicating more options.
- **Replace Sound File Section**: At the bottom, it instructs users to upload a sound file in OGG Opus (.opus) format with a maximum size of 25 MB. There is a dashed area suggesting where a file can be dropped, along with a link saying "Or choose files on your device".
- **Buttons**: Two buttons are located at the bottom-right corner. One is labeled "Cancel" and the other is labeled "Save".

### Visual Flow / Relationships
The most prominent visual elements are the title field, description field, tags field, and folder field. These are arranged vertically, with the "Replace sound file" section at the bottom. The buttons are aligned horizontally at the bottom-right corner. Arrows and dropdown menus suggest interactive elements that can be expanded or selected.

</details>

<p></p>



**Note**: You can replace the audio assets only for assets that you own.

After the audio details are added, they are displayed:

<details>
<summary>Screenshot showing the audio asset's details dialog box.</summary>

<p></p>

[Screenshot showing the audio asset's details dialog box.](../../../../images/output/img_20251211_060608_20251211_060608.md)

### Overview
This image depicts a file information card for an audio asset named "Ambisonic City Noise." The card includes various metadata fields such as description, tags, folder location, file size, owner information, asset ID, and last edited date. There are interactive elements like an "Edit" button and a close ("X") button at the top right corner.

### Key Elements
- **Title**: "Ambisonic City Noise"
  - **Location**: Top left
  - **Contents**: Text
  - **Visual styling**: Black text on a white background
- **Description Section**:
  - **Label**: "Description"
  - **Content**: "Add description"
  - **Location**: Below the title
  - **Visual styling**: Blue clickable text
- **Tags Section**:
  - **Label**: "Tags"
  - **Content**: "Ambisonic", "Audio"
  - **Location**: Below the Description section
  - **Visual styling**: Gray buttons with black text
- **Folder Section**:
  - **Label**: "Folder"
  - **Content**: "My Assets"
  - **Location**: Below Tags
  - **Visual styling**: Gray text with a small folder icon preceding the text
- **File Size Section**:
  - **Label**: "File size"
  - **Content**: "401.62 KB"
  - **Location**: Below Folder
  - **Visual styling**: Black text
- **Owner Section**:
  - **Label**: "Owner"
  - **Content**: "metamandycho"
  - **Location**: Below File Size
  - **Visual styling**: Black text with a small profile picture icon preceding the name
- **Asset ID Section**:
  - **Label**: "Asset ID"
  - **Content**: "15348481369999734"
  - **Location**: Below Owner
  - **Visual styling**: Blue clickable text
- **Last Edited Section**:
  - **Label**: "Last edited"
  - **Content**: "January 20 at 1 PM"
  - **Location**: Below Asset ID
  - **Visual styling**: Black text
- **Interactive Elements**:
  - **Edit Button**: A blue button labeled "Edit" with a pencil icon
  - **Close Button**: A white "X" icon within a blue rectangle
  - **Play/Pause Button**: A circular icon with a play/pause symbol
  - **Seek Bar**: A horizontal slider with a blue dot indicating the current time (0:00) and a range from 0:00 to 0:29
  - **Duration Labels**: "0:00" and "0:29" at the ends of the seek bar
  - **Volume Control**: Two circular icons with "10" next to them, likely representing volume levels

### Visual Flow / Relationships
- **Most Prominent Element**: The "Edit" button at the top right corner
- **Arrows/Lines/Connectors**: None
- **Reading Order**: From top to bottom, left to right
- **Spatial Relationships**: Elements are arranged in a grid-like structure with clear separation between sections

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

[](https://video-dfw5-1.xx.fbcdn.net/v/t42.1790-2/452642051_2470008526538904_689802133705749551_n.mp4?_nc_cat=111&ccb=1-7&_nc_sid=6500a6&_nc_ohc=1KiA6NdtJ_kQ7kNvwEY5pXm&_nc_oc=AdkTDY1FErPNHG-3ZZ-BjI2CyJvfT398FfOZhcNQhzLsl0WSXFnh04bKz-IFkLidqeo&_nc_zt=28&_nc_ht=video-dfw5-1.xx&_nc_gid=Spv-pM3ZSGHBnQcq0jGmfA&oh=00_Afno0leLt6JePd0aFmYqgsh-B2N-6l6KbtGNQgDjOc8-fA&oe=69375698)

<details>
<summary>Screenshot of VR showing My Assets pane in the Build menu.</summary>

<p></p>

[Screenshot of VR showing My Assets pane in the Build menu.](../../../../images/output/img_20251211_060718_20251211_060718.md)

### Overview
This image depicts a user interface (UI) screen from a software application, likely related to asset management or design tools. The layout includes a sidebar menu on the left and a main content area on the right displaying assets.

### Key Elements
- **Sidebar Menu (Left Panel)**:
  - **Visual description**: A vertical menu with rounded corners and a dark background.
  - **Location**: Left side of the image.
  - **Contents**: Contains options such as "Shapes," "Gizmos," "Sounds," and "My assets." The "My assets" option has a downward arrow indicating a dropdown.
  - **Visual styling**: Dark background with light-colored text and icons.

- **Main Content Area (Right Panel)**:
  - **Visual description**: A large rectangular area with a dark background.
  - **Location**: Right side of the image.
  - **Contents**: Displays three identical asset cards labeled "Asset" with placeholder text "Lorem ipsum dolor sit amet..." and a sound wave icon.
  - **Visual styling**: Each card has a gradient background transitioning from blue to purple, with white text and icons.

- **Header (Top Center)**:
  - **Visual description**: Text "My Assets" displayed prominently.
  - **Location**: Top center of the main content area.
  - **Contents**: The text is white against a dark background.
  - **Visual styling**: Simple and clean font style.

- **Action Buttons (Top Right)**:
  - **Visual description**: A search icon and a "New" button.
  - **Location**: Top right corner of the main content area.
  - **Contents**: The search icon is a magnifying glass, and the "New" button has a dropdown arrow.
  - **Visual styling**: White icons on a dark background.

### Visual Flow / Relationships
- **Most prominent visually**: The main content area with the asset cards.
- **Arrows/lines/connectors**: None visible.
- **Spatial relationships**: The sidebar menu is on the left, the main content area occupies the right, and the header spans the top of the main content area. The action buttons are positioned at the top right corner.

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