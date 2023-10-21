# Welcome to myGainz Github!

This is the shared repo for the myGainz Fitness web application.

## What is myGainz?

myGainz is a senior level Software Engineering project implementing a modern web-based application via a FERN stack. It is centered around the importance of fitness, health, exercise and diet.
FERN is an acronym for **F**irebase, **E**xpress, **R**eact, **N**ode, the set of technologies required to use this application.

## The File Structure

Looks like this inside the repo folder:

```bash

myGainz			<- Parent directory
|
|---server--config            <- Put firebase config here
|
|---client--src-----config    <- Put firebase config here
|	  |
|	  ------components <- Put webpages here
|	  |
|	  -------assets    <- Put media (photos, logos, videos, etc.)


```
	
## How Do I Start myGainz?

1. Ensure Node.js is installed on your computer. [Link to Node website.](https://nodejs.dev/en/download/)
To check if its installed on your machine already, open a Terminal or Command Prompt:

```
node --version
```

2. Clone the myGainz repo (main branch) to your local machine. Put it somewhere memorable.

3. Once cloned, in the parent directory (C:\\...\\...\mygainz), open a Terminal or Command Prompt:

```
# Go to the /server subdirectory (replace the ... with whatever your filepath is)
cd C:\...\...\mygainz\server

# Look at the 'package.json' file in /server folder and install dependencies
npm install

# Update dependencies to most recent versions
npm update

# Start the server
npm start
```

If successful, it'll say 'server running on some port number'.
Leave it running by minimizing the Terminal/Command Prompt.

4. Open a 2nd Terminal/Command Prompt window. Repeat the process but this time in the /client folder.

```
# Go to the /client subdirectory (replace the ... with whatever your filepath is)
cd C:\...\...\mygainz\client

# Look at the 'package.json' file in /client folder and install dependencies
npm install

# Update dependencies to most recent versions
npm update

# Start the client
npm start
```

If successful, your web browser should open and be directed to localhost:3000 where the myGainz app is running.
The first time you run it will not work as you need two credentials files. :)

---
