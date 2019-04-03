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

var game = new Phaser.Game(config);

function preload() {
	this.load.json('window_config', 'jsons/WindowTest.json');
	this.load.multiatlas('window_atlas', 'atlases/WindowTest_images.json', 'atlases/');
}

function create() {
	let clip = this.add.ui_component(
		game.cache.json.get('window_config'),
		['window_atlas']
	);

	var proto = new PhaserComps.UIComponents.UIComponentPrototype();
	proto.appendClip(clip);
}


