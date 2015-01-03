var APIkey = 'AIzaSyA1AjCF8cKGctUDXNLH2EhugauolpUfqs0'


function getvid(topic){
	console.log('here');
	var request = {
		part: 'snippet',
		key: 'AIzaSyA1AjCF8cKGctUDXNLH2EhugauolpUfqs0',
		q: topic
	}
	$.ajax({
		url: "https://www.googleapis.com/youtube/v3/search",
		data: request,
		dataType: "json",
		type: "GET",
		success: function(data){
			console.log('it worked!');
			console.log(data);
			displayResults(data);
		},
		error: function(){
			console.log('it failed :(');	
		}
	})
}

function displayResults(data){
	$('.results').text('');
	$.each(data.items, function(i, item){
		//link the video URL ------v
		if(item.id.kind === "youtube#video"){
			var img = "<img src='"+ item.snippet.thumbnails.medium.url +"'>";
			var thumb = "<a href='https://www.youtube.com/watch?v="+ item.id.videoId +"'>"+ img +"</a>";			
			//then link the thumbnail image ----^
			$('.results').append(thumb);
		}
	});
}

$(document).ready(function(){
	console.log('ready');
	$(".vid_search").submit(function(){
		var topic = $("input[name='entry']").val();
		$("input[name='entry']").val('');
		console.log('searching for ' + topic);
		getvid(topic);
	});
});