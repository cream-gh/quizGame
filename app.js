const quiz = [
    {
        question: 'ゲーム史上、最も売れたゲーム機はどれ？',
        answers: ['スーパーファミコン', 'PlayStation 2', 'ニンテンドーDS', 'Xbox 360'],
        correct: 'ニンテンドーDS'
    }, {
        question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
        answers: ['MOTHER2', 'スーパーマリオブラザーズ3', 'スーパードンキーコング', '星のカービィ'],
        correct: 'MOTHER2'
    }, {
        question: 'ファイナルファンタジーⅣの主人公の名前は？',
        answers: ['フリオニール', 'クラウド', 'ティーダ', 'セシル'],
        correct: 'セシル'
    }
]

let quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const $initial = document.getElementById('initial');
let buttonLength = $button.length;

// 定数の文字列をhtmlに反映させる
const setUpQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while (buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}

setUpQuiz();

// ボタンをクリックした際の処理
const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert('正解!');
        score++;
    } else {
        window.alert('不正解!');
    }

    quizIndex++;
    if (quizIndex < quizLength) {
        // 問題数があればこちらを実行
        setUpQuiz();
    } else {
        // 問題数がなければこちらを実行
        window.alert('終了!あなたの正解数は' + score + '/' + quizLength + 'です!');
    }
};

// ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}

// 一問目からクイズをやり直す（「初めから」ボタンがクリックされたら）
$initial.addEventListener('click', (e) => {
    let buttonIndex = 0;
    document.getElementById('js-question').textContent = quiz[0].question;
    while (buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[0].answers[buttonIndex];
        buttonIndex++;
    }
    setInitial();
});

// 変数初期化処理
const setInitial = () => {
    quizIndex = 0;
    score = 0;
    answers = 0;
    correct = 0;
    question = 0;
}