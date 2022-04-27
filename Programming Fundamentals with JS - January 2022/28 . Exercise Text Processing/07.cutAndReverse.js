function cutAndReverse(text) {

    let textLHalf = Number(text.length / 2);
    let firstHalf = text.slice(0, textLHalf);
    let secondHalf = text.slice(textLHalf);

    let forReverseFirstHalf = firstHalf.split('').reverse().join('');
    let forReverseSecondHalf = secondHalf.split('').reverse().join('');

    console.log(forReverseFirstHalf);
    console.log(forReverseSecondHalf);
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')
    // cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')