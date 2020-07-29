$(document).ready(function(){
	var creampie = "https://drive.google.com/uc?export=download&id=";
	$('a[href^="https://drive.google.com/open?"]').each(function(){ 
		var Janda = $(this).attr("href"); 
		var Perawan = Janda.replace("https://drive.google.com/open?id=", creampie); 
		$(this).attr("id", "crot"); 
		$(this).attr("href", Perawan); 
		var ubah = document.getElementById("crot").href;
		$(this).attr("style", "display:none;"); 
	
		var vbuka = ' pause controls controlsList="nodownload" oncontextmenu="return false;" style="width:100%;height:270px;">\n'+
		'<source src="';
		var vtutup = '" type="video/mp4"></video>';
		$('#iframeHolder').html( '<video ' + vbuka + ubah  + vtutup );
	
	});
	
  $('a[href^="http://hentai.dx.am/id?=1"]').each(function(){
    var LS1 = $(this).attr("href"); 
		var VS1 = LS1.replace("http://hentai.dx.am/id?=1&v=", creampie); 
		$(this).attr("id", "LS1"); 
		$(this).attr("href", VS1); 
  		var Server1 = document.getElementById("LS1").href;
		$(this).attr("style", "display:none;"); 
    		$('#ListServer').html( ' <button id="Serv1">Server1</button> ' );
    			$("#Serv1").click(function(){
			var vbuka = ' pause controls controlsList="nodownload" oncontextmenu="return false;" style="width:100%;height:270px;">\n'+
			'<source src="';
			var vtutup = '" type="video/mp4"></video>';
			$('#iframeHolder').html( '<video ' + vbuka + Server1  + vtutup );
		});
  });
});
