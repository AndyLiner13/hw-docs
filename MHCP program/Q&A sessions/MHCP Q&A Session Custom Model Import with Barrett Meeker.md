Source: https://developers.meta.com/horizon-worlds/learn/documentation/mhcp-program/qa-sessions/mhcp-qa-session-custom-model-import-with-barrett-meeker

Learn

# MHCP Q&A Session: Custom Model Import with Barrett Meeker

[](https://video-dfw5-3.xx.fbcdn.net/v/t42.1790-2/453568979_804216788524677_5442964682020855821_n.mp4?_nc_cat=109&ccb=1-7&_nc_sid=6500a6&_nc_ohc=ITjfDE-W90cQ7kNvwFPI3YD&_nc_oc=Adn88epveyNqsgwojnKubXFcajEV6Eq91ZFw8MwVd82z3Ua3uDD1WJaR9dfzkfwUprQ&_nc_zt=28&_nc_ht=video-dfw5-3.xx&_nc_gid=2fGdFCKu1ZEpZB_nqS_eYA&oh=00_AfiZklgRUiiPlDQUICL_reOm-ifWsPqdXje6nTy0GDwfxg&oe=691A2BDC)

Join Meta expert, Barrett Meeker, as he answers questions related to integrating Custom Models in your worlds. If you liked this video, be sure to watch [the “Custom Model Worlds” video](/hw-docs/custom-model-import/connect-23-video-series-custom-model-worlds) to lay even more groundwork in this area.

#### Timestamps

0:08 - Intro

1:00 - What is the best way to build out a world—should we be building it all in one blend file?

2:34 - Importing is limited to a 25 MB file size. Following along on the video, the texture png’s were about 120 - MB, which is what I got also. Is there some compression recommendation or something else to reduce the file size?

3:48 - Are there any specific recommendations when importing functional/scripting objects into a world?

4:38 - What controls the “glossiness” of a texture? When exporting, it looks good, but when importing it’s very glossy.

5:58 - What’s the right way to create a \_BR & \_MEO texture? Whenever I pack a Metal texture in the Red channel and leave the Green and Blue channels empty, it makes my whole mesh in MHW black when uploading the \_BR & \_MEO textures. The material\_Metal works, but it makes the whole object metal, even though I only want specific parts of the texture to be metal.

7:06 - If I upload different objects at different times that use the same Material and Texture, will it double the texture count in MHW or will MHW only use one texture and ignore (and not load) the duplicates—saving capacity and processing of texture loading?

7:45 - Is it better (more optimized) to pack a lot of objects into one 4K texture or to have a lot of separate objects that each have 1K textures?

8:21 - How do you get glass textures to look realistic? My current glass just looks like a transparent plane with no depth or reflection.

11:10 - Is there any way to snap to any vertex in an object group? Right now I can only snap to the bounding box and not to any vertex on the object.

11:24 - Are rectangle ^2 textures okay, performance-wise (e.g., 1024x512)?

11:48 - How should we approach uploading new assets which share texture files with existing parts of the world?

12:04 - Are there any tools or workflow suggestions that could make texture atlasing/making trimsheets easier? I’m currently using GIMP to manually make the atlas and applying it to a single material shared by most of my mesh items in my “monolithically designed world.”

12:51 - How do you import multiple textured objects? Whenever I try to import an advanced model like an entire scene, it says the file is too large or can’t read the textures and colors.

13:38 - How do we import user interfaces?

14:07 - What’s the easiest way to set up metalics?

14:37 - How do I separate a nurb and/or a brazier by material in Blender? With these curved, Blender has the separate choice under “mesh,” but doesn’t have the “separate by” options—only “separate.”

15:08 - Why does Meta Horizon Worlds sometimes ask for a .001 texture file name?

15:56 - Is there a way to see a preview of your assets online before pulling it out in world?

16:06 - Can you explain in more detail the “specular” channel of the MESA texture map for \_Transparent materials?

17:55 - Frequently, mesh objects need to be updated (geometry, materials, or textures) after they have been imported and wired into the world. It is EXTREMELY time consuming to re-wire entities after re-import. Is there a way to update meshes/materials/textures in-situ on Trimesh entities in the world without breaking existing wiring?

18:28 - What are the texture compression types allowed?

18:54 - Do we support glTF?

18:59 - Do we support NPR?

19:41 - Do we stream textures?

21:01 - How big do you typically make trims sheets?