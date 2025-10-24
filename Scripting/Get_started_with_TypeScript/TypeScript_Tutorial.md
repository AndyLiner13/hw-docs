# TypeScript Tutorial

  
## Build your first Hello World with TypeScript and the Desktop Editor

 Follow these steps to access the Desktop Editor
1. Navigate to Scripts -> CreateNewScript.
2. We will use a starter script named Shoot.
3. Choose the : menu next to the new script. You can select “Open in External Editor” if using
a preferred editor. ![Image](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452888405_512535114617778_4622023437168026365_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=YIRx1qI0340Q7kNvwEtz8zf&_nc_oc=Adn0BznoQ9HBYn5MSSAIPheI98-ntcjImYUNbDXpaudqbPEQZJv7vv1X0On8mvom8oQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=7ACL6ZVd3nIyYZulk5PRXQ&oh=00_AfcJSJtkFEI6DAcOXIR1GFMTmX-iKW...
4. The `start()` function is called whenever the object it is attached to is created. To print
to the debug console for an object created, add a console print:  
```
start() {
  console.log("Hello, World!");
}
```
5. Save the file.
6. In the Desktop world editor, connect your new script to an object you have in
the hierarchy. Scroll down to the bottom of the property panel on the right.
Select “Attached Script” and choose the script file named “Shoot:Shoot”. This will
associate the script with the object. ![Image](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452635355_512535174617772_4931592019167273635_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=L_3NP5Xw43cQ7kNvwFMNtkI&_nc_oc=AdnMBILExjNJ41t7G45cV-Ecq-JMy0LWM_j7GviOjBlKRwCygu0w3_-UmzUCZTSoNJ0&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=7ACL6ZVd3nIyYZulk5PRXQ&oh=00_AffNlr8AILH5j6DeVCZM7gsAbb...
7. Preview the world by clicking on the person icon next to the wrench. ![Image](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452460755_512535221284434_2821360807848336884_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=TdRO7MXZR6YQ7kNvwGZstyM&_nc_oc=Adn4ZVCVyInMADDPLJzSDFnJISqrUcQ8zetLE2lQrIyG4MJPcruwU8cciglbX0DpA4k&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=7ACL6ZVd3nIyYZulk5PRXQ&oh=00_AfcEKbnN...
8. Press escape and click on Console window at the bottom of the editor. ![Image](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452683821_512535171284439_1029448456687135659_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=J4ZkUEBfRtIQ7kNvwGtOdHQ&_nc_oc=Adn4dWrb4g-r-1kCDKoCqg8q8QQJySKenMUNVLkmXcfzgCmS1fQrsR6QEMC7gQgE23E&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=7ACL6ZVd3nIyYZulk5PRXQ&oh=...
9. When the object you associated the script with is created, the console will
print the  debug message you specified. ![Image](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452992907_512535111284445_4360884428134174850_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=R3PpHgD1tj0Q7kNvwHClGFl&_nc_oc=AdkzpZnYkeRaaKrHPUuZsqXet81az2zwh0QA_iH8LmVTaNJrL8v6QywmUqdW9R7xbiI&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=7ACL6ZVd3nIyYZulk5PRXQ&oh=00_AfewyCAt2ERTUj...
### Sharing Code Between Scripts

 Scripts can share code with other scripts in your world. This can be done with
the `export` keyword in TypeScript. You can export types, functions, classes, and even
values from one script and import them to another. The module name is the name of the
script. So if you have a script name `Script1`, you can import any exports from it by using this code: `import``\*` as `S1` from `'Script1'``;` .  
#### Module1

 TypeScript example  
```
//Module1

export function add(a: number, b: number) { 
  return a + b;
}

export type MyScalar = number \| string;

export const ModValue = 42;

export class Person { 
  name: string;     

  constructor(name: string) {   
    this.name = name; 
  } 

  sayHello() {   
    console.log(`Hello my name is ${this.name}`);
  }
}
```
  
#### Script1

 TypeScript example  
```
// Script1
import type {MyScalar} from 'Module1';
import {Person, ModValue, add} from 'Module1';

const p = new Person('Jon');
p.sayHello(); // logs 'Hello my name is Jon'

let v: MyScalar = ModValue;
console.log(v); // logs 42
v = 'string';
console.log(v); // logs 'string'

console.log(add(5, 8)); // logs 13
```
    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


[Facebook](https://www.facebook.com/MetaHorizon/)
[Threads](https://www.threads.com/@metahorizon)
[X](https://x.com/MetaHorizon)
[Instagram](https://www.instagram.com/metahorizon/)
[YouTube](https://www.youtube.com/@MetaQuestVR)

 Learn
[Documentation](https://developers.meta.com/horizon-worlds/learn/documentation/)
[Blog](https://developers.meta.com/horizon/blog/)
[Forum](https://communityforums.atmeta.com/t5/Creator-Forum/ct-p/Meta_Horizon_Creator_Forums)

 Programs
[Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs/)

 My Creations
[My Worlds](https://horizon.meta.com/creator/worlds_all/?utm_source=horizon_worlds_creator)
[My Assets](https://horizon.meta.com/creator/assets/?utm_source=horizon_worlds_creator)
[Performance](https://horizon.meta.com/creator/performance/traces/?utm_source=horizon_worlds_creator)

 Privacy & Legal
[Privacy Policy](https://www.meta.com/legal/privacy-policy/)
[Legal](https://www.meta.com/legal/supplemental-terms-of-service/)

 © 2025 Meta
