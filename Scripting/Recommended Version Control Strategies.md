Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/recommended-version-control-strategies

# Recommended Version Control Strategies

When using the Desktop Editor, Meta Horizon Worlds writes all of the world’s scripts to a local directory on your device. This includes scripts written by everyone working on your world. Meta refers to this directory as the “auto-sync directory”. Meta Horizon Worlds keeps this directory synchronized with the scripts in the world. If a file in the auto-sync directory is edited, then those edits are synchronized to the world. If a script in the world is changed by someone else working on your world, then their changes are written to the script file in the auto-sync directory. This workflow works well when working on a small project in isolation, but it doesn’t scale well to large teams working on complex worlds.

You can think of editing and saving scripts in Meta Horizon Worlds as using a very simple Version Control System (VCS). When you edit a world, the changes are immediately written to the source of truth shared by all users. In Git terms, this would mean every time one of your teammates updates a script file locally, it’s immediately force-pushed to the main branch of your repository.

This article explains recommended workflow strategies for large teams, to help ensure smooth and safe editing.

# Use version control

This strategy provides several benefits. For example, it allows you to maintain your project’s history, and it allows you to properly merge your script updates into the world. But using this approach means there will be two sources of truth for your code:

* The code saved in the world.
* The code in your repository.

# Edit in a directory that isn’t automatically synchronized

Meta recommends that you make your edits in a separate directory from the auto-sync directory. This gives you complete control over when your changes are brought into your world. Other engineers editing and then saving their scripts won’t overwrite your unsaved changes. When you want to bring your changes into the world, you can simply copy and paste them into the auto-sync directory.

# Update your main world using a pull request

Copying and pasting provides more control, but it’s still effectively a force-push to main in a classic VCS. Using this approach, there is no merging, and there is no oversight from other developers on the project.

An alternative approach is to ensure that all changes are merged into your VCS main branch via a pull request. To bring those changes into the world, you can perform a VCS pull in the auto-sync directory. If you choose to use this strategy, it is important that all of your code changes are always pushed to version control, or they could be overwritten during a pull.

# Edit in clone worlds

The only way to test your code is to push it to the world (that is, save to the auto-sync directory). But pushing to the main world can be risky (for the reasons mentioned above). Alternatively, you can create a clone world that serves as a branch. This approach lets you directly edit in the auto-sync folder without the risk of being overwritten, and you can safely copy and paste your updates from another folder. When you want to save and test your code, you can merge it into your version control system, and then return to the main world and perform a pull request.

# Example version control workflow

Consider two developers (developers A and B) working together on the same world.

- Developer A creates a clone of the world. They clone their Git repository into the auto-sync folder.
- Developer B also creates a clone of the world. They create a separate folder for working, and they  clone the Git repository into it.
- Developer A completes their feature update, and they submit a Pull Request (PR) on GitHub.
- Developer B accepts the pull request, and the revised code is merged into the main branch.
- Developer A re-enters the main world. They perform a pull in the auto-sync directory. This syncs their changes into the world.
- While this is happening, developer B also has some local changes to submit. They rebase their work onto the head of the main Git branch, and then resolve any merge conflicts.
- Developer B continues to revise their code. They test their work by copying their edits into their auto-sync folder.
- Developer B finishes their work, and then creates a pull request. The PR is accepted and merged into main.
- Developer B re-enters the main world and performs a pull in the auto-sync directory, bringing their changes into the world.