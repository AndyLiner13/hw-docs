Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/getting-started/in-world-examples

# In World Examples

## Horizon TypeScript Templates

There are 4 world templates available to help you create starter worlds. Templates allow you to choose a theme and begin learning with a single click.

**Note:** These templates use some calls and events that may not be considered best practices today e.g., HorizonEvent vs LocalEvent or NetworkEvent. Templates will be updated periodically to adhere to latest best practices and performance optimizations.

**Follow these steps:**

- Navigate to the Horizon “Create New World” page.
- Scroll down to section **TypeScript Environments**.
- Select the template world you want to create and click Create world. ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452653112_512510427953580_5716430260051889052_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=1KaD5Inzl3YQ7kNvwFrzOVx&_nc_oc=AdmQ65suIkweF9gd-pIxlZbB-Jr34n8s8_I3jjENZLqIAVhCDi-TVq8jCndJMk9D_-U&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=FMXgganrXCXr5fTzpHCZHg&oh=00_AfjBOHsYQ6aZD5ou8_XgMxHC9hd8Qchx8xuRWZsLTRYwPg&oe=69312B53)
- You can open the Desktop Editor and view or update the TypeScript files to experiment with how it works. To see how the code creates the module’s behavior, navigate to the module’s definitions and interface.

### A: TypeScript and Code Block Example Scripts

This template world is an expansion of the Code Block Example Scripts template. Each example has both a TypeScript and Code Block implementation and a station to experience those next to each other. If you are familiar with using Code Blocks, the examples show common use cases for both CodeBlocks and TypeScript.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452976859_512510424620247_187077101860429859_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=NAs2IOTdWCAQ7kNvwFOsKdn&_nc_oc=AdkACmG4xrFD_3R_XMRoDj_HzoI1JW6qm9a4pmrUSxldMRYw5Rr67f6kpjVnweWlIGg&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=FMXgganrXCXr5fTzpHCZHg&oh=00_AfieIVbkDItQKrVEhJtMaDhjg3ALnFffh6W8YVgGHzRpJg&oe=69312C5E)

### B: TypeScript Events

Events enable objects in your world to interact with one another through an attached script. There are several types of events available in Horizon that cover communications across TypeScript and CodeBlock scripts. This template will help you learn about the event types introduced with TypeScript (**Local**, **CodeBlock**, and **Broadcast** events).

The template complements the Horizon events documentation [here](/hw-docs/Scripting/Events/Local%20Events.md). This template covers:

* Horizon **Local**, **CodeBlock**, and **Broadcast** events
* Players present board and text gizmo updates
* Creating events and subscribing to events
* Interactions and events detection and world updates

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452917745_512510421286914_5952549616907279129_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=4Lv7CW0Iu2sQ7kNvwHibgD5&_nc_oc=AdmUMQod_o5OJ7DBnp2t9ntIREQuABqFy12pUA2b69ZyGvGoouvDRdCq3HcjWVKfwrI&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=FMXgganrXCXr5fTzpHCZHg&oh=00_Afh8txWMcsHKNmdg4YYbszGZXseJpma_fyKIqwLu8Sy9GQ&oe=69311975)

### C: The Lab: TypeScript Testbench

This world has demos introducing:

* Asset spawning and despawning
* Object Pooling
* Bezier Curve math implemented with custom TypeScript Classes

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452653615_512510434620246_3243192593321753654_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=DLYgVvy8AUcQ7kNvwHKa9IL&_nc_oc=Adkjq1KdefPMUISBZcIHYh6HDX1NZMSOBcLSI-xpaXy_mP0Khq2Bxkce8eJNtZEKP4s&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=FMXgganrXCXr5fTzpHCZHg&oh=00_AfiqUL7MR8P7zpmqNA7XCVDLOsqZweNL5SSBei-JCLqwjQ&oe=693146FA)

### D: Modules

TypeScript modules are an exciting new addition to Horizon scripting. They let you write code that is not attached to objects. Modules can be used by other scripts in the world. They allow encapsulation and define a set of behavior in the same file, promoting readability.

* Simple “Hello World” implementation
* Simple math library that can be used by other scripts
* More complex data store example showcasing how to force a single global instance of a script

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452652224_512510414620248_8372057275696785054_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=V9raSs06d2kQ7kNvwEVlHKN&_nc_oc=Adn3A9dH82NGVLnLRkRC9YNc-YZRURQ7WMNuYvfckvbpbBjLuiZ0kNZIV1MduKBgblQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=FMXgganrXCXr5fTzpHCZHg&oh=00_AfiSeRHQ4OrXut2UBsMRmqqmpTrbQpwaW9cP6GCrVC2doA&oe=693135B7)