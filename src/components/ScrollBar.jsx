import React from 'react'

const ScrollBar = () => {
    function progressBarScroll() {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
            height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
            scrolled = (winScroll / height) * 100;
        document.getElementById("progressBar").style.width = scrolled + "%";
      }
      
      window.onscroll = function () {
        progressBarScroll();
      };
  return (
    <div>
        <div class="progress-container mt-16">
          <div class="progress-bar" id="progressBar"></div>
        </div>
    </div>
  )
}

export default ScrollBar