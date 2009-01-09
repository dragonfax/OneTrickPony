function TimelineAssistant() {
	/* this is the creator function for your scene assistant object. It will be passed all the 
	   additional parameters (after the scene name) that were passed to pushScene. The reference
	   to the scene controller (this.controller) has not be established yet, so any initialization
	   that needs the scene controller should be done in the setup function below. */
}




TimelineAssistant.prototype.setup = function() {
	/* this function is for setup tasks that have to happen when the scene is first created */

	/*
		assign this for closure below
	*/
	// var tweets = this.public_timeline;
	
	function proxifyUrl(url) {
		var re = /https?:\/\/.[^\/:]*(?::[0-9]+)?/;
		var match = url.match(re);
		if (match && match[0] != Luna.hostingPrefix) {
			url = "/proxy?url=" + encodeURIComponent(url);
		}
		return url;
	}

	
	
	jQuery.get(proxifyUrl('https://twitter.com/statuses/user_timeline/funkatron.json'), function(data) {
		var tweets = JSON.parse(data);
		var content = Luna.View.render({
			collection: tweets,
			template: 'timeline/tweet',
			separator: 'timeline/separator'
		});
		$('timeline').update(content);
	});
	
	
	// new Ajax.Request('http://twitter.com/statuses/public_timeline.json', {
	// 	method:'get',
	// 	requestHeaders: {Accept: 'application/json'},
	// 	onSuccess: function(transport){
	// 		
	// 		var tweets = JSON.parse(transport.responseText);
	// 		
	// 		alert(tweets.length);
	// 		
	// 		var content = Luna.View.render({
	// 			collection: tweets,
	// 			template: 'timeline/tweet',
	// 			separator: 'timeline/separator'
	// 		});
	// 		$('timeline').update(content);
	// 	},
	// 	onFailure: function(){ alert('Something went wrong...') }
	// });
	

	// var twit = new SpazTwit('funkatron', 'polishsausage');
	// 
	// twit.getPublicTimeline();

	// new Ajax.Request('https://twitter.com/statuses/public_timeline.json', {
	// 	method:'get',
	// 	requestHeaders: {Accept: 'application/json'},
	// 	onSuccess: function(transport){
	// 

	// 	},
	// 	onFailure: function(){ alert('Something went wrong...') }
	// });

		
		// $j.get('http://twitter.com/statuses/public_timeline.json', function(data){
		// 	alert(data)
		// 	tweets = JSON.parse(data);
		// 	//render the object using a partial template.
		// 	var content = Luna.View.render({
		// 										collection: tweets,
		// 										template: 'timeline/tweet',
		// 										separator: 'timeline/separator'
		// 								});
		// 	$('timeline').update(content);
		// 
		// });




	/* use Luna.View.render to render view templates and add them to the scene, if needed. */
	
	/* setup widgets here */
	
	/* add event handlers to listen to events from widgets */
}

TimelineAssistant.prototype.activate = function(event) {
	/* put in event handlers here that should only be in effect when this scene is active. For
	   example, key handlers that are observing the document */
}


TimelineAssistant.prototype.deactivate = function(event) {
	/* remove any event handlers you added in activate and do any other cleanup that should happen before
	   this scene is popped or another scene is pushed on top */
}

TimelineAssistant.prototype.cleanup = function(event) {
	/* this function should do any cleanup needed before the scene is destroyed as 
	   a result of being popped off the scene stack */
}




