# Ducket HTML Book

## Sturcture (Chapter 1)
* Tags have two components:
    * Angle Brackets <>
    * Elements are the characters inside angle brackets
* Attributes provide additional information about the contents of an element. They appear in the opening tag and have a name and a value with an equal sign inbetween.
* <head> contains information about the page, but will not display information on the webpage. 
    * <title> anything written in this tag will be displayed in the browser, namine the title of the webpage, but will not be displayed on the website
    * CSS : <link rel="stylesheet" href="new-biz.css"/>
    * JS : <script src="age-restriction.js"></script>
* Text editors. Allows a user to design a document/site by using a GUI and not having to write code. Example: Microsoft Word
    


## Extra Markup (Chapter 8)
* DOCTYPES to show what version of HTML is being used, current HTML5 is <!DOCTYPE html>
* Comments are created using <!-- and -->
* id attribute is used to uniquely identify only one element from other elements in CSS. example <p id="warning statement">
* class acttribute is used to identify multiple elements when using CSS. repeat the same element and value for each tag you want formatting to apply to. example <h1 class="important>, <p class="important">. 
* block elements will appear as a new section in the browser. Examples: <h1>, <p>, <ul>, <li>
* inline elements will only apply formatting to the text and not change the layout. Example: <a>, <b>, <em>, <img>


* <div> and <span> allow you to group block-level and inline elements together. Example <div id="header">, next lines include images, text,...</div>. This is creating an id to apply CSS formatting to multiple elements without having to individually define in HTML and style in CSS
* <span> is an inline element similar to <div>. Example <span class="crazy font">
* <iframe> embed googlemaps. Scrolling and seemless are options to allow or prevent scrolling within the map.
* <meta> elment is inside the <head> element, so it is not displayed on the website, only containing information of who created the site, if the page is time sensitive. 
    * Does not require a closing tag
    * "Description" is the informaiton that is displayed during a google search that says what your site is about.
    * "Keywords" are the words that google will use to identify your site as a match when someone searches for sites with your type of information. 
    * "robots" of content="nofollow" will prevent search engines from finding your site.
* Escape characters allow HTML code characters to be used as text on the website and not read as HTML code. Example: quotation mark " is &quot:

## HTML5 Layout (Chapter 17)
* Sidebar is <aside>
* Navigation bar is <nav>
* Section element groups related content together: image, link, text...
    * Example: <section class="sugar-free-cookie">
* Article is <article>
    * use <div id="content"> as a container for multiple articles together
* Heading Groups <hgroup> will allow multiple headings to be grouped together
* Link an entire block element <a href="">...<img src>...<h2>,<p>...</a>

## Process & Design (Chapter 18)
* Site Map is a diagram of how the pages of your website are linked and flow together 
* Wireframe is a layout of sections of the website, excluding font, color, images...
* Visual hierarchy is how people skim a sight and are attracted to contrast of size, color, style, images,...to find what they are looking for.


# Ducket JS Book

## ABC of Programming (Chapter 1)
* HTML example: <p class="fruit">peach</p>
    * opening tag = <p class="fruit">
    * closing tag = </p>
    * attribute name = class
    * attribute value = fruit
* CSS example: .fruit{color:pink;}
    * selector = .fruit
    * declaration block = {color:pink;}
    * property name = color
    * property value = pink
* Script is a series of instructions that a computer can follow to achieve a goal.
* HTML gives the layout of models/nodes.
* Computers create a model of objects, each object will have properties that tell us about the object, methods tell how to use those properties and events is what triggers interaction from the user.
*file types: .html, .css, .js
* Linking CSS and HTML
    * CSS link in HTML file, head section: <link rel="stylesheet" href="file.name"/>
* Linking JavaScript and HTML 
    * Html: <script> is used to link javascript files. Example: <script src="filename.js></script>. This script is placed in applicable HTML code
    * Js: Calling a method of an object
        * document.write() at the end of
            * document is the object
            * write() is the method where new content is written 
