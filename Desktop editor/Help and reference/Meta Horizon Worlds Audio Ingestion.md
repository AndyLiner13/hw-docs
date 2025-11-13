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

[](https://video-dfw5-2.xx.fbcdn.net/v/t42.1790-2/452602942_1531891694363967_592376360678865435_n.mp4?_nc_cat=104&ccb=1-7&_nc_sid=6500a6&_nc_ohc=j5AsVe5cMbMQ7kNvwE7K_92&_nc_oc=AdkMFcEt3fmjaYH-JhpxX9-C9rPjXR5j7VKKLB9RugDUMGdEQSlX4-2HwomKS1nT2_g&_nc_zt=28&_nc_ht=video-dfw5-2.xx&_nc_gid=qETOFRd5aob_yfDpp4KauQ&oh=00_AfjW6q5PD5n_0a_ddHSVp1D3NRSPPXIX2LP_EDUFatHmkg&oe=691B36CB)

- Navigate to the [Meta Horizon Worlds Creations site](https://horizon.meta.com/creator/).
- In the left nav bar, select **My Assets > View All**.
- At the top right, select + **Import > Sound**. ![Screenshot of the My Horizon Creations page showing Import button with Sound dropdown option.](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/453153965_514606404410649_6610638626555006606_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=8dC5TLzFvYQQ7kNvwHrdxyQ&_nc_oc=AdlZ5m1rT6THaXipyL6RG0QBYE41-QYKFVOecp-r5tHZe9WCqyjt_mGJDhWIm05PQrk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=qETOFRd5aob_yfDpp4KauQ&oh=00_AfgcYkVpFBi3V2n0SA2pivoR3B9Qynkua8YGkkQDkpLXkA&oe=692F9E33)
- Follow the instructions: ![Screenshot of the Import sound dialog box.](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/453246470_514606361077320_8634362095564043733_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=7F4OzB366UAQ7kNvwGYjT5b&_nc_oc=AdmMdT4dlUl9a38gpXscki6F6LgYO8_j04-57HeZynAoPHz63WRFVmYA3njtgAmT9fo&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=qETOFRd5aob_yfDpp4KauQ&oh=00_AfjuTy1vpaBBnyoScPABqTltHViPy5WUoq_6UMx2Sn4T5g&oe=692FBEB2)
- When your audio file has been uploaded, select the context menu on the asset tile to edit, delete, or play the audio asset: ![Asset tile showing Play option highlighted in dropdown menu.](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/453091793_514606381077318_5437568068305643374_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=zL79GmsSUlgQ7kNvwHUa4T5&_nc_oc=AdnOZT8r2-fRw0u55pWun3rOZeISJrirrwLGHP8E2O68HRNJYO0F7Wkn9vh0GjMFUQY&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=qETOFRd5aob_yfDpp4KauQ&oh=00_Afgn8ctzUUJL_igbDaRfTihEfASxE0v6iatb09m4RSU5dw&oe=692FBD2D)

## Edit Assets

**Note**: Following steps reference editing assets through the Horizon Words Creations interface.

- To view an asset’s details, click on the asset you uploaded to your folder. The following video demonstrates this process: ![GIF showing clicking on an asset tile, which opens up a details dialog box showing "Description", "Tags", "Folder", "File size", "Owner", "Asset ID", and "Last edited" fields.](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/453003674_514606357743987_5499500488650383560_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=Jbbt7_OeI0MQ7kNvwEwqwjQ&_nc_oc=Adk_esZT50fw1laX9bLtY-jZo7oBY3Y3M_HYVxUKfxPfdlb4KUxNcKoHWeo2nsP8D3s&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=qETOFRd5aob_yfDpp4KauQ&oh=00_AfiefLIzSDEXIGUxeQdaVKzKDUNv8RtcuRsUBmSeenkASg&oe=692FABBF)
- To edit the asset, click the context menu on the asset tile, or click **Edit** in the Details view.
- Modify the name, description, tags, folder, and associated audio file for the asset: ![Screenshot showing the "Edit sound" dialog box with "Title", "Description", "Tags", and "Folder" fields and a drag and drop area to replace the sound file.](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/453091053_514606447743978_5542190667677873274_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=dBDpdJ5CoyUQ7kNvwEFshkc&_nc_oc=AdkdDemA3seCu2qDfsDONLWzqFTDD7TfDxhfYUcJwEMFCvoI4-1n031HOF5LB625gqQ&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=qETOFRd5aob_yfDpp4KauQ&oh=00_Afi-8iX48seSiT1_qFS_RKgGKhoY8slOOu_F0w10Z9zmvA&oe=692FA1FD)

**Note**: You can replace the audio assets only for assets that you own.

After the audio details are added, they are displayed:

![Screenshot showing the audio asset's details dialog box.](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/453002228_514606444410645_6473498994597117976_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=dnwyoBP9iSQQ7kNvwEYR3Tn&_nc_oc=AdkjZXRlnodno14AETGyhV0945thCxe1JLUG4g5XaEGMC_gbQNbDJUlWnw1PA1_RwnM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=qETOFRd5aob_yfDpp4KauQ&oh=00_AfitcxcwF2OFG6YhNAptL7-aQVJGRL0WnXHPPaool9VCvg&oe=692FCCF6)

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

[](https://video-dfw5-1.xx.fbcdn.net/v/t42.1790-2/452642051_2470008526538904_689802133705749551_n.mp4?_nc_cat=111&ccb=1-7&_nc_sid=6500a6&_nc_ohc=awlPAUSgFzAQ7kNvwGdWQOh&_nc_oc=Adk_4yj1JUxy98cfjK5nD2kV1IqRAdmQU2PtnvvV5SsTTzBKhoa_q2NFOM3x6Li6HHo&_nc_zt=28&_nc_ht=video-dfw5-1.xx&_nc_gid=qETOFRd5aob_yfDpp4KauQ&oh=00_AfjH7U3AGJuu2iodzKZ2Ka_dQKJn3eE5R6bCvLqupoKC6g&oe=691B3698)

![Screenshot of VR showing My Assets pane in the Build menu.](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/453002823_514606387743984_4603528703401156022_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=K9eG7ECy82wQ7kNvwGJjkNg&_nc_oc=AdmYZvhG4diULkMSjHnuyCMUwiJrbhoGaK75U1Y0qgrUlK-dzkk9AMpVm2M_PML1BMY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=qETOFRd5aob_yfDpp4KauQ&oh=00_Afif0AovcVELf_TidpwY1eglpc-C1_e1fzptF4SmO3EVww&oe=692FC635)

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