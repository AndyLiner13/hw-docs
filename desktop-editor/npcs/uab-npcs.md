Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/npcs/uab-npcs

# UAB NPCs

Unity Asset Bundles (UABs) are packaged Unity based assets that can be loaded dynamically at runtime in Horizon Worlds. They enable dynamic loading of complex, pre-built 3D assets, like NPCs, and come prepackaged with animations which can be used to react to players in your world.

### Key Benefits

* Dynamic Loading - UABs can be loaded at runtime
* Content Reusability - The same UABs can be reused across multiple worlds, reducing the need to create new NPCs or entities while world building
* Performance Optimization - UABs can help reduce the performance load of your world by acting as characters, reducing the need to implement NPCs like Horizon Avatars which count as players when spawned
* Included Animations - The UABs may have existing animations that can be triggered via Typescript

## UAB NPC Collections

The currently available UAB NPCs can be found listed on the NPC Library page.

## Working with Unity Asset Bundles in Horizon Editor

Unity Asset Bundles in the desktop editor can be accessed from the **Asset Library**. To do so, use the following process:

- Open the **Asset Library** and select **Public Assets**.
- Use the **Creator** dropdown and select **MetaHorizon** to filter the list of available assets.
- In the search bar, input **NPC** to see all available NPCs. The UAB NPCs are all preceded by “NPC” in their name, and are offered as a wide variety of characters.
- Once you have found a UAB NPC you like, drag it from the **Asset Library** into your world scene.

For a list of the available UAB NPCs, check the NPC Library.

### Basic Scripting Setup

The following script sample is initialization boilerplate for a UAB NPC. You can attach this to your UAB NPC, then extend this script to accommodate for things like animations with `setAnimationParameterBool` or `setAnimationParameterInteger` and features like setting up visemes for your UAB NPCs.

```vs
import * as hz from 'horizon/core';
import {
 AssetBundleGizmo,
 AssetBundleInstanceReference,
} from 'horizon/unity_asset_bundles';

class UABController extends hz.Component<typeof UABController> {
 static propsDefinition = {
   uabEntity: {type: hz.PropTypes.Entity}, // Reference to the dragged UAB
 };

 private assetBundle: AssetBundleGizmo | null = null;
 private bundleRoot: AssetBundleInstanceReference | null = null;

 start() {
   // Get the Unity Asset Bundle entity from the scene
   this.assetBundle = this.props.uabEntity?.as(AssetBundleGizmo);

   if (this.assetBundle) {
     this.initializeAssetBundle();
   }
 }

 private initializeAssetBundle() {
   // Check if bundle is already loaded (usually auto-loaded when dragged)
   if (this.assetBundle!.isLoaded()) {
     this.onBundleLoaded();
   } else {
     // Load a specific prefab if needed
     this.assetBundle!.loadPrefab('MyCharacter');
     this.waitForLoad();
   }
 }

 private waitForLoad() {
   const checkLoaded = () => {
     if (this.assetBundle!.isLoaded()) {
       this.onBundleLoaded();
     } else {
       setTimeout(checkLoaded, 100);
     }
   };
   checkLoaded();
 }

 private onBundleLoaded() {
   console.log('Unity Asset Bundle ready for scripting');
   this.bundleRoot = this.assetBundle!.getRoot();
   this.setupReferences();
 }

 private setupReferences() {
   // Set up references to specific parts of the Unity Asset Bundle
   // This enables control over animations, materials, and attachments
 }
}

hz.Component.register(UABController);
You can trigger animation values through `setAnimationParameterBool`, `setAnimationParameterInteger`, and similar methods.
```

### Viseme Handling for Lip-Sync

```vs
// Constants for viseme management
const VISEMES = {
    sil: 'sil' // silence viseme
};

const VISEME_TIMEOUT = 'viseme_timeout';
const TALKING_TIMEOUT = 'talking_timeout';
const VISEME_TIMEOUT_TIME = 100; // milliseconds
const TALKING_TIMEOUT_TIME = 500; // milliseconds

class UABNPCWithVisemes extends hz.Component<typeof UABNPCWithVisemes> {
    private isInVisemeCooldown: boolean = false;

    setViseme(viseme: string) {
        this.log(`OnLLMVisemeReceived received: ${viseme}`, GC.CONSOLE_LOG_VISEMES);
        this.startTalking();

        if (!this.isInVisemeCooldown || viseme == VISEMES.sil) {
            this.log(`OnLLMVisemeReceived APPLIED: ${viseme}`, GC.CONSOLE_LOG_VISEMES);

            this.setMouthShape(viseme);
            this.isInVisemeCooldown = true;

            this.startTimeout(VISEME_TIMEOUT, () => {
                this.isInVisemeCooldown = false;
            }, VISEME_TIMEOUT_TIME, true)

            this.startTimeout(TALKING_TIMEOUT, () => {
                this.stopTalking();
            }, TALKING_TIMEOUT_TIME, true)
        }
    }

    private setMouthShape(viseme: string) {
        // Apply the viseme to the UAB NPC's mouth animation
        // Implementation depends on your specific UAB setup
    }

    private startTalking() {
        // Start talking animation/state
    }

    private stopTalking() {
        // Stop talking animation/state
    }

    private log(message: string, logType: any) {
        console.log(message);
    }
}
```

This implementation includes:

* **Cooldown management** to prevent viseme spam
* **Talking state handling** with automatic timeout
* **Silence viseme support** for natural pauses
* **Logging** for debugging viseme reception

This and more are demonstrated in the `AI NPC Examples from Profit or Perish`[remixable world](https://horizon.meta.com/world/10163647262974948/?locale=en_GB))