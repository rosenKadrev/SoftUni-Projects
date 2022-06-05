function encodeAndDecodeMessages() {

    let messagesFields = document.querySelectorAll('textarea');
    let buttons = document.querySelectorAll('button');
    buttons[0].addEventListener('click', encode);
    buttons[1].addEventListener('click', decode);

    function encode() {
        let message = messagesFields[0].value;
        let encodeMessage = '';
        for (let i = 0; i < message.length; i++) {
            encodeMessage += String.fromCharCode(message[i].charCodeAt(0) + 1);
        }
        messagesFields[1].value = encodeMessage;
        messagesFields[0].value = '';
    }

    function decode() {
        let lastReceivedMessage = messagesFields[1].value;
        let decodeMessage = '';
        for (let i = 0; i < lastReceivedMessage.length; i++) {
            decodeMessage += String.fromCharCode(lastReceivedMessage[i].charCodeAt(0) - 1);
        }
        messagesFields[1].value = decodeMessage;
    }

}