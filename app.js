"use strict";

// 国連加盟国193か国（国名、ISO 2文字コード）
const COUNTRY_DATA = [
  ["アイスランド","IS"],["アイルランド","IE"],["アゼルバイジャン","AZ"],["アフガニスタン","AF"],["アメリカ合衆国","US"],["アラブ首長国連邦","AE"],["アルジェリア","DZ"],["アルゼンチン","AR"],["アルバニア","AL"],["アルメニア","AM"],["アンゴラ","AO"],["アンティグア・バーブーダ","AG"],["アンドラ","AD"],["イエメン","YE"],["イギリス","GB"],["イスラエル","IL"],["イタリア","IT"],["イラク","IQ"],["イラン","IR"],["インド","IN"],["インドネシア","ID"],["ウガンダ","UG"],["ウクライナ","UA"],["ウズベキスタン","UZ"],["ウルグアイ","UY"],["エクアドル","EC"],["エジプト","EG"],["エストニア","EE"],["エスワティニ","SZ"],["エチオピア","ET"],["エリトリア","ER"],["エルサルバドル","SV"],["オーストラリア","AU"],["オーストリア","AT"],["オマーン","OM"],["オランダ","NL"],["ガーナ","GH"],["カーボベルデ","CV"],["ガイアナ","GY"],["カザフスタン","KZ"],["カタール","QA"],["カナダ","CA"],["ガボン","GA"],["カメルーン","CM"],["韓国","KR"],["ガンビア","GM"],["カンボジア","KH"],["北朝鮮","KP"],["北マケドニア","MK"],["ギニア","GN"],["ギニアビサウ","GW"],["キプロス","CY"],["キューバ","CU"],["ギリシャ","GR"],["キリバス","KI"],["キルギス","KG"],["グアテマラ","GT"],["クウェート","KW"],["グレナダ","GD"],["クロアチア","HR"],["ケニア","KE"],["コートジボワール","CI"],["コスタリカ","CR"],["コモロ","KM"],["コロンビア","CO"],["コンゴ共和国","CG"],["コンゴ民主共和国","CD"],["サウジアラビア","SA"],["サモア","WS"],["サントメ・プリンシペ","ST"],["ザンビア","ZM"],["サンマリノ","SM"],["シエラレオネ","SL"],["ジブチ","DJ"],["ジャマイカ","JM"],["ジョージア","GE"],["シリア","SY"],["シンガポール","SG"],["ジンバブエ","ZW"],["スイス","CH"],["スウェーデン","SE"],["スーダン","SD"],["スペイン","ES"],["スリナム","SR"],["スリランカ","LK"],["スロバキア","SK"],["スロベニア","SI"],["セーシェル","SC"],["赤道ギニア","GQ"],["セネガル","SN"],["セルビア","RS"],["セントクリストファー・ネービス","KN"],["セントビンセント・グレナディーン","VC"],["セントルシア","LC"],["ソマリア","SO"],["ソロモン諸島","SB"],["タイ","TH"],["タジキスタン","TJ"],["タンザニア","TZ"],["チェコ","CZ"],["チャド","TD"],["中央アフリカ共和国","CF"],["中国","CN"],["チュニジア","TN"],["チリ","CL"],["ツバル","TV"],["デンマーク","DK"],["ドイツ","DE"],["トーゴ","TG"],["ドミニカ共和国","DO"],["ドミニカ国","DM"],["トリニダード・トバゴ","TT"],["トルクメニスタン","TM"],["トルコ","TR"],["トンガ","TO"],["ナイジェリア","NG"],["ナウル","NR"],["ナミビア","NA"],["ニカラグア","NI"],["ニジェール","NE"],["日本","JP"],["ニュージーランド","NZ"],["ネパール","NP"],["ノルウェー","NO"],["バーレーン","BH"],["ハイチ","HT"],["パキスタン","PK"],["パナマ","PA"],["バヌアツ","VU"],["バハマ","BS"],["パプアニューギニア","PG"],["パラオ","PW"],["パラグアイ","PY"],["バルバドス","BB"],["ハンガリー","HU"],["バングラデシュ","BD"],["東ティモール","TL"],["フィジー","FJ"],["フィリピン","PH"],["フィンランド","FI"],["ブータン","BT"],["ブラジル","BR"],["フランス","FR"],["ブルガリア","BG"],["ブルキナファソ","BF"],["ブルネイ","BN"],["ブルンジ","BI"],["ベトナム","VN"],["ベナン","BJ"],["ベネズエラ","VE"],["ベラルーシ","BY"],["ベリーズ","BZ"],["ペルー","PE"],["ベルギー","BE"],["ポーランド","PL"],["ボスニア・ヘルツェゴビナ","BA"],["ボツワナ","BW"],["ボリビア","BO"],["ポルトガル","PT"],["ホンジュラス","HN"],["マーシャル諸島","MH"],["マダガスカル","MG"],["マラウイ","MW"],["マリ","ML"],["マルタ","MT"],["マレーシア","MY"],["ミクロネシア連邦","FM"],["南アフリカ","ZA"],["南スーダン","SS"],["ミャンマー","MM"],["メキシコ","MX"],["モーリシャス","MU"],["モーリタニア","MR"],["モザンビーク","MZ"],["モナコ","MC"],["モルディブ","MV"],["モルドバ","MD"],["モロッコ","MA"],["モンゴル","MN"],["モンテネグロ","ME"],["ヨルダン","JO"],["ラオス","LA"],["ラトビア","LV"],["リトアニア","LT"],["リビア","LY"],["リヒテンシュタイン","LI"],["リベリア","LR"],["ルーマニア","RO"],["ルクセンブルク","LU"],["ルワンダ","RW"],["レソト","LS"],["レバノン","LB"],["ロシア","RU"]
];

