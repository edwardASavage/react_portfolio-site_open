This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Several modifications were made to lighten the process.

## Introduction

This is project aims to provide a fully functional personal portfolio site. You are able to view a live version (my personal one) at https://edwardsavage.co.uk.<br/>

Most of the elements and features of the site may be customised through the `profileData.json` file.<br/>

Items in the footer for designs are hardcoded, and will need you to privately upload images to a location in order to gain a URL for the link to open in a new tab.<br/>
Checkout below for a detailed description on how to modify this project.

## Running

You'll need to have Node installed in order to run this project.

#### Follow the commands:

### `npm install`

This command will install the needed dependancies for functioning, most are from the create-react-app bootstrapper.

### `npm start`

Runs the app in the development mode.
The page will reload if you make edits.
You will also see any lint errors in the console. <br/>

Make any edits here and before moving onto the next step, as there is no need to be building multiple times.

## Modifying

### `profileData.json`

This is your main editing file, replace the placeholder texts with your required fields. <br/>

using your code editor, use a regex find (typically CTRL + F followed by ALT + R) with the expression `(?=\$edit\$).*?\/\$edit\$` to locate details that need to be changed to make the site personal.

Alternatively you are able to just use the find tool (CTL + F) with the expression `$edit`, you will need to remove the closing element `/$edit` if you choose this way though.

#### image storage method

This project uses json as storage medium, meaning that images must be translated to text for storage. There are several ways around this whilst using databases and you are welcome to use one of them instead. If you do not wish to modify, you will need to follow a simular procedure:

you will need to encode an image to a base64 format (see: [mozilla Data URIs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) for more details), you can do that easily through an online converter ([such as this](https://www.base64-image.de/)).<br/>

It is then a simple matter of copying your new (very long) encoded string to the relevant areas of the `profileData.json` file.

For the `profilePicture` prop (`{obj}.profilePicture`). <br/>

For project image backgrounds in the project grid. This is a nested array of objects inside the main profileData object. (`{obj}` > `[portfilio]` > `{obj}.imageUrl`).

#### Favicons

Try not to forget to edit the favicon ( I used [this one](https://favicon.io/) ) to something personal and change the title of the document in the `index.html` file (in the `public` directory). <br/>

### Any item(s) in `compontents` directory

These are your core sections, if you have made modifications such as removing properties or objects from the `profileData.json` file, I advise you to go over each compontent to ensure correct rendering.

## Final notes

There is quite a lot of CSS used throught the project, namely <i>flexbox</i>. This surely can be modified for greater interoperability and faster rendering times.

The navbar compontent also heavily relies on a few React hooks for resizing and locating. The use of the react-scroll library may also be removed later on, as it only has one use case in this project.

If you have any issues, or would like some help to modify this, please <b>do not hestitate to contact me!</b>

## Finalising

To finalise the project after modification, you'll need to build and serve. you can build by running `npm build` from a CLI in your project root.

serving is a little more complicated, This can be done without owning a domain and by utilising free models such as [Netlify](https://www.netlify.com/) and [Heroku](https://www.heroku.com/). It would be best to follow the documentation on your chosen model to begin serving this projects content.
