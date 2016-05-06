var Inputs =
{
	left: false,
	right: false,
	up: false,
	down: false,

	init: function()
	{
		window.addEventListener("keydown", this.key_down, false);
		window.addEventListener("keyup", this.key_up, false);
	},

	key_down: function(e)
	{
		if (e.keyCode == 37 || e.keyCode == 65 || e.keyCode == 81) // Left
			Inputs.left = true;
		if (e.keyCode == 39 || e.keyCode == 68) // Right
			Inputs.right = true;
		if (e.keyCode == 38 || e.keyCode == 87 || e.keyCode == 90) // Up
			Inputs.up = true;
		if (e.keyCode == 40 || e.keyCode == 83) // Down
			Inputs.down = true;
	},

	key_up: function(e)
	{
		if (e.keyCode == 37 || e.keyCode == 65 || e.keyCode == 81) // Left
			Inputs.left = false;
		if (e.keyCode == 39 || e.keyCode == 68) // Right
			Inputs.right = false;
		if (e.keyCode == 38 || e.keyCode == 87 || e.keyCode == 90) // Up
			Inputs.up = false;
		if (e.keyCode == 40 || e.keyCode == 83) // Down
			Inputs.down = false;
	}
}
