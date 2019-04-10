import WindowTest from "./WindowTest";

var config = {
	type: Phaser.AUTO,
	parent: 'example',
	backgroundColor: '#ffffff',
	width: 800,
	height: 600,
	scene: {
		preload: preload,
		create: create
	},
	plugins: {
		global: [
			PhaserComps.Plugin.DefaultCfg
		]
	}
};

window.game = new Phaser.Game(config);

function preload() {
	this.load.json('window_config', 'jsons/WindowTest.json');
	this.load.json('button_config', 'jsons/ButtonBlue.json');
	this.load.multiatlas('window_atlas', 'atlases/WindowTest_images.json', 'atlases/');
}

function create() {
	let clip = this.add.ui_component(
		game.cache.json.get('window_config'),
		['window_atlas']
	);

	let window = new WindowTest(this);
	window.appendClip(clip);
}


