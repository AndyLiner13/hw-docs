# Master Player Persistent Variables (PPV) Documentation
## Complete Guide to Persistent Storage in Meta Horizon Worlds

---

## Table of Contents

1. [What Are Player Persistent Variables?](#what-are-player-persistent-variables)
2. [Core Concepts](#core-concepts)
3. [Data Types & Limitations](#data-types--limitations)
4. [Variable Groups](#variable-groups)
5. [Setup & Configuration](#setup--configuration)
6. [TypeScript API Reference](#typescript-api-reference)
7. [Reading Data (getPlayerVariable)](#reading-data-getplayervariable)
8. [Writing Data (setPlayerVariable)](#writing-data-setplayervariable)
9. [Type Safety & Validation](#type-safety--validation)
10. [Best Practices](#best-practices)
11. [Performance Optimization](#performance-optimization)
12. [Common Patterns](#common-patterns)
13. [Edge Cases & Gotchas](#edge-cases--gotchas)
14. [Troubleshooting](#troubleshooting)
15. [Migration & Versioning](#migration--versioning)
16. [Cross-World Data Sharing](#cross-world-data-sharing)
17. [Complete Code Examples](#complete-code-examples)
18. [Documentation Index](#documentation-index)

---

## Documentation Index

### Official Meta Documentation Files Covering PPVs

This section indexes all files in the `hw-docs`, `creatorManual`, and `types` folders that contain information about Player Persistent Variables.

#### hw-docs Folder

**Primary PPV Documentation:**

1. **`hw-docs/Scripting/Get_started_with_TypeScript/Persistent_Variables.md`**
   - **Main official documentation for PPVs**
   - Topics covered:
     - Creating variable groups and variables
     - TypeScript API (`getPlayerVariable`, `setPlayerVariable`)
     - Number and Object type examples
     - Best practices (module organization, type aliases)
     - 5-second batch update behavior
     - Known issues and limitations

2. **`hw-docs/Scripting/Get_started_with_TypeScript/Object_Type_Persistent_Variables.md`**
   - **Focused guide on Object-type PPVs**
   - Topics covered:
     - JSON object storage capabilities
     - Supported data types (String, Boolean, Arrays)
     - 10 KB size limit per object
     - TypeScript type definitions
     - Default value handling (null vs 0)
     - Creating and accessing object variables

**Note:** The `creatorManual` folder does not contain any TypeScript files or documentation specifically about PPVs. It contains general Horizon Worlds examples and API references.

**Note:** The `types` folder contains TypeScript definition files (`.d.ts`) but does not expose PPV-specific type definitions in a documented way. The `persistentStorage` API is part of the `horizon/core` module but type definitions are generated internally.

#### Related Documentation

While not PPV-specific, these files may provide context:

- **`hw-docs/Scripting/Get_started_with_TypeScript/TypeScript_Components_Properties_and_Variables.md`** - General variable concepts in TypeScript
- **`hw-docs/Scripting/Legacy_Script_Storage.md`** - File-backed script storage (different from PPVs)
- **`hw-docs/Desktop_editor/Quests_leaderboards_and_variable_groups/`** - Variable group management in editor

### Key Documentation Locations Summary

| File Path | Content | Use When |
|-----------|---------|----------|
| `hw-docs/Scripting/Get_started_with_TypeScript/Persistent_Variables.md` | Complete PPV guide with setup, API, examples | Starting with PPVs, need complete reference |
| `hw-docs/Scripting/Get_started_with_TypeScript/Object_Type_Persistent_Variables.md` | Object-type specific details | Working with complex JSON data structures |
| **This file** (`MASTER_PPV_DOCUMENTATION.md`) | Comprehensive guide with edge cases, patterns, examples | Expert-level implementation and troubleshooting |

---

## What Are Player Persistent Variables?

**Player Persistent Variables (PPVs)** are Meta Horizon Worlds' system for storing **player-specific data that persists across play sessions and worlds**. 

### Key Characteristics

- **Player-Specific**: Each player has their own unique copy of the data
- **Cross-Session**: Data survives when players leave and rejoin
- **Cross-World**: Data persists across different Horizon Worlds experiences
- **Server-Backed**: Stored in Meta's backend database, not locally
- **Asynchronous**: Write operations may take several seconds to complete

### What PPVs Are NOT

❌ **NOT for temporary session data** - Use local variables instead  
❌ **NOT for world state** - PPVs are player-specific only  
❌ **NOT real-time** - Updates can take up to 5 seconds  
❌ **NOT accessible in Local mode** - Only work in networked gameplay

---

## Core Concepts

### Persistence Scope

```
Player enters World A → PPV loads → Player plays → PPV saves
                                            ↓
Player enters World B → SAME PPV loads → Player plays → PPV saves
                                            ↓
Player exits all worlds → PPV persists in Meta database
                                            ↓
Player returns days later → PPV loads with saved data
```

### Data Flow

```
┌─────────────────────────────────────────────────────────────┐
│                     META BACKEND DATABASE                    │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Player 12345's PPVs:                                 │  │
│  │  • "progression:xp" = 45000                          │  │
│  │  • "economy:candy" = 1250                            │  │
│  │  • "player:inventory" = { items: [...], active: {} } │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                          ↕ Network
┌─────────────────────────────────────────────────────────────┐
│                      HORIZON WORLD SERVER                    │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  this.world.persistentStorage                        │  │
│  │  • getPlayerVariable(player, key) → Read from DB     │  │
│  │  • setPlayerVariable(player, key, value) → Write DB  │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

---

## Data Types & Limitations

### Supported Types

PPVs support **two primary types**:

#### 1. Number Type

**Single numeric value**

```typescript
// Simple number storage
const xp: number = 45000;
const level: number = 12;
const currency: number = 1250;
```

**Characteristics:**
- ✅ Simple and efficient
- ✅ Fast to read/write
- ✅ No size concerns
- ❌ Only stores one value

**Default Value:** Returns `0` if never set

#### 2. Object Type

**Complex structured data as JSON**

```typescript
// Complex object storage
interface PlayerInventory {
  version: number;
  items: Array<{ itemId: string; acquiredDate: number }>;
  activeItems: { [category: string]: string };
  lastUpdated: number;
}
```

**Characteristics:**
- ✅ Store multiple related values
- ✅ Supports: Number, String, Boolean, Arrays
- ✅ Nested objects allowed
- ❌ 10 KB size limit per variable
- ❌ Must serialize/deserialize as JSON

**Default Value:** Returns `null` if never set

### Supported Data Types in Objects

| Type | Supported | Example | Notes |
|------|-----------|---------|-------|
| `number` | ✅ | `xp: 1000` | All numbers (int, float) |
| `string` | ✅ | `name: "Player1"` | Any text |
| `boolean` | ✅ | `hasPlayed: true` | true/false |
| `Array<number>` | ✅ | `scores: [10, 20, 30]` | Number arrays |
| `Array<string>` | ✅ | `items: ["sword", "shield"]` | String arrays |
| `Array<boolean>` | ✅ | `flags: [true, false]` | Boolean arrays |
| `Object` | ✅ | `{ nested: { data: 1 } }` | Nested objects |
| `null` | ✅ | `optional: null` | Null values |
| `undefined` | ⚠️ | - | Serializes as `null` |
| `Entity` | ❌ | - | Cannot serialize entities |
| `Player` | ❌ | - | Cannot serialize players |
| `Function` | ❌ | - | Cannot serialize functions |
| `Date` | ⚠️ | - | Use `timestamp: number` instead |

### Size Limitations

#### Per Variable Limits

```typescript
// Object Type Variables
// Maximum: 10 KB (10,240 bytes)

// Example: What fits in 10 KB?
{
  version: 1,
  items: [
    // ~50-100 items depending on structure
    { id: "item_001", acquired: 1234567890, equipped: false },
    // ... more items
  ],
  stats: {
    level: 50,
    xp: 123456,
    victories: 89,
    // ~100-200 simple properties
  }
}

// If you exceed 10 KB:
// ❌ Error: Variable too large
// ✅ Solution: Split into multiple variables
```

#### Per World Limits

```typescript
// Maximum Variable Groups per World: 5
// Maximum Variables per Group: 150
// Total Maximum Variables per World: 750 (5 groups × 150 vars)

// Example World Structure:
// ✅ GOOD:
{
  "progression": {
    "xp": Number,          // 1/150
    "level": Number,       // 2/150
    "achievements": Object // 3/150
  },
  "economy": {
    "candy": Number,       // 1/150
    "coins": Number        // 2/150
  }
  // 3 more groups available
}

// ❌ BAD:
// Trying to create a 6th variable group → ERROR
```

---

## Variable Groups

### What Are Variable Groups?

**Variable Groups** are containers that organize related persistent variables. Think of them as "namespaces" or "folders" for your PPVs.

### Why Variable Groups?

1. **Organization**: Group related data logically
2. **Reusability**: Share groups across multiple worlds
3. **Ownership**: Control who can modify groups
4. **Namespace**: Prevent variable name conflicts

### Naming Convention

PPV keys use the format: `"<groupName>:<variableName>"`

```typescript
// Format: "variableGroup:variableName"
const xpKey = "progression:xp";        // progression group, xp variable
const candyKey = "economy:candy";      // economy group, candy variable
const invKey = "player:inventory";     // player group, inventory variable

// In code:
this.world.persistentStorage.getPlayerVariable(player, "progression:xp");
```

### Cross-World Sharing

Variable groups can be **shared across multiple worlds** owned by the same account:

```
World A (Murder Mystery)
    ↓ Uses "progression:xp"
    ↓ Player earns 1000 XP
    
World B (Racing Game) 
    ↓ Uses SAME "progression:xp"
    ↓ Player now has 1000 XP here too!
    
World C (Trivia Game)
    ↓ Uses SAME "progression:xp"
    ↓ Player accumulates more XP across all worlds
```

**Best Practice**: Create variable groups from a **single shared/service account** for team collaboration.

---

## Setup & Configuration

### Step 1: Create a Variable Group (Desktop Editor)

1. Open **Desktop Editor**
2. Go to **Systems → Variable Groups**
3. Click **"+" icon** to create new group
4. Enter details:
   - **Name**: `progression` (lowercase, no spaces recommended)
   - **Description**: "Player XP and level tracking"
   - **Add to this World**: ✅ Check this box
5. Click **Create**

### Step 2: Create Variables

1. Select your variable group
2. Click **"+" icon** next to group name
3. Configure variable:
   - **Name**: `xp` (lowercase, no spaces recommended)
   - **Type**: Select **Number** or **Object**
4. Click **Create**

### Step 3: Note Your PPV Key

```typescript
// Your PPV key format:
const PPV_KEY = "progression:xp";
//               ^^^^^^^^^^^  ^^
//               group name   variable name
```

### Creating Variables In Headset

The process is similar but done through the in-VR editor interface:
- Menu → Systems → Variable Groups
- Follow same naming conventions
- Same limitations apply

---

## TypeScript API Reference

### Import Module

```typescript
// Import Horizon Core module
import * as hz from 'horizon/core';

// Access persistent storage
this.world.persistentStorage
```

### API Object Location

```typescript
class MyComponent extends hz.Component<typeof MyComponent> {
  start() {
    // persistentStorage is on the world object
    const storage = this.world.persistentStorage;
    //              ^^^^^^^^^^
    //              Available in all components
  }
}
```

### API Availability

✅ **Available in:**
- Server-side scripts (execution mode: Default/Server)
- Network-synced environments

❌ **NOT available in:**
- Local mode scripts
- Client-only execution contexts

---

## Reading Data (getPlayerVariable)

### Method Signature

```typescript
getPlayerVariable<T>(
  player: Player,
  key: string
): T | 0 | null
```

### Return Values

| Variable Type | Default Value | When Set | Notes |
|---------------|---------------|----------|-------|
| Number | `0` | `number` | Always returns number |
| Object | `null` | `object` | Returns parsed JSON |

### Number Type Example

```typescript
// Reading a Number-type PPV
const PPV_KEY = "progression:xp";

const playerXP = this.world.persistentStorage.getPlayerVariable<number>(
  player,
  PPV_KEY
);

// Handle default value (0 = never set before)
const finalXP = playerXP || 0;

console.log(`Player XP: ${finalXP}`);
// Output: "Player XP: 0" (first time) or "Player XP: 5000" (if set)
```

### Object Type Example

```typescript
// Reading an Object-type PPV
const PPV_KEY = "player:inventory";

// Define your type
interface PlayerInventory {
  version: number;
  items: string[];
  lastUpdated: number;
}

const rawData = this.world.persistentStorage.getPlayerVariable<PlayerInventory>(
  player,
  PPV_KEY
);

// Handle default value (null = never set before)
let inventory: PlayerInventory;

if (rawData === null) {
  // First time player - create default
  inventory = {
    version: 1,
    items: [],
    lastUpdated: Date.now()
  };
  console.log("New player - created default inventory");
} else {
  // Existing player - use saved data
  inventory = rawData;
  console.log(`Loaded inventory with ${inventory.items.length} items`);
}
```

### Type Checking Pattern

```typescript
// Recommended: Always check type before using
const rawValue = this.world.persistentStorage.getPlayerVariable(
  player,
  "progression:xp"
);

// Option 1: typeof check
if (typeof rawValue === "number") {
  const xp: number = rawValue;
  // Safe to use as number
}

// Option 2: Nullish check for objects
if (rawValue !== null && rawValue !== 0) {
  const inventory = rawValue as PlayerInventory;
  // Safe to use as object
}

// Option 3: Default value pattern
const xp = (rawValue as number) || 0;
const inventory = (rawValue as PlayerInventory | null) ?? createDefaultInventory();
```

---

## Writing Data (setPlayerVariable)

### Method Signature

```typescript
setPlayerVariable(
  player: Player,
  key: string,
  value: number | object
): void
```

### Write Behavior

⚠️ **IMPORTANT**: `setPlayerVariable` **completely overwrites** the existing value.

```typescript
// Current value: { items: ["sword"], gold: 100 }

// ❌ WRONG - This DELETES gold property!
this.world.persistentStorage.setPlayerVariable(player, "player:data", {
  items: ["sword", "shield"]
  // gold is GONE now!
});

// ✅ CORRECT - Read, modify, write
const data = this.world.persistentStorage.getPlayerVariable(player, "player:data");
data.items.push("shield"); // Modify
this.world.persistentStorage.setPlayerVariable(player, "player:data", data); // Save
// gold: 100 is preserved
```

### Number Type Example

```typescript
// Writing a Number-type PPV
const PPV_KEY = "progression:xp";
const newXP = 5000;

this.world.persistentStorage.setPlayerVariable(
  player,
  PPV_KEY,
  newXP
);

console.log(`Saved ${newXP} XP for ${player.name.get()}`);
```

### Object Type Example

```typescript
// Writing an Object-type PPV
const PPV_KEY = "player:inventory";

const inventory: PlayerInventory = {
  version: 1,
  items: ["sword", "shield", "potion"],
  lastUpdated: Date.now()
};

this.world.persistentStorage.setPlayerVariable(
  player,
  PPV_KEY,
  inventory
);

console.log(`Saved inventory with ${inventory.items.length} items`);
```

### Update Frequency & Timing

```typescript
// ⏱️ Database Update Schedule:
// • Client → Server: Synchronous (instant)
// • Server → Database: Batched every 5 seconds per player

// Example Timeline:
// T+0.0s: setPlayerVariable() called → Queued
// T+0.5s: setPlayerVariable() called → Queued  
// T+2.0s: setPlayerVariable() called → Queued
// T+5.0s: All 3 updates flushed to database → Saved
// T+5.1s: setPlayerVariable() called → New batch starts
// T+10.0s: New batch flushed to database
```

**Implications:**
- ✅ Multiple rapid updates are okay (they're batched)
- ⚠️ Don't rely on immediate persistence
- ✅ Best to save at "save points" (round end, player exit)

---

## Type Safety & Validation

### Define TypeScript Interfaces

**CRITICAL**: Always define types for Object PPVs to prevent schema drift.

```typescript
// ✅ GOOD - Type-safe PPV structure
export interface PlayerData {
  version: number;              // For future migrations
  name: string;
  level: number;
  stats: {
    victories: number;
    defeats: number;
    gamesPlayed: number;
  };
  inventory: {
    items: string[];
    capacity: number;
  };
  settings?: {                  // Optional property (use ?)
    soundEnabled?: boolean;
    musicVolume?: number;
  };
}

// Usage:
const data = this.world.persistentStorage.getPlayerVariable<PlayerData>(
  player,
  "player:data"
);

if (data !== null) {
  // TypeScript knows the structure
  console.log(data.stats.victories);  // Type-safe!
  data.inventory.items.push("sword"); // Type-safe!
}
```

### Versioning Strategy

```typescript
// Version 1.0 Schema
interface PlayerDataV1 {
  version: 1;
  items: string[];
}

// Version 2.0 Schema (added new field)
interface PlayerDataV2 {
  version: 2;
  items: string[];
  currency: number;  // NEW FIELD
}

// Migration function
function migratePlayerData(rawData: any): PlayerDataV2 {
  if (rawData === null) {
    // New player
    return { version: 2, items: [], currency: 0 };
  }
  
  if (rawData.version === 1) {
    // Migrate v1 → v2
    return {
      version: 2,
      items: rawData.items,
      currency: 0  // Default for new field
    };
  }
  
  // Already v2
  return rawData as PlayerDataV2;
}

// Usage:
const rawData = this.world.persistentStorage.getPlayerVariable(player, "player:data");
const data = migratePlayerData(rawData);
// Now guaranteed to be v2 schema
```

### Validation Helpers

```typescript
// Type guard functions
function isValidPlayerData(data: any): data is PlayerData {
  return (
    data !== null &&
    typeof data === "object" &&
    typeof data.version === "number" &&
    typeof data.name === "string" &&
    Array.isArray(data.inventory?.items)
  );
}

// Usage:
const rawData = this.world.persistentStorage.getPlayerVariable(player, "player:data");

if (isValidPlayerData(rawData)) {
  // TypeScript knows it's valid PlayerData
  processPlayerData(rawData);
} else {
  console.error("Invalid PPV data - creating default");
  const defaultData = createDefaultPlayerData();
  this.world.persistentStorage.setPlayerVariable(player, "player:data", defaultData);
}
```

---

## Best Practices

### 1. Centralize PPV Keys

❌ **Bad**: Hardcoded strings everywhere
```typescript
this.world.persistentStorage.getPlayerVariable(player, "progression:xp");
this.world.persistentStorage.getPlayerVariable(player, "proggression:xp"); // TYPO!
```

✅ **Good**: Constants module
```typescript
// File: ppv_keys.ts
export const PPV_KEYS = {
  PROGRESSION_XP: "progression:xp",
  ECONOMY_CANDY: "economy:candy",
  PLAYER_INVENTORY: "player:inventory",
  PLAYER_SETTINGS: "player:settings"
} as const;

// Usage:
import { PPV_KEYS } from './ppv_keys';
this.world.persistentStorage.getPlayerVariable(player, PPV_KEYS.PROGRESSION_XP);
```

### 2. Use TypeScript Types

❌ **Bad**: Untyped data
```typescript
const data: any = this.world.persistentStorage.getPlayerVariable(player, key);
data.stats.victories++;  // Runtime error if structure changes!
```

✅ **Good**: Strongly typed
```typescript
interface PlayerStats {
  victories: number;
  defeats: number;
}

const data = this.world.persistentStorage.getPlayerVariable<PlayerStats>(player, key);
if (data !== null) {
  data.victories++;  // Type-safe!
}
```

### 3. Include Version Numbers

```typescript
// ✅ Always include a version field
interface PlayerData {
  version: number;  // CRITICAL for migrations
  // ... rest of data
}

// When saving:
const data: PlayerData = {
  version: 1,  // Increment when schema changes
  // ...
};
```

### 4. Mark Optional Fields

```typescript
// Future-proof with optional properties
interface PlayerSettings {
  version: number;
  soundEnabled: boolean;
  musicVolume?: number;      // May not exist in old saves
  controlScheme?: string;    // Added in later version
  newFeature?: boolean;      // Added in later version
}

// Safe access:
const volume = settings.musicVolume ?? 100;  // Default if undefined
```

### 5. Load → Session → Save Pattern

❌ **Bad**: Write PPV constantly
```typescript
onCandyCollected() {
  const candy = this.world.persistentStorage.getPlayerVariable(player, "economy:candy");
  this.world.persistentStorage.setPlayerVariable(player, "economy:candy", candy + 1);
  // Inefficient - writes to DB every time!
}
```

✅ **Good**: Cache and batch
```typescript
// On player join - load once
private playerCandyCache = new Map<Player, number>();

onPlayerJoin(player: Player) {
  const candy = this.world.persistentStorage.getPlayerVariable(player, "economy:candy") || 0;
  this.playerCandyCache.set(player, candy);
}

onCandyCollected(player: Player) {
  const current = this.playerCandyCache.get(player) || 0;
  this.playerCandyCache.set(player, current + 1);
  // No PPV write yet - just cache!
}

onRoundEnd(player: Player) {
  const candy = this.playerCandyCache.get(player) || 0;
  this.world.persistentStorage.setPlayerVariable(player, "economy:candy", candy);
  // Save once at end of round
}
```

### 6. Validate Player Before PPV Access

```typescript
// ⚠️ Server player (ID 4) CANNOT have PPVs accessed!

function isValidPlayerForPPV(player: Player): boolean {
  return player && player.id !== 4;  // ID 4 = server player
}

// Usage:
if (isValidPlayerForPPV(player)) {
  const xp = this.world.persistentStorage.getPlayerVariable(player, PPV_KEY);
} else {
  console.error("Cannot access PPV for server player!");
}
```

### 7. Handle Read Errors Gracefully

```typescript
function loadPlayerXP(player: Player): number {
  try {
    const xp = this.world.persistentStorage.getPlayerVariable<number>(
      player,
      "progression:xp"
    );
    return xp || 0;
  } catch (error) {
    console.error(`Failed to load XP for ${player.name.get()}:`, error);
    return 0;  // Safe fallback
  }
}
```

---

## Performance Optimization

### 1. Minimize PPV Reads

```typescript
// ❌ BAD - Reads PPV every frame
onUpdate() {
  const xp = this.world.persistentStorage.getPlayerVariable(player, "progression:xp");
  this.updateUI(xp);
}

// ✅ GOOD - Read once, cache locally
private cachedXP: number = 0;

onPlayerJoin(player: Player) {
  this.cachedXP = this.world.persistentStorage.getPlayerVariable(player, "progression:xp") || 0;
}

onUpdate() {
  this.updateUI(this.cachedXP);  // Use cached value
}

onXPGained(amount: number) {
  this.cachedXP += amount;  // Update cache
  // Save to PPV at end of round, not immediately
}
```

### 2. Batch Writes at Save Points

```typescript
// Define save points in your game
enum SavePoint {
  ROUND_END,
  PLAYER_EXIT,
  GAME_COMPLETE,
  CHECKPOINT
}

function saveAllPlayerData(player: Player, savePoint: SavePoint) {
  console.log(`💾 Saving at ${savePoint}...`);
  
  // Save all PPVs at once
  this.world.persistentStorage.setPlayerVariable(player, "progression:xp", cachedXP);
  this.world.persistentStorage.setPlayerVariable(player, "economy:candy", cachedCandy);
  this.world.persistentStorage.setPlayerVariable(player, "player:inventory", cachedInventory);
  
  console.log("✅ Save complete");
}

// Use at appropriate times:
onRoundEnd() {
  saveAllPlayerData(player, SavePoint.ROUND_END);
}

onPlayerExit(player: Player) {
  saveAllPlayerData(player, SavePoint.PLAYER_EXIT);
}
```

### 3. Use Events for PPV Updates

```typescript
// Instead of multiple scripts accessing PPVs directly:
// ❌ Script A writes to PPV
// ❌ Script B writes to PPV  
// ❌ Script C writes to PPV

// ✅ Use event system:
// Script A → sends event "xpGained"
// Script B → sends event "xpGained"
// Script C → sends event "xpGained"
//           ↓
// XP Manager (single source of truth)
//   → Accumulates XP in cache
//   → Writes to PPV at save points
```

### 4. Defer PPV Access After World Init

```typescript
// ⚠️ PROBLEM: PPV access immediately on world load can cause issues

// ❌ BAD
start() {
  const players = this.world.getPlayers();
  players.forEach(player => {
    this.loadPlayerData(player);  // Too early!
  });
}

// ✅ GOOD - Add delay
start() {
  this.async.setTimeout(() => {
    const players = this.world.getPlayers();
    players.forEach(player => {
      this.loadPlayerData(player);
    });
  }, 1000);  // Wait for world to fully initialize
}
```

---

## Common Patterns

### Pattern 1: First-Time Player Detection

```typescript
function isFirstTimePlayer(player: Player): boolean {
  const data = this.world.persistentStorage.getPlayerVariable(player, "player:data");
  return data === null || data === 0;
}

// Usage:
if (isFirstTimePlayer(player)) {
  console.log("Welcome new player!");
  const defaultData = createDefaultPlayerData();
  this.world.persistentStorage.setPlayerVariable(player, "player:data", defaultData);
  showTutorial(player);
} else {
  console.log("Welcome back!");
}
```

### Pattern 2: Increment Counter

```typescript
function incrementRoundsPlayed(player: Player): number {
  const current = this.world.persistentStorage.getPlayerVariable<number>(
    player,
    "stats:roundsPlayed"
  ) || 0;
  
  const newValue = current + 1;
  
  this.world.persistentStorage.setPlayerVariable(
    player,
    "stats:roundsPlayed",
    newValue
  );
  
  return newValue;
}
```

### Pattern 3: Add to Array

```typescript
function addItemToInventory(player: Player, itemId: string): void {
  const inventory = this.world.persistentStorage.getPlayerVariable<{ items: string[] }>(
    player,
    "player:inventory"
  ) || { items: [] };
  
  // Check if already owned
  if (!inventory.items.includes(itemId)) {
    inventory.items.push(itemId);
    
    this.world.persistentStorage.setPlayerVariable(
      player,
      "player:inventory",
      inventory
    );
    
    console.log(`Added ${itemId} to inventory`);
  }
}
```

### Pattern 4: Update Nested Property

```typescript
function updatePlayerSetting(player: Player, setting: string, value: any): void {
  const settings = this.world.persistentStorage.getPlayerVariable<PlayerSettings>(
    player,
    "player:settings"
  ) || createDefaultSettings();
  
  // Update nested property
  settings[setting] = value;
  
  // Save entire object back
  this.world.persistentStorage.setPlayerVariable(
    player,
    "player:settings",
    settings
  );
}

// Usage:
updatePlayerSetting(player, "soundEnabled", false);
updatePlayerSetting(player, "musicVolume", 75);
```

### Pattern 5: Conditional Save

```typescript
private sessionDataDirty = new Map<Player, boolean>();

function markDirty(player: Player): void {
  this.sessionDataDirty.set(player, true);
}

function saveIfDirty(player: Player): void {
  if (this.sessionDataDirty.get(player)) {
    const data = this.cachedPlayerData.get(player);
    this.world.persistentStorage.setPlayerVariable(player, "player:data", data);
    this.sessionDataDirty.set(player, false);
    console.log("✅ Saved dirty data");
  } else {
    console.log("⏭️ No changes - skipping save");
  }
}
```

---

## Edge Cases & Gotchas

### 1. Server Player (ID 4)

⚠️ **CRITICAL**: You CANNOT access PPVs for the server player!

```typescript
const serverPlayer = this.world.getServerPlayer();

// ❌ THIS WILL ERROR:
this.world.persistentStorage.getPlayerVariable(serverPlayer, "any:key");
// Error: Cannot access PPVs for server player

// ✅ ALWAYS CHECK:
if (player.id !== 4) {
  // Safe to access PPVs
}
```

### 2. Default Values Differ by Type

```typescript
// Number type → defaults to 0
const xp = this.world.persistentStorage.getPlayerVariable<number>(player, "progression:xp");
if (xp === 0) {
  // Could be: never set OR actually 0
  // Solution: Use -1 as "never set" indicator, or always check a version field
}

// Object type → defaults to null
const data = this.world.persistentStorage.getPlayerVariable<object>(player, "player:data");
if (data === null) {
  // Definitely never set
}
```

### 3. JSON Serialization Edge Cases

```typescript
// ⚠️ These don't serialize correctly:

const badData = {
  date: new Date(),           // ❌ Becomes string, not Date object
  player: playerObject,       // ❌ Cannot serialize Player objects
  entity: someEntity,         // ❌ Cannot serialize Entity objects
  func: () => {},            // ❌ Functions are stripped
  undefined: undefined,       // ❌ Becomes null
  [Symbol()]: "value"        // ❌ Symbols are ignored
};

// ✅ Use these instead:
const goodData = {
  timestamp: Date.now(),      // ✅ Use number timestamp
  playerId: player.id,        // ✅ Store player ID, not object
  entityName: entity.name.get(), // ✅ Store entity identifier
  // Don't store functions
  optionalValue: null,        // ✅ Use null for missing values
};
```

### 4. Write Doesn't Guarantee Immediate Persistence

```typescript
// ❌ WRONG ASSUMPTION:
this.world.persistentStorage.setPlayerVariable(player, "key", value);
// Player exits 1 second later
// Data might not be saved yet! (5 second batch window)

// ✅ BETTER:
// Save on player exit event
onPlayerExit(player: Player) {
  this.world.persistentStorage.setPlayerVariable(player, "key", value);
  // Wait for async flush (automatic)
}
```

### 5. Local Mode Limitation

```typescript
// ⚠️ In Local Mode (testing), PPVs don't work!

// Check if in local mode:
if (this.world.getServerPlayer() === null) {
  console.warn("Running in Local Mode - PPVs disabled");
  return;
}

// Alternative: Use local fallback for testing
const data = this.world.persistentStorage?.getPlayerVariable(player, key) 
  ?? this.localTestData;  // Fallback for local testing
```

### 6. Size Limit Errors

```typescript
// When you exceed 10 KB:
try {
  const bigData = { /* huge object */ };
  this.world.persistentStorage.setPlayerVariable(player, "player:data", bigData);
} catch (error) {
  console.error("PPV too large!", error);
  
  // ✅ Solution: Split data
  this.world.persistentStorage.setPlayerVariable(player, "player:dataA", bigData.part1);
  this.world.persistentStorage.setPlayerVariable(player, "player:dataB", bigData.part2);
}
```

### 7. Concurrent Writes

```typescript
// ⚠️ Multiple scripts writing to same PPV can cause race conditions

// ❌ BAD: Script A and Script B both modify same PPV
// Script A: Read 100 → Add 50 → Write 150
// Script B: Read 100 → Add 30 → Write 130  (overwrites A's change!)
// Result: Only B's change persists (A's is lost)

// ✅ GOOD: Single source of truth pattern
// Only ONE manager script writes to each PPV
// Other scripts send events to the manager
```

---

## Troubleshooting

### "PPV returns 0 but I saved data"

**Possible Causes:**
1. ❌ Wrong PPV key (typo in variable group or name)
2. ❌ Player is server player (ID 4)
3. ❌ Data not fully persisted before player left
4. ❌ Different variable group (imported different group)

**Solution:**
```typescript
console.log("PPV Key:", PPV_KEY);
console.log("Player ID:", player.id);
console.log("Is Server Player?", player.id === 4);

// Read immediately after write to verify:
this.world.persistentStorage.setPlayerVariable(player, key, value);
const verify = this.world.persistentStorage.getPlayerVariable(player, key);
console.log("Verified value:", verify);
```

### "Object PPV returns null after saving"

**Possible Causes:**
1. ❌ PPV key typo (different key when reading vs writing)
2. ❌ Testing in Local Mode
3. ❌ JSON serialization failed (contained non-serializable data)

**Solution:**
```typescript
const testData = { version: 1, test: "value" };

console.log("Writing to key:", PPV_KEY);
this.world.persistentStorage.setPlayerVariable(player, PPV_KEY, testData);

console.log("Reading from key:", PPV_KEY);
const result = this.world.persistentStorage.getPlayerVariable(player, PPV_KEY);
console.log("Result:", result);

if (result === null) {
  console.error("Read returned null - check key spelling!");
}
```

### "Type error: Property doesn't exist"

**Possible Causes:**
1. ❌ Schema changed but old saves still exist
2. ❌ Optional field not marked with `?`
3. ❌ Incorrect type casting

**Solution:**
```typescript
// Add migration logic
interface PlayerDataV1 { level: number; }
interface PlayerDataV2 { level: number; xp: number; } // New field

const rawData = this.world.persistentStorage.getPlayerVariable(player, key);

// Check version and migrate
if (rawData && typeof rawData.xp === 'undefined') {
  // Old version - add new field
  rawData.xp = 0;
  this.world.persistentStorage.setPlayerVariable(player, key, rawData);
}
```

### "Changes lost when player rejoins"

**Possible Causes:**
1. ❌ Forgot to call `setPlayerVariable`
2. ❌ Player left before 5-second batch flush
3. ❌ Saving to wrong key

**Solution:**
```typescript
// ALWAYS save on player exit
this.connectCodeBlockEvent(
  this.entity,
  hz.CodeBlockEvents.OnPlayerExitWorld,
  (player: Player) => {
    console.log("💾 Saving data on exit...");
    this.savePlayerData(player);
    console.log("✅ Data saved");
  }
);
```

---

## Migration & Versioning

### Schema Evolution Strategy

```typescript
// Version 1: Original
interface PlayerDataV1 {
  version: 1;
  items: string[];
}

// Version 2: Added currency
interface PlayerDataV2 {
  version: 2;
  items: string[];
  currency: number;
}

// Version 3: Split items into categories
interface PlayerDataV3 {
  version: 3;
  weapons: string[];
  consumables: string[];
  currency: number;
}

// Migration function
function migratePlayerData(raw: any): PlayerDataV3 {
  if (raw === null) {
    // New player
    return {
      version: 3,
      weapons: [],
      consumables: [],
      currency: 0
    };
  }
  
  // Check version and upgrade step by step
  let data = raw;
  
  // V1 → V2
  if (data.version === 1) {
    data = {
      version: 2,
      items: data.items,
      currency: 0  // New field
    };
  }
  
  // V2 → V3
  if (data.version === 2) {
    // Categorize items (example: if name starts with "weapon_")
    const weapons = data.items.filter(item => item.startsWith("weapon_"));
    const consumables = data.items.filter(item => item.startsWith("potion_"));
    
    data = {
      version: 3,
      weapons: weapons,
      consumables: consumables,
      currency: data.currency
    };
  }
  
  return data as PlayerDataV3;
}
```

### Breaking Changes Strategy

```typescript
// When you need to completely restructure:

// Old PPV: "player:inventory" (string array)
// New PPV: "player:inventoryV2" (complex object)

function migrateInventory(player: Player): void {
  const oldKey = "player:inventory";
  const newKey = "player:inventoryV2";
  
  // Check if already migrated
  const newData = this.world.persistentStorage.getPlayerVariable(player, newKey);
  if (newData !== null) {
    return; // Already migrated
  }
  
  // Load old format
  const oldData = this.world.persistentStorage.getPlayerVariable<string[]>(player, oldKey);
  
  if (oldData === null) {
    // Never had data - create default new format
    const defaultNew = { version: 1, items: [], capacity: 20 };
    this.world.persistentStorage.setPlayerVariable(player, newKey, defaultNew);
    return;
  }
  
  // Migrate old → new
  const newData = {
    version: 1,
    items: oldData.map(itemId => ({ id: itemId, acquired: Date.now() })),
    capacity: 20
  };
  
  this.world.persistentStorage.setPlayerVariable(player, newKey, newData);
  console.log(`✅ Migrated ${oldData.length} items from old format`);
  
  // Optional: Clean up old PPV
  // Note: No delete API, but you can overwrite with empty value
  // this.world.persistentStorage.setPlayerVariable(player, oldKey, []);
}
```

---

## Cross-World Data Sharing

### Concept

PPVs created in **Variable Groups** are shared across **all worlds** that import the same group.

### Use Case: Universal Player Progression

```
┌─────────────────────────────────────────────────────┐
│          Variable Group: "universal"                 │
│  • "xp" (Number)                                    │
│  • "level" (Number)                                 │
│  • "achievements" (Object)                          │
└─────────────────────────────────────────────────────┘
                      ↓ Shared by ↓
        
  World A                World B                World C
  [Action Game]          [Puzzle Game]          [Social Hub]
  
  Player earns           Player completes       Player sees
  500 XP                 puzzle → 300 XP        total: 800 XP
  Level: 5               Level: 5               Level: 5
```

### Setup for Cross-World

1. **Create shared variable group** (from one account)
2. **Import into all worlds** (Systems → Variable Groups → Import)
3. **Use identical PPV keys** across worlds

```typescript
// Same code in World A, B, and C:
const XP_KEY = "universal:xp";  // Same key in all worlds

// World A adds XP
this.world.persistentStorage.setPlayerVariable(player, XP_KEY, currentXP + 500);

// World B adds XP  
this.world.persistentStorage.setPlayerVariable(player, XP_KEY, currentXP + 300);

// World C reads total
const totalXP = this.world.persistentStorage.getPlayerVariable(player, XP_KEY);
// totalXP = 800 (accumulated from both worlds)
```

### Best Practices for Cross-World PPVs

1. ✅ **Use descriptive group names**: `universal_progression`, `shared_economy`
2. ✅ **Document which worlds use which groups**
3. ✅ **Version all cross-world data structures**
4. ⚠️ **Be careful with schema changes** - affects multiple worlds
5. ✅ **Test changes in all connected worlds**

---

## Complete Code Examples

### Example 1: Simple XP System

```typescript
import * as hz from 'horizon/core';

class XPManager extends hz.Component<typeof XPManager> {
  static propsDefinition = {};
  
  private PPV_KEY = "progression:xp";
  private xpCache = new Map<hz.Player, number>();
  
  start() {
    // Load XP when players join
    this.connectCodeBlockEvent(
      this.entity,
      hz.CodeBlockEvents.OnPlayerEnterWorld,
      (player: hz.Player) => this.onPlayerJoin(player)
    );
    
    // Save XP when players leave
    this.connectCodeBlockEvent(
      this.entity,
      hz.CodeBlockEvents.OnPlayerExitWorld,
      (player: hz.Player) => this.onPlayerExit(player)
    );
  }
  
  private onPlayerJoin(player: hz.Player): void {
    // Load from PPV
    const savedXP = this.world.persistentStorage.getPlayerVariable<number>(
      player,
      this.PPV_KEY
    ) || 0;
    
    // Cache locally
    this.xpCache.set(player, savedXP);
    console.log(`Loaded XP for ${player.name.get()}: ${savedXP}`);
  }
  
  private onPlayerExit(player: hz.Player): void {
    // Save to PPV
    const xp = this.xpCache.get(player) || 0;
    this.world.persistentStorage.setPlayerVariable(player, this.PPV_KEY, xp);
    console.log(`Saved XP for ${player.name.get()}: ${xp}`);
    
    // Cleanup
    this.xpCache.delete(player);
  }
  
  public awardXP(player: hz.Player, amount: number): void {
    const current = this.xpCache.get(player) || 0;
    const newXP = current + amount;
    this.xpCache.set(player, newXP);
    console.log(`${player.name.get()} gained ${amount} XP (total: ${newXP})`);
  }
}

hz.Component.register(XPManager);
```

### Example 2: Complex Inventory System

```typescript
import * as hz from 'horizon/core';

// Type definitions
interface InventoryItem {
  itemId: string;
  acquiredDate: number;
  quantity: number;
}

interface PlayerInventory {
  version: number;
  items: InventoryItem[];
  capacity: number;
  lastUpdated: number;
}

class InventoryManager extends hz.Component<typeof InventoryManager> {
  private PPV_KEY = "player:inventory";
  private inventoryCache = new Map<hz.Player, PlayerInventory>();
  
  start() {
    this.connectCodeBlockEvent(
      this.entity,
      hz.CodeBlockEvents.OnPlayerEnterWorld,
      (player: hz.Player) => this.loadInventory(player)
    );
    
    this.connectCodeBlockEvent(
      this.entity,
      hz.CodeBlockEvents.OnPlayerExitWorld,
      (player: hz.Player) => this.saveInventory(player)
    );
  }
  
  private loadInventory(player: hz.Player): void {
    const rawData = this.world.persistentStorage.getPlayerVariable<PlayerInventory>(
      player,
      this.PPV_KEY
    );
    
    let inventory: PlayerInventory;
    
    if (rawData === null) {
      // New player - create default
      inventory = {
        version: 1,
        items: [],
        capacity: 20,
        lastUpdated: Date.now()
      };
      console.log(`Created new inventory for ${player.name.get()}`);
    } else {
      // Existing player - load saved data
      inventory = rawData;
      console.log(`Loaded inventory for ${player.name.get()}: ${inventory.items.length} items`);
    }
    
    this.inventoryCache.set(player, inventory);
  }
  
  private saveInventory(player: hz.Player): void {
    const inventory = this.inventoryCache.get(player);
    if (!inventory) return;
    
    inventory.lastUpdated = Date.now();
    
    this.world.persistentStorage.setPlayerVariable(
      player,
      this.PPV_KEY,
      inventory
    );
    
    console.log(`Saved inventory for ${player.name.get()}`);
    this.inventoryCache.delete(player);
  }
  
  public addItem(player: hz.Player, itemId: string, quantity: number = 1): boolean {
    const inventory = this.inventoryCache.get(player);
    if (!inventory) return false;
    
    // Check capacity
    if (inventory.items.length >= inventory.capacity) {
      console.log("Inventory full!");
      return false;
    }
    
    // Find existing item
    const existing = inventory.items.find(item => item.itemId === itemId);
    
    if (existing) {
      // Stack with existing
      existing.quantity += quantity;
    } else {
      // Add new item
      inventory.items.push({
        itemId: itemId,
        acquiredDate: Date.now(),
        quantity: quantity
      });
    }
    
    console.log(`Added ${quantity}x ${itemId} to inventory`);
    return true;
  }
  
  public removeItem(player: hz.Player, itemId: string, quantity: number = 1): boolean {
    const inventory = this.inventoryCache.get(player);
    if (!inventory) return false;
    
    const item = inventory.items.find(i => i.itemId === itemId);
    if (!item || item.quantity < quantity) {
      console.log("Not enough items to remove");
      return false;
    }
    
    item.quantity -= quantity;
    
    // Remove if quantity reaches 0
    if (item.quantity <= 0) {
      inventory.items = inventory.items.filter(i => i.itemId !== itemId);
    }
    
    console.log(`Removed ${quantity}x ${itemId} from inventory`);
    return true;
  }
  
  public hasItem(player: hz.Player, itemId: string): boolean {
    const inventory = this.inventoryCache.get(player);
    if (!inventory) return false;
    
    return inventory.items.some(item => item.itemId === itemId);
  }
  
  public getItemCount(player: hz.Player, itemId: string): number {
    const inventory = this.inventoryCache.get(player);
    if (!inventory) return 0;
    
    const item = inventory.items.find(i => i.itemId === itemId);
    return item ? item.quantity : 0;
  }
}

hz.Component.register(InventoryManager);
```

### Example 3: Player Settings with Versioning

```typescript
import * as hz from 'horizon/core';

// Version 1
interface PlayerSettingsV1 {
  version: 1;
  soundEnabled: boolean;
  musicVolume: number;
}

// Version 2 (added camera settings)
interface PlayerSettingsV2 {
  version: 2;
  soundEnabled: boolean;
  musicVolume: number;
  cameraShakeEnabled: boolean;
  cameraSensitivity: number;
}

// Current version
type PlayerSettings = PlayerSettingsV2;

class SettingsManager extends hz.Component<typeof SettingsManager> {
  private PPV_KEY = "player:settings";
  private settingsCache = new Map<hz.Player, PlayerSettings>();
  
  start() {
    this.connectCodeBlockEvent(
      this.entity,
      hz.CodeBlockEvents.OnPlayerEnterWorld,
      (player: hz.Player) => this.loadSettings(player)
    );
  }
  
  private createDefaultSettings(): PlayerSettings {
    return {
      version: 2,
      soundEnabled: true,
      musicVolume: 100,
      cameraShakeEnabled: true,
      cameraSensitivity: 50
    };
  }
  
  private migrateSettings(raw: any): PlayerSettings {
    if (raw === null) {
      return this.createDefaultSettings();
    }
    
    // V1 → V2 migration
    if (raw.version === 1) {
      return {
        version: 2,
        soundEnabled: raw.soundEnabled,
        musicVolume: raw.musicVolume,
        cameraShakeEnabled: true,      // New field - default
        cameraSensitivity: 50           // New field - default
      };
    }
    
    // Already V2
    return raw as PlayerSettings;
  }
  
  private loadSettings(player: hz.Player): void {
    const rawData = this.world.persistentStorage.getPlayerVariable(
      player,
      this.PPV_KEY
    );
    
    const settings = this.migrateSettings(rawData);
    
    // If migrated, save new version
    if (rawData !== null && rawData.version !== settings.version) {
      console.log(`Migrated settings from v${rawData.version} to v${settings.version}`);
      this.world.persistentStorage.setPlayerVariable(player, this.PPV_KEY, settings);
    }
    
    this.settingsCache.set(player, settings);
  }
  
  public updateSetting<K extends keyof PlayerSettings>(
    player: hz.Player,
    key: K,
    value: PlayerSettings[K]
  ): void {
    const settings = this.settingsCache.get(player);
    if (!settings) return;
    
    settings[key] = value;
    
    // Save immediately (settings are small)
    this.world.persistentStorage.setPlayerVariable(player, this.PPV_KEY, settings);
    console.log(`Updated ${key} to ${value}`);
  }
  
  public getSetting<K extends keyof PlayerSettings>(
    player: hz.Player,
    key: K
  ): PlayerSettings[K] | undefined {
    const settings = this.settingsCache.get(player);
    return settings?.[key];
  }
}

hz.Component.register(SettingsManager);
```

---

## Summary

### Quick Reference Card

```typescript
// ═══════════════════════════════════════════════════════════
//  PLAYER PERSISTENT VARIABLES (PPV) - QUICK REFERENCE
// ═══════════════════════════════════════════════════════════

// 📦 SETUP
// 1. Systems → Variable Groups → Create "myGroup"
// 2. Add variable "myVar" (Number or Object type)
// 3. PPV Key: "myGroup:myVar"

// 📖 READ (getPlayerVariable)
const value = this.world.persistentStorage.getPlayerVariable<T>(player, key);
// Returns: number (default 0), object (default null)

// ✏️ WRITE (setPlayerVariable)
this.world.persistentStorage.setPlayerVariable(player, key, value);
// Note: Batched every 5 seconds, overwrites completely

// 🏷️ TYPES
// Number: Single numeric value
// Object: JSON object (10 KB max)

// 📊 LIMITS
// • 5 variable groups per world
// • 150 variables per group
// • 10 KB per object variable
// • 5 second batch write frequency

// ✅ BEST PRACTICES
// 1. Centralize PPV keys as constants
// 2. Use TypeScript interfaces for object types
// 3. Include version numbers in objects
// 4. Cache locally, batch writes
// 5. Save on round end / player exit
// 6. Validate player.id !== 4 (server player)
// 7. Handle null/0 defaults gracefully
// 8. Mark optional fields with ?

// 🎯 PATTERNS
// • Load → Cache → Session → Save
// • First-time player detection (null check)
// • Version-based migration
// • Conditional saves (dirty flag)
// • Events for synchronization

// ⚠️ GOTCHAS
// • Server player (ID 4) = ERROR
// • Overwrites completely (not merge)
// • 5 second async persistence
// • Local mode doesn't work
// • JSON serialization limits
```

---

**End of Master PPV Documentation**

*Last Updated: November 2025*  
*Version: 1.0*  
*Horizon Worlds TypeScript API v2.0.0*
