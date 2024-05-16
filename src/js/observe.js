export const observe = () => {
 
    let observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry, index) => {
          const innerElements = document.querySelectorAll('.services__slide-inner');
          if (entry.isIntersecting) {
              innerElements.forEach(element => {
                  element.classList.add('anim__rotate','anim')
              })
          } 
          else {
              innerElements.forEach(element => {
                  element.classList.remove('anim__rotate','anim')
              })
          }
        });
      },
      {
        threshold: 0.5,
      }
    );
  
    observer.observe(document.querySelector('.services'));
  };
  