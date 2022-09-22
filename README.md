# Simple Tasks
For each version of this project, I will leave a summary information about what I learned while doing it   
➡️ [Live here](https://iamdennshi.github.io/simple-task/) (version 1)

## What new I have learned?
### In 1️⃣ version:
* __`Selector`__ - select the HTML elements you want to style
* __`root`__ - matches the document's html element (_for creating variables_)
``` css
:root {
    /* Variables */
    --dark: #374151;
    --darker: #1f2937;
}
body {
    /* using variable*/
    background: var(--dark);
}
```
* To select all elements
``` css
* {
    margin: 0;
}
```
* Selector `#id` can only be used once.
* Selector `.class` - many
* Selector `#id` has a higer priority than `.class`
* Prefix used for specific browsers (-webkit)
