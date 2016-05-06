var Ui =
{
	init: function()
	{
		this.update();
		var ranges = document.querySelectorAll("input");
		ranges[0].value = 5;
		ranges[1].value = 15;
	},

	update: function()
	{
		scene.width = window.innerWidth;
		scene.height = window.innerHeight;
		scene.style.width = window.innerWidth + "px";
		scene.style.height = window.innerHeight + "px";
	}
}
