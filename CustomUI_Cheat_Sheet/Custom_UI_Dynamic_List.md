# Custom UI Dynamic List

  
## Overview
...
### Disclaimers


•  Dynamic list size. Since dynamic lists are built upon the existing custom UI system, they have
certain limitations. Notably, the data size of child components within the dynamic
list is restricted to 64KB or less. Exceeding this limit will result in an
error.
•  Nested dynamic lists. Nested dynamic lists aren't supported due to the data size
limitations for dynamic list children components.
•  Managing the data state. The dynamic list doesn't retain any memory of previously configured data. Each
time you update the data binding, it will render a new list with the updated
data, effectively replacing the previous state. To preserve your previous state and
be able to add or remove items, you'll need to manage the data state
independently, outside of the dynamic list component.

  
...
...
# Custom UI Dynamic List

  
## Overview
...
### Dynamic list API
...
#### `data: Binding<T[]>`


• Description: The data prop is a binding that holds an array of items of type `T`. This array will be used to render a list of items in the component.
• Type: `Binding<T[]>`, where `T` is the type of each item in the array.
• Purpose: To provide the component with the data it needs to render a list of
items.

  
...
...
# Custom UI Dynamic List

  
## Overview
...
### Dynamic list API
...
#### `renderItem: (item: T, index?: number) => UINode`


• Description: The `renderItem` prop is a function that takes an item of type `T` and optional index as input and returns a `UINode` (a user interface node).
• Type: A function that maps an item of type `T` to a `UINode`.
• Purpose: To define how each item in the data array should be rendered in the
component. The function will be called for each item in the array, and the returned
`UINode` will be used to display the item in the list.

  
...
...
# Custom UI Dynamic List

  
## Overview
...
### Dynamic list API

  
```
export type DynamicListProps<T> = {
 data: Binding<T[]>;
 renderItem: (item: T, index?: number) => UINode;
 style?: ViewStyle; // optional
};
```
  
#### `data: Binding<T[]>`
...
#### `renderItem: (item: T, index?: number) => UINode`
...
...
# Custom UI Dynamic List

  
## Overview
...
### How to create a dynamic list component

 To create a dynamic list component, you must provide two required props:
1. `data`: The array of items to be rendered in the list.
2. `renderItem`: A function that defines how each item in the data array should be rendered.

 In addition, youk can optionally pass a style prop, which allows you to modify
