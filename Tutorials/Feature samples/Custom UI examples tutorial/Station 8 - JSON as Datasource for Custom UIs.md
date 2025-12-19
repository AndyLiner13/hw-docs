Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/custom-ui-examples-tutorial/station-8-json-as-datasource-for-custom-uis

# Station 8 - JSON as Datasource for Custom UIs

> **Note**: The Text as Assets feature may not be available to all users. In the desktop editor menu bar, open the Asset Library tab. When you click **Add New**, `Text` should be one of the options. If not, this tutorial does not work for your account.

This station demonstrates how you can store content data for your custom UIs in JSON files, which are uploaded and referenced in TypeScript to populate three separate but related custom UIs:

<details>
<summary>Image of Station 8</summary>

<p></p>

[Image of Station 8](../../../image_data/69e2015a6270f64264be721a99603a6a3faf8b55789836e4ea587bb25f273de7.md)

### Overview
The image depicts a 3D environment with a grid floor and a yellow wall in the background. There are three identical red cubes placed on the floor, each with a white arrow pointing to the right and the letters "TS" on them. The title at the top reads "Station 08 - JSON as Datasource."

### Key Elements
- **Wall**: A large, yellow wall with a grid pattern extending across the entire background.
- **Floor**: A light gray floor with a grid pattern, matching the wall above.
- **Cubes**: Three red cubes are positioned horizontally along the floor. Each cube has a white arrow pointing to the right and the letters "TS" on one side.
- **Title**: Located at the top center of the image, the text reads "Station 08 - JSON as Datasource."

### Visual Flow / Relationships
The most prominent visual elements are the red cubes. They are arranged in a straight line horizontally across the floor. The arrows on the cubes point to the right, suggesting movement or direction. The wall serves as a backdrop, and the grid on both the wall and floor creates a sense of depth and perspective.

</details>

<p></p>



In the above example, each custom UI is a read-only informational kiosk. Since the structure of the custom UI is consistent, the content itself can be managed externally, which allows non-engineers to manage the content, while engineers maintain the custom UI definitions for all three in a single TypeScript file.

<details>
<summary>Image of a Custom UI populated by JSON data</summary>

<p></p>

[Image of a Custom UI populated by JSON data](../../../image_data/2c22a61445a4c3496e0cfd32cf317470cf1a8355d81136165fed1aca6f7c3557.md)

### Overview
This image depicts a notification or informational message box with a blue border, set against a yellow grid background. The message box contains text providing assistance for users experiencing difficulties.

### Key Elements
- **Message Box**: A white rectangular box with a blue border, located centrally in the image.
  - **Text**: Contains the following content:
    > Having trouble?
    > We can help!
    > If you are having trouble figuring out the next step in your adventure,
    > you can visit these kiosks or approach an avatar with a light blue shirt.
    > If you are still having difficulties, how about some frosty delicious documentation?
  - **Visual styling**: The text is black, and the box has a subtle shadow effect, giving it a slight elevation from the background.

- **Background**: A yellow grid pattern with gray lines forming squares.

### Visual Flow / Relationships
The most prominent visual element is the message box, which draws attention due to its central placement and contrasting color scheme. There are no arrows or lines connecting elements, but the layout suggests a linear reading order from top to bottom within the message box itself.

</details>

<p></p>



#### How it works

* **`initializeUI()`**: When the simulation begins in any world, the initializeUI() method execute first, even before `start()`.
  + In this case, the `initializeUI()` method for each customUI gizmo (3) fires. This sets up the structures of the customUI. At this point, these structures have no data.
  + You cannot use the `initializeUI()` method to grab data from the JSON, as it’s limited in scope.
  + At this point, the 3 custom UIs have been defined, without data.
* **`start()`**: Then, the `start()` methods in all active scripts in the world are executed. For station 08, there are two `start()` methods:
  + `Station08-LoadCustomUIData.ts`:
    - This script is attached to an arbitrary entity in the world. In this case, we use a custom asset type, called a ScriptCube, which was designed for this purpose.
    - The `start()` method in this script loads the data from a Text asset that you specify from your Asset Library. This asset is fetched as data and then interpreted as a JSON object.
    - Each JSON row in the data is stored as a separate row in an array. This array is defined to be exported from the script (export keyword), so it can be referenced in the other script.
    - Now the JSON data is available for use.
  + `Station08-DisplayCustomUI.ts`:
    - This script is attached to the Custom UI gizmo.
    - The `start()` method in this script creates the event listener for the onPlayerEnterTrigger CodeBlock event.
      * When the player enters the trigger zone referenced in the script, the callback for the onPlayerEnterTrigger CodeBlock event is to execute the `refresh()` method.
      * The `refresh()` method populates the custom UI with the correct data.
