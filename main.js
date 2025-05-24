    const openPanel = document.getElementById("openPanel");
    const closePanel = document.getElementById("closePanel");
    const sidePanel = document.getElementById("sidePanel");
    const overlay = document.getElementById("overlay");

    openPanel.addEventListener("click", () => {
      sidePanel.classList.add("open");
      overlay.classList.add("active");
    });

    closePanel.addEventListener("click", () => {
      sidePanel.classList.remove("open");
      overlay.classList.remove("active");
    });

    overlay.addEventListener("click", () => {
      sidePanel.classList.remove("open");
      overlay.classList.remove("active");
    });

    const openPanelDownload = document.getElementById("openPanelDownload");
    const closePanelDownload = document.getElementById("closePanelDownload");
    const sidePanelDownload = document.getElementById("sidePanelDownload")
    
    openPanelDownload.addEventListener("click", () => {
        sidePanelDownload.classList.add("open");
        overlay.classList.add("active");
    });
  
    closePanelDownload.addEventListener("click", () => {
        sidePanelDownload.classList.remove("open");
        overlay.classList.remove("active");
    });
  
    overlay.addEventListener("click", () => {
        sidePanelDownload.classList.remove("open");
        overlay.classList.remove("active");
    });

    const openPanelLeft = document.getElementById("openPanelLeft");
    const closePanelLeft = document.getElementById("closePanelLeft");
    const sidePanelLeft = document.getElementById("sidePanelLeft")
    
    openPanelLeft.addEventListener("click", () => {
        sidePanelLeft.classList.add("open");
        overlay.classList.add("active");
    });
  
    closePanelLeft.addEventListener("click", () => {
        sidePanelLeft.classList.remove("open");
        overlay.classList.remove("active");
    });
  
    overlay.addEventListener("click", () => {
        sidePanelLeft.classList.remove("open");
        overlay.classList.remove("active");
    });