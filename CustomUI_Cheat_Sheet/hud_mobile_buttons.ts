// #region 📋 README
// Mobile Button HUD - CustomUI Component for Mobile Input
// 
// This HUD is specifically designed to display mobile buttons using the
// PlayerInputAction (Custom Input API) with custom asset icons.
// 
// Button Layout:
// - L1-L3: Left side buttons (3 slots)
// - C1-C4: Center buttons (4 slots)
// - R1-R6: Right side buttons (6 slots)
// 
// Total: 13 button slots with custom asset icons
// 
// Script Mode: LOCAL (runs on each player's client)
// #endregion

import { PropTypes, PlayerControls, PlayerInputAction, ButtonIcon, ButtonPlacement } from 'horizon/core';
import { UIComponent, View, Text, Binding } from 'horizon/ui';

// #region 🪵 Logging Utility
const logWithTimestamp = (message: string) => {
  const timestamp = Date.now();
  console.log(`🪵 | hud_mobile_buttons | xX_${timestamp}_Xx | ${message}`);
};

logWithTimestamp('📜 hud_mobile_buttons.ts script file loaded into memory');
// #endregion

class hud_mobile_buttons extends UIComponent {
  // #region 📐 Panel Dimensions
  protected readonly panelWidth = 100;
  protected readonly panelHeight = 100;
  // #endregion

  // #region 🎨 Props (if needed for future customization)
  static propsDefinition = {
    // Add any props here if needed
  };
  // #endregion

  // #region 📊 State
  private statusText = new Binding("Mobile Buttons Active");
  private pressCountText = new Binding("Press count: 0");
  private pressCount = 0;
  
  // Store input connections
  private inputConnections: any[] = [];
  // #endregion

  // #region 🔄 Lifecycle
  async start() {
    logWithTimestamp('🚀 Starting Mobile Button HUD...');
    
    // Get the local player
    const localPlayer = this.world.getLocalPlayer();
    
    if (!localPlayer) {
      logWithTimestamp('⚠️ No local player found - HUD will not activate');
      return;
    }

    logWithTimestamp(`✅ HUD initialized for local player: ${localPlayer.name.get()} (ID: ${localPlayer.id})`);
    logWithTimestamp('🔧 Script Mode: LOCAL (client-side only)');
    
    // Set up all button inputs
    this.setupAllButtons();
    
    logWithTimestamp('✅ Mobile Button HUD is now active');
  }

