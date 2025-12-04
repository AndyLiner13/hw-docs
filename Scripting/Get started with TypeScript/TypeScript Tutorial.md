Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/getting-started/typescript-tutorial

# TypeScript Tutorial

## Build your first Hello World with TypeScript and the Desktop Editor

Follow these steps to access the Desktop Editor

- Navigate to *Scripts -> CreateNewScript*.
- We will use a starter script named Shoot.
- Choose the *:* menu next to the new script. You can select “Open in External Editor” if using a preferred editor.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452888405_512535114617778_4622023437168026365_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=ffyNsQmF6-UQ7kNvwE5nZCp&_nc_oc=Adn9KtC3YjyTV02LHCjK9kUTR2SKBbLGJji5u9DdBRSbtetS6p8fAelpRZF9vpa4GuE&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=Av6xw6YzwfytUn2jhMkyVg&oh=00_AflcQL6TYB0jmaCBI4DdR2v5KDqLsi_VVn65PYZ2a8ASnA&oe=694BC690)
- The `start()` function is called whenever the object it is attached to is created. To print to the debug console for an object created, add a *console* print:

  ```
  start() {
    console.log("Hello, World!");
  }
  ```
- Save the file.
- In the Desktop world editor, connect your new script to an object you have in the hierarchy. Scroll down to the bottom of the property panel on the right. Select “Attached Script” and choose the script file named “Shoot:Shoot”. This will associate the script with the object.
  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452635355_512535174617772_4931592019167273635_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=y8Ti0NiGK1sQ7kNvwEg7VU9&_nc_oc=AdmVAPSLljP5hCXhOJqwtUUNj5juwWShkbC-y9xU1E52aj-CvMATy2s_ysi6IjYwitM&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=Av6xw6YzwfytUn2jhMkyVg&oh=00_AfnfJW4DBCKVKyaBuFO-tQe9o7tQC2aGfCu0UONqMsQoeQ&oe=694BBAE3)
- Preview the world by clicking on the person icon next to the wrench.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452460755_512535221284434_2821360807848336884_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=gqL0EJUzm5EQ7kNvwGAz4G3&_nc_oc=AdkNp4sO_9Tg7Hh1mWBko7tPo89AmuQukuV2_xvtkblIdzfq78n6c5uPXUy3IDOCAcw&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Av6xw6YzwfytUn2jhMkyVg&oh=00_AfmLJ710PR82zlbUJNstnUrq85pptMJc8LgSM-1IuXL6xQ&oe=694BD4B3)
- Press escape and click on Console window at the bottom of the editor.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452683821_512535171284439_1029448456687135659_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=4qJLw_ybD1oQ7kNvwEfyxCn&_nc_oc=AdldsdCVUksE1VQncxe3bVtPS35L-C29q5Xb9ztBsR7A9SzaVpxTr7dTooYs8r6TscE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Av6xw6YzwfytUn2jhMkyVg&oh=00_AfnNVcQw4i1oOWllImtQa-OS_z3Q7BkC8_lAaYh52DyJrA&oe=694BBBE9)
- When the object you associated the script with is created, the console will print the  debug message you specified.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452992907_512535111284445_4360884428134174850_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=KqQi8GZIkdwQ7kNvwE0vlTF&_nc_oc=AdkvNsB5yqBfhhR95sOPD6swxL-8MaQY05C3JDid55NQEBeehhO6e7NgsA245BX7_XY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=Av6xw6YzwfytUn2jhMkyVg&oh=00_AfkTFHp_-L3bJFMpE2poJBxQOtyffGOcsdaN5UUak1uibA&oe=694BBBFC)

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