prod_list = ["Mjólk", "Bananar", "Smjör", "Tómatar", "Gúrka"];
window.onload = function(){
	for (i = 1; i <= prod_list.length; i++){
		document.getElementById("i" + i).innerHTML = prod_list[i - 1];
	};
};