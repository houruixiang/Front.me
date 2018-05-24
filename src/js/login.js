// login 
$("#ILogin").click(() => {
    $("#init").css('display', 'none');
    $("#CBArea").text("Please input master secret");
    $("#createBlock").css('display', 'block');
});

// register
$("#IRegister").click(() => {
    $("#init").css('display', 'none');
    $("#restore").css('display', 'block');
});


// login next
this.phrase = "the master key validation is passed";
$("#CBButton").click(() => {
	$("#init").css('display', 'none');
    if ($("#CBArea").val() === this.phrase) {
		document.location.href = "./users.html";
	}
    else{
        document.location.href = "./404.html";
		alert("the master key is wrong!! ");
    }		
});

// register next
$("#CB2Button2").click(() => {
    $("#createBlock2").css('display', 'none');
});






