var Engine =
{
	init: function()
	{
		Ui.init();
		Inputs.init();
		Hero.init();

		window.addEventListener("resize", Ui.update, false);
	}
}