* So, when the player enters the world, the JSON data is loaded, and the trigger zone event listener is created. When the player enters the trigger that surrounds the custom UI, the custom UI is populated with the appropriate record of JSON data.

#### Caveats

* In headset or desktop editor, you may be able to notice that the custom UI is getting populated with data as you approach it. If this is annoying, you can solve by creating a single trigger for the whole world, which populates all custom UIs. The populating of the data needs to be triggered by the completion of the JSON data load.
* Sometimes, a custom UI may not get populated appropriately. This is a known issue.

## Assets

### LoadCUIData assets

These assets are required for specifying and loading the JSON data into an internal array.

* ScriptCube, with attached:
  + `Station08-LoadCustomUIData.ts` script

### For each custom UI kiosk

Each custom UI kiosk has the following:

* Trigger Zone gizmo
* CustomUI gizmo with attached:
  + `DisplayCUI.ts` script

**Properties panel**:

Between these items, the only difference is in the properties panel of each CustomUI:

* `jsonRowId`: Set this value to the row identifier in your JSON that corresponds to the data that you wish to use for this custom UI. These should be unique IDs in your source.
* `triggerZone`: Select the named trigger zone that surrounds the custom UI.

If you make copies of these objects, make sure to update names and Properties settings on each one.

### JSON data

The following is an example of the JSON data, which was used to build this example:

```
[
  {
    "CUIId": "1",
    "enabled": true,
    "titleText": "Welcome!",
    "subTitleText": "We're glad you're here.",
    "bodyText": "Welcome to our game!\n\nTo get started, move your controllers in the direction where you'd like to explore.\n\nTo collect an item, approach it and click the trigger.\n\nHave fun!",
    "logoAssetId": "3640063222903226",
  },
  {
    "CUIId": "2",
    "enabled": true,
    "titleText": "Having trouble?",
    "subTitleText": "We can help!",
    "bodyText": "If you are having trouble figuring out the next step in your adventure, you can visit these kiosks or approach an avatar with a light blue shirt.\n\nIf you are still having difficulties, how about some frosty delicious documentation?",
    "logoAssetId": "3640063222903226",
  },
  {
    "CUIId": "3",
    "enabled": true,
    "titleText": "Winning the Game",
    "subTitleText": "",
    "bodyText": "To win the game, you need to hunt and kill the Wumpus. I feel a draft....",
    "logoAssetId": "3640063222903226",
  },
];
```

You can see that the data is formatted as a JSON array. When it is imported, it is paired with an internal identifier for the row in the array.

* You may notice that the value for logoAssetId is consistent across all rows in the example. If you have one logo to use consistently, you can do it this way. As an alternative, the scripts have some commented out Properties that could be used to specify the single `hz.Asset` to use, so you don’t have to specify in this manner. Some code fixups would be required.
* The `\n\n` entries insert new lines when displayed in the custom UI.

## Scripts

### Station08-LoadCustomUIData

In this script, the JSON object is referenced as hz.Asset property on the Property panel. For this reason, the script must be attached to an object (ScriptCube, in this case) that has properties.

#### Declarations

The script then defines the type definitions to capture the JSON data that is imported:

```
/*
  Following is the schema for the JSON file, which is helpful to include here so that you can build the code to support it.
  JSON record information should match the information in the exported type CUIRowData (see below):
        "CUIId": "3",
        "enabled": true,
        "titleText": "Winning the Game",
        "subTitleText": "Winning the Game",
        "bodyText": "To win the game, you need to hunt and kill the Wumpus. I feel a draft....",
        "logoAssetId": "3640063222903226"
*/
export type CUIRowData = {
  CUIId: string;
  enabled: Boolean;
  titleText: string;
  subTitleText: string;
  bodyText: string;
  logoAssetId: string;
};

/*
  This record is the top-level array in your internal variable. While the row identifier information may be contained in the source JSON,
  you may find it easier to work with a row identifier (recordId below) created by Meta Horizon Worlds.
*/
export type CUIRecordData = {
  recordId: string;
  row: Array<CUIRowData>;
};

export var booFilterData: Boolean = true; // set to TRUE to respect enabled=="TRUE" to prevent writing of a row.
export var AssetReferenceRows: CUIRowData[] = []; // array to hold parsed JSON data
export var AssetReferencesCount: number = 0; // count of records that are written
export var keyCount: number = 0; // count of keys in data
```

