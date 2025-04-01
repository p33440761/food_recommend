// 主题切换功能
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  
  // 检查本地存储中的主题设置
  if (localStorage.getItem('color-theme') === 'dark' || 
      (!localStorage.getItem('color-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  
  // 切换主题按钮点击事件
  themeToggleBtn.addEventListener('click', function() {
    // 切换暗色类
    document.documentElement.classList.toggle('dark');
    
    // 更新本地存储中的主题设置
    if (document.documentElement.classList.contains('dark')) {
      localStorage.setItem('color-theme', 'dark');
    } else {
      localStorage.setItem('color-theme', 'light');
    }
  });
}

// 載入JSON數據
const weatherOptions = [
  "晴天",
  "陰天",
  "下雨",
  "寒冷",
  "悶熱",
  "涼爽",
  "艷陽高照"
];

const moodOptions = [
  "心情低落",
  "想耍廢",
  "想放空",
  "缺乏能量",
  "暴躁",
  "開心",
  "浪漫",
  "放鬆",
  "充滿活力",
  "躁動"
];

// 天氣對應的emoji和描述
const weatherEmojis = {
  "晴天": "☀️",
  "陰天": "☁️",
  "下雨": "🌧️",
  "寒冷": "❄️",
  "悶熱": "🔥",
  "涼爽": "🍃",
  "艷陽高照": "☀️☀️"
};

// 情緒對應的emoji和描述
const moodEmojis = {
  "心情低落": "😔",
  "想耍廢": "😪",
  "想放空": "😶",
  "缺乏能量": "😩",
  "暴躁": "😠",
  "開心": "😄",
  "浪漫": "😍",
  "放鬆": "😌",
  "充滿活力": "💪",
  "躁動": "😬"
};

// 表情特徵描述
const facialFeatures = {
  "心情低落": "嘴角下垂、眉毛微皺",
  "想耍廢": "眼睛半開、頭微微歪斜",
  "想放空": "眼神渙散、眉毛放鬆",
  "缺乏能量": "眼睛無神、肩膀下垂",
  "暴躁": "眉毛緊蹙、嘴角緊繃",
  "開心": "嘴角上揚、眼睛明亮",
  "浪漫": "眼神柔和、嘴角微笑",
  "放鬆": "表情放鬆、眉毛自然",
  "充滿活力": "精神飽滿、目光堅定",
  "躁動": "眼神游移、表情不安"
};

// 餐點數據
const dishes = [
  {
    "country": "台灣",
    "dish": "鹽酥雞",
    "image": "./images/01.webp",
    "recommendedWhen": {
      "weather": "下雨",
      "mood": "想放空"
    },
    "quote": "你臉上寫著『給我一包加辣鹽酥雞，不加蒜不會動』。"
  },
  {
    "country": "日本",
    "dish": "拉麵",
    "image": "./images/02.webp",
    "recommendedWhen": {
      "weather": "寒冷",
      "mood": "心情低落"
    },
    "quote": "這種天氣，只有熱呼呼的拉麵能安撫你的靈魂🍜。"
  },
  {
    "country": "韓國",
    "dish": "炸雞+啤酒",
    "image": "./images/03.webp",
    "recommendedWhen": {
      "weather": "晴天",
      "mood": "想耍廢"
    },
    "quote": "你需要一場酥脆爽炸的療癒儀式：炸雞加啤酒🍗🍺。"
  },
  {
    "country": "泰國",
    "dish": "炒河粉 Pad Thai",
    "image": "./images/04.webp",
    "recommendedWhen": {
      "weather": "悶熱",
      "mood": "躁動"
    },
    "quote": "你今天的靈魂需要一點酸甜鹹辣的打擊感：Pad Thai。"
  },
  {
    "country": "印度",
    "dish": "奶油雞咖哩",
    "image": "./images/05.webp",
    "recommendedWhen": {
      "weather": "陰天",
      "mood": "缺乏能量"
    },
    "quote": "你今天需要濃郁辛香的能量注入：來點奶油咖哩配 Naan！"
  },
  {
    "country": "義大利",
    "dish": "卡邦尼義大利麵",
    "image": "./images/06.webp",
    "recommendedWhen": {
      "weather": "涼爽",
      "mood": "浪漫"
    },
    "quote": "濃郁奶香、迷人胡椒，這不是義大利麵，這是你今天的戀愛感。"
  },
  {
    "country": "法國",
    "dish": "可麗餅",
    "image": "./images/07.webp",
    "recommendedWhen": {
      "weather": "晴天",
      "mood": "放鬆"
    },
    "quote": "今天的你，就該一邊吃可麗餅一邊假裝自己在巴黎。"
  },
  {
    "country": "西班牙",
    "dish": "海鮮燉飯 Paella",
    "image": "./images/08.webp",
    "recommendedWhen": {
      "weather": "艷陽高照",
      "mood": "充滿活力"
    },
    "quote": "今天不缺陽光，你缺的是一大鍋金黃澄澄的海鮮燉飯！"
  },
  {
    "country": "美國",
    "dish": "起司漢堡",
    "image": "./images/09.webp",
    "recommendedWhen": {
      "weather": "陰天",
      "mood": "暴躁"
    },
    "quote": "人生已經夠難了，還不吃個雙層起司漢堡壓壓驚？🍔"
  },
  {
    "country": "墨西哥",
    "dish": "Taco 墨西哥捲餅",
    "image": "./images/10.webp",
    "recommendedWhen": {
      "weather": "大太陽",
      "mood": "開心"
    },
    "quote": "Taco 為你而生，熱情開口，餅皮包住你今天的幸福🌮。"
  }
];

// DOM元素
const uploadArea = document.getElementById('upload-area');
const photoUpload = document.getElementById('photo-upload');
const analyzingSection = document.getElementById('analyzing');
const resultSection = document.getElementById('result');
const progressBar = document.getElementById('progress-bar');
const analysisStatus = document.getElementById('analysis-status');
const foodImage = document.getElementById('food-image');
const foodName = document.getElementById('food-name');
const foodDescription = document.getElementById('food-description');
const funnyComment = document.getElementById('funny-comment');
const shareBtn = document.getElementById('share-btn');
const tryAgainBtn = document.getElementById('try-again-btn');
const selfieMode = document.getElementById('selfie-mode');
const manualMode = document.getElementById('manual-mode');
const selfieModeBtn = document.getElementById('selfie-mode-btn');
const manualModeBtn = document.getElementById('manual-mode-btn');
const moodSelector = document.getElementById('mood-selector');
const weatherSelector = document.getElementById('weather-selector');
const generateRecommendationBtn = document.getElementById('generate-recommendation');
const aiExplanation = document.getElementById('ai-explanation');
const modeSelectionContainer = document.querySelector('.max-w-2xl.mx-auto.mb-6'); // 模式選擇容器

// 當前模式
let currentMode = 'selfie'; // 'selfie' 或 'manual'

// 手動選擇的情緒和天氣
let selectedMood = null;
let selectedWeather = null;

// 分享文本
let shareText = '';

// P5.js 設置
let particles = [];
let foodIcons = ['🍔', '🍜', '🍕', '🥗', '🍣', '🍦', '🍰', '🍩', '🌮', '🥪'];

// 初始化P5.js畫布
new p5(function(p) {
  p.setup = function() {
    let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    canvas.parent('p5-container');
    
    // 創建初始粒子
    for (let i = 0; i < 40; i++) {
      particles.push(createParticle(p));
    }
  };
  
  p.draw = function() {
    p.clear();
    p.textAlign(p.CENTER, p.CENTER);
    p.textSize(30);
    
    // 更新和顯示所有粒子
    for (let i = 0; i < particles.length; i++) {
      let particle = particles[i];
      
      // 移動粒子
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      // 邊界檢查
      if (particle.x < 0 || particle.x > p.width || 
          particle.y < 0 || particle.y > p.height) {
        particles[i] = createParticle(p);
      }
      
      // 繪製粒子
      p.fill(particle.color);
      p.text(particle.icon, particle.x, particle.y);
    }
  };
  
  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
  
  p.mouseMoved = function() {
    // 當滑鼠移動時，添加一個新粒子跟隨
    if (p.frameCount % 6 === 0) {
      let newParticle = createParticle(p);
      newParticle.x = p.mouseX;
      newParticle.y = p.mouseY;
      particles.push(newParticle);
      
      // 限制粒子數量
      if (particles.length > 80) {
        particles.shift();
      }
    }
  };
});

// 創建一個新粒子
function createParticle(p) {
  return {
    x: p.random(p.width),
    y: p.random(p.height),
    icon: foodIcons[Math.floor(p.random(foodIcons.length))],
    size: p.random(15, 40),
    vx: p.random(-1.5, 1.5),
    vy: p.random(-1.5, 1.5),
    color: p.color(
      p.random(80, 255),
      p.random(80, 255),
      p.random(80, 255),
      p.random(180, 255)
    )
  };
}

// 顯示結果
function showResult(userMood = null, userWeather = null) {
  // 隱藏分析中區域和所有選擇功能區域
  analyzingSection.style.display = 'none';
  selfieMode.style.display = 'none';
  manualMode.style.display = 'none';
  modeSelectionContainer.style.display = 'none'; // 隱藏模式選擇按鈕
  
  // 確定心情和天氣
  let finalMood, finalWeather;
  
  if (currentMode === 'manual' && userMood && userWeather) {
    // 使用手動選擇的情緒和天氣
    finalMood = userMood;
    finalWeather = userWeather;
  } else {
    // 隨機選擇天氣和情緒（自拍模式下的模擬）
    finalMood = moodOptions[Math.floor(Math.random() * moodOptions.length)];
    finalWeather = weatherOptions[Math.floor(Math.random() * weatherOptions.length)];
  }
  
  // 找出符合天氣和心情的料理，或隨機選擇一個
  let matchingDishes = dishes.filter(dish => 
    dish.recommendedWhen.weather === finalWeather && 
    dish.recommendedWhen.mood === finalMood
  );
  
  // 如果沒有完全匹配的，嘗試匹配天氣
  if (matchingDishes.length === 0) {
    matchingDishes = dishes.filter(dish => 
      dish.recommendedWhen.weather === finalWeather
    );
  }
  
  // 如果仍然沒有匹配的，嘗試匹配心情
  if (matchingDishes.length === 0) {
    matchingDishes = dishes.filter(dish => 
      dish.recommendedWhen.mood === finalMood
    );
  }
  
  // 如果還是沒有匹配的，隨機選擇一個料理
  const selectedDish = matchingDishes.length > 0 
    ? matchingDishes[Math.floor(Math.random() * matchingDishes.length)] 
    : dishes[Math.floor(Math.random() * dishes.length)];
  
  // 填充結果
  foodImage.src = selectedDish.image;
  
  // 精簡菜名顯示，以英文表示更接近收據樣式
  const dishTranslations = {
    "鹽酥雞": "Fried Chicken",
    "拉麵": "Ramen",
    "炸雞+啤酒": "Fried Chicken & Beer",
    "炒河粉 Pad Thai": "Pad Thai",
    "奶油雞咖哩": "Butter Chicken Curry",
    "卡邦尼義大利麵": "Carbonara Pasta",
    "可麗餅": "Crepe",
    "海鮮燉飯 Paella": "Seafood Paella",
    "起司漢堡": "Cheeseburger",
    "Taco 墨西哥捲餅": "Taco"
  };
  
  // 英文國家名稱
  const countryTranslations = {
    "台灣": "Taiwanese",
    "日本": "Japanese",
    "韓國": "Korean",
    "泰國": "Thai",
    "印度": "Indian",
    "義大利": "Italian",
    "法國": "French",
    "西班牙": "Spanish",
    "美國": "American",
    "墨西哥": "Mexican"
  };
  
  // 翻譯菜名和國家名 (若有)
  const englishDishName = dishTranslations[selectedDish.dish] || selectedDish.dish;
  const englishCountry = countryTranslations[selectedDish.country] || selectedDish.country;
  
  // 顯示英文菜名
  document.getElementById('english-dish-name').textContent = englishCountry + " " + englishDishName;
  
  // 顯示中文菜名和國家名
  document.getElementById('chinese-dish-name').textContent = selectedDish.dish;
  document.getElementById('chinese-country').textContent = `來自${selectedDish.country}的美食`;
  
  // 顯示菜品引述
  document.getElementById('dish-quote').textContent = selectedDish.quote;
  
  // 生成AI解釋文本
  generateAIExplanation(finalMood, finalWeather, selectedDish);
  
  // 準備分享文本
  shareText = `AI推薦我品嚐${selectedDish.country}的${selectedDish.dish}！${selectedDish.quote}`;
  
  // 顯示結果區域
  resultSection.style.display = 'block';
  setTimeout(() => {
    resultSection.classList.add('show');
    
    // 自動滾動到頁面頂部
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, 10);
}

// 生成AI解釋文本
function generateAIExplanation(mood, weather, dish) {
  const moodEmoji = moodEmojis[mood] || "😊";
  const weatherEmoji = weatherEmojis[weather] || "🌤️";
  const facialFeature = facialFeatures[mood] || "";
  
  let explanationHTML = `
    <div class="flex flex-col space-y-3">
      <div class="flex items-center">
        <div class="w-8 h-8 flex items-center justify-center text-xl">${moodEmoji}</div>
        <div class="ml-3">
          <p><span class="font-semibold">AI分析你的表情：</span> ${facialFeature} = ${mood}</p>
        </div>
      </div>
      
      <div class="flex items-center">
        <div class="w-8 h-8 flex items-center justify-center text-xl">${weatherEmoji}</div>
        <div class="ml-3">
          <p><span class="font-semibold">今天天氣：</span> ${weather}</p>
        </div>
      </div>
      
      <div class="pt-2 border-t border-gray-200 dark:border-gray-700">
        <p class="text-sm italic">根據你的表情和天氣，AI決定推薦你來自${dish.country}的<span class="font-semibold">${dish.dish}</span>！</p>
      </div>
    </div>
  `;
  
  aiExplanation.innerHTML = explanationHTML;
}

// 初始化手動選擇界面
function initManualSelectors() {
  // 清空現有內容
  moodSelector.innerHTML = '';
  weatherSelector.innerHTML = '';
  
  // 添加情緒選項
  moodOptions.forEach(mood => {
    const moodElement = document.createElement('div');
    moodElement.className = 'cursor-pointer p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-400 transition-colors text-center';
    moodElement.innerHTML = `
      <div class="text-2xl mb-1">${moodEmojis[mood] || ""}</div>
      <div class="text-sm">${mood}</div>
    `;
    moodElement.dataset.mood = mood;
    
    moodElement.addEventListener('click', () => {
      // 移除其他選中項
      document.querySelectorAll('#mood-selector > div').forEach(el => {
        el.classList.remove('border-purple-500', 'bg-purple-50', 'dark:bg-purple-900/20');
      });
      
      // 選中當前項
      moodElement.classList.add('border-purple-500', 'bg-purple-50', 'dark:bg-purple-900/20');
      selectedMood = mood;
    });
    
    moodSelector.appendChild(moodElement);
  });
  
  // 添加天氣選項
  weatherOptions.forEach(weather => {
    const weatherElement = document.createElement('div');
    weatherElement.className = 'cursor-pointer p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-400 transition-colors text-center';
    weatherElement.innerHTML = `
      <div class="text-2xl mb-1">${weatherEmojis[weather] || ""}</div>
      <div class="text-sm">${weather}</div>
    `;
    weatherElement.dataset.weather = weather;
    
    weatherElement.addEventListener('click', () => {
      // 移除其他選中項
      document.querySelectorAll('#weather-selector > div').forEach(el => {
        el.classList.remove('border-purple-500', 'bg-purple-50', 'dark:bg-purple-900/20');
      });
      
      // 選中當前項
      weatherElement.classList.add('border-purple-500', 'bg-purple-50', 'dark:bg-purple-900/20');
      selectedWeather = weather;
    });
    
    weatherSelector.appendChild(weatherElement);
  });
}

// 切換模式
function switchMode(mode) {
  if (mode === 'selfie') {
    selfieMode.style.display = 'block';
    manualMode.style.display = 'none';
    selfieModeBtn.classList.remove('border', 'border-gray-300', 'dark:border-gray-600', 'bg-white', 'dark:bg-gray-800', 'text-gray-800', 'dark:text-gray-200');
    selfieModeBtn.classList.add('bg-purple-500', 'dark:bg-purple-600', 'text-white');
    manualModeBtn.classList.add('border', 'border-gray-300', 'dark:border-gray-600', 'bg-white', 'dark:bg-gray-800', 'text-gray-800', 'dark:text-gray-200');
    manualModeBtn.classList.remove('bg-purple-500', 'dark:bg-purple-600', 'text-white');
    currentMode = 'selfie';
  } else {
    selfieMode.style.display = 'none';
    manualMode.style.display = 'block';
    selfieModeBtn.classList.add('border', 'border-gray-300', 'dark:border-gray-600', 'bg-white', 'dark:bg-gray-800', 'text-gray-800', 'dark:text-gray-200');
    selfieModeBtn.classList.remove('bg-purple-500', 'dark:bg-purple-600', 'text-white');
    manualModeBtn.classList.remove('border', 'border-gray-300', 'dark:border-gray-600', 'bg-white', 'dark:bg-gray-800', 'text-gray-800', 'dark:text-gray-200');
    manualModeBtn.classList.add('bg-purple-500', 'dark:bg-purple-600', 'text-white');
    currentMode = 'manual';
  }
}

// 初始化頁面
document.addEventListener('DOMContentLoaded', function() {
  // 初始化主題切換功能
  initThemeToggle();
  
  // 初始化手動選擇界面
  initManualSelectors();
  
  // 模式切換按鈕
  selfieModeBtn.addEventListener('click', () => switchMode('selfie'));
  manualModeBtn.addEventListener('click', () => switchMode('manual'));
  
  // 生成推薦按鈕
  generateRecommendationBtn.addEventListener('click', () => {
    if (!selectedMood || !selectedWeather) {
      alert('請選擇你的心情和當前天氣！');
      return;
    }
    
    // 添加視覺反饋
    generateRecommendationBtn.classList.add('animate-pulse');
    setTimeout(() => {
      generateRecommendationBtn.classList.remove('animate-pulse');
      showResult(selectedMood, selectedWeather);
      
      // 自動滾動到頁面頂部
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 300);
  });
  
  // 上傳區域點擊事件
  uploadArea.addEventListener('click', function() {
    photoUpload.click();
  });
  
  // 拖放文件
  uploadArea.addEventListener('dragover', function(e) {
    e.preventDefault();
    uploadArea.classList.add('dragover');
  });
  
  uploadArea.addEventListener('dragleave', function() {
    uploadArea.classList.remove('dragover');
  });
  
  uploadArea.addEventListener('drop', function(e) {
    e.preventDefault();
    uploadArea.classList.remove('dragover');
    
    if (e.dataTransfer.files.length > 0) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  });
  
  // 文件選擇事件
  photoUpload.addEventListener('change', function() {
    if (this.files.length > 0) {
      handleFileUpload(this.files[0]);
    }
  });
  
  // 分享按鈕
  shareBtn.addEventListener('click', function() {
    if (navigator.share) {
      navigator.share({
        title: '我的命定餐點',
        text: shareText,
        url: window.location.href
      });
    } else {
      alert('您的瀏覽器不支持分享功能，請手動複製網址分享。');
    }
  });
  
  // 再試一次按鈕
  tryAgainBtn.addEventListener('click', function() {
    resultSection.classList.remove('show');
    setTimeout(() => {
      resultSection.style.display = 'none';
      
      // 顯示模式選擇按鈕
      modeSelectionContainer.style.display = 'block';
      
      // 根據當前模式顯示對應的選擇區域
      if (currentMode === 'selfie') {
        selfieMode.style.display = 'block';
      } else {
        manualMode.style.display = 'block';
        // 重置選擇
        document.querySelectorAll('#mood-selector > div, #weather-selector > div').forEach(el => {
          el.classList.remove('border-purple-500', 'bg-purple-50', 'dark:bg-purple-900/20');
        });
        selectedMood = null;
        selectedWeather = null;
      }
      
      // 自動滾動到頁面頂部
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 300);
  });
});

// 處理文件上傳
function handleFileUpload(file) {
  // 檢查是否為圖片
  if (!file.type.match('image.*')) {
    alert('請上傳圖片文件！');
    return;
  }
  
  // 隱藏所有選擇功能區域
  selfieMode.style.display = 'none';
  manualMode.style.display = 'none';
  modeSelectionContainer.style.display = 'none'; // 隱藏模式選擇按鈕
  
  // 顯示分析中區域
  analyzingSection.style.display = 'block';
  
  // 啟動進度條動畫
  progressBar.classList.add('animate');
  
  // 模擬分析過程
  const analysisPhrases = [
    '掃描表情中...',
    '分析面部特徵...',
    '檢測情緒指數...',
    '獲取天氣數據...',
    '判斷當前時間...',
    '尋找符合條件的美食...',
    '計算味覺相容性...',
    '生成美食推薦...',
    '確認最終建議...'
  ];
  
  let phraseIndex = 0;
  let analysisInterval = setInterval(() => {
    analysisStatus.textContent = analysisPhrases[phraseIndex];
    phraseIndex++;
    
    if (phraseIndex >= analysisPhrases.length) {
      clearInterval(analysisInterval);
      setTimeout(() => {
        showResult();
        
        // 自動滾動到頁面頂部
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, 1000);
    }
  }, 500);
}