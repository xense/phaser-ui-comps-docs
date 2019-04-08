export default class WindowTest extends PhaserComps.UIComponents.UIComponentPrototype {
	constructor() {
		super();

		this.setText('title', 'WOW SUCH TITLE!');

		// create first tab and listen to its group selection events
		// tab values will be used here as component state ids
		this._firstTab = new PhaserComps.UIComponents.UIButtonRadio(this, 'tab_1', 'Buttons', 'buttons');
		this._firstTab.on(PhaserComps.UIComponents.UIButtonRadio.EVENT_SELECT, this.onTabSelect, this);

		// create other tabs
		new PhaserComps.UIComponents.UIButtonRadio(this, 'tab_2', 'Scrollbars', 'scroll', this._firstTab);
		new PhaserComps.UIComponents.UIButtonRadio(this, 'tab_3', 'Progressbars', 'progress', this._firstTab);
		this.lastTab = new PhaserComps.UIComponents.UIButtonRadio(
			this,
			'tab_4',
			'Other stuff',
			'other',
			this._firstTab
		);

		///////// TAB 1
		// create checkbox, that will enable/dissble last tab
		this.btn_check = new PhaserComps.UIComponents.UIButtonSelect(this, 'btn_check_last_tab', 'Enable last tab');
		this.btn_check.on(PhaserComps.UIComponents.UIButtonSelect.EVENT_CLICK, this.onCheckLastTab, this);
		this.btn_check.select = true;

		// simple buttons, that change status text field
		new PhaserComps.UIComponents.UIButton(this, 'btn_1', 'Some button').on(
			PhaserComps.UIComponents.UIButton.EVENT_CLICK, () => {
				this.setText('status', 'You clicked some button');
			},
			this
		);

		new PhaserComps.UIComponents.UIButton(this, 'btn_2', 'Other button').on(
			PhaserComps.UIComponents.UIButton.EVENT_CLICK, () => {
				this.setText('status', 'You clicked other button');
			},
			this);

		// this button will show how disable state works
		new PhaserComps.UIComponents.UIButton(this, 'btn_3', 'Last button').enable = false;



		/////////// TAB 2
		new PhaserComps.UIComponents.UIScrollPanel(this, 'txt_scrolling', 'scroll_bar_1', 'DIMENSIONS', true);


		let bar2 = new PhaserComps.UIComponents.UIScrollBar(this, 'scroll_bar_2', false);
		bar2.setValueBounds(50, 250, 20);
		bar2.on(PhaserComps.UIComponents.UIScrollBar.EVENT_CHANGE, this.onScrollBar2, this);


		/////////// TAB 3

		let scrollForProgress = new PhaserComps.UIComponents.UIScrollBar(this, "scroll_bar_progress", false);
		scrollForProgress.on(PhaserComps.UIComponents.UIScrollBar.EVENT_CHANGE, this.onScrollBarProgress, this);

		this.progressBar = new PhaserComps.UIComponents.UIProgressBar(this, "progress_bar_1");
		this.progressBar.value = scrollForProgress.value;

		this.progressBar2 = new PhaserComps.UIComponents.UIProgressBar(this, "progress_bar_2");
		this.progressBar2.value = scrollForProgress.value;




		// IMPORTANT! make doState after all child components created
		this._firstTab.select = true;
	}

	onScrollBarProgress(value) {
		this.progressBar.value = value;
		this.progressBar2.value = value;
	}

	onTabSelect(value) {
		console.log('selected tab value:', value);
		this.doState();
	}

	onCheckLastTab() {
		this.lastTab.enable = this.btn_check.select;
	}

	getStateId() {
		if (!this._firstTab) // when super calls getStateId, _firstTab is not created yet
			return 'buttons';

		return this._firstTab.valueSelected;
	}

	onScrollBar2(value) {
		this.setText('txt_bar_value', 'Bar value: ' + value);
	}
}