The JSON container types are defined as follows:

* `CUIRecordData` - holds an ID and the row data array below.
  + `CUIRowData` - holds a row of JSON data, which in this case, contains the content of one custom UI kiosk

The asset rows are stored in the internal array, which is defined as empty:

```
export var AssetReferenceRows: CUIRowData[] = [];
```

Other variables are for tracking contents of records and rows that are read in.

Note that all of these items are exported (export), since they are needed in the other script.

#### `start()` method

The `start()` method has a different declaration:

```
async start() {
  let ta: any = this.props.textAsset
  await ta.fetchAsData().then(
    (output: hz.AssetContentData) => {
      // insert code.
```

The async keyword allows the execution to be non-blocking, since we don’t want the fetching of the data to hold up other processes; it is ok if it occurs in the background or is delayed a few moments due to networking issues. It is not needed immediately.

The line beginning with await performs multiple functions:

* The await keyword indicates that the data must be fetched before the execution of the `then()` code.
* `ta.fetchAsData()` retrieves the asset specified in the textAsset property as data, instead of a binary asset type.
* After the fetching is complete, `then()` code is executed. If the fetching fails, no additional code is executed.
  + The output object is defined as `hz.AssetContentData`, which is a core Meta Horizon Worlds object type mapping to the results of the `fetchAsData()` method. Whatever the method produces is accessible through hz.AssetContentData.

#### Parsing output object

Now that the file has been fetched as data, the data object (output) must be parsed as JSON.

```
var JsonObj = output.asJSON();
```

This object is then evaluated to see if it is null or undefined. If not, it is broken down into rows and attributes:

```
var keys = Object.keys(JsonObj);
for(const key of keys){
  // this is the top level of the JSON, which is the recordId and row data. Row data is a JSON array that needs to be unpacked.
  var rowRaw = (JsonObj as any)[key];
  // map recordId and row data into a single object.
  const myRow: CUIRecordData = {
    recordId: key,
    row: rowRaw,
  }
  // debug:
  // console.log("RecordId: " + myRow.recordId)
  // console.log("row data: " + myRow.row)
  if(myRow.row == null || myRow.row == undefined){
    console.error("JSON load: null JsonObj row object");
    return;
  }
  else{
    // capture keys of the "myRow.row" JSON object
    var keys2 = Object.keys(myRow.row);
    keyCount = Object.keys(myRow.row).length;
    // debug:
    // console.log("Row keys: " + keys2)
    // console.log("Key count: " + keyCount)
    if ((booFilterData == false) || ((booFilterData == true) && (rowRaw.enabled.valueOf() == true))) {
      AssetReferenceRows.push(rowRaw) // writes row data (without the RecordId key) to the storing array.
      AssetReferencesCount = AssetReferencesCount + 1
    }
  } // end if/else
} // end for
// Data has been ingested. Report totals of records read to console.
console.log("JSON load: records read: " + AssetReferencesCount);
console.log("JSON load: keys per record: " + (keyCount));
```

Rows of data are pushed into the `AssetReferenceRows[]` array.

* Note that before pushing a row of data, there is a check to see if data should be filtered, and if so, if the row has been enabled in the source data.
* After the array has been updated, the number of records and keys (JSON attributes) is written to the console as a checksum.

After the code executes, the JSON data is ready for use through the `AssetReferenceRows[]` array.

### Station08-DisplayCustomUI

#### Imports

By this point, the imports should look pretty familiar. Please note the following one:

```
// Imported components from the LoadCUI script. These are exportable data objects that are populated by the time the player approaches any of the custom UIs (we hope).
import {
  CUIRecordData,
  CUIRowData,
  AssetReferenceRows,
  AssetReferencesCount,
  keyCount,
} from 'Station08-LoadCustomUIData';
```

Here, some of the data objects that were declared in the other script are imported for use in this one.

#### Properties

The following properties are available in the Properties panel, which appears in the customUI gizmo object:

```
export type UIJSONProps = {
  jsonRowID: string;
  triggerZone: hz.Entity;
```

