var Game =
{
	run: false,

	start: function()
	{
		this.run = true;
		this.loop();
	},

	loop: function()
	{
		if (Inputs.left)
			Hero.move_left();
		else if (Inputs.right)
			Hero.move_right();
		else if (Inputs.up)
			Hero.move_up();
		else if (Inputs.down)
			Hero.move_down();
		else
			Hero.sprite_active.x = 1;

		ctx.clearRect(0, 0, scene.width, scene.height);
		Hero.update();

		if (Game.run) setTimeout(Game.loop, 33);
	}
}
