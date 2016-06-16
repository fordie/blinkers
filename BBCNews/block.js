var selectors = [
	'a[href*="sport"]'

];
var containers = [
	'.pigeon__column',
	'.skylark.faux-block-link', 
	'.sparrow-item'

];
var blockwords = [
	'football',
	'Alex Ferguson',
	'Beckham',
	'Champions league'
];

var s = selectors.toString();
var c= containers.toString();

$(s).closest(c).hide();
$(c).each(function(){
	var str = $(this).text();
	console.log(str);
	length = blockwords.length;
	while(length--) {
	   if (str.indexOf(blockwords[length])!=-1) {
	       $(this).remove();
	   }
	}
})