the layout and appearance of the list. The style prop accepts values similar to [ViewStyle props](https://horizon.meta.com/resources/scripting-api/ui.viewstyle.md/?api_version=2.0.0), providing flexibility in customizing the look and feel of your dynamic list
component. The following code sample shows an example of creating a dynamic list. It shows
passing a single binding with an array of objects to the data prop. The number
of items rendered will dynamically adjust based on the data passed in, allowing
for a flexible and variable-length list.  
```
import { DynamicList} from '@horizon/ui';
...
...
# Custom UI Dynamic List

  
## Overview
...
### How to create a dynamic list component
...
class UIDemo extends UIComponent<typeof UIDemo> {
  static propsDefinition = { };

  countClick = 0;
  initializeUI() {
    type Item = {
      id: number;
      name: string;
    };
    const items: Item[] = [{ id: 1, name: "Item 0" }];
    const dataInput = new Binding<Item[]>(items);

    return
        View({
          children: [
            DynamicList({data: dataInput, renderItem : (item: Item, index?: number)=> {
              const itemBackgroundColor = new Binding<ColorValue>('blue');
              return Text({text: item.name + ' ' + index, style: {color: 'red', fontSize: 24, fontWeight: 'bold', backgroundColor: itemBackgroundColor}});
            }, style: {width: 200, marginRight: 10,}}),
          ],
          style: {flexDirection: "row"},
        });
  }
}
```
...
...
# Custom UI Dynamic List

  
## Overview
...
### How to update a dynamic list during runtime

 The data prop is a binding, which means you can update it dynamically during
runtime to change the rendered list. For instance, you could create an `onClick` function that modifies the data, allowing the list to update and render the new
items in real-time. For example, you could have a pressable component with this `onclick` callback to alter the dynamic list data prop.  
```
 onClick: () => {
     this.countClick += 1;
     const newItem: Item = {
         id: this.countClick,
         name: `Item ${this.countClick}`
      };
      itemsLeft.push(newItem);
      dataInputLeft.set(items);
  }
```
 The dynamic list itself doesn't retain any memory of previously configured data.
Each time you update the data binding, it will render a new list with the
updated data, replacing the previous state. To preserve your previous state and be
able to add or remove items, you'll need to manage the data state independently,
...
...
# Custom UI Dynamic List

  
## Overview
...
### How to update a dynamic list during runtime
...
outside of the dynamic list component.  
...
...
# Custom UI Dynamic List

  
## Overview
...
### How to use multiple dynamic lists

 This code sample shows how to include multiple instances of dynamic lists in the
same script, each with its own data and behavior.  
```
        View({
          children: [
            DynamicList({data: dataInputLeft, renderItem : (item: Item, index?: number)=> {
              const itemBackgroundColor = new Binding<ColorValue>('blue');
              return Pressable(
                {children:[
                  Text({text: item.name + ' ' + index, style: {color: 'red', fontSize: fontBinding, fontWeight: 'bold', backgroundColor: itemBackgroundColor}})
                ],
                onClick: (player: Player)=>{
                  console.log('onclick get triggered', itemBackgroundColor);
                  itemBackgroundColor.set('black']);
                }
                });
            }, style: {width: 300, marginRight: 10,}}),
            DynamicList({data: dataInputRight, renderItem : (item: Item, index?: number)=> {
              const itemBackgroundColor = new Binding<ColorValue>('green');
              return Pressable(
        ...
...
# Custom UI Dynamic List

  
## Overview
...
### How to use multiple dynamic lists
...
                {children:[
                  Text({text: item.name + ' ' + index, style: {color: 'red', fontSize: fontBinding, fontWeight: 'bold', backgroundColor: itemBackgroundColor}})

                ],
                onClick: (player: Player)=>{
                  console.log('onclick get triggered', itemBackgroundColor);
                  itemBackgroundColor.set('yellow', [player]);
                }
                });
            }, style: {width: 300, marginLeft: 20}}),
          ],
          style: {flexDirection: "row"},
        }),
```
...
...
# Custom UI Dynamic List

  
## Overview
...
### How to use dynamic lists in local mode

 Similar to other custom UI components, dynamic lists work well in local mode.
Please refer to the [custom ui local mode documentation](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/local-mode-custom-ui-scripts) for more information on the local mode feature.    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


[Facebook](https://www.facebook.com/MetaHorizon/)
[Threads](https://www.threads.com/@metahorizon)
[X](https://x.com/MetaHorizon)
[Instagram](https://www.instagram.com/metahorizon/)
[YouTube](https://www.youtube.com/@MetaQuestVR)

 Learn
[Documentation](https://developers.meta.com/horizon-worlds/learn/documentation/)
[Blog](https://developers.meta.com/horizon/blog/)
...
...
# Custom UI Dynamic List

  
## Overview
...
### How to use dynamic lists in local mode
...
[Forum](https://communityforums.atmeta.com/t5/Creator-Forum/ct-p/Meta_Horizon_Creator_Forums)

 Programs
[Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs/)

 My Creations
[My Worlds](https://horizon.meta.com/creator/worlds_all/?utm_source=horizon_worlds_creator)
[My Assets](https://horizon.meta.com/creator/assets/?utm_source=horizon_worlds_creator)
[Performance](https://horizon.meta.com/creator/performance/traces/?utm_source=horizon_worlds_creator)

 Privacy & Legal
[Privacy Policy](https://www.meta.com/legal/privacy/policy/)
[Legal](https://www.meta.com/legal/supplemental-terms-of-service/)

 © 2025 Meta
...
...
# Custom UI Dynamic List

  
## Overview

 Custom UI dynamic lists are a component that allows you to modify UI elements
during runtime. Without the dynamic list feature, rendering a list of 10 items would require
creating a component for one item and manually duplicating it nine times in the
TypeScript code. Moreover, since the data model was static, adding or removing
items during runtime would not be not possible. With dynamic lists, you only need to
implement a `renderItem` function and pass an array of objects to the data prop. This allows you to
easily add or remove items at runtime by modifying the data property.  
### Disclaimers
...
### Dynamic list API
...
### How to create a dynamic list component
...
### How to update a dynamic list during runtime
...
### How to use multiple dynamic lists
...
### How to use dynamic lists in local mode
...
...
# Custom UI Dynamic List
...
## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Fdesktop-editor%2Fcustom-ui%2Fdynamic-list%2F)
...
# Custom UI Dynamic List

  
## Overview
...
## Additional Links
...
      Learn
# Custom UI Dynamic List
...
