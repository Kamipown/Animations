var Hero =
{
	sprite_sheet: undefined,
	sprite_path: "img/hero.png",
	sprite_width: 32,
	sprite_height: 48,
	sprite_active: {x: 1, y: 0},
	sprite_direction: 0,

	posx: 550,
	posy: 150,

	move_speed: 5,
	animation_speed: 5,
	frame_count: 0,


	init: function()
	{
		var self = this;
		this.sprite_sheet = new Image();
		this.sprite_sheet.src = this.sprite_path;
		this.sprite_sheet.onload = function()
		{
			Game.start();
		}
	},

	update: function()
	{
		if (this.frame_count == this.animation_speed)
		{
			this.frame_count = 0;
			this.update_sprite();
		}
		this.display();
	},

	update_sprite: function()
	{
		if (this.sprite_active.x == 0)
		{
			++this.sprite_active.x;
			++this.sprite_direction;
		}
		else if (this.sprite_active.x == 2)
		{
			--this.sprite_active.x;
			--this.sprite_direction;
		}
		else if (this.sprite_active.x == 1)
			if (this.sprite_direction == 0)
				--this.sprite_active.x;
			else
				++this.sprite_active.x;
	},

	display: function()
	{
		ctx.drawImage(
			this.sprite_sheet,
			this.sprite_active.x * this.sprite_width,
			this.sprite_active.y * this.sprite_height,
			this.sprite_width,
			this.sprite_height,
			this.posx,
			this.posy,
			this.sprite_width,
			this.sprite_height
		);
	},

	move_left: function()
	{
		++this.frame_count;
		this.posx -= this.move_speed;
		if (this.sprite_active.y != 1)
			this.sprite_active.y = 1;
	},

	move_right: function()
	{
		++this.frame_count;
		this.posx += this.move_speed;
		if (this.sprite_active.y != 2)
			this.sprite_active.y = 2;
	},

	move_up: function()
	{
		++this.frame_count;
		this.posy -= this.move_speed;
		if (this.sprite_active.y != 3)
			this.sprite_active.y = 3;
	},

	move_down: function()
	{
		++this.frame_count;
		this.posy += this.move_speed;
		if (this.sprite_active.y != 0)
			this.sprite_active.y = 0;
	},

	set_move_speed: function(val)
	{
		this.move_speed = parseInt(val);
	},

	set_animation_speed: function(val)
	{
		this.animation_speed = 21 - parseInt(val);
		this.frame_count = 0;
	}
}
