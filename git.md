# Git-Revisions-and-the-Cloud

## Version Control
  * Revert to previous versions
  * Track modifications
  * Modify individuals
  * Compare changes
  
## Local Version Control
  * Stored on your hard disk that stores changes to files
  
## Centralized Version Control
  * Single server storing all changes and file versions
  * Access by multiple people
  
## Distributed Version Control
  * Secondary back-up in case the CVS goes down
  
## Git Summary
  * Snapshots: saved version of your file
  * Local Operations: allows work on a project when not online
  * Tracking Changes: every single change is tracked
  * Loss of Data: multiple centralized and decentralized snapshots of files prevents files from being lost.
  * States
    1. Committed
    2. Modified
    3. Staged
    
## Setting up a Git Repository
  * Import your files
  * Clone your files to have a copy on your computer
  
## Git Repository Componenets
  1. Working Direcotry: The actual files reside here
  2. Index: The are used for staging
  3. Head: Points to the most recent commit
  
## Saving Changes
  * Tracked: can be modified, unmodified or staged
  * UnTracked: not in the last snapshot and do not currently reside in the stagging area
  
## Life Cycle 
  * Status
    * git status
  * Add
    * git add name of file
    * git add .
      * will update all documents?
  * Commit 
    * git commit -m "add why you made your changes"
  * Push
    * git push origin master
    
## Cloned Repositories
  * cloned version is named "origin"
  * local branch is "master"
  
## Seeing Your Remotes
  * git remote to see the short names of all specificed remote handles
  * git remote -v to see all the remote URL's next to their corresponding short names