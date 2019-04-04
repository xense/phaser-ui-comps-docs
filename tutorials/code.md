<h3>Window Example</h3>
```javascript
import PhaserComps from 'phaser-ui-comps';

class MyWindow extends PhaserComps.UIComponents.UIComponentPrototype {
	constructor() {
		super(); 
		// we dont need to pass parent and key to super, 
		// if this class expected to be the root component,
		// and ComponentClip will be applied to it  
		
		// set textfield with key "title" text
		setText("title", "Window Title");
		
		// create some button and listen to its click
		let button = new PhaserComps.UIComponents.UIButton(
			this,
			"my_button",
			"Click Me"
		);
		button.on(PhaserComps.UIComponents.UIButton.EVENT_CLICK, this.onButtonClick, this);
		
		// create some radio buttons
		let radio1 = new PhaserComps.UIComponents.UIButtonRadio(
			this,
			"my_radio_1",
			"Radio 1 label",
			1 // here can be any value you want to get, when radio is selected
		);
		
		let radio2 = new PhaserComps.UIComponents.UIButtonRadio(
			this, 
			"my_radio_2",
			"Radio 2 label",
			radio1,
			2
		);
		
		let radio3 = new PhaserComps.UIComponents.UIButtonRadio(
        	this, 
        	'my_radio_3',
        	"Radio 3 label",
        	radio1, // all other buttons must append to first button, if they are in same group
        	3
        );
		
		// set first radio selected
		radio1.select = true;
		
		// you don't need to listen all radios in the group, just one of them.
		// each of them will emit selection event of other buttons in the group too
		radio1.on(PhaserComps.UIComponents.UIButtonRadio.EVENT_SELECT, this.onRadioSelect, this);
	}
	
	onButtonClick() {
		console.log("Button clicked");
	}
	
	onRadioSelect(value) {
		console.log("radio selected value:", value);
	}
	
}
```
