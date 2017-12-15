var fs = require('fs');
var https = require('https');
fs.writeFile(__dirname + "/index.html","<h1>Node js is graet</h1>",function(error){
	if(error){
		return console.log(error);

	}else{
		return console.log('congrats');
	}
});

var photolocation = 'https://www.bing.com/images/search?view=detailv2&form=INRECC&it=IMG&st=REC&dt=IMG&ucid=generalFeed_26&id=51703718BE1C2C99B4BA53BBB5570A2647FF3227&ccid=AKf8nAlA&thid=OIP.AKf8nAlAtJjq4fNBNGqSJADIEs&first=1000&selectedindex=1003&iss=REC&expw=600&exph=900&ajaxhist=0&pagetoken=dt_image*fver_0*it_image*lft_gen*offset_0*st_rec*uci_generalFeed\_26*uft_gen&mediaurl=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2F736x%2Fb3%2F6c%2F09%2Fb36c091ce957371c629f454977334063--photography-tours-night-photography.jpg';
https.get(photolocation, function(response){
	
	response.pipe(fs.createWriteStream(__dirname + "/mydog.jpg"));
});