const ENGLISH_NAMES = {
  IS:"Iceland", IE:"Ireland", AZ:"Azerbaijan", AF:"Afghanistan", US:"United States", AE:"United Arab Emirates", DZ:"Algeria", AR:"Argentina", AL:"Albania", AM:"Armenia", AO:"Angola", AG:"Antigua and Barbuda", AD:"Andorra", YE:"Yemen", GB:"United Kingdom", IL:"Israel", IT:"Italy", IQ:"Iraq", IR:"Iran", IN:"India", ID:"Indonesia", UG:"Uganda", UA:"Ukraine", UZ:"Uzbekistan", UY:"Uruguay", EC:"Ecuador", EG:"Egypt", EE:"Estonia", SZ:"Eswatini", ET:"Ethiopia", ER:"Eritrea", SV:"El Salvador", AU:"Australia", AT:"Austria", OM:"Oman", NL:"Netherlands", GH:"Ghana", CV:"Cabo Verde", GY:"Guyana", KZ:"Kazakhstan", QA:"Qatar", CA:"Canada", GA:"Gabon", CM:"Cameroon", KR:"South Korea", GM:"Gambia", KH:"Cambodia", KP:"North Korea", MK:"North Macedonia", GN:"Guinea", GW:"Guinea-Bissau", CY:"Cyprus", CU:"Cuba", GR:"Greece", KI:"Kiribati", KG:"Kyrgyzstan", GT:"Guatemala", KW:"Kuwait", GD:"Grenada", HR:"Croatia", KE:"Kenya", CI:"Côte d’Ivoire", CR:"Costa Rica", KM:"Comoros", CO:"Colombia", CG:"Republic of the Congo", CD:"Democratic Republic of the Congo", SA:"Saudi Arabia", WS:"Samoa", ST:"São Tomé and Príncipe", ZM:"Zambia", SM:"San Marino", SL:"Sierra Leone", DJ:"Djibouti", JM:"Jamaica", GE:"Georgia", SY:"Syria", SG:"Singapore", ZW:"Zimbabwe", CH:"Switzerland", SE:"Sweden", SD:"Sudan", ES:"Spain", SR:"Suriname", LK:"Sri Lanka", SK:"Slovakia", SI:"Slovenia", SC:"Seychelles", GQ:"Equatorial Guinea", SN:"Senegal", RS:"Serbia", KN:"Saint Kitts and Nevis", VC:"Saint Vincent and the Grenadines", LC:"Saint Lucia", SO:"Somalia", SB:"Solomon Islands", TH:"Thailand", TJ:"Tajikistan", TZ:"Tanzania", CZ:"Czechia", TD:"Chad", CF:"Central African Republic", CN:"China", TN:"Tunisia", CL:"Chile", TV:"Tuvalu", DK:"Denmark", DE:"Germany", TG:"Togo", DO:"Dominican Republic", DM:"Dominica", TT:"Trinidad and Tobago", TM:"Turkmenistan", TR:"Turkey", TO:"Tonga", NG:"Nigeria", NR:"Nauru", NA:"Namibia", NI:"Nicaragua", NE:"Niger", JP:"Japan", NZ:"New Zealand", NP:"Nepal", NO:"Norway", BH:"Bahrain", HT:"Haiti", PK:"Pakistan", PA:"Panama", VU:"Vanuatu", BS:"Bahamas", PG:"Papua New Guinea", PW:"Palau", PY:"Paraguay", BB:"Barbados", HU:"Hungary", BD:"Bangladesh", TL:"Timor-Leste", FJ:"Fiji", PH:"Philippines", FI:"Finland", BT:"Bhutan", BR:"Brazil", FR:"France", BG:"Bulgaria", BF:"Burkina Faso", BN:"Brunei", BI:"Burundi", VN:"Vietnam", BJ:"Benin", VE:"Venezuela", BY:"Belarus", BZ:"Belize", PE:"Peru", BE:"Belgium", PL:"Poland", BA:"Bosnia and Herzegovina", BW:"Botswana", BO:"Bolivia", PT:"Portugal", HN:"Honduras", MH:"Marshall Islands", MG:"Madagascar", MW:"Malawi", ML:"Mali", MT:"Malta", MY:"Malaysia", FM:"Micronesia", ZA:"South Africa", SS:"South Sudan", MM:"Myanmar", MX:"Mexico", MU:"Mauritius", MR:"Mauritania", MZ:"Mozambique", MC:"Monaco", MV:"Maldives", MD:"Moldova", MA:"Morocco", MN:"Mongolia", ME:"Montenegro", JO:"Jordan", LA:"Laos", LV:"Latvia", LT:"Lithuania", LY:"Libya", LI:"Liechtenstein", LR:"Liberia", RO:"Romania", LU:"Luxembourg", RW:"Rwanda", LS:"Lesotho", LB:"Lebanon", RU:"Russia"
};

