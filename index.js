var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var levenshtein = require('fast-levenshtein');
const axios = require('axios')

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
  extended: true
})); // for parsing application/x-www-form-urlencoded

//This is the route the API will call
app.post('/new-message', function(req, res) {
  const {message} = req.body

  //Each message contains "text" and a "chat" object, which has an "id" which is the chat id

  if (!message) {
    // In if(levenshtein.get( a message is not present, or if our message does not have the word marco in it, do nothing and return an empty response
    return res.end()
  }

  // If we've gotten this far, it means that we have received a message containing the word "marco".
  // Respond by hitting the telegram bot API and responding to the approprite chat_id with the word "Polo!!"
  // Remember to use your own API toked instead of the one below  "https://api.telegram.org/bot<your_api_token>/sendMessage"
  let responseText;
  const input = message.toLowerCase();
	  if(levenshtein.get( "ev",input)<1) responseText = "erakki vidaradhu";
	  if(levenshtein.get( "kmp",input)<1) responseText = "karpuram madhiri pathikaradhu";
	  if(levenshtein.get( "nkmp",input)<1) responseText = "antonym of kmp";
	  if(levenshtein.get( "ppb",input)<1) responseText = "pakkuvama pattuko bro";
	  if(levenshtein.get( "bb",input)<1) responseText = "becoming baba";
	  if(levenshtein.get( "ivveve",input)<1) responseText = "ippo vayasu kku vandha enna....";
	  if(levenshtein.get( "ippkv",input)<1) responseText = "indha pozhappukku...";
	  if(levenshtein.get( "jia/fire",input)<1) responseText = "jyothila aikiyam aidu";
	  if(levenshtein.get( "twt",input)<1) responseText = "time will tell";
	  if(levenshtein.get( "trnab",input)<1) responseText = "this really needs a bro";
	  if(levenshtein.get( "vmpm",input)<1) responseText = "vandha mala...";
	  if(levenshtein.get( "sb",input)<1) responseText = "sadha boopathy";
	  if(levenshtein.get( "ab",input)<1) responseText = "althotta boopathy";
	  if(levenshtein.get( "cbnc",input)<1) responseText = "cool but not cool";
	  if(levenshtein.get( "ttpn",input)<1) responseText = "thirumba thirumba pesara nee";
	  if(levenshtein.get( "tttnvktkttv",input)<1) responseText = "thalamura thalamuraya thala nimmindhu...";
	  if(levenshtein.get( "edpv",input)<1) responseText = "enna da pesa vekkariya";
	  if(levenshtein.get( "iss",input)<1) responseText = "ipdi solli solliye";
	  if(levenshtein.get( "pgg",input)<1) responseText = "pearl gethu gang";
	  if(levenshtein.get( "jrbta",input)<1) responseText = "jeans radhika behaviour, thali aruthupen";
	  if(levenshtein.get( "enis",input)<1) responseText = "edho, nalla irundha seri";
	  if(levenshtein.get( "eksi",input)<1) responseText = "enna koduma saar idhu";
	  if(levenshtein.get( "nas",input)<1) responseText = "naan appove sonnen";
	  if(levenshtein.get( "nvbb",input)<1) responseText = "nee vera boat bro";
	  if(levenshtein.get( "aplvpw",input)<1) responseText = "assault patni leak, vayka patni weak";
	  if(levenshtein.get( "Dael/g/s",input)<1) responseText = "delete and exit league, group, snake";
	  if(levenshtein.get( "mf",input)<1) responseText = "my feel";
	  if(levenshtein.get( "uf",input)<1) responseText = "uneasy feel";
	  if(levenshtein.get( "cpx",input)<1) responseText = "correcta pesaran x";
	  if(levenshtein.get( "acpx",input)<1) responseText = "always correct ah pesaraan x";
	  if(levenshtein.get( "iin",input)<1) responseText = "self-taught";
	  if(levenshtein.get( "hps",input)<1) responseText = "high pressure situation";
	  if(levenshtein.get( "ofs",input)<1) responseText = "one finger swipe";
	  if(levenshtein.get( "iao",input)<1) responseText = "in and out";
	  if(levenshtein.get( "pcpw",input)<1) responseText = "prey confusion predator weakness";
	  if(levenshtein.get( "xnb",input)<1) responseText = "x na bayam";
	  if(levenshtein.get( "ms",input)<1) responseText = "mind setting";
	  if(levenshtein.get( "nmsnbw",input)<1) responseText = "no mind setting no brainwashing";
	  if(levenshtein.get( "pc",input)<1) responseText = "pidiki chitti";
	  if(levenshtein.get( "cm",input)<1) responseText = "cool moment";
	  if(levenshtein.get( "om",input)<1) responseText = "oru manasatchi";
	  if(levenshtein.get( "an",input)<1) responseText = "adhaan nagesh";
	  if(levenshtein.get( "vmvv",input)<1) responseText = "vida muyarchi viswarooba vetri";
	  if(levenshtein.get( "wiw",input)<1) responseText = "work is worship";
	  if(levenshtein.get( "nespa",input)<1) responseText = "nee enna solrenu puriyala.. Aana..";
	  if(levenshtein.get( "lsama",input)<1) responseText = "leg slip aagi merge aaiten";
	  if(levenshtein.get( "rrgpe",input)<1) responseText = "regards, rahul ganesan, professional engineer";
	  if(levenshtein.get( "qmkm",input)<1) responseText = "quiz master ku mariyadhai";
	  if(levenshtein.get( "gca",input)<1) responseText = "governing Council aanavam";
	  if(levenshtein.get( "sbp",input)<1) responseText = "simple but powerful";
	  if(levenshtein.get( "lse",input)<1) responseText = "low state of energy";
	  if(levenshtein.get( "eca",input)<1) responseText = "existential crisis alert";
	  if(levenshtein.get( "sottnotm",input)<1) responseText = "slip of the tongue, not fall of the mind";
	  if(levenshtein.get( "pgcc",input)<1) responseText = "psycho, groupie, cocaine crazy, used for calling tsv";
	  if(levenshtein.get( "amp",input)<1) responseText = "aandhai madhiri pesaradhu";
	  if(levenshtein.get( "hsc",input)<1) responseText = "highly shaggable content";
	  if(levenshtein.get( "mlypn",input)<1) responseText = "maan liya yaar, periya aalu nee";
	  if(levenshtein.get( "pwbp",input)<1) responseText = "pulti will be proud, successful mazhuppal attempt";
	  if(levenshtein.get( "pwnbp",input)<1) responseText = "pulti will not be proud, failed attempt";
	  if(levenshtein.get( "ltmwmwlt",input)<1) responseText = "less tension more work, more work less tension";
	  if(levenshtein.get( "kh",input)<1) responseText = "kumudha happy";
	  if(levenshtein.get( "waw",input)<1) responseText = "wait and watch";
	  if(levenshtein.get( "ape",input)<1) responseText = "auto pinnadi ezhudalam";
	  if(levenshtein.get( "xwt",input)<1) responseText = "x what telling";
	  if(levenshtein.get( "sff",input)<1) responseText = "small family function"; 
	  if(levenshtein.get( "tfab",input)<1) responseText = "time for a boys, groundbreaking news";
	  if(levenshtein.get( "tah",input)<1) responseText = "that's a holicccc";
	  if(levenshtein.get( "titl",input)<1) responseText = "this is the life";
	  if(levenshtein.get( "nappi",input)<1) responseText = "naa andha paata paadave illa";
	  if(levenshtein.get( "jsi",input)<1) responseText = "just suck it";
	  if(levenshtein.get( "jfj",input)<1) responseText = "just for jolly";
	  if(levenshtein.get( "apama",input)<1) responseText = "avan poi aaru maasam aachu";
	  if(levenshtein.get( "caq",input)<1) responseText = "current affairs question";
	  if(levenshtein.get( "pua",input)<1) responseText = "pick up aaguma/aagum";
	  if(levenshtein.get( "ccch",input)<1) responseText = "calm composed carl hooper";
	  if(levenshtein.get( "tfotd",input)<1) responseText = "theriyumla fact of the day";
	  if(levenshtein.get( "mtmt",input)<1) responseText = "muthamum tharuva...";
	  if(levenshtein.get( "pb",input)<1) responseText = "podhum bro";
	  if(levenshtein.get( "kbpv",input)<1) responseText = "kosa baasa paapa vinaasa";
	  if(levenshtein.get( "kkkr",input)<1) responseText = "kettavan kettidil kittidum rajayogam";
	  if(levenshtein.get( "mvc",input)<1) responseText = "mind voice capture";
	  if(levenshtein.get( "abbab",input)<1) responseText = "abb abuse";
	  if(levenshtein.get( "ppns pns nsms",input)<1) responseText = "poova poo nu sollalam, puipam nu sollalam, neenga solra madhiri yum sollalam";
	  if(levenshtein.get( "higs",input)<1) responseText = "hope is a good thing";
	  if(levenshtein.get( "pibs",input)<1) responseText = "pope is a bad singh, baas potd";
	  if(levenshtein.get( "potd",input)<1) responseText = "punch of the day";
	  if(levenshtein.get( "ff",input)<1) responseText = "fat fingers";
	  if(levenshtein.get( "vb",input)<1) responseText = "vudu bro";
	  if(levenshtein.get( "tev",input)<1) responseText = "timely ev";
	  if(levenshtein.get( "radar",input)<1) responseText = "read and did not register";
	  if(levenshtein.get( "sos",input)<1) responseText = "suspense oda saavu";
	  if(levenshtein.get( "kmpb",input)<1) responseText = "kedacha, moham poidum bro";
	  if(levenshtein.get( "vpvp",input)<1) responseText = "velila pogara onnana";
	  if(levenshtein.get( "was",input)<1) responseText = "we are shawshank";
	  if(levenshtein.get( "kxc",input)<1) responseText = "kick x count";
	  if(levenshtein.get( "ypi eppi",input)<1) responseText = "yaar paah ivaru, enakku pakanum pola irukku";
	  if(levenshtein.get( "mc",input)<1) responseText = "mafia consensus";
	  if(levenshtein.get( "vr",input)<1) responseText = "veguli rajini";
	  if(levenshtein.get( "pds",input)<1) responseText = "pin drop silence";
	  if(levenshtein.get( "sid",input)<1) responseText = "suck it da; predominantly Ajoy";
	  if(levenshtein.get( "ftgg",input)<1) responseText = "for the greater good";
	  if(levenshtein.get( "sic",input)<1) responseText = "sharing is caring";
	  if(levenshtein.get( "eae",input)<1) responseText = "embrace and encourage";
	  if(levenshtein.get( "vvv",input)<1) responseText = "varlaam vaa vaa";
	  if(levenshtein.get( "cbnc",input)<1) responseText = "cool calm connoisseurs";
	  if(levenshtein.get( "mfb",input)<1) responseText = "manu fans behaviour";
	  if(levenshtein.get( "tmtmsjh",input)<1) responseText = "thayin manikodi thayin manikodi solludhu jai hind";
	  if(levenshtein.get( "mvvwiee",input)<1) responseText = "mannenna veppenna...";
	  if(levenshtein.get( "kliacu",input)<1) responseText = "kakkoos la I catch up, used for overnight thread catchup";
	  if(levenshtein.get( "rfa",input)<1) responseText = "retiring from argument";
	  if(levenshtein.get( "rn1",input)<1) responseText = "rule number 1 (monkey)";
	  if(levenshtein.get( "ndv",input)<1) responseText = "nambikkai than vazhkai";
	  if(levenshtein.get( "kk",input)<1) responseText = "kuppa kotting";
	  if(levenshtein.get( "yyne",input)<1) responseText = "yaar yaaro nanban endru...";
	  if(levenshtein.get( "ww",input)<1) responseText = "whatsapp warrior";
	  if(levenshtein.get( "tdkon",input)<1) responseText = "the different kind of noise";
	  if(levenshtein.get( "tteath",input)<1) responseText = "trying to express as the hero";
	  if(levenshtein.get( "iuue",input)<1) responseText = "indha ulagam unnai ethirthalum";
	  if(levenshtein.get( "t3p",input)<1) responseText = "theri piri paani poori";
	  if(levenshtein.get( "apti",input)<1) responseText = "aaniye pudanga theva illa";
	  if(levenshtein.get( "nil",input)<1) responseText = "never in life";
	  if(levenshtein.get( "snss",input)<1) responseText = "short name suppi sir";
	  if(levenshtein.get( "ss",input)<1) responseText = "subconscious shield/sootha saathu";
	  if(levenshtein.get( "ld",input)<1) responseText = "like duhhhhh (Mojo)";
	  if(levenshtein.get( "bdig",input)<1) responseText = "bjp dhaan I guess (ask mojo)";
	  if(levenshtein.get( "bh",input)<1) responseText = "but hey (Ajoy)";
	  if(levenshtein.get( "mot",input)<1) responseText = "matter of time";
	  if(levenshtein.get( "tp",input)<1) responseText = "time pass";
	  if(levenshtein.get( "nwt",input)<1) responseText = "noted with thanks";
	  if(levenshtein.get( "hsc",input)<1) responseText = "highly shaggable content";
	  if(levenshtein.get( "asa",input)<1) responseText = "attention seeking activity";
	  if(levenshtein.get( "vtv",input)<1) responseText = "Varenya than vazhikaati";
  axios.post('https://api.telegram.org/bot447737810:AAFQ4uGO8HmjwD0ynchhDtZItes8hGbhW7c/sendMessage', {
    chat_id: message.chat.id,
    text: responseText
  })
    .then(response => {
      // We get here if the message was successfully posted
      console.log('Message posted')
      res.end('ok')
    })
    .catch(err => {
      // ...and here if it was not
      console.log('Error :', err)
      res.end('Error :' + err)
    })

});

// Finally, start our server
app.listen(3000, function() {
  console.log('Telegram app listening on port 3000!');
});
