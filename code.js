$(document).ready(function () {

    $("#submit").click(calculateApproval);

    var myRules =
        {
            income:
                {
                    required: true,
                    min: 0,
                    max: 99999999999999999,
                    digits: true
                },
            credit:
                {
                    required: true,
                    min: 300,
                    max: 850,
                    digits: true
                },
            months:
                {
                    required: true,
                    min: 0,
                    max: 1500,
                    digits: true
                }
        };

    // Object containing the error messages
    var myMessages =
        {
            income:
                {
                    required: "Please enter your yearly salary",
                    min: "Please enter a valid salary",
                    max: "Please enter a valid salary",
                    digits: "Please use numbers only"
                },
            credit:
                {
                    required: "Please enter your credit score",
                    min: "Please enter a valid credit score (Too Low)",
                    max: "Please enter a valid credit score",
                    digits: "Please use numbers only"
                },
            months:
                {
                    required: "Please enter the months at your current job",
                    min: "Please enter a valid number of months",
                    max: "Please enter a valid number of months",
                    digits: "Please use numbers only"
                }
        };

    // Pass the configuration to the form's validate() method
    // Needs submitHandler, rules, and messages properties
    $("form").validate(
        {
            submitHandler: calculateApproval,
            rules: myRules,
            messages: myMessages
        }
    );

    function calculateApproval(event) {
        event.preventDefault();
        var income;
        var credit;
        var months;

        income = parseFloat($("#income").val());
        credit = parseFloat($("#credit").val());
        months = parseFloat($("#months").val());

        if (income >= 40000) {
            if (credit >= 600) {
                //approved
                $("#output").text("You have been approved for your loan.");
            }
            else {
                if (months > 12) {
                    //approved
                    $("#output").text("You have been approved for your loan.");
                }
                else {
                    //denied
                    $("#output").text("You have not been approved for your loan.");
                }
            }
        }
        else {
            if (credit >= 600) {
                if (months > 12) {
                    //approved
                    $("#output").text("You have been approved for your loan.");
                }
                else {
                    //denied
                    $("#output").text("You have not been approved for your loan.");
                }
            }
            else {
                //denied
                $("#output").text("You have not been approved for your loan.");
            }
        }
    }
});