const COUNTRIES = COUNTRY_DATA.map(([ja, code]) => ({
  ja,
  en: ENGLISH_NAMES[code],
  code,
  flag: [...code].map(c => String.fromCodePoint(c.charCodeAt(0) + 127397)).join("")
}));

const TEXT = {
  ja: {
    pageTitle:"わくわく！せかいの国旗クイズ", appTitle:"こっきクイズ", eyebrow:"せかいを たびしよう！",
    scoreUnit:"てん", scoreLabel:"現在の得点", finalScoreUnit:" / 10 てん", questionCount:n=>`だい ${n} もん / 10`, question:"この こっきは どこの くに？",
    choose:"えらんでね！", correct:"せいかい！", wrong:"もういちど！", finished:"10もん おわったよ！",
    resultTitle:"けっか はっぴょう", restart:"もういちど あそぶ", back:"タイトルへ もどる",
    flagLabel:n=>`${n}問目の国旗`, perfect:"すごい！ こっきはかせだね！",
    great:"やったね！ とっても よくできました！", tryAgain:"がんばったね！ また ちょうせんしよう！"
  },
  en: {
    pageTitle:"World Flag Quiz", appTitle:"FLAG QUIZ", eyebrow:"LET'S TRAVEL THE WORLD!",
    scoreUnit:"points", scoreLabel:"Current score", finalScoreUnit:" / 10 points", questionCount:n=>`QUESTION ${n} / 10`, question:"Which country has this flag?",
    choose:"Choose one!", correct:"CORRECT!", wrong:"TRY AGAIN!", finished:"YOU FINISHED 10 QUESTIONS!",
    resultTitle:"YOUR SCORE", restart:"PLAY AGAIN", back:"BACK TO TITLE",
    flagLabel:n=>`Flag for question ${n}`, perfect:"Amazing! You're a flag expert!",
    great:"Great job! You did really well!", tryAgain:"Nice try! Let's play again!"
  }
};

const GAME_LENGTH = 10;
let questions = [];
let currentIndex = 0;
let score = 0;
let acceptingAnswers = true;
let language = "ja";

