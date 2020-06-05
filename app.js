(function(){

	angular.module('ShoppingListApp',[])
	.controller('ShoppingListToBuyController',ShoppingListToBuyController)
	.controller('ShoppingListBroughtController',ShoppingListBroughtController)
	.service('ShoppingListService',ShoppingListService);

	ShoppingListToBuyController.$inject=['ShoppingListService'];
	function ShoppingListToBuyController(ShoppingListService){
		var itemAdder=this;
		itemAdder.Message="To Buy :"
		 itemAdder.tobuyitems=ShoppingListService.getToBuyItems();
		 itemAdder.removeItem=function(indexItem){
		 	ShoppingListService.removeBroughtItem(indexItem);
		 }

		 itemAdder.checkIfBrought=function(){
		 	
		 	return ShoppingListService.checkIfCompleted();
		
		 }
		

	};

	ShoppingListBroughtController.$inject=['ShoppingListService'];
	function ShoppingListBroughtController(ShoppingListService){
		var broughtItemAdder=this;
		broughtItemAdder.emptyMessage="Nothing brought yet";
		broughtItemAdder.broughtitems=ShoppingListService.getBroughtItems();

		broughtItemAdder.check=function(){
			return ShoppingListService.checkIfEmpty();
		}

	};


	function ShoppingListService(){
		var service=this;

		 var tobuyitems=[
		 {
		 	name:"Cookie",
		 	quantity:"300"
		 },
		 {
		 	name:"Milk",
		 	quantity:"5"
		 },
		 {
		 	name:"Donuts",
		 	quantity:"200"
		 },
		 {
		 	name:"Chocklates",
		 	quantity:"100"
		 },
		 {
		 	name:"Chips",
		 	quantity:"10"
		 }
		 ];

		 var broughtitems=[];

		 service.getToBuyItems=function(){
		 	return tobuyitems;
		 };

		 service.removeBroughtItem=function(indexItem){
		 	var removeditem=tobuyitems[indexItem];
		 	broughtitems.push(removeditem);
		 	tobuyitems.splice(indexItem,1);
		 	
		 };

		 service.getBroughtItems=function(){
		 	return broughtitems;
		 };

		 service.checkIfEmpty=function(){
		 	if(broughtitems.length== 0){
		 	
		 		return true;
		 	}
		 	else
		 	{
		 		return false;
		 	}
		 	
		 }

		 service.checkIfCompleted=function(){
		 	if(tobuyitems.length== 0){
		 	
		 		return true;
		 	}
		 	else
		 	{
		 		return false;
		 	}
		 	
		 }


		 
	};


})();