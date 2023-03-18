const button = document.querySelector('.submit');
const comment = document.querySelector('.comment__user');
const lastModalOk = document.querySelector('#p_modal_button3');
const getData = document.querySelector('#content1');

button.addEventListener('click', () => {
 let id = Date.now();
 const imgUser = './assets/image/princ.png';
 const name = 'Anonimus';
 if(comment.value.length === 0) {
  return;
 } else {

  let wrapper = document.createElement('div');
  wrapper.classList.add("comments");
  wrapper.style.display = 'block';
  wrapper.setAttribute('id', id);
  wrapper.innerHTML = `
  <div class="profile">
    <img width = '30px' height = '30px' src="${imgUser}"/> </div>
  <div class="comment-content">
    <p class="name">
      <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">${name}</font>
      </font>
    </p>
    <p>
      <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">${comment.value}</font>
      </font>
    </p>
  </div>
  <div class="clr"></div>
  <div class="comment-status">
    <span>
      <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">Curte·comente</font>
      </font>
      <img src="./assets/image/3.jpg" width="15px" height="15px">
      <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">29</font>
      </font>
    </span>
    <font style="vertical-align: inherit;">
      <small>
        <font style="vertical-align: inherit;">·</font>
      </small>


      <small>
        <u>
          <font style="vertical-align: inherit;">4 minutos antes</font>
        </u>
      </small>
    </font>
    <small>
      <font style="vertical-align: inherit;"></font>
      <u>
        <font style="vertical-align: inherit;"></font>
      </u>
    </small>
  </div>
`
  document.querySelector('.set-comment').after(wrapper)
  comment.value = '';
 }
})
const result = {};

getData.addEventListener('click', (e) => {
  if (e.target.classList.contains('find__answer')) {
    result.sex = e.target.textContent;
  } else if (e.target.classList.contains('find__age')) {
    result.age = e.target.textContent;
  } else if (e.target.classList.contains('family')) {
    result.familyCount = e.target.textContent;
  } else if (e.target.classList.contains('yes-no')){
    result.iphoneBuy = e.target.textContent;
  }  
    
});

lastModalOk.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(result)
});
