# Script Names and Component Class Names

Current Horizon Worlds documentation describes naming conflicts as collisions between scripts that share the same script name, especially when different script IDs are loaded into the same world. [File-Backed Scripts](File-Backed%20Scripts.md) says that if a world already contains one script and then loads another script with a different ID but the same name, the console logs a warning and the second script does not execute. [Scripting Considerations](Asset%20spawning/Scripting%20Considerations.md) describes the same conflict during asset spawning and explains that same-name scripts can also change which imported script resolves at runtime.

## Script names are part of the runtime identity surface

[Using TypeScript in Meta Horizon Worlds](Get%20started%20with%20TypeScript/Using%20TypeScript%20in%20Meta%20Horizon%20Worlds.md) says that renaming a script changes the reference to the script and does not recompile it. [TypeScript Tutorial](Get%20started%20with%20TypeScript/TypeScript%20Tutorial.md) says that script-to-script imports use the script name as the module name. Taken together, those pages show that the script name is part of the editor and runtime identity surface: creators attach scripts by that reference, and imports resolve through that name.

The runtime consequences of script-name collisions are also documented in more than one place. [File-Backed Scripts](File-Backed%20Scripts.md) says a different-ID script with the same name will not execute in a file-backed scripts world. [Scripting Considerations](Asset%20spawning/Scripting%20Considerations.md) adds that when an imported dependency has a naming conflict, the first-loaded version is the one that gets imported. This means a naming conflict is not only a warning-message problem. It can change which code runs and which exports another script receives.

## Class names are documented separately from script names

The clearest official distinction appears in the [Text Entry and Formatting Tutorial](../MHCP%20program/Community%20guides/Text%20Entry%20and%20Formatting%20Tutorial.md). That tutorial explicitly says the script name needs to be unique, but the class inside the script can keep the same name. It also explains that when a script is assigned in the editor, the script name appears on the left while the class name appears on the right. Those statements separate the editor-facing script identity from the TypeScript class declaration inside the file.

This distinction matches the onboarding material in [Using TypeScript in Meta Horizon Worlds](Get%20started%20with%20TypeScript/Using%20TypeScript%20in%20Meta%20Horizon%20Worlds.md) and [TypeScript Tutorial](Get%20started%20with%20TypeScript/TypeScript%20Tutorial.md), both of which talk about creating, renaming, attaching, and importing scripts by script name. None of those pages describe duplicate component class declarations as the documented naming-conflict surface. The documented conflict is the script name that the world, asset system, and import system see.

## Legacy storage and file-backed storage still center script names

[Legacy Script Storage](Legacy%20Script%20Storage.md) says legacy worlds do not have script IDs and rely solely on script names. [File-Backed Scripts](File-Backed%20Scripts.md) says file-backed scripts store scripts on the server, assign IDs, and keep world references to those scripts, but still forbid loading different scripts with the same name into the same world. The storage model changed, but the documented conflict surface stayed script-oriented.

This matters when reading older troubleshooting advice or older language-service rules. In legacy worlds, name-only identity means the script name is the whole lookup key. In file-backed worlds, IDs exist, but current docs still warn that different scripts sharing one name create ambiguous behavior for dependencies and execution. In both models, the published explanation is about script identity, not about whether two files happen to declare the same component class name.

## Practical diagnostic guidance

When a world shows a naming-conflict warning, the first things to inspect are the script library names, the import module names used by other scripts, and the scripts embedded inside spawned assets. That follows directly from the conflict descriptions in [File-Backed Scripts](File-Backed%20Scripts.md), [Scripting Considerations](Asset%20spawning/Scripting%20Considerations.md), and [TypeScript Tutorial](Get%20started%20with%20TypeScript/TypeScript%20Tutorial.md).

When copying behavior from one script into another, it is possible to keep the same component class name while giving the new file a different script name. That workflow is described directly in the [Text Entry and Formatting Tutorial](../MHCP%20program/Community%20guides/Text%20Entry%20and%20Formatting%20Tutorial.md). Because of that distinction, a rule that warns solely on duplicate component class names is not aligned with the current published naming-conflict guidance unless it also proves that the duplicated class name corresponds to a duplicated script identity in the world.

## Comparison summary

| Surface | Current documented rule | Operational consequence |
| --- | --- | --- |
| Script name | [File-Backed Scripts](File-Backed%20Scripts.md), [Scripting Considerations](Asset%20spawning/Scripting%20Considerations.md), and [Using TypeScript in Meta Horizon Worlds](Get%20started%20with%20TypeScript/Using%20TypeScript%20in%20Meta%20Horizon%20Worlds.md) treat the script name as the relevant identity for references, imports, and naming conflicts. | Same-name different scripts can change imports, log warnings, and in file-backed worlds prevent the later script from executing. |
| Component class name | [Text Entry and Formatting Tutorial](../MHCP%20program/Community%20guides/Text%20Entry%20and%20Formatting%20Tutorial.md) says the class in the script can keep the same name even when the script name must be unique. | Matching class names alone are not the documented conflict surface in the current public docs. |