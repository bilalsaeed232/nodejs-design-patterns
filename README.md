# NodeJS Design Patterns
13 most common object oriented design patterns as applied to node.js projects

## Factory
A Factory Method creates new objects as instructed by the client. One way to create objects in JavaScript is by invoking a constructor function with the new operator. There are situations however, where the client does not, or should not, know which one of several candidate objects to instantiate. The Factory Method allows the client to delegate object creation while still retaining control over which type to instantiate.

### Diagram
!['factory method diagram'](https://www.dofactory.com/img/diagrams/javascript/javascript-factory-method.jpg)
