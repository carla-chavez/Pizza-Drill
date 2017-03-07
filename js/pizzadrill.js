function Calc() {
		var order = "<h1>Your order: </h1>";
		var sum = 0;
		var sizePrice = 0;
		var sizeArray = document.getElementsByClassName("size");

		for (var i = 0; i< sizeArray.length; i++) {
			if (sizeArray[i].checked) {
				var selectedSize = sizeArray[i].value;
				order = (order +  selectedSize + "<br>");
			}
		}
		if (selectedSize === "Personal") {
			sizePrice = 6;
		} else if (selectedSize === "Medium") {
			sizePrice = 10;
		} else if (selectedSize === "Large") {
			sizePrice = 14;
		} else if (selectedSize === "Extra Large") {
			sizePrice = 16;
		}
		sum += sizePrice;
		getMeat(sum,order);
	};

	function getMeat(sum,order) {
		var meatPrice = 0;
		var selectedMeat = [];
		var meatArray = document.getElementsByClassName("meat");

		for (var j = 0; j <meatArray.length; j++) {
			if (meatArray[j].checked) {
				selectedMeat.push(meatArray[j].value);
				order = (order + meatArray[j].value + "<br>");
			}
		}
		var meatCount = selectedMeat.length;
		if (meatCount>1) {
			meatPrice = (meatCount - 1);
		} else {
			meatPrice = 0;
		}
		sum+= meatPrice;
		getCheese(sum,order);
	};

	function getCheese(sum,order) {
		var cheesePrice = 0;
		var cheeseArray = document.getElementsByClassName("cheese");

		for (k = 0; k < cheeseArray.length; k++) {
			if(cheeseArray[k].checked){
				var selectedCheese = cheeseArray[k].value;
				order = (order + selectedCheese + "<br>");
			}
		}
		if (selectedCheese === "Extra Cheese") {
			cheesePrice = 3;
		} else {
			cheesePrice = 0;
		}
		sum += cheesePrice;
		getCrust(sum,order);
	};

	function getCrust(sum,order) {
		var crustPrice = 0;
		var crustArray = document.getElementsByClassName("crust");

		for(var l = 0; l < crustArray.length; l++) {
			if(crustArray[l].checked) {
				var selectedCrust = crustArray[l].value;
				order = (order + selectedCrust + "<br>");
			}
		}
		if(selectedCrust === "Cheese Stuffed") {
			crustPrice = 3;
		} else {
			crustPrice = 0;
		}
		sum += crustPrice;
		getSauce(sum,order);
	};

	function getSauce(sum,order) {
		var sauceArray = document.getElementsByClassName("sauce");

		for ( var m = 0; m<sauceArray.length; m++){
			if(sauceArray[m].checked) {
				var selectedSauce = sauceArray[m].value;
				order  = (order + selectedSauce + "<br>");
			}
		}
		getVeg(sum,order);
	};

	function getVeg(sum,order) {
		var vegPrice = 0;
		var selectedVeg = [];
		var vegArray = document.getElementsByClassName("veggies");

		for ( var n = 0; n<vegArray.length; n++) {
			if (vegArray[n].checked) {
				selectedVeg.push(vegArray[n].value);
				order = order + vegArray[n].value + "<br>";		
			}
		}
		var vegCount = selectedVeg.length;
		if (vegCount>1){
			vegPrice = (vegCount - 1);
		} else {
			vegPrice = 0;
		}
		sum += vegPrice;
		document.getElementById("order").innerHTML = order;
		document.getElementById("total").innerHTML = "<h2>Total: <strong>$"+ sum +".00"+"</strong></h2";
	};

function clear() {
	document.getElementById("orderMenu").reset();
	console.log("cleared");
};