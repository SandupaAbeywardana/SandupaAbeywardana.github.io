/* ===== Typing Animation Start ===== */

var typed = new Typed(".typing", {
   strings:["Web Designer", "Web Developer", "Graphic Designer"],
   typeSpeed:100,
   backspeed:60,
   loop:true
})

/* ===== Typing Animation End ===== */

/* ===== Stat Counter Start ===== */
// TODO: #7 Edit Stat Counters to work on section visible ref:https://www.jqueryscript.net/animation/animated-counter-when-visible.html

function animate(obj, initVal, lastVal, duration) {
   let startTime = null;

//get the current timestamp and assign it to the currentTime variable
let currentTime = Date.now();

//pass the current timestamp to the step function
const step = (currentTime ) => {

//if the start time is null, assign the current time to startTime
if (!startTime) {
   startTime = currentTime ;
}

//calculate the value to be used in calculating the number to be displayed
const progress = Math.min((currentTime - startTime)/ duration, 1);

//calculate what to be displayed using the value gotten above
obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);

//checking to make sure the counter does not exceed the last value (lastVal)
if (progress < 1) {
   window.requestAnimationFrame(step);
} else {
      window.cancelAnimationFrame(window.requestAnimationFrame(step));
   }
};
//start animating
   window.requestAnimationFrame(step);
}
let text1 = document.getElementById('0101');
let text2 = document.getElementById('0102');
let text3 = document.getElementById('0103');
const load = () => {
   animate(text1, 0, 48, 3000);
   animate(text2, 0, 80, 3000);
   animate(text3, 0, 25, 3000);
}

/* ===== Stat Counter End ===== */

/* ===== Skills Tabs Start ===== */

const   tabs = document.querySelectorAll('[data-target]'),
        tabContent = document.querySelectorAll('[data-content]')

        tabs.forEach(tab => {
            tab.addEventListener("click", () => {
                const target = document.querySelector(tab.dataset.target)

                tabContent.forEach(tabContents => {
                    tabContents.classList.remove('skills-active')
                })

                target.classList.add('skills-active')

                tabs.forEach(tab => {
                    tab.classList.remove('skills-active')
                })

                tab.classList.add('skills-active')
            })
        })

/* ===== Skills Tabs End ===== */

/* ===== PayPal Popup Start ===== */

function popup(mylink, windowname)
		{
			if (! window.focus)return true;
			var href;
			if (typeof(mylink) == 'string')
			   href=mylink;
			else
			   href=mylink.href;
			window.open(href, windowname, 'width=650,height=700,scrollbars=yes');
			return false;
		}
        
/* ===== PayPal Popup End ===== */

/* ===== Aside Start ===== */

const nav = document.querySelector(".nav"),
      navList = document.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;

      for(let i = 0; i<totalNavList; i++)
      {
         const a = navList[i].querySelector("a");
         a.addEventListener("click", function()
         {
            removeBackSection();

            for(let j = 0; j<totalNavList; j++)
            {
               if(navList[j].querySelector("a").classList.contains("active"))
               {
                  addBackSection(j);
                  //allSection[j].classList.add("back-section");
               }
               navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSection(this);

            if(window.innerWidth < 1200)
            {
               asideSectionTogglerBtn();
            }
         }
      )}

      function removeBackSection()
      {
         for(let i = 0; i<totalSection; i++)
         {
            allSection[i].classList.remove("back-section");
         }
      }

      function addBackSection(num)
      {
         allSection[num].classList.add("back-section");
      }

      function showSection(element)
      {
         for(let i = 0; i<totalSection; i++)
         {
            allSection[i].classList.remove("active");
         }
         const target = element.getAttribute("href").split("#")[1];
         document.querySelector("#" + target).classList.add("active")
      }

function updateNav (element)
{
   for(let i = 0; i<totalNavList; i++)
   {
      navList[i].querySelector("a").classList.remove("active");
      const target = element.getAttribute("href").split("#")[1];

      if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
      {
         navList[i].querySelector("a").classList.add("active");
      }
   }
}

document.querySelector(".hire-me").addEventListener("click", function()
{
   const sectionIndex = this.getAttribute("data-section-index");
   //console.log(sectionIndex);

   showSection(this);
   updateNav(this);
   removeBackSection();
   addBackSection(sectionIndex);
})

const navTogglerBtn = document.querySelector(".nav-toggler"),
      aside = document.querySelector(".aside");

      navTogglerBtn.addEventListener("click", () => {
         asideSectionTogglerBtn();
      })

      function asideSectionTogglerBtn()
      {
         aside.classList.toggle("open");
         navTogglerBtn.classList.toggle("open");

         for(let i = 0; i<totalSection; i++)
         {
            allSection[i].classList.toggle("open");
         }
      }

/* ===== Aside End ===== */