function Generate() {
  let quote = [
    '"There is nothing impossible to they who will try." —Alexander the Great',

    '"Keep your face always toward the sunshine, and shadows will fall behind you." —Walt Whitman',

    '"Champions keep playing until they get it right." —Billie Jean King',

    '“You are your best thing.” — Toni Morrison',

    '"You are never too old to set another goal or to dream a new dream." —C.S. Lewis',

    '"Believe you can and you are halfway there." —Theodore Roosevelt',

    '"Be yourself; everyone else is already taken." —Oscar Wilde',

    '"We will fail when we fail to try." —Rosa Parks',

    '"Embrace the glorious mess that you are." —Elizabeth Gilbert',

    '"It is never too late to be what you might have been." —George Eliot',

    '"The secret of getting ahead is getting started." —Mark Twain',

    '"Do one thing every day that scares you." —Eleanor Roosevelt',

    '"Light tomorrow with today." —Elizabeth Barrett Browning',

    '"You become what you believe." —Oprah Winfrey',

    '"In order to be irreplaceable, one must always be different." —Coco Chanel',

    '"It does not matter how slowly you go as long as you do not stop." —Confucius',
  ];

  const randomValue = quote[Math.floor(quote.length * Math.random())];
  document.getElementById('text').innerHTML = randomValue;
}
