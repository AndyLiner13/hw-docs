Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/getting-started/typescript-tutorial

# TypeScript Tutorial

## Build your first Hello World with TypeScript and the Desktop Editor

Follow these steps to access the Desktop Editor

- Navigate to *Scripts -> CreateNewScript*.
- We will use a starter script named Shoot.
- Choose the *:* menu next to the new script. You can select “Open in External Editor” if using a preferred editor.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452888405_512535114617778_4622023437168026365_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=c3fmU5tmKt0Q7kNvwEDAmlx&_nc_oc=Adk-m2ewVT_KCJ965NfQ_36oHCxXRiarGamdf9DdZVIVPP7tF5cTk4AIWYl2BioUtFM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=lL2UXuEchN1zaSQdAwUeSA&oh=00_Afgg5qDAfyoWckaP1dCYoJzxnCvUxe7gxqBKJEJtxoSKTQ&oe=692FA690)
- The `start()` function is called whenever the object it is attached to is created. To print to the debug console for an object created, add a *console* print:

  ```
  start() {
    console.log("Hello, World!");
  }
  ```
- Save the file.
- In the Desktop world editor, connect your new script to an object you have in the hierarchy. Scroll down to the bottom of the property panel on the right. Select “Attached Script” and choose the script file named “Shoot:Shoot”. This will associate the script with the object.
  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452635355_512535174617772_4931592019167273635_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=qWonb9FshK4Q7kNvwHlmSgM&_nc_oc=AdkbrpOHLg9ONVJ0dJkveqNAysPiR9cR69SchrRYeQa2ZwTqnDhOo-PzwQUD_ZuGHbQ&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=lL2UXuEchN1zaSQdAwUeSA&oh=00_AfiSy3t2-kgzkeRHYl2uXrxqDhPvw21fQ2XIqq0hScGZVw&oe=692F9AE3)
- Preview the world by clicking on the person icon next to the wrench.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452460755_512535221284434_2821360807848336884_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=1lwsTin-Dc4Q7kNvwECko32&_nc_oc=AdmhaGUgmKRLjH7ExM8JSYpEfC3SqGWEVIeYiX5-iC76xyL_qTU-4k_iu-qxpqBXYd8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=lL2UXuEchN1zaSQdAwUeSA&oh=00_AfjI6T-lFdynglWB1UzT9ea76H0lrIfwkeuMy6c5nsjz8w&oe=692FB4B3)
- Press escape and click on Console window at the bottom of the editor.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452683821_512535171284439_1029448456687135659_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=nk6NlUzcBlEQ7kNvwGdEyBa&_nc_oc=AdmwZa9JnnOymXa2ZHtVysMH5ILSGkNeUAuqCpc4H6GrXV9af9dXeCZE3w73TZbb0-I&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=lL2UXuEchN1zaSQdAwUeSA&oh=00_AfiGpUhhBi807YXFZdLhnl0UofJsBat-j-YpH47uh7QQFw&oe=692F9BE9)
- When the object you associated the script with is created, the console will print the  debug message you specified.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452992907_512535111284445_4360884428134174850_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=imtK62bz9KcQ7kNvwHHLnnC&_nc_oc=AdnEOl1o7co3iXXTmRWXBshLRdx8RnJvLWePkJS7QrE-NwZ_2YlTnvkNsbITj29y5TM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=lL2UXuEchN1zaSQdAwUeSA&oh=00_Afj26vviz-ErszIULWX2E9_0WRW6T-pgg3iGYri26Iuqbg&oe=692F9BFC)

### Sharing Code Between Scripts

Scripts can share code with other scripts in your world. This can be done with the **`export`** keyword in TypeScript. You can export types, functions, classes, and even values from one script and import them to another. The module name is the name of the script. So if you have a script name `Script1`, you can import any exports from it by using this code: **`import``\*` as `S1` from `'Script1'`**`;` .

#### Module1

TypeScript example

```
//Module1

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
    console.log(`Hello my name is ${this.name}`);
  }
}
```

#### Script1

TypeScript example

```
// Script1
import type {MyScalar} from 'Module1';
import {Person, ModValue, add} from 'Module1';

const p = new Person('Jon');
p.sayHello(); // logs 'Hello my name is Jon'

let v: MyScalar = ModValue;
console.log(v); // logs 42
v = 'string';
console.log(v); // logs 'string'

console.log(add(5, 8)); // logs 13
```