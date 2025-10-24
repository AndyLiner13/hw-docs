# Project structure

 A project in Meta Horizon Worlds consists of a world, assets and asset
templates, scripts, and other resources that are collectively used to create an
interactive virtual environment. The Meta Horizon Worlds desktop editor organizes your
projects at the world level, allowing you to enter each world, edit objects and
settings, and make changes to assets and asset templates. Snapshots of your worlds are backed up to the cloud at regular intervals for
convenient rollbacks and version control. The desktop editor provides building,
editing, and publishing tools but some assets, such as scripts and custom models,
must be imported from third-party tools.  
## Worlds

 Projects in Meta Horizon Worlds are organized around worlds, which are comparable to Places in Roblox, scenes in Unity, or maps in Unreal
Engine. Each world contains its own specific environment, objects, scripts, and [user interface](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/creating-a-custom-ui-panel). You can create your own world and see these components in action by following
the [Create your first world tutorial](https://developers.meta.com/horizon-worlds/learn/documentation/get-started/create-your-first-world). Every world is organized into a [hierarchy](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/hierarchy-window/hierarchy-window-overview) of objects that represents everything in that world. By default, this hierarchy
is visible on the left side of the desktop editor. Proper, intentional
organization and management of the object hierarchy is essential for managing large
scenes full of complex objects.  
## Assets

 [Assets](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/assets/creating-importing-viewing-and-spawning-assets) for your projects, such as object geometry, images, and audio are stored online
once they are uploaded to one of your worlds. Once you have uploaded an asset,
you may use it in any of your worlds. You may create some types of assets
directly in desktop editor, such as basic 3D objects, or you may import assets like
images, [audio](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/help-and-reference/horizon-worlds-audio-ingestion), and [custom models](https://developers.meta.com/horizon-worlds/learn/documentation/custom-model-import/creating-custom-models-for-horizon-worlds/creating-a-custom-model) from other tools. There is also a collection of free, publicly available stock assets you can try
out for use in your worlds in the [public asset library](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/assets/public-asset-library), which is available directly in the desktop editor.  
## Asset templates

 [Asset templates](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/assets/asset-templates) are reusable object hierarchies that you can define and reuse in multiple
places across multiple worlds. Asset templates offer the following features:
•  Asset templates allow you to duplicate sets of objects as needed across one or
more worlds.
•  When editing an instance of an asset template, you may choose to propagate those
changes across all instances of the template, including the template definition
itself. For example, if you created a forest from a tree template and you want
to change the tree’s texture, you only need to update the texture on one of the
trees in order to update the entire forest.
•  Similarly, you may create an asset template with placeholder art assets during
development and replace them later with your final art.

  
## Collaboration

 You may choose to add [collaborators](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/getting-started/collaborator-management) to help you build and test your world. Collaborators may have one of two roles:
•  Editor - Editors can build, edit, change, or copy anything in your world, but cannot
publish it. This access includes things that you or other collaborators have
created. You should only grant the Editor role to someone you trust with your
content.
•  Tester - Testers can visit your unpublished worlds, but cannot modify or publish them.

 You and your collaborators can edit your world together in real-time, and can
see each other’s changes as they happen. Note: You should take care and communicate clearly when more than one person is
editing an asset at the same time. The edits happen synchronously, and it is easily
possible for one person’s edits to overwrite or intermingle with the other’s,
leading to undesired results.  
## Testing

 You can instantly [test your world](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/getting-started-with-tutorials/test-your-world) in desktop editor by clicking the Play button to enter [Preview mode](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/getting-started/preview-mode). Your avatar is dropped into the world’s spawn point, allowing you to explore
and interact with the world to test various aspects of it. Preview mode also
allows you to test how your world looks and feels on the various devices that
support Meta Horizon Worlds. You may also choose to enable world simulation without entering the world
yourself; this initializes all entities in the world, runs all active scripts, and
starts the physics simulation. You can use TypeScript to [send messages to the console log](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/getting-started/typescript-tutorial) in desktop editor. This can be very helpful when debugging custom TypeScript
scripts.  
### Performance testing

 For advanced testing, you can make use of specialized analytics to track various
metrics:
•  [In-World Analytics](https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/analytics/using-in-world-analytics) tracks events in your world.
•  [World analytics](https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/analytics/world-analytics) is a web-based tool that tracks usage and performance data associated with your
world.
•  [Performance scrubbing](https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-tools/performance-scrubbing) allows you to analyze performance events in your world from the Meta Horizon
Worlds UI.
•  [Heatmaps](https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/analytics/heatmaps) allow you to visualize where visitors spend the most time in your world.

    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


[Facebook](https://www.facebook.com/MetaHorizon/)
[Threads](https://www.threads.com/@metahorizon)
[X](https://x.com/MetaHorizon)
[Instagram](https://www.instagram.com/metahorizon/)
[YouTube](https://www.youtube.com/@MetaQuestVR)

 Learn
[Documentation](https://developers.meta.com/horizon-worlds/learn/documentation/)
[Blog](https://developers.meta.com/horizon/blog/)
[Forum](https://communityforums.atmeta.com/t5/Creator-Forum/ct-p/Meta_Horizon_Creator_Forums)

 Programs
[Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs/)

 My Creations
[My Worlds](https://horizon.meta.com/creator/worlds_all/?utm_source=horizon_worlds_creator)
[My Assets](https://horizon.meta.com/creator/assets/?utm_source=horizon_worlds_creator)
[Performance](https://horizon.meta.com/creator/performance/traces/?utm_source=horizon_worlds_creator)

 Privacy & Legal
[Privacy Policy](https://www.meta.com/legal/privacy-policy/)
[Legal](https://www.meta.com/legal/supplemental-terms-of-service/)

 © 2025 Meta