const titleScreen = document.querySelector("#title-screen");
const quizScreen = document.querySelector("#quiz-screen");
const resultScreen = document.querySelector("#result-screen");
const flagElement = document.querySelector("#flag");
const answersElement = document.querySelector("#answers");
const feedbackElement = document.querySelector("#feedback");
const scoreElement = document.querySelector("#score");
const countElement = document.querySelector("#question-count");
const progressBar = document.querySelector("#progress-bar");
const finalScoreElement = document.querySelector("#final-score");
const resultMessageElement = document.querySelector("#result-message");
const appTitleElement = document.querySelector("#app-title");
const eyebrowElement = document.querySelector("#quiz-eyebrow");
const questionTextElement = document.querySelector("#question-text");
const scorePillElement = document.querySelector(".score-pill");
const scoreUnitElement = document.querySelector("#score-unit");
const finalScoreUnitElement = document.querySelector("#final-score-unit");
const resultEyebrowElement = document.querySelector("#result-screen .eyebrow");
const resultTitleElement = document.querySelector("#result-title");
const restartButton = document.querySelector("#restart-button");
const backToTitleButton = document.querySelector("#back-to-title-button");

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function makeQuestion(country) {
  const wrongAnswers = shuffle(COUNTRIES.filter(item => item.code !== country.code)).slice(0, 3);
  return { country, choices: shuffle([country, ...wrongAnswers]) };
}

function startGame(selectedLanguage = language) {
  language = selectedLanguage;
  document.documentElement.lang = language;
  document.title = TEXT[language].pageTitle;
  applyLanguage();
  questions = shuffle(COUNTRIES).slice(0, GAME_LENGTH).map(makeQuestion);
  currentIndex = 0;
  score = 0;
  scoreElement.textContent = "0";
  titleScreen.hidden = true;
  resultScreen.hidden = true;
  quizScreen.hidden = false;
  showQuestion();
}

function applyLanguage() {
  const text = TEXT[language];
  appTitleElement.textContent = text.appTitle;
  eyebrowElement.textContent = text.eyebrow;
  scoreUnitElement.textContent = text.scoreUnit;
  scorePillElement.setAttribute("aria-label", text.scoreLabel);
  finalScoreUnitElement.textContent = text.finalScoreUnit;
  questionTextElement.textContent = text.question;
  resultEyebrowElement.textContent = text.finished;
  resultTitleElement.textContent = text.resultTitle;
  restartButton.textContent = text.restart;
  backToTitleButton.textContent = text.back;
}

function showQuestion() {
  acceptingAnswers = true;
  const question = questions[currentIndex];
  flagElement.textContent = question.country.flag;
  flagElement.setAttribute("aria-label", TEXT[language].flagLabel(currentIndex + 1));
  countElement.textContent = TEXT[language].questionCount(currentIndex + 1);
  progressBar.style.width = `${((currentIndex + 1) / GAME_LENGTH) * 100}%`;
  feedbackElement.textContent = TEXT[language].choose;
  feedbackElement.className = "feedback";
  answersElement.replaceChildren();

  question.choices.forEach(country => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-button";
    button.textContent = country[language];
    button.dataset.code = country.code;
    button.addEventListener("click", chooseAnswer);
    answersElement.append(button);
  });
}

function chooseAnswer(event) {
  if (!acceptingAnswers) return;
  const selectedButton = event.currentTarget;
  const correctCountry = questions[currentIndex].country;

  if (selectedButton.dataset.code !== correctCountry.code) {
    selectedButton.classList.add("wrong");
    feedbackElement.textContent = TEXT[language].wrong;
    feedbackElement.className = "feedback wrong";
    window.setTimeout(() => selectedButton.classList.remove("wrong"), 450);
    return;
  }

  acceptingAnswers = false;
  score += 1;
  scoreElement.textContent = String(score);
  selectedButton.classList.add("correct");
  feedbackElement.textContent = TEXT[language].correct;
  feedbackElement.className = "feedback correct";
  answersElement.querySelectorAll("button").forEach(button => { button.disabled = true; });
  window.setTimeout(nextQuestion, 850);
}

function nextQuestion() {
  currentIndex += 1;
  if (currentIndex < GAME_LENGTH) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizScreen.hidden = true;
  resultScreen.hidden = false;
  finalScoreElement.textContent = String(score);
  resultMessageElement.textContent = score === 10
    ? TEXT[language].perfect
    : score >= 7
      ? TEXT[language].great
      : TEXT[language].tryAgain;
  restartButton.focus();
}

function showTitle() {
  quizScreen.hidden = true;
  resultScreen.hidden = true;
  titleScreen.hidden = false;
  document.documentElement.lang = "ja";
  document.title = "WORLD FLAG QUIZ";
}

document.querySelectorAll(".language-button").forEach(button => {
  button.addEventListener("click", () => startGame(button.dataset.language));
});
restartButton.addEventListener("click", () => startGame());
backToTitleButton.addEventListener("click", showTitle);
showTitle();
