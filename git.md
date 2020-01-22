# Branch off master - class 05, steps are in the class github repo
 1 github: go to the repo you want, select fork, select clone, copy the address
 2 git: git clone add link to github
  - `` git clone https...github...coreydejong``
 3 ``git checkout -b`` create a new branch and checkout into the new branch simultaneously
  - ``git checkout -b problem-1``
 4 open file using code ., write code
 5 ACP, but use ``git push origin problem-1``
 6: github, select master branch, compare and pull request, create pull request, 
 7 merge pull request, confirm pull request, (do not delete master)
 8 - submit the link at the top of the page, looks something like : https://github.com/CoreyDeJong/cookie-stand/pull/4
 8 Git: checkout you master branch
  - ``git checkout master``
 9 Git: pull the changes from github to your local machine
  - ``git pull origin master``
 10 repeat steps 3-9 for all 5 problems
 11 Github: make a pull request from your forked repo to the Codefellows Repo.
 12: submit a link to that final pull request into canvas.


 8 pull request to merge into codefellows
 9 submit the link to your pull request



# Git
 * Git is a software as your local source control, not connected to the internet, just your computer
 * Commits are saved versions of a file without having to rename the file
  - Head is the most recent commit
 * Master branch is the main source of your control
 * Repositories are folders with code files inside

# Github
  * Github is a web based platform/website that stores your git files in the cloud.
  * Github has copies of the repositories/folders
  * Cloning is copying a repo from github to git

## New Github repo
  * create repot on github
    * readme is the default file when you create a clone
  * make new directory on your terminal
  * git clone github link
  * insertions are how many lines of code are changed when ACP
  * git push origin master
    * origin is your computer
    * master is the github master branch. this can change to a different branch
  * updating github, do a gitpull to get info from github to your local git
  * gitfetch will just see what the difference is between github and let you know if you have any conflicts whereas gitpull will transfer the files
  

Links don't need to add the actual link, just the flie name


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
 
  * Add = identifies files into a queue for upcoming commit
    * ``git add banana.txt`` git add with a space in between and then the file name with the extension.
    * ``git add .``  will update all documents
  * Commit = takes a snapshot of the files at that moment in time, records the information
    * ``git commit -m "add why you made your changes"``
  * Push = sends files to github
    * ``git push origin master``

    
  * Pull = fetch and merges to compare files from github and local files on git
    * ``git pull origin master``
  * Status = which files are added, ready for commit, only sees what is on your local computer.
    * ``git status``  
    
## Cloned Repositories
  * git clone
  * cloned version is named "origin"
  * local branch is "master"
  * __fork__ share link to other person, select fork option on github
  
## Seeing Your Remotes
  * git remote to see the short names of all specificed remote handles
  * git remote -v to see all the remote URL's next to their corresponding short names

## Terminal
    * ls -a: will list hidden directories, the - will add two commands into one
    * cdwr = windows root
    * ls = list files. Lists all the files in the folder
    * rm = remove file. Add name after rm to delete file
    * cd = change directory. Goes into the folder you define after cd
        * Example: cd projects, will enter the projects folder
    * cd . = change directory one folder. Will go up one folder
    * cd .. = change directory up to top of folder tree?.
    * code . = will open that folder files in VS Code
    * code name of file = will open that file in VScode
    * pwd = print working directory. see what folder you are currently in
    * touch = create new file
    * mkdir = make new directory
    * rmdir = remove directory
    * rm = remove
        - Example: rm index.html
      * rm -r = remove all files/directories
        - Example: rm -r projects   this will delete
      * rmdir will only remove an empty directory, good way to test you are deleting only an empty directory.
    * cd source/seattle-201d58/ will go directly to that folder.
    * cp = copy
        * ``cp cat.html helloworld/dog.html``
        * cat.html file moving to helloworld folder
    * ../ will move files back up. If you know the name of the folder, mv filename ../foldername. Add a . for every level you need to go up the tree.
    * mv = move. mv file name current add a space and then type the folder location
        * move to current folder add a . at end of file you want to move
        * mv newfolder/filename .
        * move
    * clear = clears your screen on your console
    * tree = will show the layout of the files inside folders
    
   


## Github
    * ACP : Add, Commit, Push
        * git add name of file : will updated on the file definition that is defined after git add
            * git add .  = will updated all files in that folder 
        * git commit -m"commit inside the quotation marks what revisions you have made"
        * git push origin master : will update the file to git hub
    * git status : will compare the status of files on your computer compared to git hub version

    * Git pull origin master
        * brings in the version from github and terminal into one file as long as there are no conflicts