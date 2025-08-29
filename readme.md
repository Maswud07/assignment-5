What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
--getElementById(id) → Returns 'a single element'with the specified id. (Always unique)
getElementsByClassName(string) → Returns a live HTMLCollection of all elements of that class.
querySelector( selector )→ Returns the first element, matching a CSS selector.
querySelectorAll( selector )=> Returns a 'static NodeList' of all elements that match a CSS selector.

How do you create and insert a new element into the DOM?
--A new element is created in the DOM by using the document.createElement() method, which generates the element in memory. To make it part of the document structure, it must then be inserted into the DOM tree using methods such as appendChild(), insertBefore(), or append().

What is Event Bubbling and how does it work?
--Event Bubbling, is a DOM mechanism in which an event originates on the innermost (target) element, and then travels upwards through its ancestors (parent - grandparent - etc. - document).
As an example, when you click on a <button> in a <div> the first event is the click on the <button> which then bubbles up to the <div> and would then keep on until the document root unless otherwise.

What is Event Delegation in JavaScript? Why is it useful?
--JavaScript Event Delegation is a method in which you do not add event listeners to a various child elements, but rather, only one event listener to a shared parent element. The event then bubbles up and you check the target of the event to take care of the action.
Why it is useful:
Efficiency - less memory usage to support event listening.
Dynamic elements - is not affected by the addition or removal of child elements later.
Cleaner code - more maintenance friendly as a single listener can handle a large number of child elements.

What is the difference between preventDefault() and stopPropagation() methods?
--preventDefault() → Stops the default action of an element from happening (e.g., stopping a form from submitting, or a link from navigating). It does not stop the event from propagating.


stopPropagation() → Stops the event flow (bubbling or capturing) so the event does not travel to parent/ancestor elements. It does not affect the element’s default behavior.


