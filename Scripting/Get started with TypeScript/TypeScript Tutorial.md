Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/getting-started/typescript-tutorial

# TypeScript Tutorial

## Build your first Hello World with TypeScript and the Desktop Editor

Follow these steps to access the Desktop Editor

- Navigate to *Scripts -> CreateNewScript*.
- We will use a starter script named Shoot.
- Choose the *:* menu next to the new script. You can select “Open in External Editor” if using a preferred editor.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452888405_512535114617778_4622023437168026365_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=cnGKEttFUdYQ7kNvwHhcm_i&_nc_oc=Adn6aX-l98UlpMpn1SSHlwETSAywNkVOrWT7L2sDX3__ZdR2It6gJ9WcL0N0bvy5vqAsaaDmhUiofoT6AFhU4K4V&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=Yc54R4f3-HtWwapY5_yRdw&oh=00_AfmhpZDWKDPBuiH_H1SUhIlZCAhn6lBdfPBFLuo3U6NWiw&oe=69557190)
- The `start()` function is called whenever the object it is attached to is created. To print to the debug console for an object created, add a *console* print:

  ```
  start() {
    console.log("Hello, World!");
  }
  ```
- Save the file.
- In the Desktop world editor, connect your new script to an object you have in the hierarchy. Scroll down to the bottom of the property panel on the right. Select “Attached Script” and choose the script file named “Shoot:Shoot”. This will associate the script with the object.
  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452635355_512535174617772_4931592019167273635_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=9cnq0AOukcUQ7kNvwG9kSzl&_nc_oc=Adm7QXPozRAy64lL4XokcKhWVZFKnWadjxwk6hK613SwHf8H_lKN32n6wFkIiyCLoh9Rcul5W7D_Ua3wnJnLPr55&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=Yc54R4f3-HtWwapY5_yRdw&oh=00_AfmfRyPbkRwzSdiRjxdJtStLaP6XT3mmcvdWaMigNRp52Q&oe=69559E23)
- Preview the world by clicking on the person icon next to the wrench.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452460755_512535221284434_2821360807848336884_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=LB0lQ9bO0zYQ7kNvwF36MVX&_nc_oc=AdmblqwXNy5nqU7eaLV07cOE-goOKYOSo-jUCXfPrNTi0nas-g4lEUI8vzI9aTemrwdtR7X26xlRM0Q82LaosbGm&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Yc54R4f3-HtWwapY5_yRdw&oh=00_Afk9hjkB9sSwieprrtGtAFsjLhrA5WmrQi9D5hYg6_gkvw&oe=69557FB3)
- Press escape and click on Console window at the bottom of the editor.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452683821_512535171284439_1029448456687135659_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=lUxKMn8E9owQ7kNvwH8bVU7&_nc_oc=Adl_uYkL_Kk_5ensGyHzmzfu3BtCNTrXaY_uHpBRFw7sj5Oq0Lc67xXxZ7uYACnSchv1Coua0sBx-kVCrAMaL_sv&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Yc54R4f3-HtWwapY5_yRdw&oh=00_Afl-vR1LqYcs7oxQ8CUtZM2uyQge1VJcxPGAuzlRNyjRJg&oe=69559F29)
- When the object you associated the script with is created, the console will print the  debug message you specified.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452992907_512535111284445_4360884428134174850_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=FEsl7Ko_2cUQ7kNvwHV3P10&_nc_oc=AdnFTJdJ3U1jxeSXqbJ6mr31Ar32RTJHddgkdebyfVV2n0Ze88XhrhZhGS2cjvX00S0pGWmhO_BribOZq5CGUuEw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=Yc54R4f3-HtWwapY5_yRdw&oh=00_AfnIgOJxw_fdeFB0m3o3CvMnJM1Bw5nBuzec4yvdWv51Tw&oe=69559F3C)

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