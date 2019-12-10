$(document).ready(function(){ // program akan dijalankan ketika html dan css sudah diload semua


	$('#muatlebih').on('click', function(e){
		e.preventDefault();
		$.ajax({ // memanggil ajax ke artikel json
			type : 'GET',
			url : 'json/artikel.json',
			success : function(response){
				var templateHTML = '';
				// merender json ke artikel di html
				for (var i = 0; i < response.length; i++) {
					var item = response[i];
					templateHTML += '<div class="postingan"><div class="judul">'+item.judul+'</div><div class="konten">'+item.isi+'</div></div>'	
				}
				$('.postingan:last').after(templateHTML)
			},
			error : function(error){
				alert('JSON atau Ajax Error!!!')
			}
		});
	});

});