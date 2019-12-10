function validasi(e){
	var nama_lengkap = document.getElementById('nama_lengkap').value;
	var no_hp = document.getElementById('no_hp').value;
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;
	var pesanError = '';
	if(nama_lengkap.trim() == ''){
		pesanError += 'Nama lengkap wajib diisi \n'
	}
	if(no_hp.trim() == ''){
		pesanError += 'No hp wajib diisi \n'
	}
	if(email.trim() == ''){
		pesanError += 'Email wajib diisi \n'
	}
	if(password.trim() == ''){
		pesanError += 'Password wajib diisi \n'
	}
	if(pesanError != ''){
		alert(pesanError);
		return false;
	}
	alert('anda berhasil mendaftar')
	return true;
}