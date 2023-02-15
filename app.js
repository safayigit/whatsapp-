

function ahmet () {
    document.querySelector(".mehmet").style.display="none"
    document.querySelector(".ahmet").style.display="block"
    document.querySelector(".mustafa").style.display="none"
    
}

function mehmet () {
    document.querySelector(".mehmet").style.display="block"
    document.querySelector(".ahmet").style.display="none"
    document.querySelector(".mustafa").style.display="none"
    
}

function mustafa () {
    document.querySelector(".mehmet").style.display="none"
    document.querySelector(".ahmet").style.display="none"
    document.querySelector(".mustafa").style.display="block"
    
}




function mesajGonderAhmet () {
    const girilenMesaj = document.querySelector(".mesajBir").value;
  
    
    const newP = document.createElement("p");
    newP.innerHTML = girilenMesaj;
  
    
    const tikIcon = document.createElement("i");             
    tikIcon.classList.add("fas", "fa-check");
  
    
    const newDiv = document.createElement("div");
    newDiv.classList.add("my-message");
    newDiv.appendChild(newP);
    newDiv.appendChild(tikIcon);
  
    
    const myMessageDiv = document.querySelector(".my-message");
  
    
    myMessageDiv.appendChild(newDiv);
  
    
    setTimeout(function() {
      const secondTikIcon = document.createElement("i");
      secondTikIcon.classList.add("fas", "fa-check");
      newP.appendChild(secondTikIcon);
      newDiv.classList.add("sent-message");
    }, 2000);
  }

 




function mesajGonderMehmet () {
    const girilenMesaj = document.querySelector(".mesajİki").value;
  
    
    const newP = document.createElement("p");
    newP.innerHTML = girilenMesaj;
  
   
    const tikIcon = document.createElement("i");
    tikIcon.classList.add("fas", "fa-check");
  
    
    const newDiv = document.createElement("div");
    newDiv.classList.add("my-messageMehmet");
    newDiv.appendChild(newP);
    newDiv.appendChild(tikIcon);
  
    
    const myMessageDiv = document.querySelector(".my-messageMehmet");
  
    
    myMessageDiv.appendChild(newDiv);
  
    
    setTimeout(function() {
      const secondTikIcon = document.createElement("i");
      secondTikIcon.classList.add("fas", "fa-check");
      newP.appendChild(secondTikIcon);
      newDiv.classList.add("sent-message");
    }, 2000);
  }

 

  

  function mesajGonderMustafa () {
    const girilenMesaj = document.querySelector(".mesajUc").value;
  
    
    const newP = document.createElement("p");
    newP.innerHTML = girilenMesaj;
  
    
    const tikIcon = document.createElement("i");
    tikIcon.classList.add("fas", "fa-check");
  
    
    const newDiv = document.createElement("div");
    newDiv.classList.add("my-messageMustafa");
    newDiv.appendChild(newP);
    newDiv.appendChild(tikIcon);
  
    
    const myMessageDiv = document.querySelector(".my-messageMustafa");
  
    
    myMessageDiv.appendChild(newDiv);
  
    
    setTimeout(function() {
      const secondTikIcon = document.createElement("i");
      secondTikIcon.classList.add("fas", "fa-check");
      newP.appendChild(secondTikIcon);
      newDiv.classList.add("sent-message");
    }, 2000);
  }

 





 

function ahmetBack () {
    document.querySelector(".ahmet").style.display = "none";
    document.querySelector(".left").style.display = "block";
}

function mehmetBack () {
    document.querySelector(".mehmet").style.display = "none";
    document.querySelector(".left").style.display = "block";
}

function mustafaBack () {
    document.querySelector(".mustafa").style.display = "none";
    document.querySelector(".left").style.display = "block";
}


