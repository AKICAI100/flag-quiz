"use strict";

// 国連加盟国193か国（国名、ISO 2文字コード）
const COUNTRIES = [
  ["アイスランド","IS"],["アイルランド","IE"],["アゼルバイジャン","AZ"],["アフガニスタン","AF"],["アメリカ合衆国","US"],["アラブ首長国連邦","AE"],["アルジェリア","DZ"],["アルゼンチン","AR"],["アルバニア","AL"],["アルメニア","AM"],["アンゴラ","AO"],["アンティグア・バーブーダ","AG"],["アンドラ","AD"],["イエメン","YE"],["イギリス","GB"],["イスラエル","IL"],["イタリア","IT"],["イラク","IQ"],["イラン","IR"],["インド","IN"],["インドネシア","ID"],["ウガンダ","UG"],["ウクライナ","UA"],["ウズベキスタン","UZ"],["ウルグアイ","UY"],["エクアドル","EC"],["エジプト","EG"],["エストニア","EE"],["エスワティニ","SZ"],["エチオピア","ET"],["エリトリア","ER"],["エルサルバドル","SV"],["オーストラリア","AU"],["オーストリア","AT"],["オマーン","OM"],["オランダ","NL"],["ガーナ","GH"],["カーボベルデ","CV"],["ガイアナ","GY"],["カザフスタン","KZ"],["カタール","QA"],["カナダ","CA"],["ガボン","GA"],["カメルーン","CM"],["韓国","KR"],["ガンビア","GM"],["カンボジア","KH"],["北朝鮮","KP"],["北マケドニア","MK"],["ギニア","GN"],["ギニアビサウ","GW"],["キプロス","CY"],["キューバ","CU"],["ギリシャ","GR"],["キリバス","KI"],["キルギス","KG"],["グアテマラ","GT"],["クウェート","KW"],["グレナダ","GD"],["クロアチア","HR"],["ケニア","KE"],["コートジボワール","CI"],["コスタリカ","CR"],["コモロ","KM"],["コロンビア","CO"],["コンゴ共和国","CG"],["コンゴ民主共和国","CD"],["サウジアラビア","SA"],["サモア","WS"],["サントメ・プリンシペ","ST"],["ザンビア","ZM"],["サンマリノ","SM"],["シエラレオネ","SL"],["ジブチ","DJ"],["ジャマイカ","JM"],["ジョージア","GE"],["シリア","SY"],["シンガポール","SG"],["ジンバブエ","ZW"],["スイス","CH"],["スウェーデン","SE"],["スーダン","SD"],["スペイン","ES"],["スリナム","SR"],["スリランカ","LK"],["スロバキア","SK"],["スロベニア","SI"],["セーシェル","SC"],["赤道ギニア","GQ"],["セネガル","SN"],["セルビア","RS"],["セントクリストファー・ネービス","KN"],["セントビンセント・グレナディーン","VC"],["セントルシア","LC"],["ソマリア","SO"],["ソロモン諸島","SB"],["タイ","TH"],["タジキスタン","TJ"],["タンザニア","TZ"],["チェコ","CZ"],["チャド","TD"],["中央アフリカ共和国","CF"],["中国","CN"],["チュニジア","TN"],["チリ","CL"],["ツバル","TV"],["デンマーク","DK"],["ドイツ","DE"],["トーゴ","TG"],["ドミニカ共和国","DO"],["ドミニカ国","DM"],["トリニダード・トバゴ","TT"],["トルクメニスタン","TM"],["トルコ","TR"],["トンガ","TO"],["ナイジェリア","NG"],["ナウル","NR"],["ナミビア","NA"],["ニカラグア","NI"],["ニジェール","NE"],["日本","JP"],["ニュージーランド","NZ"],["ネパール","NP"],["ノルウェー","NO"],["バーレーン","BH"],["ハイチ","HT"],["パキスタン","PK"],["パナマ","PA"],["バヌアツ","VU"],["バハマ","BS"],["パプアニューギニア","PG"],["パラオ","PW"],["パラグアイ","PY"],["バルバドス","BB"],["ハンガリー","HU"],["バングラデシュ","BD"],["東ティモール","TL"],["フィジー","FJ"],["フィリピン","PH"],["フィンランド","FI"],["ブータン","BT"],["ブラジル","BR"],["フランス","FR"],["ブルガリア","BG"],["ブルキナファソ","BF"],["ブルネイ","BN"],["ブルンジ","BI"],["ベトナム","VN"],["ベナン","BJ"],["ベネズエラ","VE"],["ベラルーシ","BY"],["ベリーズ","BZ"],["ペルー","PE"],["ベルギー","BE"],["ポーランド","PL"],["ボスニア・ヘルツェゴビナ","BA"],["ボツワナ","BW"],["ボリビア","BO"],["ポルトガル","PT"],["ホンジュラス","HN"],["マーシャル諸島","MH"],["マダガスカル","MG"],["マラウイ","MW"],["マリ","ML"],["マルタ","MT"],["マレーシア","MY"],["ミクロネシア連邦","FM"],["南アフリカ","ZA"],["南スーダン","SS"],["ミャンマー","MM"],["メキシコ","MX"],["モーリシャス","MU"],["モーリタニア","MR"],["モザンビーク","MZ"],["モナコ","MC"],["モルディブ","MV"],["モルドバ","MD"],["モロッコ","MA"],["モンゴル","MN"],["モンテネグロ","ME"],["ヨルダン","JO"],["ラオス","LA"],["ラトビア","LV"],["リトアニア","LT"],["リビア","LY"],["リヒテンシュタイン","LI"],["リベリア","LR"],["ルーマニア","RO"],["ルクセンブルク","LU"],["ルワンダ","RW"],["レソト","LS"],["レバノン","LB"],["ロシア","RU"]
].map(([name, code]) => ({ name, code, flag: [...code].map(c => String.fromCodePoint(c.charCodeAt(0) + 127397)).join("") }));

