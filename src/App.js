import { useState } from 'react';
import './App.css';

function App() {
  
  const [showFinalResult, setFinalResult] = useState(true);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [click, setClick] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('')
  const [clicked, setClicked] = useState(false);
  const [start, setStart] = useState(false);
  const [element, setElement] = useState('')
  const [className, setClassname] = useState('')
  const [questions, setQuestions] = useState(
    
    []
    
  )

  const htmlQuestions =  [
    {
        text: "HTML nima?",
        options: [
            { id: 1, text: "Hyper Text Markup Language", isCorrect: true },
            { id: 2, text: "Hyperlinks and Text Markup Language", isCorrect: false },
            { id: 3, text: "Home Tool Markup Language", isCorrect: false },
            { id: 4, text: "Hyperlinks and Text Markup Level", isCorrect: false }
        ]
    },
    {
        text: "HTML kodlar qanday turdagi faylda saqlanadi?",
        options: [
            { id: 1, text: ".xml", isCorrect: false },
            { id: 2, text: ".css", isCorrect: false },
            { id: 3, text: ".html", isCorrect: true },
            { id: 4, text: ".js", isCorrect: false }
        ]
    },
    {
        text: "HTMLda murakkab taglar qanday yoziladi?",
        options: [
            { id: 1, text: "<tag/>", isCorrect: false },
            { id: 2, text: "<tag></tag>", isCorrect: true },
            { id: 3, text: "{tag}", isCorrect: false },
            { id: 4, text: "<tag>", isCorrect: false }
        ]
    },
    {
        text: "HTML va CSS orasidagi asosiy farq nima?",
        options: [
            { id: 1, text: "HTML sahifani shakllantiradi, CSS uni stil beradi", isCorrect: true },
            { id: 2, text: "HTML sahifalarni shakllantiradi, CSS animatsiyalarni qo'llab-quvvatlaydi", isCorrect: false },
            { id: 3, text: "HTML JavaScriptni yuklaydi, CSS uni boshqaradi", isCorrect: false },
            { id: 4, text: "HTML uchun matn yozadi, CSS uchun tasvirlarni qo'llab-quvvatlaydi", isCorrect: false }
        ]
    },
    {
        text: "HTML fayl qayerda yaratiladi?",
        options: [
            { id: 1, text: "Dastur kodlari ichida", isCorrect: false },
            { id: 2, text: "Tizimga joylashgan", isCorrect: false },
            { id: 3, text: "Tekshirilgan dastur", isCorrect: false },
            { id: 4, text: "Har biri", isCorrect: true }
        ]
    },
    {
        text: "HTML-da qanday qilib koment qoldiriladi?",
        options: [
            { id: 1, text: "<!-- Bu HTML-kodni tushuntiruvchi koment -->", isCorrect: true },
            { id: 2, text: "// Bu HTML-kodni tushuntiruvchi koment", isCorrect: false },
            { id: 3, text: "' Bu HTML-kodni tushuntiruvchi koment", isCorrect: false },
            { id: 4, text: "## Bu HTML-kodni tushuntiruvchi koment", isCorrect: false }
        ]
    },
    {
        text: "HTML qanday qilib matnni ajratadi?",
        options: [
            { id: 1, text: "<br>", isCorrect: false },
            { id: 2, text: "<h1>", isCorrect: false },
            { id: 3, text: "<a>", isCorrect: false },
            { id: 4, text: "<p>", isCorrect: true },
        ]
    },
    {
        text: "HTML-da rasmlarni qanday joylash mumkin?",
        options: [
            { id: 1, text: "<picture>", isCorrect: false },
            { id: 2, text: "<img>", isCorrect: true },
            { id: 3, text: "<figure>", isCorrect: false },
            { id: 4, text: "<caption>", isCorrect: false }
        ]
    },
    {
        text: "HTML-da quti elementi qaysi?",
        options: [
            { id: 1, text: "<span>", isCorrect: false },
            { id: 2, text: "<text>", isCorrect: false },
            { id: 3, text: "<article>", isCorrect: false },
            { id: 4, text: "<div>", isCorrect: true },
        ]
    },
    {
        text: "HTML-da hyperlink qanday yoziladi?",
        options: [
            { id: 1, text: "<link>", isCorrect: false },
            { id: 2, text: "<href>", isCorrect: false },
            { id: 3, text: "<a>", isCorrect: true },
            { id: 4, text: "<ref>", isCorrect: false }
        ]
    }
];
 
  const cssQuestions = [
    {
        text: "CSS nima?",
        options: [
            { id: 1, text: "Cascading Style Sheets", isCorrect: true },
            { id: 2, text: "Creative Style Sheets", isCorrect: false },
            { id: 3, text: "Colorful Style Sheets", isCorrect: false },
            { id: 4, text: "Computer Style Sheets", isCorrect: false }
        ]
    },
    {
        text: "CSS-da stili qayerga qo'llash mumkin?",
        options: [
            { id: 1, text: "JavaScript", isCorrect: false },
            { id: 2, text: "Python", isCorrect: false },
            { id: 3, text: "HTML", isCorrect: true },
            { id: 4, text: "Java", isCorrect: false }
        ]
    },
    {
        text: "CSS-da klass va id attributlarining farqi nima?",
        options: [
            { id: 1, text: "Klass o'zgaruvchisi yagona elementga, id bir nechta elementlarga qo'llaniladi", isCorrect: true },
            { id: 2, text: "Klass tagga, id attribut elementga qo'llaniladi", isCorrect: false },
            { id: 3, text: "Klass xususiyligini ochadi, id xususiyligini qisqartiradi", isCorrect: false },
            { id: 4, text: "Klassgina turadi, id yagona elementga", isCorrect: false }
        ]
    },
    {
        text: "CSS fayl qayerda yaratiladi?",
        options: [
            { id: 1, text: "Dastur kodlari", isCorrect: false },
            { id: 2, text: "Tizimga joylashgan", isCorrect: false },
            { id: 3, text: "HTML fayl ichida", isCorrect: false },
            { id: 4, text: "Har biri", isCorrect: true }
        ]
    },
    {
        text: "CSS-da qanday qilib komment qoldiriladi?",
        options: [
            { id: 1, text: "/* Bu CSS-kodni tushuntiruvchi komment */", isCorrect: true },
            { id: 2, text: "// Bu CSS-kodni tushuntiruvchi komment", isCorrect: false },
            { id: 3, text: "' Bu CSS-kodni tushuntiruvchi komment", isCorrect: false },
            { id: 4, text: "<!-- Bu CSS-kodni tushuntiruvchi komment -->", isCorrect: false }
        ]
    },
    {
        text: "CSS-da stili qo'llash uchun qanday yo'l qo'llaniladi?",
        options: [
            { id: 1, text: "Inline, External, Internal", isCorrect: false },
            { id: 2, text: "External, Internal, Inline", isCorrect: false },
            { id: 3, text: "Inline, Internal, External", isCorrect: true },
            { id: 4, text: "Internal, Inline, External", isCorrect: false }
        ]
    },
    {
        text: "CSS-da stili qo'llashda qanday tarkib qo'llaniladi?",
        options: [
            { id: 1, text: "Selectors, Properties, Values", isCorrect: true },
            { id: 2, text: "Selectors, Elements, Attributes", isCorrect: false },
            { id: 3, text: "Values, Attributes, Properties", isCorrect: false },
            { id: 4, text: "Elements, Properties, Values", isCorrect: false }
        ]
    },
    {
        text: "CSS-da qanday qilib faylni tizimga ulash mumkin?",
        options: [
            { id: 1, text: "<style>", isCorrect: false },
            { id: 2, text: "<link>", isCorrect: true },
            { id: 3, text: "<head>", isCorrect: false },
            { id: 4, text: "<script>", isCorrect: false }
        ]
    },
    {
        text: "CSS-da ranglar uchun qanday tarkib qo'llaniladi?",
        options: [
            { id: 1, text: "CMYK, HEX, RGBA", isCorrect: false },
            { id: 2, text: "CMYK, RGB, HEX", isCorrect: false },
            { id: 3, text: "CMYK, RGB, HSL", isCorrect: false },
            { id: 4, text: "RGB, HEX, RGBA", isCorrect: true },
        ]
    },
    {
        text: "CSS-da blok va inline-elementlar orasidagi farq nima?",
        options: [
            { id: 1, text: "Blok-elementlar oldiga va keyinidan qator bosilib, inline-elementlar yonidan, oldidan va keyinidan", isCorrect: true },
            { id: 2, text: "Inline-elementlar oldiga va keyinidan qator bosilib, blok-elementlar yonidan, oldidan va keyinidan", isCorrect: false },
            { id: 3, text: "Blok-elementlar oldiga va keyinidan qator bosilib, inline-elementlar oldidan va keyinidan", isCorrect: false },
            { id: 4, text: "Inline-elementlar oldiga va keyinidan qator bosilib, blok-elementlar oldidan va keyinidan", isCorrect: false }
        ]
    }
];

const javascriptQuestions = [
  {
      text: "JavaScriptda o'zgaruvchini aniqlash uchun qaysi key qo'llanilmaydi?",
      options: [
          { id: 1, text: "let", isCorrect: false },
          { id: 2, text: "var", isCorrect: true },
          { id: 3, text: "const", isCorrect: false },
          { id: 4, text: "set", isCorrect: false }
      ]
  },
  {
      text: "JavaScriptda massivda element qo'shish uchun qaysi metod ishlatiladi?",
      options: [
          { id: 1, text: "add()", isCorrect: false },
          { id: 2, text: "add()", isCorrect: false },
          { id: 3, text: "push()", isCorrect: true },
          { id: 4, text: "insert()", isCorrect: false }
      ]
  },
  {
      text: "JavaScriptda ifoda qilish uchun qanday belgilar ishlatiladi?",
      options: [
          { id: 1, text: "{}", isCorrect: true },
          { id: 2, text: "[]", isCorrect: false },
          { id: 3, text: "()", isCorrect: false },
          { id: 4, text: "<>", isCorrect: false }
      ]
  },
  {
      text: "JavaScriptda funksiyani chaqirish uchun qaysi belgilardan foydalaniladi?",
      options: [
          { id: 1, text: "{}", isCorrect: false },
          { id: 2, text: "[]", isCorrect: false },
          { id: 3, text: "()", isCorrect: true },
          { id: 4, text: "<>", isCorrect: false }
      ]
  },
  {
      text: "JavaScriptda o'zgaruvchilar qanday qilib tanlanadi?",
      options: [
          { id: 1, text: "By reference", isCorrect: false },
          { id: 2, text: "By value", isCorrect: true },
          { id: 3, text: "By address", isCorrect: false },
          { id: 4, text: "By pointer", isCorrect: false }
      ]
  },
  {
      text: "JavaScriptda for tsikli qanday ishlaydi?",
      options: [
          { id: 1, text: "Tanlash bilan", isCorrect: false },
          { id: 2, text: "Shartga bog'liq", isCorrect: false },
          { id: 3, text: "Nechta amalga oshirish kerakligiga bog'liq", isCorrect: true },
          { id: 4, text: "Yulduzcha bilan", isCorrect: false }
      ]
  },
  {
      text: "JavaScriptda '==' va '===' belgilari qanday farq qiladi?",
      options: [
          { id: 1, text: "Bu ikkala belgi bir xil", isCorrect: false },
          { id: 2, text: "Bu ikkala belgi farqi o'zgaruvchilarni solishtirish uchun ishlatiladi", isCorrect: false },
          { id: 3, text: "Bu ikkala belgi o'zgaruvchilarni solishtirish uchun ishlatiladi", isCorrect: false },
          { id: 4, text: "'===' o'zgaruvchilarni ham turini ham qiymatini solishtiradi", isCorrect: true }
      ]
  },
  {
      text: "JavaScriptda 'let' va 'var' o'zgaruvchi tanlashda qanday farq qiladi?",
      options: [
          { id: 1, text: "'var' global o'zgaruvchi bo'ladi, 'let' lokal o'zgaruvchi", isCorrect: true },
          { id: 2, text: "'var' lokal o'zgaruvchi bo'ladi, 'let' global o'zgaruvchi", isCorrect: false },
          { id: 3, text: "'var' faqat qatorda ishlaydi, 'let' xususiy bo'lmagan joyda", isCorrect: false },
          { id: 4, text: "'let' global o'zgaruvchi bo'ladi, 'var' lokal o'zgaruvchi", isCorrect: false }
      ]
  },
  {
      text: "JavaScriptda 'null' va 'undefined' qanday farq qiladi?",
      options: [
          { id: 1, text: "Bu ikkala qiymat bir xil", isCorrect: false },
          { id: 2, text: "'null' belgisi o'zgaruvchi mavjud emasligini bildiradi, 'undefined' esa qiymat topilmaganligini", isCorrect: true },
          { id: 3, text: "'null' belgisi o'zgaruvchi mavjudligini bildiradi, 'undefined' esa qiymat topilganligini", isCorrect: false },
          { id: 4, text: "'undefined' belgisi o'zgaruvchi mavjud emasligini bildiradi, 'null' esa qiymat topilmaganligini", isCorrect: false }
      ]
  },
  {
      text: "JavaScriptda 'NaN' nima anglatadi?",
      options: [
          { id: 1, text: "Natural Number", isCorrect: false },
          { id: 2, text: "Negative Answer", isCorrect: false },
          { id: 3, text: "Not a Number", isCorrect: true },
          { id: 4, text: "New And Nice", isCorrect: false }
      ]
  }
];
  const onCheck = (isCorrect) =>{
           if(!click){
            if(isCorrect.isCorrect){
              setScore(score + 1)
              console.log(isCorrect);
            }
            var trueLi = document.getElementById('true');
              var falseLi = document.getElementById('false');
              console.log(trueLi);
              // trueLi.style.border = '2px solid green';
              // falseLi.style.border = '2px solid red';
              // if(falseLi.onclick){
              //   falseLi.style.border = '2px solid red';
              // }
            setClick(true)

            setBackgroundColor(isCorrect.index)
           
            
  }

  
}

const optionClicked = () =>{
    

  const listItem = document.querySelectorAll('li');

  listItem.forEach(item => {
      item.style.border = 'none';
      item.children[0].classList.remove('fa-check');
      item.children[0].classList.remove('i1');
      item.children[0].classList.remove('i2');
      item.children[0].classList.remove('fa-xmark');

  })

  if(currentQuestion + 1 < questions.length){
    setCurrentQuestion(currentQuestion + 1)
  }
  else{
    setFinalResult(false)
  }
  const progress = (100 / questions.length) * (currentQuestion + 1); 

  // const li = document.getElementById('true')
  // const li2 = document.getElementById('false');
  // li.style.border = 'none';
  // li2.style.border = 'none';


  const divLine = document.getElementById('divLine');
  divLine.style.width = `${progress}%`

  setClick(false)
  setClicked(false)
}


const divA = () =>{
  return (
    <div className='divChar'>
        {}
    </div>
  )
}

  const restartGame = () =>{ 
    setScore(0);
    setCurrentQuestion(0);
    setFinalResult(true)
  }



  window.addEventListener('mousemove', (e)=>{
      const cursor = document.getElementById('cursor');
      const cursorDot = document.getElementById('cursor-dot');
      const postX = e.clientX;
      const postY = e.clientY;

      cursor.style.top = `${postY}`;
      cursor.style.left = `${postX}`;

      cursorDot.style.left = `${postX}`;
      cursorDot.style.top = `${postY}`;

      // cursorDot.animate({
      //   left: `${postX}`,
      //   top: `${postY}`
      // }, {duration: 5000, fill: "forwards"});
  })



  



  return (
    <div className="App">


        {showFinalResult ? (

          

          <div className='question-card d-flex justify-content-between'>
          <div className='div-line3 px-5'>
              {start ? (
                  <div className='w-100'>
                    <p className='text-start fst-italic' >Question {currentQuestion + 1} out of {questions.length}</p>
                    <h3 className='question-text text-start text-dark'>{questions[currentQuestion].text}</h3>

                    <div className='divLine1'>
                    <div id='divLine'></div>
                    </div>
                  </div>
              ) : (
                <div>
                    <div className='w-100'>
                      <h1 className='text-starter text-start text-dark'>Welcome to the <h1 className='text-starter1'>Frontend Quiz!</h1></h1>
                      <p className='text-start fst-italic mt-4 text-secondary'>Pick a subject to get started.</p>
                    </div>
                </div>
              )}
          </div>


          <div className='div-line4 px-3'>
                {start ? (
                  <ul>
                  {questions[currentQuestion].options.map((option, index) => {
                    return (
                      <li  onClick={(e) => {
                        onCheck(option)
                        setBackgroundColor(index);
                          if(!clicked){
                            e.target.style.border =  option.isCorrect ? '2px solid rgb(0, 172, 0)' : '2px solid red';
                            setClicked(index)
                            document.getElementById('true')
                            if(option.isCorrect){
                              e.target.children[0].classList.remove('fa-xmark');
                              e.target.children[0].classList.remove('text-red');
                              e.target.children[0].classList.remove('i2');
                              e.target.children[0].classList.add('fa-check');
                              e.target.children[0].classList.add('text-green');
                              e.target.children[0].classList.add('i1');
                            } else{
                              e.target.children[0].classList.remove('fa-check');
                              document.getElementById('true').style.border = '2px solid rgb(0, 172, 0)';
                              document.getElementById('true').children[0].classList.add('fa-check');
                              document.getElementById('true').children[0].classList.add('i1');
                              document.getElementById('true').children[0].classList.add('text-green');
                              document.getElementById('true').children[0].classList.remove('text-red');
                              // document.getElementById('true').children[0].classList.remove('text-green');
                              // document.getElementById('true').children[0].classList.remove('i1');
                              e.target.children[0].classList.add('fa-xmark');
                              e.target.children[0].classList.add('text-red');
                              e.target.children[0].classList.add('i2');
                            }
                            // console.log(e.target.children[0]);
                          }
                          setClicked(true)
                      }} id={String(option.isCorrect)} key={option.id} className='liEl text-start d-flex justify-content-between'> {option.text} <i className='fa-solid mt-2'></i></li>
                    )
                  })}
  
                  <button id='bt-submit' onClick={(()=> optionClicked(questions[currentQuestion].options.map((option => {
                    return (option)
                  }))))} >Next </button>
              </ul>
                ) : (
                  <div className='w-100' >
                      <div onClick={()=> {
                        setStart(true)
                        setQuestions(htmlQuestions)
                        setElement('HTML')
                        setClassname('fa-code icode')
                      }} className='text-start w-100 subject'>
                          <i className='fa-solid fa-code icode'></i> <p>HTML</p>
                      </div>
                      <div onClick={()=>{
                          setStart(true)
                          setQuestions(cssQuestions)
                          setElement('CSS')
                          setClassname('fa-brush ibrush')
                      }} className='text-start w-100 subject'>
                          <i className='fa-solid fa-brush ibrush'></i> <p>CSS</p>
                      </div>
                      <div onClick={()=> {
                        setStart(true)
                        setQuestions(javascriptQuestions)
                        setElement('Javascript')
                        setClassname('fa-brands fa-js ijs')
                      }} className='text-start w-100 subject'>
                          <i className='fa-brands fa-js ijs'></i> <p>Javascript</p>                      
                    </div>
                  </div>
                )}
          </div>
        </div> 
        )
            
            : 
                
            (
              <div className='final-results d-flex'>
                  <div className='div-line3 divfinal1 px-5'>
                    <h1 className='text-starter2 text-start text-dark'>Quiz Completed <h1 className='text-starter1'>Your Scored...</h1></h1>
                  </div>
                  <div className='div-line4 div-final2 px-3'>
                      <div className='score1'>
                          <div className='d-flex' style={{margin: '0 auto', width: '200px'}}>
                             <i className={`fa-solid ${className}`}></i>
                             <h3 className='ms-3 mt-2 fw-bold text-dark'>{element}</h3>
                          </div>
                          <h1 className='score-text text-dark'>{score}</h1>
                          <p className='fs-3 text-secondary'>out of {questions.length}</p>
                      </div>

                      <button onClick={()=> {
                        setStart(false)
                        setFinalResult(true )
                        setCurrentQuestion(0)
                        setScore(0)
                      }} className='btn-again'>Play again</button>

                  </div>
              </div>
            )    

      
      }

      <div className='cursor' id='cursor'></div>
      <div className='cursor-dot' id='cursor-dot'></div>
    </div>
  );
  }
  


export default App;
