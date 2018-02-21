# react-native-dimensions-breakpoints
Allows code to make decisions based on named "breakpoints"

Uses the smaller size from the width or height of the window for calculations. Uses the [display pixels](https://facebook.github.io/react-native/docs/height-and-width.html#fixed-dimensions) of the devices, not pixels.

```
npm install --save react-native-dimensions-breakpoints
```

## Example

```javascript
import Breakpoints from "react-native-dimensions-breakpoints";

Breakpoints.configure({
	iphone: 375,
	ipad: 768,
});

if(Breakpoints.smallerThan("iphone"))
	console.log("On a tiny mobile device");

if(Breakpoints.largerThan("ipad))
	console.log("Might be an iPad pro or some huge tablet");
```