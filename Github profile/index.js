let p = document.getElementsByTagName('p')[0];
p.style.display = 'none';

let show_data = document.getElementById('value_shower');
show_data.style.display = 'none';
let search = async()=>{
    let value = document.getElementsByTagName('input')[0].value;
    values(value);
}

let values = async(val)=>{
    let url = `https://api.github.com/users/${val}`;

    try{
       let res = await fetch(url);
       if(res.ok){
         let main = await res.json();
       

         show_data.style.display = 'block';
          let img = document.getElementsByClassName('img')[0];
         img.innerHTML = `<img src=${main.avatar_url} />`
         p.style.display = 'block';
           let details = document.getElementsByClassName('personal_info')[0];
           details.innerHTML = "Name : " +  main.login + "<br>" + "Id : " +  main.id + "<br>" + "Email : "+ main.email + "<br>" +"Node_id : " +  main.node_id + "<br>";
       }
       else{
        alert("NO such data is present")
       }
    }
    catch(err){
        console.log("the error is",err);
    }
}
