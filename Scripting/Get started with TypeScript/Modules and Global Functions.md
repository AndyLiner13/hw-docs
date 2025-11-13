Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/getting-started/modules-and-global-functions

# Modules and Global Functions

In TypeScript, any file with a top-level import or export statement is considered a module. Modules have local scope, which means that declarations within one module cannot be accessed outside the module unless the declaration is exported in the original module and imported into the current module.

Using modules has the following benefits:

* Improves readability by reducing the amount of code in a file. This results in less code to analyze.
* Makes it easier to reuse code because smaller sections of code are in a single file, and then can be exported and imported as needed.
* Makes it possible to refactor code by grouping related code in individual files.
* Use of export/import ensures that similarly named variables, functions, classes, etc. are not accidentally changed while working in a different file.
* Scripts can share code with other scripts in the world.

## Creating Modules in Meta Horizon Worlds

You can create Module files in Desktop Editor.

You can also add the modules gizmo to the world in VR however you can not edit it in VR.

### Creating Modules in Desktop Editor

To create a module in the desktop editor:

- In the menu bar, click **Scripts**.
- In the Scripts panel, select **+** to create a new script.
- Enter desired script name.
- Select the contextual menu of the newly created script to display its configuration options, or to edit it using an external IDE.

### Export Statements

A module can be defined in a separate file which can contain functions, variables, interfaces and classes. To ensure that declarations are available outside the file, use the prefix **export** with all the definitions you want to include in a module.

Module export example in TypeScript:

```
export function add(a: number, b: number) {
 return a + b;
}

export type MyScalar = number \| string;
export const ModValue = 42;

export class Person {
 name: string;
 constructor(name: string) {
   this.name = name;
 }

 sayHello() {
   console.log("Hello my name is " + this.name);
 }
}
```

### Import Statements

Use the **import** statement to access a module from a different file. Imports can be done individually or in a group.

The following example exports two functions, `quadBezierPos` and `cubicBezierPos`, within the module `BezierModule`.

#### TypeScript example

```
export function quadBezierPos(p0: Vec3, p1: Vec3, p2: Vec3, t: number): Vec3 {
 let result = new Vec3(0, 0, 0);

 if(t >= 0 && t <= 1) {
   let t2 = pow(t, 2);
   result.x = (p0.x - 2*p1.x + p2.x)*t2 + 2*t*(p1.x - p0.x) + p0.x;
   result.y = (p0.y - 2*p1.y + p2.y)*t2 + 2*t*(p1.y - p0.y) + p0.y;
   result.z = (p0.z - 2*p1.z + p2.z)*t2 + 2*t*(p1.z - p0.z) + p0.z;
 }

 return result;
}

export function cubicBezierPos(p0: Vec3, p1: Vec3, p2: Vec3, p3: Vec3, t: number): Vec3{
 let result = new Vec3(0, 0, 0);

 if(t >= 0 && t <= 1) {
   let diffT = 1 - t;
   result.x = pow(diffT, 3)*p0.x + 3*(t)*pow(diffT, 2)*p1.x + 3*pow(t, 2)*diffT*p2.x + pow(t, 3)*p3.x;
   result.y = pow(diffT, 3)*p0.y + 3*(t)*pow(diffT, 2)*p1.y + 3*pow(t, 2)*diffT*p2.y + pow(t, 3)*p3.y;
   result.z = pow(diffT, 3)*p0.z + 3*(t)*pow(diffT, 2)*p1.z + 3*pow(t, 2)*diffT*p2.z + pow(t, 3)*p3.z;
 }

 return result;
}
```

The functions can then be imported individually in a different script:

```
import {quadBezierPos} from 'BezierModule';
import {cubicBezierPos} from 'BezierModule';
```

In addition, you can use one import statement to import both functions since they are exported from the same module:

```
import {quadBezierPos, cubicBezierPos} from 'BezierModule';
```

You can also import all exported items in a module with `*` :

```
import * as BezierDesigner from 'BezierModule';
```

Here, the `*` imports all exported modules in **BezierModule**. The individual modules can be accessed by using dot notation on the subsequent **BezierDesigner** variable.

You can also rename exported items during the import phase:

```
import {cubicBezierPos as bigCubePosition} from 'BezierModule';
```

In this case, you can access the `cubicBezierPos` function in the importing file as `bigCubePosition`. This technique is especially useful when you have naming collisions from multiple modules.

### Singleton Pattern

One common pattern with modules is to create and export a singleton that can be used and/or mutated by other modules.

The simplest example of this would be an array, whose elements can be mutated by modules that import it.

```
// Singleton
export const ArrayData: Array<number> = [3];
```

```
// Script1
import {ArrayData} from "Singleton";

ArrayData.push(12); // [3, 12]
```

A more complex Entity that might be exported as a singleton is an instance of a class:

```
// DataStore
class DataStore {
  values = new Map<string, number>();

  getAllValues() {
    return this.values;
  }

  getValue(key: string) {
    return this.values.get(key);
  }

  setValue(key: string, value: number) {
    this.values.set(key, value);
  }
}

export const Store = new DataStore();
```

#### TypeScript example

```
// Script1
import {Store} from "DataStore";

Store.setValue("hello", 12);
Store.getValue("hello") // 12
```

**NOTE:** Exported singletons (shared module state) are only local to the client the scripts are running on. If a script is using local execution, it will have a different singleton from other local clients as well as the default server run scripts. This is due to scripts running on a seperate JavaScript VM per client.

## Global Functions

The following functions are global and apply to all objects in your world:

* [console.log](https://developer.mozilla.org/en-US/docs/Web/API/console/log)
* [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
* [Async functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)