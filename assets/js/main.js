
let renderPublicationDetails = () => {
  $("#details").html(
    `
    <div class='arrow-container detail-arrow-up' onClick="scrollUp(); setTimeout(function(){ $('#details').hide() }, 500);">
      <div class='arrow'>
        <i class="fas fa-chevron-up fa-2x"></i>
      </div>
    </div>
    <h1 class="heading detailed-heading">` + publicationDetailTitle + `</h1>
    <div class="pub-list">
    <p class="grey-text">` + publicationDetailContent + `
    </p>
    </div class="pub-list">
  `)
};

let renderMediaDetails = () => {
  $("#details").html(`
    <div class='arrow-container detail-arrow-up' onClick="scrollUp(); setTimeout(function(){ $('#details').hide() }, 500);">
      <div class='arrow'>
        <i class="fas fa-chevron-up fa-2x"></i>
      </div>
    </div>
    <h1 class="heading detailed-heading">`+ mediaDetailTitle + `</h1>
    <ul class="grey-text">` + mediaDetailContent + `
    </ul>
  `)
}

let renderAbout = () => {
  $("#main").hide().html(`
  <h1 class="heading">` + aboutPreviewTitle + `</h1>
  <p class="grey-text">
    ` + aboutPreviewContent + `
  </p>
  `).fadeIn(1000)
}

let renderMedia = () => {
  $("#main").hide().html(`
  <h1 class="heading">Media</h1>
  <br>
  <h4> ` + mediaPreviewTitle + ` </h4><br>
  <ul class="grey-text">
    ` + mediaPreviewContent + `
  </ul>
  <p class="grey-text">
    More Articles Below:
    <div class='arrow-container' onClick="$('#details').show(); renderMediaDetails(); scrollDown()">
      <div class='arrow'>
        <i class="fas fa-chevron-down fa-2x"></i>
      </div>
    </div>
  </p>
  `).fadeIn(1000);
}


let renderTeaching = () => {
  $("#main").hide().html(`
  <h1 class="heading">` + teachingPreviewTitle + `</h1>
  <p class="grey-text">
    ` + teachingPreviewContent + `
  </p>
  `).fadeIn(1000);
}

let renderResearch = () => {
  $("#main").hide().html(`
  <h1 class="heading">` + researchPreviewTitle + `</h1>
  <p class="grey-text">
      ` + researchPreviewContent + `
      <div class='arrow-container' onClick="$('#details').show(); renderGWEM(); scrollDown()">
        <div class='arrow'>
          <i class="fas fa-chevron-down fa-2x"></i>
        </div>
      </div>
  </p>
  `).fadeIn(1000);
}

let renderHome = () => {
  $("#main").hide().html(`
    <h1 class="heading">` + homePreviewTitle + `</h1>
    <p class="grey-text">
      ` + homePreviewContent + `
    </p>

    <div class="contact-block">
        <div class="contact-tex">Contact Me:</div><a href="mailto:zhang@physics.unlv.edu" class="link-v1">zhang@physics.unlv.edu</a>
    </div>

  `).fadeIn(1000);
}

let renderPub = () => {
  $("#main").hide().html(`
    <h1 class="heading">`+ publicationPreviewTitle + `</h1>
    <div class="grey-text pub-content">
      ` + publicationPreviewContent + `
        </div>
        <div class="grey-text">
          <br>
          My full list of publications can be found below:
        </div>
        <br><br>
        <div class='arrow-container' onClick="$('#details').show(); renderPublicationDetails(); scrollDown()">
          <div class='arrow'>
            <i class="fas fa-chevron-down fa-2x"></i>
          </div>
        </div>

  `).fadeIn(1000);
}

