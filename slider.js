fetch('data/notices.json')
.then(res=>res.json())
.then(data=>{
  let ul=document.getElementById('noticeList');
  data.forEach(n=>{
    let li=document.createElement('li');
    li.innerText=n;
    ul.appendChild(li);
  });
});
