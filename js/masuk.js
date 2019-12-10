function masuk(e){
	e.preventDefault();
	$('#modalMasuk').show();
	setTimeout(function(){
		window.location = 'index.html'
	}, 3000) // setelah 3 detik akan pindah ke beranda
}

$('#modalMasuk').on('click', function(){
	$('#modalMasuk').hide();
});

$(".modal").click(function(e) {
	e.stopPropagation();
});