let renderGWEM = () => {
  $("#details").html(`
    <div class='arrow-container detail-arrow-up' onClick="scrollUp(); setTimeout(function(){ $('#details').hide() }, 500);">
      <div class='arrow'>
        <i class="fas fa-chevron-up fa-2x"></i>
      </div>
    </div>
    ` + gwemContent + `
    <div class="detail-button-container">
      <div class="detail-button selected"> Gravitational Waves and Their Electromagnetic Counterparts </div>
      <div class="detail-button" onClick="renderFRB()"> Fast Radio Bursts </div>
      <div class="detail-button" onClick="renderGRB()"> Gamma Ray Bursts </div>
    </div>
  `)
}

let renderFRB = () => {
  $("#details").html(`
    <div class='arrow-container detail-arrow-up' onClick="scrollUp(); setTimeout(function(){ $('#details').hide() }, 500);">
      <div class='arrow'>
        <i class="fas fa-chevron-up fa-2x"></i>
      </div>
    </div>
    <h1 class="heading detailed-heading">Fast Radio Bursts</h1>
    <p class="grey-text">

      `+ frbContent + `
    </p>
    <div class="detail-button-container">
      <div class="detail-button" onClick="renderGWEM()"> Gravitational Waves and Their Electromagnetic Counterparts </div>
      <div class="detail-button selected"> Fast Radio Bursts </div>
      <div class="detail-button" onClick="renderGRB()"> Gamma Ray Bursts </div>
    </div>
  `)
}

let renderGRB = () => {
  $("#details").html(`
    <div class='arrow-container detail-arrow-up' onClick="scrollUp(); setTimeout(function(){ $('#details').hide() }, 500);">
      <div class='arrow'>
        <i class="fas fa-chevron-up fa-2x"></i>
      </div>
    </div>
    <h1 class="heading detailed-heading">Gamma Ray Bursts</h1>
    <p class="grey-text">
      ` + grbContent + `

    </p>
    <div class="detail-button-container">
      <div class="detail-button" onClick="renderGWEM()"> Gravitational Waves and Their Electromagnetic Counterparts </div>
      <div class="detail-button" onClick="renderFRB()"> Fast Radio Bursts </div>
      <div class="detail-button selected" onClick="renderGRB()"> Gamma Ray Bursts </div>
    </div>
  `)
}


window.onload = () => {
  document.getElementById("about-but").addEventListener('click', () => {
    event.preventDefault();
    scrollUp();
    setTimeout(function(){ $('#details').hide() }, 500);
    history.pushState(null,null, '#about');
    renderAbout();
  });
  document.getElementById("research-but").addEventListener('click', () => {
    event.preventDefault();
    scrollUp();
    setTimeout(function(){ $('#details').hide() }, 500);
    history.pushState(null,null, '#research');
    renderResearch();
  });
  document.getElementById("teaching-but").addEventListener('click', () => {
    event.preventDefault();
    scrollUp();
    setTimeout(function(){ $('#details').hide() }, 500);
    history.pushState(null,null, '#teaching');
    renderTeaching();
  });
  document.getElementById("pub-but").addEventListener('click', () => {
    event.preventDefault();
    scrollUp();
    setTimeout(function(){ $('#details').hide() }, 500);
    history.pushState(null,null, '#publications');
    renderPub();
  });
  document.getElementById("media-but").addEventListener('click', () => {
    event.preventDefault();
    scrollUp();
    setTimeout(function(){ $('#details').hide() }, 500);
    history.pushState(null,null, '#media');
    renderMedia();
  });
  document.getElementById("pfp").addEventListener('click', () => {
    scrollUp();
    setTimeout(function(){ $('#details').hide() }, 500);
    history.pushState(null,null, '#');
    renderHome();
  });
  $("#details").hide();
}

switch(location.hash.substr(1)) {
  case "about":
    console.log("about");
    renderAbout();
    break;
  case "research":
    renderResearch();
    break;
  case "teaching":
    renderTeaching();
    break;
  case "publications":
    renderPub();
    break;
  case "media":
    renderMedia();
    break;
  default:
    renderHome();
}
