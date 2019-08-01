$(document).ready(function () {
    $('#contact-us-form').validate({
        rules: {
            name: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            comment: {
                required: true,
                rangelength: [25, 350]
            }
        },
        // validation messages
        messages: {
            name: {
                minlength: 'Name should be at least 3 characters'
            },
            email: {
                email: 'The email should be in the format: abc@domain'
            },
            comment: {
                comment: 'Please add any comments here'
            }
        },
        // This stores the values in the text field which is only visible once the validation has passed
        submitHandler: function (form) {
            $('#uName').text($('#name').val());
            $('#uEmail').text($('#email').val());
            $('#uComment').text($('#comment').val());
            $('#confirm-submit').modal('show');
        }
    });
});

