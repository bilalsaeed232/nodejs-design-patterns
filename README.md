# NodeJS Design Patterns
13 most common object oriented design patterns as applied to node.js projects

## Decorator
The Decorator pattern extends (decorates) an object’s behavior dynamically. The ability to add new behavior at runtime is accomplished by a Decorator object which ‘wraps itself’ around the original object. Multiple decorators can add or override functionality to the original object.

An example of a decorator is security management where business objects are given additional access to privileged information depending on the privileges of the authenticated user. For example, an HR manager gets to work with an employee object that has appended (i.e. is decorated with) the employee's salary record so that salary information can be viewed.

Decorators provide flexibility to statically typed languages by allowing runtime changes as opposed to inheritance which takes place at compile time. JavaScript, however, is a dynamic language and the ability to extend an object at runtime is baked into the language itself.

For this reason, the Decorator pattern is less relevant to JavaScript developers (but typescript does use it, i.e in Angular). In JavaScript the Extend and Mixin patterns subsume the Decorator pattern

### Diagram
!['decorator diagram'](https://www.dofactory.com/img/diagrams/javascript/javascript-decorator.jpg)

