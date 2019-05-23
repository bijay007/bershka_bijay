### *Relative*
Element with property `relative` positions itself relative to where it would normally be. Default position for all element in DOM is the `top left` corner. Let's suppose we have a single button element in our page with class `chat-button`. If you don't add any styles to it, it would position itself to the `top left` of the page.  Let's style it.
```
.chat-button {
    position: relative;
    top: 50px;
    left: 50px;
}
```
Now this element is positioned **50px to the left and 50px down** from its original position. Note that it won't effect other elements positioning and hence cause overlaps if other element already exists at its new position.

### *Fixed*
Elements with property `fixed` position themselves relative to the viweport, neglecting all other elements positioning. Accepts `top`, `bottom`, `left`, and `right` properties to define the its spacing relative to the viewport.
```
.chat-button {
    position: fixed;
    bottom: 0;
    right: 50px;
}
```
In the case above, any element with class `chat-button` will be placed on the **bottom right**  corner of the viewport with 50px gap to its right. A good example can be seen in the [Bershka homepage](https://www.bershka.com/es/mujer-c1010193132.html "Bershka homepage") where there is a chat button in the bottom right corner that always stays there even when scrolling.

### *Absolute*
Element with property `absolute` positions itself relative to its nearest parent. Just like `fixed`, it also accepts `top`, `bottom`, `left`, and `right` properties. One catch is that, it needs a relatively placed parent (ie parent with `position: relative`) as its reference. Else it positions itself relative to the `body` element. eg
```
.chat-button {
    position: absolute;
    top: 50%;
    left: 50%;
}
```
In the case above, any element with class `chat-button` will be placed at the **center**  of its parent container containing `property: relative` or the body if none found. This was a very common way to center elements before we had flexbox and grids.