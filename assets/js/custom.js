
const form = document.querySelector('.comments');
const comment = document.querySelector('.comment__user');
const lastModalOk = document.querySelector('#p_modal_button3');
const getData = document.querySelector('#content1');
const blockComments = document.querySelector('.comments_face');
const bigWrapForBoxes = document.querySelector('.boxes');


const comments = [
  {id: 'comment0', srcAvatar: './assets/image/1.gif', alt: "You will see your avatar", name: 'Inês', comment: 'Eu ganhei nada', srcLikes: './assets/image/like.png', likesCount: 29, time: '4 minutos antes'},
  {id: 'comment1', srcAvatar: './assets/image/4.jpg', alt: "You will see your avatar", name: 'FernandoPessoa', comment: 'Eu gostei essas promoções', srcLikes: './assets/image/like.png', likesCount: 9, time: '11 minutos antes'},
  {id: 'comment1', srcAvatar: './assets/image/5.jpg', alt: "You will see your avatar", name: 'Maria', comment: 'Já recebi minha iPhone 11 Pro. Agradeço muito!', srcLikes: './assets/image/like.png', likesCount: 22, time: '15 minutos antes'},
  {id: 'comment2', srcAvatar: './assets/image/6.jpg', alt: "You will see your avatar", name: 'Lucas', comment: 'Eu achava que era uma brincadeira, mas meu iPhone 11 Pro do Apple chegou hoje de manhã', srcLikes: './assets/image/like.png', likesCount: 36, time: '38 minutos antes'},
  {id: 'comment3', srcAvatar: './assets/image/2.gif', alt: "You will see your avatar", name: 'Mariana', comment: 'Eu participei, venci e ganhou o meu iPhone 11 Pro do Apple depois de 5 dias. Agradeço vocês!', srcLikes: './assets/image/like.png', likesCount: 31, time: '42 minutos antes'},
  {id: 'comment4', srcAvatar: './assets/image/7.jpg', alt: "You will see your avatar", name: 'Rafael', comment: 'É possível pegar o meu iPhone 11 Pro do Apple hoje？Obrigado', srcLikes: './assets/image/like.png', likesCount: 6, time: '1 hora antes'},
  {id: 'comment5', srcAvatar: './assets/image/8.jpg', alt: "You will see your avatar", name: 'Francisco', comment: 'Eu achava que era uma brincadeira, mas hoje de manhã eurecebi meu iPhone 11 Pro através de DHL, eu quero participar outras pesquisas！', srcLikes: './assets/image/like.png', likesCount: 15, time: '2 hora antes'},
  {id: 'comment5', srcAvatar: './assets/image/4.jpg', alt: "You will see your avatar", name: 'Fernando', comment: 'Existe algumas outras pesquisas！', srcLikes: './assets/image/like.png', likesCount: 39, time: '2 hora antes'},
  {id: 'comment6', srcAvatar: './assets/image/10.jpg', alt: "You will see your avatar", name: 'Heloísa', comment: 'Que bom! Eu nunca ganhei nada!', srcLikes: './assets/image/like.png', likesCount: 23, time: '3 hora antes'},
  {id: 'comment7', srcAvatar: './assets/image/9.jpg', alt: "You will see your avatar", name: 'Gustavo', comment: 'No início eu achava que era uma brincadeira, mas em fim eu ganhei minha Galaxy S10.Já falei para os meus amigos, assim eles poderiam ganhar também.', srcLikes: './assets/image/like.png', likesCount: 30, time: '4 hora antes'}
]

const boxes = [
  {id: 0},
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4},
  {id: 5},
  {id: 6},
  {id: 7},
  {id: 8},
  {id: 9},
  {id: 10},
  {id: 11}
]

boxes.map(({id}) => {
  bigWrapForBoxes.insertAdjacentHTML('afterbegin', `
  <div id=${id} class="try temblor">
  <div class="caja_tapa">
    <img class="box-01" alt="You will see box" src="./assets/image/box-top.png"></div>
  <div class="caja_trasera">
    <img class="box-03" alt="You will see box" src="./assets/image/box-ins.png"></div>
  <div class="caja_gift">
    <img class="box-04" alt="You will see box" src="./assets/image/phone-box.png"></div>
  <div class="caja">
    <img class="box-02"alt="You will see box" src="./assets/image/box-bottom.png"></div>
</div>
  `)
});

comments.map(({id, srcAvatar, srcLikes, alt, name, comment, likesCount, time}) => {
 blockComments.insertAdjacentHTML('beforeend', `<div class="comments" id="${id}" style="display:block">
 <div class="profile">
   <img width="60" height="60" src=${srcAvatar} alt=${alt}>
 </div>
 <div class="comment-content">
   <p class="name">${name}</p>
   <p> ${comment}</p>
 </div>
 <div class="clr"></div>
 <div class="comment-status">
     Curte·comente
     <img src=${srcLikes} alt=" You will see likes" width="15" height="15">
     <span>${likesCount}</span>
     <small>·</small>
     <small>
       <u>${time}</u>
     </small>
 </div>
</div>`)
});

const result = {};

form.addEventListener('submit', (e) => {
  e.preventDefault();

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
     <img width = "30" height = "30" src="${imgUser}"/> </div>
   <div class="comment-content">
     <p class="name">${name}</p>
     <p>${comment.value}</p>
   </div>
   <div class="clr"></div>
   <div class="comment-status">
     Curte·comente
     <img src="./assets/image/like.png" width="15" height="15">
     <span>0</span>
     <small>·</small>
     <small>
       <u>0 minutos antes</u>
     </small>
   </div>
   `
   document.querySelector('.set-comment').after(wrapper)
   comment.value = '';
  }
})

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
    localStorage.setItem(`user${Date.now()}`, JSON.stringify(result));
    console.log(result)
  });

