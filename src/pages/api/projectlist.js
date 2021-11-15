// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function numeroAleatorio(min = 1, max = 100000) {
  return parseInt(Math.random() * (max - min)) + min
}

export default function handler(req, res) {
  res.status(200).json([
    { id: numeroAleatorio(), desc: 'Caneta', srcImage: '/images/twitterIcon.svg', destLink: 'https://google.com'},
    { id: numeroAleatorio(), desc: 'Caneta', srcImage: '/images/twitterIcon.svg', destLink: 'https://google.com'},
    { id: numeroAleatorio(), desc: 'Caneta', srcImage: '/images/twitterIcon.svg', destLink: 'https://google.com'},
    { id: numeroAleatorio(), desc: 'Caneta', srcImage: '/images/twitterIcon.svg', destLink: 'https://google.com'},
  
  ])
}