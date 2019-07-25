var data = [
	{
		time:"2015-03-29 23:59:59",
		body:[
			 {
				 tag		:"h1",
				 content	:"Lorem ipsum",
				 attr	: {
						 href	: 'http://albertino.eti.br',
						 target	: '_blank',
						 title	: 'Albertino Júnior'
				 }
			 },
			 {
				 tag		:"a",
				 content	:"Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa, suscipit eu elit urna in urna, gravida wisi aenean eros massa, cursus quisque leo quisque dui.",
				 attr	: {
						 href	: 'http://albertino.eti.br',
						 target	: '_blank',
						 title	: 'Albertino Júnior'
				 }
			   }
		]
	 },
	 {
		time:"2015-04-15 23:59:59",
		body:[
		   {
			  tag:"h1",
			  content:"Lorem ipsum"
		   },
		   {
			  tag:"p",
			  content:"Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa, suscipit eu elit urna in urna, gravida wisi aenean eros massa, cursus quisque leo quisque dui."
		   }
		]
	 },
	 {
		time:"2016-01-20 23:29:59",
		body:[
		   {
			  tag:"h1",
			  content:"Lorem ipsum"
		   },
		   {
			  tag:"p",
			  content:"Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa, suscipit eu elit urna in urna, gravida wisi aenean eros massa, cursus quisque leo quisque dui. See <a href=\"https://github.com/Albejr/jquery-albe-timeline\" target=\"_blank\">more details</a>"
		   }
		]
	 },
	 {
		time:"2013-01-26 23:59:59",
		body:[
		   {
			  tag:"h1",
			  content:"Lorem ipsum"
		   },
		   {
			  tag:"p",
			  content:"Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa, suscipit eu elit urna in urna, gravida wisi aenean eros massa, cursus quisque leo quisque dui."
		   }
		]
	 },
	 {
		time:"2013-01-25 23:59:59",
		body:[
		   {
			  tag:"h1",
			  content:"Lorem ipsum"
		   },
		   {
			  tag:"p",
			  content:"Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa, suscipit eu elit urna in urna, gravida wisi aenean eros massa, cursus quisque leo quisque dui."
		   }
		]
	 },
	 {
		time:"2013-01-24 23:59:59",
		body:[
		   {
			  tag:"h1",
			  content:"Lorem ipsum"
		   },
		   {
			  tag:"p",
			  content:"Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa, suscipit eu elit urna in urna, gravida wisi aenean eros massa, cursus quisque leo quisque dui."
		   }
		]
	 },
	 {
		time:"2013-01-23 23:59:59",
		body:[
		   {
			  tag:"h1",
			  content:"Lorem ipsum"
		   },
		   {
			  tag:"p",
			  content:"Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa, suscipit eu elit urna in urna, gravida wisi aenean eros massa, cursus quisque leo quisque dui."
		   }
		]
	 },
	 {
		time:"2013-01-22 23:59:59",
		body:[
		   {
			  tag:"h1",
			  content:"Lorem ipsum"
		   },
		   {
			  tag:"p",
			  content:"Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa, suscipit eu elit urna in urna, gravida wisi aenean eros massa, cursus quisque leo quisque dui."
		   }
		]
	 },
	 {
		time:"2013-01-21 23:59:59",
		body:[
		   {
			  tag:"h1",
			  content:"Lorem ipsum"
		   },
		   {
			  tag:"p",
			  content:"Lorem ipsum dolor sit amet, nisl lorem, wisi egestas orci tempus class massa, suscipit eu elit urna in urna, gravida wisi aenean eros massa, cursus quisque leo quisque dui."
		   }
		]
	 },
 
 ];

$.fn.albeTimeline.languages = {
	"de-DE": {
			days			: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
			months			: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
			shortMonths		: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
			msgEmptyContent	: "keine Information."
	},
	"en-US": {
			days			: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			months			: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			shortMonths		: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			msgEmptyContent	: "No information to display."
	},
	"en-GB": {
			days			: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			months			: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			shortMonths		: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			msgEmptyContent	: "No information to display."
	},
	"fr-FR": {
			days			: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
			months			: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
			shortMonths		: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"],
			msgEmptyContent	: "Aucune information à afficher."
	},
	"ru-RU": {
			days			: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
			months			: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
			shortMonths		: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"],
			msgEmptyContent	: "Aucune information à afficher."
	},
	"ar-AE": {
			days			: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
			months			: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
			shortMonths		: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"],
			msgEmptyContent	: "Aucune information à afficher."
	},
	"es-ES": {
			days			: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
			months			: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
			shortMonths		: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"],
			msgEmptyContent	: "Aucune information à afficher."
	},
	"zh-CN": {
			days			: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
			months			: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
			shortMonths		: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"],
			msgEmptyContent	: "Aucune information à afficher."
	},
	"zh-HK": {
			days			: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
			months			: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
			shortMonths		: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"],
			msgEmptyContent	: "Aucune information à afficher."
	},
	"is-IS": {
			days			: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
			months			: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
			shortMonths		: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"],
			msgEmptyContent	: "Aucune information à afficher."
	}
};

