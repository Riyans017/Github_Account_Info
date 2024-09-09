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
        if(val === ""){
            show_data.style.display = 'block';
            show_data.style.fontSize = "2.4rem"
            show_data.style.textAlign = 'center'
             show_data.innerHTML = "Please Enter Any Data"
        }
        else if(val.length >1){
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
                show_data.style.display = 'block';
                show_data.style.textAlign = 'center'
                show_data.style.fontSize = "2.4rem"
                 show_data.innerHTML = "No Such User is Available"
               }
        }
      
    }
    catch(err){
        console.log("the error is",err);
    }
}
