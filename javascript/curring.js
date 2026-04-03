function autoMailer (to) {
    return function (sub) {
        return function(body) {
            console.log(`mail has been sent to ${to} with subject ${sub} and body ${body}`)
        };
    };
};
autoMailer("abc@gmail.com")("cnf mail") ("iphone")