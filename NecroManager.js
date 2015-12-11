/**
 * Manage Undead for Necromancers in 5e
 */

/*
 * TODO: Check for Cookies and build with them if found
 * 
 * On Load, hook into UI div and build Basic Setup including:
 * Screen selector
 * Log + Functions
 * Screen UI
 * 
 */
$(document).ready(function(){
	/****Build Screen selector menu****/
	var d = document.createElement('div');
	$(d).addClass("menu")
	//Add other info as needed
	//.
	
	//Add to UI
	$(d).appendTo($("#ui"));
	
	/****Build Log element****/
	d = document.createElement('div');
	$(d).addClass("log")
	//Add other info as needed
	//.
	
	
	//Add to UI
	$(d).appendTo($("#ui"));
	
	
	/****Build Funtion element****/
	d = document.createElement('div');
	$(d).addClass("functions")
	//Add other info as needed
	//.
	
	//Add to UI
	$(d).appendTo($("#ui"));
	
	/****Build screen element****/
	d = document.createElement('div');
	$(d).addClass("screen")
	//Add other info as needed
	//.
	
	
	//Add to UI
	$(d).appendTo($("#ui"));
});

/*
 * Screen Selector:
 * Choose which screen you are working on.
 * Current intended screens:
 * 	My Stats
 * 		Used to determine: Level, Class, Relevant Features
 * 		Should plug into general stat object
 * 	My Undead
 * 		Used to manage list of undead, adding various types
 * 		Cusomization and removal handled on each specific undead
 * 			Change name, gear, and Misc. Mods for each stat
 */