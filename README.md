# NodeJS Design Patterns
13 most common object oriented design patterns as applied to node.js projects

## Iterator
The Iterator pattern allows clients to effectively loop over a collection of objects

A common programming task is to traverse and manipulate a collection of objects. These collections may be stored as an array or perhaps something more complex, such as a tree or graph structure. In addition, you may need to access the items in the collection in a certain order, such as, front to back, back to front, depth first (as in tree searches), skip evenly numbered objects, etc.

The Iterator design pattern solves this problem by separating the collection of objects from the traversal of these objects by implementing a specialized iterator.


### Diagram
!['Iterator diagram'](https://www.dofactory.com/img/diagrams/javascript/javascript-iterator.jpg)