const GAME_LENGTH = 10;
let questions = [];
let currentIndex = 0;
let score = 0;
let acceptingAnswers = true;

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

function startGame() {
  questions = shuffle(COUNTRIES).slice(0, GAME_LENGTH).map(makeQuestion);
  currentIndex = 0;
  score = 0;
  scoreElement.textContent = "0";
  resultScreen.hidden = true;
  quizScreen.hidden = false;
  showQuestion();
}

function showQuestion() {
  acceptingAnswers = true;
  const question = questions[currentIndex];
  flagElement.textContent = question.country.flag;
  flagElement.setAttribute("aria-label", `${currentIndex + 1}問目の国旗`);
  countElement.textContent = `だい ${currentIndex + 1} もん / ${GAME_LENGTH}`;
  progressBar.style.width = `${((currentIndex + 1) / GAME_LENGTH) * 100}%`;
  feedbackElement.textContent = "えらんでね！";
  feedbackElement.className = "feedback";
  answersElement.replaceChildren();

  question.choices.forEach(country => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-button";
    button.textContent = country.name;
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
    feedbackElement.textContent = "もういちど！";
    feedbackElement.className = "feedback wrong";
    window.setTimeout(() => selectedButton.classList.remove("wrong"), 450);
    return;
  }

  acceptingAnswers = false;
  score += 1;
  scoreElement.textContent = String(score);
  selectedButton.classList.add("correct");
  feedbackElement.textContent = "せいかい！";
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
    ? "すごい！ こっきはかせだね！"
    : score >= 7
      ? "やったね！ とっても よくできました！"
      : "がんばったね！ また ちょうせんしよう！";
  document.querySelector("#restart-button").focus();
}

document.querySelector("#restart-button").addEventListener("click", startGame);
startGame();