These items need to be configured on each instance of the customUI, per earlier discussion.

#### Class declaration

In this case, we declare a UIComponent class extension:

```
class Station08DisplayCUI extends UIComponent<UIJSONProps> {
```

#### Bindings

These Bindings store data that is usable only in the UI modules:

```
bndCUIId = new Binding<string>('-1');
bndenabled = new Binding<string>('');
bndTitleText = new Binding<string>('');
bndSubTitleText = new Binding<string>('');
// For the image object, the variable below stores the ImageSource as a Binding.
// A Binding is a write-only property that is used to populate objects in the custom UI.
bndLogoSource = new Binding<ImageSource>('');
```

Note that the `bndLogoSource` Binding is of `ImageSource` type. This Binding is applied to the image object representing the logo on the custom UI.

Bindings are write-only. You can use the `set()` method on them but cannot read their values, which could lead to abuse.

#### `initializeUI()`

This custom UI is pretty straightforward and should look familiar. Note that the `initializeUI()` method is executed first. Since we cannot guarantee that data has been populated yet in the source variables, we create empty objects at this point.

In other custom UI examples, the image was loaded via function. For simplicity, it’s loaded directly here using the bndLogoSource Binding as the source for the image:

```
Image({
  source: this.bndLogoSource,
  style: logoImage2Style,
});
```

How it’s populated with an image source is discussed later.

#### `start()` method

This method executes after `initializeUI()`. Here, the code creates the listener for the trigger zone specified in the Property panel as `triggerZone`:

```
start() {
  this.connectCodeBlockEvent(this.props.triggerZone, hz.CodeBlockEvents.OnPlayerEnterTrigger, (enteredBy: hz.Player) => {
    let r: string = this.props.jsonRowID
    this.refresh([enteredBy], r);
  })
}
```

When the event is triggered, the `refresh()` method is executed, passing in the Player object and the row of the JSON (`r`) to populate the custom UI.

#### `refresh()` method

This method executes when the player enters the trigger zone.

Here, the code marches down the rows of the `AssetReferenceRows[]` array to find the input row identifier.

* If found, the Bindings for the custom UI are updated with the row’s values.
* If not found, an error is written to the console, and the custom UI is blank.

```
refresh(thisPlayer: hz.Player[], myJSONRowId: string): void {
  let r: number = 0
  for (r=0; r < AssetReferencesCount; r++){
    let thisRow: CUIRowData = AssetReferenceRows[r];
    if ((thisRow.CUIId.valueOf() == myJSONRowId) && (thisRow.enabled == true)){
      // If thisRow (AssetReferenceRows[r]) is enabled and matches the value for the myJSONRowId parameter, we set() the values for the bindings of the custom UI based on
      // the row's data.
      this.bndTitleText.set(thisRow.titleText.valueOf())
      this.bndSubTitleText.set(thisRow.subTitleText.valueOf())
      this.bndbodyText.set(thisRow.bodyText.valueOf())

    // The following converts the value of the logoAssetId field to a Number, which is used to create a reference to an hz.Asset. This asset is used as the input
      // parameter for the ImageSource object. The ImageSource object is bound to the bndLogoSource Binding, which is part of the custom UI definition.
      /* API v1.0.0:
      let lid:number = +thisRow.logoAssetId
      */
      let lid:bigint = BigInt(+thisRow.logoAssetId)
      let myLogo = new hz.Asset(lid)
      let myLogoSource: ImageSource = ImageSource.fromTextureAsset(myLogo)
      this.bndLogoSource.set(myLogoSource)
      break;
    }
  }
  if (r >= AssetReferencesCount) {
    console.error ("Cannot find JSON rowID: " + myJSONRowId)
  }
}
```

#### For the logoAssetId value

* Value is converted to a Number value, which is used to create a reference to the asset with the same asset ID.
* This asset is used to create a new ImageSource object, which is used only for custom UIs.
* The ImageSource Binding, which is referenced in the custom UI, is set with the created `ImageSource` object.
* If no match is found for `logoAssetId` in the JSON:
  + An error is written to the console.
  + The image location in the custom UI remains blank.

## Key learnings

### Meta Horizon Worlds learnings

* How to specify JSON data
* How to upload JSON assets and store data in internal variables
* How to apply an array of data to a set of similar custom UIs.

### TypeScript learnings

None.