  // #region 🎮 Button Setup
  private setupAllButtons() {
    logWithTimestamp('Setting up all 13 mobile button inputs...');
    
    // #region LEFT SIDE BUTTONS (L1-L3)
    // L1 - Left Primary
    const l1 = PlayerControls.connectLocalInput(
      PlayerInputAction.LeftPrimary,
      ButtonIcon.None,
      this,
      { customAssetIconId: '1231766755654081' }
    );
    l1.registerCallback((action, pressed) => {
      if (pressed) this.onButtonPressed('L1');
    });
    this.inputConnections.push(l1);
    
    // L2 - Left Secondary
    const l2 = PlayerControls.connectLocalInput(
      PlayerInputAction.LeftSecondary,
      ButtonIcon.None,
      this,
      { customAssetIconId: '24903257582634233' }
    );
    l2.registerCallback((action, pressed) => {
      if (pressed) this.onButtonPressed('L2');
    });
    this.inputConnections.push(l2);
    
    // L3 - Left Tertiary
    const l3 = PlayerControls.connectLocalInput(
      PlayerInputAction.LeftTertiary,
      ButtonIcon.None,
      this,
      { customAssetIconId: '4061666714164038' }
    );
    l3.registerCallback((action, pressed) => {
      if (pressed) this.onButtonPressed('L3');
    });
    this.inputConnections.push(l3);
    // #endregion
    
    // #region CENTER BUTTONS (C1-C4)
    // C1 - Jump
    const c1 = PlayerControls.connectLocalInput(
      PlayerInputAction.Jump,
      ButtonIcon.None,
      this,
      { 
        preferredButtonPlacement: ButtonPlacement.Center,
        customAssetIconId: '789919573939775'
      }
    );
    c1.registerCallback((action, pressed) => {
      if (pressed) this.onButtonPressed('C1');
    });
    this.inputConnections.push(c1);
    
    // C2 - Left Grip
    const c2 = PlayerControls.connectLocalInput(
      PlayerInputAction.LeftGrip,
      ButtonIcon.None,
      this,
      { 
        preferredButtonPlacement: ButtonPlacement.Center,
        customAssetIconId: '1352313626445650'
      }
    );
    c2.registerCallback((action, pressed) => {
      if (pressed) this.onButtonPressed('C2');
    });
    this.inputConnections.push(c2);
    
    // C3 - Left Trigger
    const c3 = PlayerControls.connectLocalInput(
      PlayerInputAction.LeftTrigger,
      ButtonIcon.None,
      this,
      { 
        preferredButtonPlacement: ButtonPlacement.Center,
        customAssetIconId: '1641528116824302'
      }
    );
    c3.registerCallback((action, pressed) => {
      if (pressed) this.onButtonPressed('C3');
    });
    this.inputConnections.push(c3);
    
    // C4 - Right Trigger (with center placement preference)
    const c4 = PlayerControls.connectLocalInput(
      PlayerInputAction.RightTrigger,
      ButtonIcon.None,
      this,
      { 
        preferredButtonPlacement: ButtonPlacement.Center,
        customAssetIconId: '32640931745491079'
      }
    );
    c4.registerCallback((action, pressed) => {
      if (pressed) this.onButtonPressed('C4');
    });
    this.inputConnections.push(c4);
    // #endregion
    
    // #region RIGHT SIDE BUTTONS (R1-R6)
    // R1 - Right Primary
    const r1 = PlayerControls.connectLocalInput(
      PlayerInputAction.RightPrimary,
      ButtonIcon.None,
      this,
      { customAssetIconId: '1276733030855952' }
    );
    r1.registerCallback((action, pressed) => {
      if (pressed) this.onButtonPressed('R1');
    });
    this.inputConnections.push(r1);
    
    // R2 - Right Secondary
    const r2 = PlayerControls.connectLocalInput(
      PlayerInputAction.RightSecondary,
      ButtonIcon.None,
      this,
      { customAssetIconId: '1155962689247202' }
    );
    r2.registerCallback((action, pressed) => {
      if (pressed) this.onButtonPressed('R2');
    });
    this.inputConnections.push(r2);
    
    // R3 - Right Tertiary
    const r3 = PlayerControls.connectLocalInput(
      PlayerInputAction.RightTertiary,
      ButtonIcon.None,
      this,
      { customAssetIconId: '1749668885743719' }
    );
    r3.registerCallback((action, pressed) => {
      if (pressed) this.onButtonPressed('R3');
    });
    this.inputConnections.push(r3);
    
    // R4 - Right Grip
    const r4 = PlayerControls.connectLocalInput(
      PlayerInputAction.RightGrip,
      ButtonIcon.None,
      this,
      { customAssetIconId: '1132609899061797' }
    );
    r4.registerCallback((action, pressed) => {
      if (pressed) this.onButtonPressed('R4');
    });
    this.inputConnections.push(r4);
    
    // R5 - Right X Axis (testing if axis inputs show as buttons)
    const r5 = PlayerControls.connectLocalInput(
      PlayerInputAction.RightXAxis,
      ButtonIcon.None,
      this,
      { customAssetIconId: '1586991272466434' }
    );
    r5.registerCallback((action, pressed) => {
      if (pressed) this.onButtonPressed('R5');
    });
    this.inputConnections.push(r5);
    
    // R6 - Right Y Axis
    const r6 = PlayerControls.connectLocalInput(
      PlayerInputAction.RightYAxis,
      ButtonIcon.None,
      this,
      { customAssetIconId: '1572947424140741' }
    );
    r6.registerCallback((action, pressed) => {
      if (pressed) this.onButtonPressed('R6');
    });
    this.inputConnections.push(r6);
    // #endregion
    
    logWithTimestamp(`✅ All ${this.inputConnections.length} button inputs configured!`);
    logWithTimestamp('📱 Layout: L1-L3 (left 3), C1-C4 (center 4), R1-R6 (right 6)');
    logWithTimestamp('🎮 Buttons will be visible on mobile devices only');
  }
  // #endregion

  // #region 🔘 Button Event Handler
  private onButtonPressed(buttonName: string) {
    this.pressCount++;
    this.pressCountText.set(`Press count: ${this.pressCount}`);
    logWithTimestamp(`🔘 Button pressed: ${buttonName} (Total presses: ${this.pressCount})`);
    this.statusText.set(`Last pressed: ${buttonName}`);
  }
  // #endregion
  // #endregion

  // #region 🎨 UI Layout
  initializeUI() {
    logWithTimestamp('🎨 Building UI layout...');
    
    // Minimal UI - just status text in center
    return View({
      style: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.1)' // Subtle background
      },
      children: [
        View({
          style: {
            padding: 20,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            borderRadius: 10,
            flexDirection: 'column',
            alignItems: 'center'
          },
          children: [
            Text({
              text: new Binding("Mobile Buttons HUD"),
              style: {
                fontFamily: 'Oswald',
                fontSize: 24,
                fontWeight: '700',
                color: '#ffffff',
                textAlign: 'center'
              }
            }),
            Text({
              text: this.statusText,
              style: {
                fontFamily: 'Roboto',
                fontSize: 18,
                fontWeight: '400',
                color: '#00ff00',
                textAlign: 'center'
              }
            }),
            Text({
              text: this.pressCountText,
              style: {
                fontFamily: 'Roboto',
                fontSize: 16,
                fontWeight: '400',
                color: '#aaaaaa',
                textAlign: 'center'
              }
            }),
            Text({
              text: new Binding("Buttons visible on mobile only"),
              style: {
                fontFamily: 'Roboto',
                fontSize: 14,
                fontWeight: '400',
                color: '#666666',
                textAlign: 'center'
              }
            })
          ]
        })
      ]
    });
  }
  // #endregion
}

UIComponent.register(hud_mobile_buttons);
