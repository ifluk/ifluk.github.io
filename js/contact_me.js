$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var teamname = $("input#teamname").val();
            var name = $("input#name").val();
            var email = $("input#email").val();
            var phone = $("input#phone").val();
            var address1 = $("input#address1").val();
            var address2 = $("input#address2").val();
            var city = $("input#city").val();
            var postcode = $("input#postcode").val();
            var p1name = $("input#p1name").val();
            var p1phone = $("input#p1phone").val();
            var p2name = $("input#p2name").val();
            var p2phone = $("input#p2phone").val();
            var p3name = $("input#p3name").val();
            var p3phone = $("input#p3phone").val();
            var p4name = $("input#p4name").val();
            var p4phone = $("input#p4phone").val();
            var p5name = $("input#p5name").val();
            var p5phone = $("input#p5phone").val();
            var p6name = $("input#p6name").val();
            var p6phone = $("input#p6phone").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "//formspree.io/info@indoorfootballleague.co.uk",
                type: "POST",
                data: {
                    teamname: teamname,
                    name: name,
                    email: email,
                    phone: phone,
                    address1: address1,
                    address2: address2,
                    city: city,
                    postcode: postcode,
                    p1name: p1name,
                    p1phone: p1phone,
                    p2name: p2name,
                    p2phone: p2phone,
                    p3name: p3name,
                    p3phone: p3phone,
                    p4name: p4name,
                    p4phone: p4phone,
                    p5name: p5name,
                    p5phone: p5phone,
                    p6name: p6name,
                    p6phone: p6phone
                },
                cache: false,
                success: function() {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Your registration has been submitted. We will get back to you with further details on joining the league after reviewing your information. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", our mail server is not responding. Please try again later!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
