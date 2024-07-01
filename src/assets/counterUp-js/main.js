/*--anination---*/
new WOW().init();
/*--anination---*/
const impactCountersOnScroll = () => {
    const myNumbers = document.querySelectorAll('.count');
    const windowHeight = window.innerHeight;

    myNumbers.forEach((myCount) => {
        const rect = myCount.getBoundingClientRect();
        const offset = rect.top + rect.height - windowHeight;

        if (offset > 0) {
            let targetCount = +myCount.dataset.count;
            let initCount = 0;
            let incrementNumber = Math.ceil(targetCount / 200);

            const updateNumber = () => {
                initCount += incrementNumber;
                myCount.innerText = initCount;

                if (initCount < targetCount) {
                    requestAnimationFrame(updateNumber);
                }
            };

            updateNumber();
        }
    });
};

window.addEventListener('scroll', impactCountersOnScroll);


/*----achivment animantion---*/

const achivementCountersOnScrolls = () => {
  const myNumbers = document.querySelectorAll('.counting');
  const windowHeight = window.innerHeight;

  myNumbers.forEach((myCount) => {
    const rect = myCount.getBoundingClientRect();
    const offset = rect.top + rect.height - windowHeight;

    if (offset > 0) {
      let targetCount = +myCount.dataset.count;
      let initCount = 0;
      let incrementNumber = Math.ceil(targetCount / 200);
      const updateNumber = () => {
        initCount += incrementNumber;
        if (initCount > targetCount) {
          initCount = targetCount;
        }
        myCount.innerText = initCount;

        if (initCount < targetCount) {
          requestAnimationFrame(updateNumber);
        }
      };

      updateNumber(); // Start animation
    }
  });
};

window.addEventListener("scroll", achivementCountersOnScrolls);

