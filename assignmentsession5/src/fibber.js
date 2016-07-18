

var fibber = {};



fibber.initialize = function(){

	$("#startbtn").click(function(){
		fibber.viewStatement();
	});

	$(".truth-btn").click(function(){
		fibber.processDecision("truth");	
	});
	$(".fib-btn").click(function(){
		fibber.processDecision("fib");
	});

};

fibber.viewStatement = function(){
	var statementText = "Dogs and cats are the same animals."
	var statementContext = "Conference Nature and Nurture, 2014"

	$("#statement-text").text(statementText);
	$("#statement-context").text(statementContext);
};

fibber.processDecision = function (decision){
	if(decision == "truth"){
		alert("Wrong, it is false!");
	}
	if(decision == "fib"){
		alert("Right! It is false");

	}
};



