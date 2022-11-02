# How does web browsers work?
> A browser is a group of structured codes which together performs a series of tasks to display a web page on the screen.
> #### The main function is to retrieve information from the World Wide Web and making it available for users. Visiting any website

# High-level architecture of browser
 ![This is a image](https://miro.medium.com/max/640/1*RL0pnuf_hmLJ76oY6DViZw.png)

##  **The User Interface:** 
>The user interface is the space where User interacts with the browser. 

>It includes the address bar, back and next buttons, home button etc.
## The Browser Engine: 
>The browser engine works as a bridge between the User interface and the rendering engine.
## The Rendering Engine: 
>The rendering engine, as the name suggests is responsible for rendering (providing) the requested web page on the browser screen.

>The rendering engine interprets the HTML, XML documents and images that are formatted using CSS and generates the layout that is displayed in the User Interface.
### Different browsers user different rendering engines:
* Internet Explorer: Trident
* Firefox & other Mozilla browsers: Gecko
* Chrome & Opera 15+: Blink
* Chrome (iPhone) & Safari: Webkit

## Networking: 
>Component of the browser which retrieves the URLs using the common internet protocols of HTTP or FTP. The networking component handles all aspects of Internet communication and security.
## JavaScript Interpreter:
> It is the component of the browser which interprets and executes the javascript code embedded in a website. The interpreted results are sent to the rendering engine for display.
## UI Backend: 
> UI backend is used for drawing basic widgets like combo boxes and windows.
## Data Persistence/Storage:
> Browsers support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem. 

> It is a small database created on the local drive of the computer where the browser is installed. 

> It manages user data such as cache, cookies, bookmarks and preferences.

# Rendering engine
![rendering Engine](https://miro.medium.com/max/750/1*cfQpu6Xvb7e9IiH4CCuiCg.png)
## DOM tree construction
>The rendering engine parses the chunks of HTML document and convert the elements to DOM nodes.

>It also parses both the external CSS files as well in style elements
## Render tree construction
>This tree is of visual elements in the order in which they will be displayed. 

>It is the visual representation of the document. The purpose of this tree is to enable painting the contents in their correct order.
## Layout process
>When the renderer is created and added to the tree, it does not have a position and size.

> The process of calculating these values is called layout or reflow.

> This means giving each node the exact coordinates where it should appear on the screen.
## Painting 
>The render tree is traversed and the renderer’s “paint()” method is called to display content on the screen.

>Paint actually creates the picture of the layout that needs to be rendered.
<h4>The rendering engine always tries to display the contents on the screen as soon as possible for better user experience. It does not wait for the HTML parsing to complete before starting to build and layout the render tree. It parses and displays the content it has received from the network, while rest of the contents stills keeps coming from the network.</h4>

# Parsers (HTML, CSS, etc)
### Parsing means analyzing and converting a program into an internal format that a runtime environment can actually run, for example the JavaScript engine inside browsers.

> The browser parses HTML into a DOM tree.

>  the browser encounters CSS styles, it parses the text into the CSS Object Model (or CSSOM), a data structure it then uses for styling layouts and painting.

# Script Processors
> ## Executable objects go through four execution stages.

> The time at which the script is generated depends on object attributes.

> The order in which scripts are processed in an object depends on which Process pages the scripts are on.

* Execution Stages 
* Time of Processing
* Order of Processing
* Processing In Scripts

# Order of script processing
> Depending on the type of object,
> the task may have more than one Process page on which you can write scripts. 
### The scripts in the Process pages are processed in the following order:

* Pre-Process page
* Process page
* Child Post Process page
* Post Process page


# When a user enters an URL in the browser, how does the browser fetch the desired result ?
### 1. You enter the URL in the browser.
> When you type any URL you basically want to reach the server where the website is hosted.

### 2. The browser looks for the IP address of the domain name in the DNS(Domain Name Server).
