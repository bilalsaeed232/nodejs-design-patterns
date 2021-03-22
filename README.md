# NodeJS Design Patterns
13 most common object oriented design patterns as applied to node.js projects

## Builder
The Builder pattern allows a client to construct a complex object by specifying the type and content only. Construction details are hidden from the client entirely.

The most common motivation for using Builder is to simplify client code that creates complex objects. The client can still direct the steps taken by the Builder without knowing how the actual work is accomplished. Builders frequently encapsulate construction of Composite objects (another GoF design pattern) because the procedures involved are often repetitive and complex.

### Diagram
!['builder diagram'](https://www.dofactory.com/img/diagrams/javascript/javascript-builder.jpg)
