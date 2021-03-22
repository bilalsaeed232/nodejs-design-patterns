# NodeJS Design Patterns
13 most common object oriented design patterns as applied to node.js projects

## Command
The Command pattern encapsulates actions as objects. Command objects allow for loosely coupled systems by separating the objects that issue a request from the objects that actually process the request. These requests are called events and the code that processes the requests are called event handlers.

Suppose you are building an application that supports the Cut, Copy, and Paste clipboard actions. These actions can be triggered in different ways throughout the app: by a menu system, a context menu (e.g. by right clicking on a textbox), or by a keyboard shortcut.

Command objects allow you to centralize the processing of these actions, one for each operation. So, you need only one Command for processing all Cut requests, one for all Copy requests, and one for all Paste requests.

Because commands centralize all processing, they are also frequently involved in handling Undo functionality for the entire application.

### Diagram
!['command diagram'](https://www.dofactory.com/img/diagrams/javascript/javascript-command.jpg)

