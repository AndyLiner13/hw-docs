Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/getting-started/typescript-tutorial

# TypeScript Tutorial

## Build your first Hello World with TypeScript and the Desktop Editor

Follow these steps to access the Desktop Editor

- Navigate to *Scripts -> CreateNewScript*.
- We will use a starter script named Shoot.
- Choose the *:* menu next to the new script. You can select “Open in External Editor” if using a preferred editor.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452888405_512535114617778_4622023437168026365_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=rsFVuFNoecYQ7kNvwFv3NVB&_nc_oc=AdmhQQ54sSBTL5uwjfNP0k5HXNDA7XdIeodfHYKOve9BwLyjAmeU-IX271eQNZEiHCg&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=r600F_2rTa_cc-ByOJwSxw&oh=00_AfgwrHVXpNGuAxSMDL3GtL2z2TMMaB-ZwGQMfdN9J9ifcw&oe=692BEA50)
- The `start()` function is called whenever the object it is attached to is created. To print to the debug console for an object created, add a *console* print:

  ```vs
  start() {
    console.log("Hello, World!");
  }
  ```
- Save the file.
- In the Desktop world editor, connect your new script to an object you have in the hierarchy. Scroll down to the bottom of the property panel on the right. Select “Attached Script” and choose the script file named “Shoot:Shoot”. This will associate the script with the object.
  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452635355_512535174617772_4931592019167273635_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=2InV1kZebfEQ7kNvwEfJMIA&_nc_oc=AdloIHekACoPxmqnwZXoiejfaIAAK7og9dTH9ZLpkpKCo0kIC5_u1IVvhBTA6xIG0TM&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=r600F_2rTa_cc-ByOJwSxw&oh=00_AfhhAYD_Qk6X2pj_Tpm002zCIRYjvImkF0IP7wD9FO3efQ&oe=692BDEA3)
- Preview the world by clicking on the person icon next to the wrench.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452460755_512535221284434_2821360807848336884_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=NwMo7tFLR-MQ7kNvwH61w8s&_nc_oc=AdnZSyEG7oe1wCzQy46ECa5c5yrhaHvQ-vzYWRgksz66Cqk4V7DILJohBWK5-99KQFo&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=r600F_2rTa_cc-ByOJwSxw&oh=00_AfgU5fGkr8hO9GtWOuqzT5frmKH4kTnLNjcNSNVVyKfw3g&oe=692BF873)
- Press escape and click on Console window at the bottom of the editor.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452683821_512535171284439_1029448456687135659_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=2R5Yxpsd6UQQ7kNvwECqgmd&_nc_oc=AdmQmQtDDn0oLj9Eyz70isahzrt_n1chMw40RsOOwJwp8-JIZLrVU9ul0cG7i7UpZ3Q&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=r600F_2rTa_cc-ByOJwSxw&oh=00_AfiLG7_Le68tP9T8aKTI8f6q9SjCISH6K_qGbteHI_6O1w&oe=692BDFA9)
- When the object you associated the script with is created, the console will print the  debug message you specified.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452992907_512535111284445_4360884428134174850_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=sM_zWAAgGc0Q7kNvwGEb2eH&_nc_oc=Adk7zkW4YznY8gr6CJTHv1wXiU-4125MWzcyqVizd69IxsJ1OjlY6vm6ZFB_GvgzSAY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=r600F_2rTa_cc-ByOJwSxw&oh=00_AfgtLPe-ZHz0s_Tj9q5rszW3dkMr_rWc_UAcJZi2M9fFkA&oe=692BDFBC)

### Sharing Code Between Scripts

Scripts can share code with other scripts in your world. This can be done with the **`export`** keyword in TypeScript. You can export types, functions, classes, and even values from one script and import them to another. The module name is the name of the script. So if you have a script name `Script1`, you can import any exports from it by using this code: **`import``\*` as `S1` from `'Script1'`**`;` .

#### Module1

TypeScript example

```vs
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

```vs
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