TimelineAssistant.prototype.public_timeline = [
    {
        "user": {
            "followers_count": 3,
            "description": "Curioso de plantão! Gosto de ",
            "url": "http:\/\/www.promovendo.vc",
            "profile_image_url": "http:\/\/s3.amazonaws.com\/twitter_production\/profile_images\/64669525\/foto0_normal.JPG",
            "protected": false,
            "location": "Maceió -AL \/ Recife - PE",
            "screen_name": "erisoliveira",
            "name": "Eris",
            "id": "17427986"
        },
        "text": "CAPITUUUUUU! ♫ http:\/\/blip.fm\/~16pxn",
        "truncated": false,
        "favorited": false,
        "in_reply_to_user_id": null,
        "created_at": "Tue Dec 16 21:34:35 +0000 2008",
        "source": "blipfm",
        "in_reply_to_status_id": null,
        "id": "1061470595"
    },
    {
        "user": {
            "followers_count": 17,
            "description": "Developer &amp; researcher in social media and games, founder",
            "url": "http:\/\/www.markbuchholz.de",
            "profile_image_url": "http:\/\/s3.amazonaws.com\/twitter_production\/profile_images\/64894949\/IMG_015_3_quadrat_normal.jpg",
            "protected": false,
            "location": "Hamburg, Germany",
            "screen_name": "markbuchholz",
            "name": "Mark Buchholz",
            "id": "17486193"
        },
        "text": "TV is a slow medium. It takes ages to find proper content, if there is any. The web allows much more efficient filtering. And is cheaper.",
        "truncated": false,
        "favorited": false,
        "in_reply_to_user_id": null,
        "created_at": "Tue Dec 16 21:34:39 +0000 2008",
        "source": "spaz",
        "in_reply_to_status_id": null,
        "id": "1061470594"
    },
    {
        "user": {
            "followers_count": 120,
            "description": "21, Latein und Geschichtsstudent, angehender Lehrer aus dem Norden Deutschlands",
            "url": "http:\/\/konna.pytalhost.de\/",
            "profile_image_url": "http:\/\/s3.amazonaws.com\/twitter_production\/profile_images\/57282089\/blogview-konna_normal.jpg",
            "protected": false,
            "location": "Schleswig-Holstein",
            "screen_name": "_konna_",
            "name": "Konna",
            "id": "15613782"
        },
        "text": "@curi0usities Nö, du nicht, du bist ne Heulsuse. :P Aber kriegst zu Silvester Alkohol, okay? ^^",
        "truncated": false,
        "favorited": false,
        "in_reply_to_user_id": 14088552,
        "created_at": "Tue Dec 16 21:34:38 +0000 2008",
        "source": "tweetdeck",
        "in_reply_to_status_id": 1061468220,
        "id": "1061470593"
    },
    {
        "user": {
            "followers_count": 428,
            "description": "",
            "url": "http:\/\/www.2nn.jp\/",
            "profile_image_url": "http:\/\/s3.amazonaws.com\/twitter_production\/profile_images\/21742522\/2NN_normal.gif",
            "protected": false,
            "location": "",
            "screen_name": "2NN",
            "name": "2NN",
            "id": "5507772"
        },
        "text": "【サッカー\/Jリーグ】平山相太との\u201c国見ライン\u201d復活!?福岡・MF中村北斗のFC東京入り有力「後は先方との話し合い次第」 http:\/\/tinyurl.com\/5lupew",
        "truncated": false,
        "favorited": false,
        "in_reply_to_user_id": null,
        "created_at": "Tue Dec 16 21:34:36 +0000 2008",
        "source": "twitterfeed",
        "in_reply_to_status_id": null,
        "id": "1061470592"
    },
    {
        "user": {
            "followers_count": 228,
            "description": "I ♥ SL ",
            "url": "",
            "profile_image_url": "http:\/\/s3.amazonaws.com\/twitter_production\/profile_images\/63889722\/goof2_normal.jpg",
            "protected": false,
            "location": "Toulon, France\/Lake Metigoshe,",
            "screen_name": "BevanWhitfield",
            "name": "BevanWhitfield",
            "id": "13568912"
        },
        "text": "@CatNight  hi and thank you for the follow (btw this is the first twitter follower email I've had in ages!  Hello to anyone else I missed!)",
        "truncated": false,
        "favorited": false,
        "in_reply_to_user_id": 15773762,
        "created_at": "Tue Dec 16 21:34:40 +0000 2008",
        "source": "web",
        "in_reply_to_status_id": 1061410512,
        "id": "1061470590"
    },
    {
        "user": {
            "followers_count": 32,
            "description": "Retired academic.",
            "url": "http:\/\/josh.corduroy.biz",
            "profile_image_url": "http:\/\/s3.amazonaws.com\/twitter_production\/profile_images\/32956812\/Photo_7_normal.jpg",
            "protected": false,
            "location": "iPhone: -33.832512,151.239487",
            "screen_name": "corduroy",
            "name": "Josh",
            "id": "9372732"
        },
        "text": "@rotub please feel free to keep this information to yourself. Thanks.",
        "truncated": false,
        "favorited": false,
        "in_reply_to_user_id": 14131073,
        "created_at": "Tue Dec 16 21:34:37 +0000 2008",
        "source": "twitterfon",
        "in_reply_to_status_id": 1061451363,
        "id": "1061470589"
    },
    {
        "user": {
            "followers_count": 146,
            "description": "Strategy, New Product Development, Popculture, Blogger, Word of mouth marketing, writer.",
            "url": "http:\/\/www.mybrandedlife.com",
            "profile_image_url": "http:\/\/s3.amazonaws.com\/twitter_production\/profile_images\/65628635\/stereo_stumpie_normal.jpg",
            "protected": false,
            "location": "Cape Town, South Africa",
            "screen_name": "MyBrandedLifeTM",
            "name": "Alex van Tonder",
            "id": "3350421"
        },
        "text": "Reading Possible Side Effects by Augusten Burroughs. Wonder if he changed his name so he could be next to The Naked Lunch on shelf.",
        "truncated": false,
        "favorited": false,
        "in_reply_to_user_id": null,
        "created_at": "Tue Dec 16 21:34:35 +0000 2008",
        "source": "mobile",
        "in_reply_to_status_id": null,
        "id": "1061470588"
    },
    {
        "user": {
            "followers_count": 262,
            "description": "Arrogant. Pretentious. Right",
            "url": "http:\/\/deepanalysis.blogspot.com",
            "profile_image_url": "http:\/\/s3.amazonaws.com\/twitter_production\/profile_images\/21428922\/ben_head_shot_normal.jpg",
            "protected": false,
            "location": "Joliet, IL, US",
            "screen_name": "kodemage",
            "name": "Benjamin F. Klahn",
            "id": "715693"
        },
        "text": "My inbox reminds me more and more of 4chan every day...",
        "truncated": false,
        "favorited": false,
        "in_reply_to_user_id": null,
        "created_at": "Tue Dec 16 21:34:37 +0000 2008",
        "source": "web",
        "in_reply_to_status_id": null,
        "id": "1061470587"
    },
    {
        "user": {
            "followers_count": 19,
            "description": "I like music-making-boxes, computer-boxes, reading-boxes, xboxes and wii-boxes. Slackware rocks, so does Renoise and the SidStation. Weehee! =]",
            "url": "http:\/\/virb.com\/batni",
            "profile_image_url": "http:\/\/s3.amazonaws.com\/twitter_production\/profile_images\/64040223\/facebook_nov_2008_small_normal.png",
            "protected": false,
            "location": "Aurskog, Norway",
            "screen_name": "batni",
            "name": "batni",
            "id": "15232381"
        },
        "text": "make your own soundcard. fun. http:\/\/turl.no\/2ov to bad i know silch about diy electronics. :P",
        "truncated": false,
        "favorited": false,
        "in_reply_to_user_id": null,
        "created_at": "Tue Dec 16 21:34:39 +0000 2008",
        "source": "web",
        "in_reply_to_status_id": null,
        "id": "1061470586"
    },
    {
        "user": {
            "followers_count": 32,
            "description": "Im a big gamer. A Mac and iPhone geek. I love Disney",
            "url": "http:\/\/myspace.com\/antman_158",
            "profile_image_url": "http:\/\/s3.amazonaws.com\/twitter_production\/profile_images\/63017820\/IMG_0052_normal.JPG",
            "protected": false,
            "location": "Trenton \/ Chattanooga",
            "screen_name": "antman157",
            "name": "Anthony",
            "id": "16152461"
        },
        "text": "@jaedid me!",
        "truncated": false,
        "favorited": false,
        "in_reply_to_user_id": 14629510,
        "created_at": "Tue Dec 16 21:34:34 +0000 2008",
        "source": "twitterrific",
        "in_reply_to_status_id": 1061428222,
        "id": "1061470585"
    },
    {
        "user": {
            "followers_count": 73,
            "description": "i'm crazy. i take pills. ",
            "url": "http:\/\/datingisthenewawkward.blogspot.com",
            "profile_image_url": "http:\/\/s3.amazonaws.com\/twitter_production\/profile_images\/63992680\/JaimeL-July08-0057-BW-web_normal.jpg",
            "protected": false,
            "location": "paris, france. in my mind.",
            "screen_name": "empressofchaime",
            "name": "Empress of Chaime",
            "id": "14364701"
        },
        "text": "@beaudotgiles 10k forced ruck march actually does sound like fun in a really, really maschoistic way. :\\",
        "truncated": false,
        "favorited": false,
        "in_reply_to_user_id": 15840289,
        "created_at": "Tue Dec 16 21:34:36 +0000 2008",
        "source": "web",
        "in_reply_to_status_id": 1061469161,
        "id": "1061470584"
    },
    {
        "user": {
            "followers_count": 47,
            "description": "Mom Entreupreuer started My Little Pakora-Organic Baby Clothes",
            "url": "http:\/\/www.mylittlepakora.com",
            "profile_image_url": "http:\/\/s3.amazonaws.com\/twitter_production\/profile_images\/61002868\/MLP01_logo_FNL_RGB_TAG_normal.jpg",
            "protected": false,
            "location": "Belmont, MA",
            "screen_name": "MyLittlePakora",
            "name": "MyLittlePakora",
            "id": "16527953"
        },
        "text": "Raffle: win 4 set of Long Sleeve T-Shirts-email me for details....20% off entire purchase...free shipping on over $50 worth of product",
        "truncated": false,
        "favorited": false,
        "in_reply_to_user_id": null,
        "created_at": "Tue Dec 16 21:34:37 +0000 2008",
        "source": "web",
        "in_reply_to_status_id": null,
        "id": "1061470583"
    },
    {
        "user": {
            "followers_count": 216,
            "description": "Since 1987.",
            "url": "http:\/\/meadiciona.com\/joaoo",
            "profile_image_url": "http:\/\/s3.amazonaws.com\/twitter_production\/profile_images\/66670814\/Twitter_normal.jpg",
            "protected": false,
            "location": "Pato Branco - Brasil",
            "screen_name": "joaoo",
            "name": "João Otávio",
            "id": "16048130"
        },
        "text": "Vo toma banho, por pijama de inverno, ir pra sala e voltar como nos tempos de terceirão, ver tv! (na época, Betty, a feia na !)",
        "truncated": false,
        "favorited": false,
        "in_reply_to_user_id": null,
        "created_at": "Tue Dec 16 21:34:38 +0000 2008",
        "source": "web",
        "in_reply_to_status_id": null,
        "id": "1061470582"
    },
    {
        "user": {
            "followers_count": 4,
            "description": "Your average weird girl.",
            "url": "",
            "profile_image_url": "http:\/\/s3.amazonaws.com\/twitter_production\/profile_images\/67627508\/me_2_normal.JPG",
            "protected": false,
            "location": "Aruba",
            "screen_name": "Kuraiite",
            "name": "Shari",
            "id": "15141931"
        },
        "text": "@cerealck1 yeah :( my legs hurt so much, I'm gonna die!",
        "truncated": false,
        "favorited": false,
        "in_reply_to_user_id": 16045803,
        "created_at": "Tue Dec 16 21:34:38 +0000 2008",
        "source": "web",
        "in_reply_to_status_id": 1061440699,
        "id": "1061470581"
    },
    {
        "user": {
            "followers_count": 14,
            "description": "",
            "url": "",
            "profile_image_url": "http:\/\/s3.amazonaws.com\/twitter_production\/profile_images\/56494822\/tomashustoles-32_normal.jpg",
            "protected": false,
            "location": "",
            "screen_name": "txh",
            "name": "txh",
            "id": "15390805"
        },
        "text": "@protiva Ta Guarana je husta vec :D",
        "truncated": false,
        "favorited": false,
        "in_reply_to_user_id": 15391605,
        "created_at": "Tue Dec 16 21:34:37 +0000 2008",
        "source": "web",
        "in_reply_to_status_id": 1061448877,
        "id": "1061470579"
    },
    {
        "user": {
            "followers_count": 12,
            "description": "",
            "url": "http:\/\/www.atonn.com",
            "profile_image_url": "http:\/\/s3.amazonaws.com\/twitter_production\/profile_images\/66178110\/me_portrait5_normal.jpg",
            "protected": false,
            "location": "Bowling Green",
            "screen_name": "operadiva1906",
            "name": "operadiva1906",
            "id": "14385897"
        },
        "text": "Started one for Ohio...not even near finished to start promoting yet...but soon...",
        "truncated": false,
        "favorited": false,
        "in_reply_to_user_id": null,
        "created_at": "Tue Dec 16 21:34:37 +0000 2008",
        "source": "web",
        "in_reply_to_status_id": null,
        "id": "1061470578"
    },
    {
        "user": {
            "followers_count": 192,
            "description": "Programador web, amante de la web 2.0 y geek incondicional",
            "url": "http:\/\/www.wellcometomyworld.com",
            "profile_image_url": "http:\/\/s3.amazonaws.com\/twitter_production\/profile_images\/64923899\/DSC00795_normal.jpg",
            "protected": false,
            "location": "Barcelona, España",
            "screen_name": "Hades87",
            "name": "Sergio de Candelario",
            "id": "14287752"
        },
        "text": "@jorx me he perdido en algun punto del ciberespacio",
        "truncated": false,
        "favorited": false,
        "in_reply_to_user_id": 12716092,
        "created_at": "Tue Dec 16 21:34:37 +0000 2008",
        "source": "twhirl",
        "in_reply_to_status_id": 1061468994,
        "id": "1061470577"
    },
    {
        "user": {
            "followers_count": 74,
            "description": "Technical interested Student",
            "url": "http:\/\/macworkblog.blogspot.com",
            "profile_image_url": "http:\/\/s3.amazonaws.com\/twitter_production\/profile_images\/65181307\/lba_normal.jpg",
            "protected": false,
            "location": "Potsdammer Playtz, Berlin",
            "screen_name": "macode",
            "name": "lba",
            "id": "14096024"
        },
        "text": "AHHHH, endlich wieder zu Hause, jetzt noch Chemievortrag, bis eben Technik auf dem Schulfest gemacht.",
        "truncated": false,
        "favorited": false,
        "in_reply_to_user_id": null,
        "created_at": "Tue Dec 16 21:34:38 +0000 2008",
        "source": "natsulion",
        "in_reply_to_status_id": null,
        "id": "1061470576"
    },
    {
        "user": {
            "followers_count": 301,
            "description": "Aloha! My name is Jamee and I create jewelry inspired by my home, the beautiful island of Maui. I specialize in beach wedding jewelry.",
            "url": "http:\/\/www.jonarablumaui.com",
            "profile_image_url": "http:\/\/s3.amazonaws.com\/twitter_production\/profile_images\/63989327\/honu_brac_normal.jpg",
            "protected": false,
            "location": "Maui, Hawaii",
            "screen_name": "jonarablu",
            "name": "jonarablu",
            "id": "14576529"
        },
        "text": "RT @honadv: Shark sighted near shore at Makaha Beach Park: City lifeguards have posted warning signs advising surfers .. http:\/\/bit.ly\/dVEt",
        "truncated": false,
        "favorited": false,
        "in_reply_to_user_id": null,
        "created_at": "Tue Dec 16 21:34:34 +0000 2008",
        "source": "twhirl",
        "in_reply_to_status_id": null,
        "id": "1061470575"
    },
    {
        "user": {
            "followers_count": 8,
            "description": "I see the dopeness in everything ... and you just see the wackness.",
            "url": "http:\/\/cesontmesmots.livejournal.com",
            "profile_image_url": "http:\/\/s3.amazonaws.com\/twitter_production\/profile_images\/65247767\/s53300863_30539767_6078_normal.jpg",
            "protected": false,
            "location": "Atlanta, GA",
            "screen_name": "cettevieenrose",
            "name": "Kimberly Watt",
            "id": "17576018"
        },
        "text": "@kweenie You won't throw up, you won't throw up.  The digital delay didn't blow up exactly ... there may have been one teeny tiny spark ...",
        "truncated": false,
        "favorited": false,
        "in_reply_to_user_id": 15015040,
        "created_at": "Tue Dec 16 21:34:38 +0000 2008",
        "source": "web",
        "in_reply_to_status_id": 1061467882,
        "id": "1061470574"
    }
];

