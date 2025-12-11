Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/getting-started/in-world-examples

# In World Examples

## Horizon TypeScript Templates

There are 4 world templates available to help you create starter worlds. Templates allow you to choose a theme and begin learning with a single click.

**Note:** These templates use some calls and events that may not be considered best practices today e.g., HorizonEvent vs LocalEvent or NetworkEvent. Templates will be updated periodically to adhere to latest best practices and performance optimizations.

**Follow these steps:**

- Navigate to the Horizon “Create New World” page.
- Scroll down to section **TypeScript Environments**.
- Select the template world you want to create and click Create world. ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452653112_512510427953580_5716430260051889052_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=DsbDepX7IdIQ7kNvwGA41_v&_nc_oc=Admm68wAcOGnvgcI_2PHr-gAfzJjTg7v0JAI1CETFgGPNUfESqk1U7NLRkGTBIPb5E53a70VuKfHchtH-LvzZXQH&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=L-aY16Z191-7GGDaymSVqA&oh=00_AfltK9xZM9YQOGOM8rgoH0_lcGPyYGTMie3iIoE9Qe5LJQ&oe=69556C93)
- You can open the Desktop Editor and view or update the TypeScript files to experiment with how it works. To see how the code creates the module’s behavior, navigate to the module’s definitions and interface.

### A: TypeScript and Code Block Example Scripts

This template world is an expansion of the Code Block Example Scripts template. Each example has both a TypeScript and Code Block implementation and a station to experience those next to each other. If you are familiar with using Code Blocks, the examples show common use cases for both CodeBlocks and TypeScript.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452976859_512510424620247_187077101860429859_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=GKGDAV5qRWUQ7kNvwF48eAb&_nc_oc=Adn-50GIt5SnDNpZeaGydSuVM_XtXunZSPerO1_BIDDtReBSCQvAgnrTCBo3DalJsTIM--kfMffTEOqcpYSO_zTF&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=L-aY16Z191-7GGDaymSVqA&oh=00_Afl7rbTGokEe8NoECS_9HdMlpXZFhWWnKVkl_3CXWCD6nQ&oe=69556D9E)

### B: TypeScript Events

Events enable objects in your world to interact with one another through an attached script. There are several types of events available in Horizon that cover communications across TypeScript and CodeBlock scripts. This template will help you learn about the event types introduced with TypeScript (**Local**, **CodeBlock**, and **Broadcast** events).

The template complements the Horizon events documentation [here](../Events/Local%20Events.md). This template covers:

* Horizon **Local**, **CodeBlock**, and **Broadcast** events
* Players present board and text gizmo updates
* Creating events and subscribing to events
* Interactions and events detection and world updates

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452917745_512510421286914_5952549616907279129_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=gvMb0c4Gc1cQ7kNvwFAN_I2&_nc_oc=AdmAAxEU3TWCv8vHSYhuUgQ2Fpv8cSeYQOg0xQxaOSh5ukXWl7i7oQjmMNTQ6Svik2t4AX2fw_zJwcTaP9zc9HWa&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=L-aY16Z191-7GGDaymSVqA&oh=00_Aflax0rsbbOuvhoD2Jk_f_zmuxRJy8pefNDzNFklRLVjKQ&oe=695592F5)

### C: The Lab: TypeScript Testbench

This world has demos introducing:

* Asset spawning and despawning
* Object Pooling
* Bezier Curve math implemented with custom TypeScript Classes

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452653615_512510434620246_3243192593321753654_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=LPcI-aJIuSYQ7kNvwEmvjgl&_nc_oc=AdkoQy5dDSxsYBs1XAT7dNvrdc5YHhdfdhWvVtD1SW0oYqtaqIAHfdU36AS8as5CTLn_j9bOgbnXgFzGznCfs_uc&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=L-aY16Z191-7GGDaymSVqA&oh=00_AfnGT_KNop_NoIDppU3HH5EbzKqKs7bpvrhFWRQ2ty2qEA&oe=6955883A)

### D: Modules

TypeScript modules are an exciting new addition to Horizon scripting. They let you write code that is not attached to objects. Modules can be used by other scripts in the world. They allow encapsulation and define a set of behavior in the same file, promoting readability.

* Simple “Hello World” implementation
* Simple math library that can be used by other scripts
* More complex data store example showcasing how to force a single global instance of a script

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452652224_512510414620248_8372057275696785054_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=U1MSF4-PDbsQ7kNvwG7glIN&_nc_oc=AdkNmFeJBgU-ChXYUAXkVSfj7MPCUYeCttTyybfPIauY-ac8ao_BvwczUN2Cfd_-gpob5lEOLEXKSxS_5xhRkvce&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=L-aY16Z191-7GGDaymSVqA&oh=00_Afn3nAYgTYVsAyGpUgIBxqdonXSGvFzAWUswZ-98y6AmWQ&oe=695576F7)