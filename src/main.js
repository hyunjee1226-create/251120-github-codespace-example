import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <div class="hero-section">
      <h1 class="title">안녕하세요</h1>
      <p class="subtitle">저를 소개합니다</p>
    </div>

    <section class="intro-section">
      <div class="intro-card">
        <h2>자기소개</h2>
        <textarea 
          class="intro-input" 
          placeholder="안녕하세요! 저는 과학교육과의 지구과학전공 OOO이라고 합니다."
        ></textarea>
        <button class="save-btn" onclick="saveIntro()">저장</button>
      </div>
    </section>

    <section class="experience-section">
      <h2>경력</h2>
      <div class="experience-list" id="experienceList">
        <div class="experience-item">
          <div class="exp-header">
            <input type="text" class="exp-title" placeholder="직책/역할" value="예: 개발자">
            <input type="text" class="exp-period" placeholder="기간" value="예: 2023 ~ 현재">
          </div>
          <textarea class="exp-description" placeholder="상세 내용을 작성하세요"></textarea>
          <button class="delete-btn" onclick="deleteExperience(this)">삭제</button>
        </div>
      </div>
      <button class="add-btn" onclick="addExperience()">+ 경력 추가</button>
    </section>
  </div>`

// 자기소개 저장 함수
window.saveIntro = function() {
  const introText = document.querySelector('.intro-input').value
  localStorage.setItem('intro', introText)
  alert('자기소개가 저장되었습니다!')
}

// 경력 추가 함수
window.addExperience = function() {
  const experienceList = document.getElementById('experienceList')
  const newItem = document.createElement('div')
  newItem.className = 'experience-item'
  newItem.innerHTML = `
    <div class="exp-header">
      <input type="text" class="exp-title" placeholder="직책/역할">
      <input type="text" class="exp-period" placeholder="기간">
    </div>
    <textarea class="exp-description" placeholder="상세 내용을 작성하세요"></textarea>
    <button class="delete-btn" onclick="deleteExperience(this)">삭제</button>
  `
  experienceList.appendChild(newItem)
}

// 경력 삭제 함수
window.deleteExperience = function(button) {
  button.parentElement.remove()
}

// 페이지 로드 시 저장된 자기소개 불러오기
window.addEventListener('load', function() {
  const savedIntro = localStorage.getItem('intro')
  if (savedIntro) {
    document.querySelector('.intro-input').value = savedIntro
  }
})
