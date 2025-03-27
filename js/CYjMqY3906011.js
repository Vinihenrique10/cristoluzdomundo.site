
    function atomiApplyParams({inputUrl}) {
      try {
        console.log(inputUrl)
        const inputUrlObj = new URL(inputUrl, window.location.origin);
        const currentPageParams = new URLSearchParams(window.location.search);
        const inputUrlParams = new URLSearchParams(inputUrlObj.search);
      
        // Iterate over all parameters in the current page's URL
        for (const [key, value] of currentPageParams) {
          // If the input URL does not already contain the parameter, add it
          if (!inputUrlParams.has(key)) {
            inputUrlParams.append(key, value);
          }
        }
      
        // Construct the final URL
        const finalUrl = inputUrlObj.origin + inputUrlObj.pathname + '?' + inputUrlParams.toString();
        console.log(finalUrl)
        return finalUrl;
      } catch (error) {
        console.log(error);
      }
    }

    function atomiFormatDate(options = { slated: false, addDate: 0 }) {
      try {
        const userLocale = navigator.language || 'en-US';
        const defaultOptions = {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        };

        const today = new Date();

        if (options.slated) {
          const slatedDate = new Date(today);
          slatedDate.setDate(slatedDate.getDate() + (options.addDate || 0));

          const formatter = new Intl.DateTimeFormat(userLocale, {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          });

          return formatter.format(slatedDate);

          // const day = slatedDate.getDate().toString().padStart(2, "0");
          // const month = (slatedDate.getMonth() + 1).toString().padStart(2, "0");
          // const year = slatedDate.getFullYear();
          // return `${day}/${month}/${year}`;
        }

        if(options.addDate){
          today.setDate(today.getDate()+options.addDate)
        }
        const formattedDate = today.toLocaleDateString(userLocale, defaultOptions);

        return formattedDate;
      } catch (error) {
        console.log(error);
      }
    };

    function atomiFormatTime() {
      try {
        const now = new Date();
        return now.toLocaleTimeString(undefined, {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        });
      } catch (error) {
        console.log(error);
      }
    };
    function runDelayedFunctions(data) {
      try {
        document.querySelectorAll('.atomicat-delay').forEach(el => el.classList.remove('atomicat-delay'));
        if(data?.setDisplayed){
          localStorage.setItem(data?.setDisplayed, true);
        }
        
      } catch (error) {
        console.log(error);
      }
    }
  
    (function() {
      try {
        const accordionTitles = document.querySelectorAll(".atomicat-accordion-title");
        accordionTitles.forEach((title, index) => {
          title.addEventListener("click", () => {
            title.classList.toggle("atomicat-title-active");
            const accordionContent = title.nextElementSibling;
            const toggleSymbol = title.querySelector(".atomicat-accordion-toggle");
            title.childNodes[1].childNodes[0].classList.toggle('atomicat-hidden')
            title.childNodes[1].childNodes[1].classList.toggle('atomicat-hidden')
            accordionContent.classList.toggle("atomicat-content-inactive");
            accordionContent.nextElementSibling.classList.toggle("atomicat-hidden");
          });
        });
      } catch (error) {
        console.log(error);
      }
    })();(function() {
          try {
              const clickeventList = [{"compKey":"5b40997a-30fb-41fe-a243-7dc3a712272f","misc":{"type":"button"}},{"compKey":"4e34e0a1-a225-45e6-a97f-3293acb2ed87","misc":{"type":"button"}}];
    
    
              clickeventList.forEach((comp, index) => {
                  const compKey = comp?.compKey?.slice(0, 7);
                  const eleType = comp?.misc?.type;
                  const showItemsById = comp?.misc?.showItemsById || comp?.misc?.showItemsByClass;
                  const hideAfterClick = comp?.misc?.hideAfterClick;
                  const hideOnComplete = comp?.misc?.hideOnComplete;
                  if(hideAfterClick) {
                    const hideAfterClickEle = document.querySelector(`.atomicat-hide-after-click-${compKey}`);
                    console.log(hideAfterClickEle, "hideAfterClickEle")
                    if (hideAfterClickEle) {
                      hideAfterClickEle.addEventListener("click", function() {
                          console.log("hideAfterClickEle clicked")
                          hideAfterClickEle.classList.add("atomicat-hidden");
                      })
                    }
                  }
                  if(hideOnComplete) {
                    const hideOnCompleteEle = document.querySelector(`.atomicat-hide-on-complete-${compKey}`);
                    console.log(hideOnCompleteEle, "hideOnCompleteEle")
                    if (hideOnCompleteEle) {
                      hideOnCompleteEle.addEventListener("animationend", function() {
                          console.log("hideOnCompleteEle animationend")
                          hideOnCompleteEle.classList.add("atomicat-hidden");
                      })
                    }
                  }
                  if(showItemsById) {
                    const showItemsByIdEle = document.querySelector(`.atomicat-show-hidden-item-${compKey}`);
                    if(eleType === "progressbar"){
                      showItemsByIdEle.addEventListener("animationend", function() {
                        atomiShowItems()
                      })
                    } else{
                      showItemsByIdEle.addEventListener("click", function() {
                        atomiShowItems()
                      })
                    }
                    function atomiShowItems() {
                      showItemsById.forEach((item) => {
                        const hiddenItem = document.querySelector(`#${item}`) || document.querySelector(`.${item}`);
                        if (hiddenItem) {
                          hiddenItem.classList.remove("atomicat-delay");
                        }
                      })
                    }
                  }
              });
    
          } catch (error) {
              console.log(error);
          }
      })();(function() {
          try {
              const animationList = [{"compKey":"bcd3941c-43e7-4c0e-8587-262e09f116bb","style":{"image":{"width":{"desktop":"65%","mobile":"65%"}},"outer":{"tooltip":{"desktop":"top: 50%; left: 100%; bottom: auto; right: auto; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%); -webkit-transition: all .3s ease-in-out; transition: all .3s ease-in-out; margin-left: 10px; border-color: rgba(0, 0, 0, 0) #000 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);","arrow":{"desktop":"top: calc(50% - 5px); right: 100%; left: auto; bottom: auto; border-color: rgba(0, 0, 0, 0) #000 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0); border-right-color: #555;"}},"entranceAnimation":{"desktop":"atomicat-animation-fadeInOut 1s 1 linear"}}},"misc":{"src":"https://media.atomicatpages.net/u/jZCQaz9Pk4UEyjHiHAQT1hGKfDF3/Pictures/SxHbmr2297277.webp","type":"image","tag":"img"}},{"compKey":"ad874227-b471-4862-b0e8-34d9c8795797","style":{"outer":{"tooltip":{"desktop":"top: 50%; left: 100%; bottom: auto; right: auto; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%); -webkit-transition: all .3s ease-in-out; transition: all .3s ease-in-out; margin-left: 10px; border-color: rgba(0, 0, 0, 0) #000 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);","arrow":{"desktop":"top: calc(50% - 5px); right: 100%; left: auto; bottom: auto; border-color: rgba(0, 0, 0, 0) #000 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0); border-right-color: #555;"}},"entranceAnimation":{"desktop":"atomicat-animation-fadeInDown 2s 1 linear"}},"image":{"width":{"mobile":"80%","desktop":"80%"}}},"misc":{"src":"https://media.atomicatpages.net/u/jZCQaz9Pk4UEyjHiHAQT1hGKfDF3/Pictures/eqjmJd9083509.webp","type":"image","tag":"img","lazyLoad":true}},{"compKey":"de6389a8-cb9f-46d7-9697-1bf46b5ca399","style":{"outer":{"tooltip":{"desktop":"top: 50%; left: 100%; bottom: auto; right: auto; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%); -webkit-transition: all .3s ease-in-out; transition: all .3s ease-in-out; margin-left: 10px; border-color: rgba(0, 0, 0, 0) #000 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);","arrow":{"desktop":"top: calc(50% - 5px); right: 100%; left: auto; bottom: auto; border-color: rgba(0, 0, 0, 0) #000 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0); border-right-color: #555;"}},"entranceAnimation":{"desktop":"atomicat-animation-fadeInDown 2s 1 linear"}},"image":{"width":{"mobile":"80%","desktop":"80%"}}},"misc":{"src":"https://media.atomicatpages.net/u/jZCQaz9Pk4UEyjHiHAQT1hGKfDF3/Pictures/anenbf9083509.webp","type":"image","tag":"img","lazyLoad":true}},{"compKey":"bf6d0c04-3f2b-47e5-ac82-8f6103d8920c","style":{"outer":{"tooltip":{"desktop":"top: 50%; left: 100%; bottom: auto; right: auto; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%); -webkit-transition: all .3s ease-in-out; transition: all .3s ease-in-out; margin-left: 10px; border-color: rgba(0, 0, 0, 0) #000 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);","arrow":{"desktop":"top: calc(50% - 5px); right: 100%; left: auto; bottom: auto; border-color: rgba(0, 0, 0, 0) #000 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0); border-right-color: #555;"}},"entranceAnimation":{"desktop":"atomicat-animation-fadeInDown 2s 1 linear"}},"image":{"width":{"mobile":"80%","desktop":"80%"}}},"misc":{"src":"https://media.atomicatpages.net/u/jZCQaz9Pk4UEyjHiHAQT1hGKfDF3/Pictures/CCQCpC9083509.webp","type":"image","tag":"img","lazyLoad":true}},{"compKey":"e1201d6f-d9a4-4c68-b852-0fb8b9dfa5c7","style":{"outer":{"tooltip":{"desktop":"top: 50%; left: 100%; bottom: auto; right: auto; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%); -webkit-transition: all .3s ease-in-out; transition: all .3s ease-in-out; margin-left: 10px; border-color: rgba(0, 0, 0, 0) #000 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);","arrow":{"desktop":"top: calc(50% - 5px); right: 100%; left: auto; bottom: auto; border-color: rgba(0, 0, 0, 0) #000 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0); border-right-color: #555;"}},"entranceAnimation":{"desktop":"atomicat-animation-fadeInDown 2s 1 linear"}},"image":{"width":{"mobile":"80%","desktop":"80%"}}},"misc":{"src":"https://media.atomicatpages.net/u/jZCQaz9Pk4UEyjHiHAQT1hGKfDF3/Pictures/erCtwz9083509.webp","type":"image","tag":"img","lazyLoad":true}},{"compKey":"fd2a3d83-cf3f-41cc-bda0-9703feecfcf8","style":{"outer":{"tooltip":{"desktop":"top: 50%; left: 100%; bottom: auto; right: auto; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%); -webkit-transition: all .3s ease-in-out; transition: all .3s ease-in-out; margin-left: 10px; border-color: rgba(0, 0, 0, 0) #000 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);","arrow":{"desktop":"top: calc(50% - 5px); right: 100%; left: auto; bottom: auto; border-color: rgba(0, 0, 0, 0) #000 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0); border-right-color: #555;"}},"entranceAnimation":{"desktop":"atomicat-animation-fadeInDown 2s 1 linear"}},"image":{"width":{"mobile":"80%","desktop":"80%"}}},"misc":{"src":"https://media.atomicatpages.net/u/jZCQaz9Pk4UEyjHiHAQT1hGKfDF3/Pictures/QMXLGJ9083509.webp","type":"image","tag":"img","lazyLoad":true}},{"compKey":"2eafd4f1-27ae-497d-854e-dca9dfb2c0d6","style":{"icon":{"textAlign":"center","fontSize":{"desktop":"80px"},"color":"rgba(118, 4, 47, 1)","border":{"style":"solid","color":"rgba(118, 4, 47, 1)","image":"unset"},"borderTopWidth":{"desktop":"3px"},"borderTopLeftRadius":{"desktop":"70px"},"borderTopRightRadius":{"desktop":"70px"},"borderBottomRightRadius":{"desktop":"70px"},"borderBottomLeftRadius":{"desktop":"70px"},"width":{"desktop":"80px"},"paddingTop":{"desktop":"30px"},"paddingRight":{"desktop":"30px"},"paddingBottom":{"desktop":"30px"},"paddingLeft":{"desktop":"30px"},"borderRightWidth":{"desktop":"3px"},"borderBottomWidth":{"desktop":"3px"},"borderLeftWidth":{"desktop":"3px"}},"outer":{"tooltip":{"desktop":"top: 50%; left: 100%; bottom: auto; right: auto; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%); -webkit-transition: all .3s ease-in-out; transition: all .3s ease-in-out; margin-left: 10px; border-color: rgba(0, 0, 0, 0) #000 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);","arrow":{"desktop":"top: calc(50% - 5px); right: 100%; left: auto; bottom: auto; border-color: rgba(0, 0, 0, 0) #000 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0); border-right-color: #555;"}},"entranceAnimation":{"desktop":"atomicat-animation-fadeInUp 2s 1 linear"}}},"misc":{"tag":"i","type":"icon","icon":{"class":["fas","shield-alt"],"svg":"<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"shield-halved\" class=\"svg-inline--fa fa-shield-halved icon_icon__geVnl\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z\"></path></svg>"}}},{"compKey":"095b7d9f-b18f-48e3-91af-156e310de87a","style":{"icon":{"textAlign":"center","fontSize":{"desktop":"80px"},"color":"rgba(118, 4, 47, 1)","border":{"style":"solid","color":"rgba(118, 4, 47, 1)","image":"unset"},"borderTopWidth":{"desktop":"3px"},"borderTopLeftRadius":{"desktop":"70px"},"borderTopRightRadius":{"desktop":"70px"},"borderBottomRightRadius":{"desktop":"70px"},"borderBottomLeftRadius":{"desktop":"70px"},"width":{"desktop":"80px"},"paddingTop":{"desktop":"30px"},"paddingRight":{"desktop":"30px"},"paddingBottom":{"desktop":"30px"},"paddingLeft":{"desktop":"30px"},"borderRightWidth":{"desktop":"3px"},"borderBottomWidth":{"desktop":"3px"},"borderLeftWidth":{"desktop":"3px"}},"outer":{"tooltip":{"desktop":"top: 50%; left: 100%; bottom: auto; right: auto; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%); -webkit-transition: all .3s ease-in-out; transition: all .3s ease-in-out; margin-left: 10px; border-color: rgba(0, 0, 0, 0) #000 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);","arrow":{"desktop":"top: calc(50% - 5px); right: 100%; left: auto; bottom: auto; border-color: rgba(0, 0, 0, 0) #000 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0); border-right-color: #555;"}},"entranceAnimation":{"desktop":"atomicat-animation-fadeInUp 2s 1 linear"}}},"misc":{"tag":"i","type":"icon","icon":{"class":["fas","display"],"svg":"<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"display\" class=\"svg-inline--fa fa-display icon_icon__geVnl\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\"><path fill=\"currentColor\" d=\"M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V352H64V64H512z\"></path></svg>"}}},{"compKey":"6a983281-e749-4f28-928f-0b4fd356f7c8","style":{"icon":{"textAlign":"center","fontSize":{"desktop":"80px"},"color":"rgba(118, 4, 47, 1)","border":{"style":"solid","color":"rgba(118, 4, 47, 1)","image":"unset"},"borderTopWidth":{"desktop":"3px"},"borderTopLeftRadius":{"desktop":"70px"},"borderTopRightRadius":{"desktop":"70px"},"borderBottomRightRadius":{"desktop":"70px"},"borderBottomLeftRadius":{"desktop":"70px"},"width":{"desktop":"80px"},"paddingTop":{"desktop":"30px"},"paddingRight":{"desktop":"30px"},"paddingBottom":{"desktop":"30px"},"paddingLeft":{"desktop":"30px"},"borderRightWidth":{"desktop":"3px"},"borderBottomWidth":{"desktop":"3px"},"borderLeftWidth":{"desktop":"3px"}},"outer":{"tooltip":{"desktop":"top: 50%; left: 100%; bottom: auto; right: auto; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%); -webkit-transition: all .3s ease-in-out; transition: all .3s ease-in-out; margin-left: 10px; border-color: rgba(0, 0, 0, 0) #000 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);","arrow":{"desktop":"top: calc(50% - 5px); right: 100%; left: auto; bottom: auto; border-color: rgba(0, 0, 0, 0) #000 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0); border-right-color: #555;"}},"entranceAnimation":{"desktop":"atomicat-animation-fadeInUp 2s 1 linear"}}},"misc":{"tag":"i","type":"icon","icon":{"class":["fas","award"],"svg":"<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"award\" class=\"svg-inline--fa fa-award icon_icon__geVnl\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><path fill=\"currentColor\" d=\"M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7L344.5 83c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1 .4 14.2-1.5 20.1-5.4L173.8 5.5zM272 192a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM1.3 441.8L44.4 339.3c.2 .1 .3 .2 .4 .4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7 .2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1 .4-.2 .7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2 .2-.3 .4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z\"></path></svg>"}}},{"compKey":"cd587aa2-853e-44aa-9e6e-7a9356436137","style":{"text":{"textAlign":{"desktop":"center"},"color":"rgba(254, 111, 171, 1)","backgroundImage":"unset","fontSize":{"desktop":"48px"},"fontWeight":{"desktop":"700"},"strokeWidth":"0px"},"outer":{"tooltip":{"desktop":"top: 50%; left: 100%; bottom: auto; right: auto; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%); -webkit-transition: all .3s ease-in-out; transition: all .3s ease-in-out; margin-left: 10px; border-color: rgba(0, 0, 0, 0) #000 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);","arrow":{"desktop":"top: calc(50% - 5px); right: 100%; left: auto; bottom: auto; border-color: rgba(0, 0, 0, 0) #000 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0); border-right-color: #555;"}},"entranceAnimation":{"desktop":"atomicat-animation-fadeInUp 2s 1 linear"}}},"misc":{"type":"text","tag":"p","content":"R$27","unfold":{"active":false}}}];
    
              animationList.forEach((animationItem, index) => {
                const { type } = animationItem?.misc;
                const key = animationItem?.compKey?.slice(0, 7) || animationItem?.contKey?.slice(0, 7);
                const elementClass = type === "container" ? ".atomicat-container-" + key : ".atomicat-element-container-" + key;
                const targetElement = document.querySelector(elementClass);


                    const observer = new IntersectionObserver(entries => {
                    entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                targetElement.style.opacity = 1;
                                targetElement.classList.add('atomicat-entrance-animation-' + key);
                            } else if(animationItem?.misc?.hideOffscreen) {
                                targetElement.classList.remove('atomicat-entrance-animation-' + key);
                                targetElement.style.opacity = 0;
                            }
                        });
                    });

                    observer.observe(targetElement);
              });
    
          } catch (error) {
              console.log(error);
          }
      })();
      (function() {
        try {
          const countdownList = [{"compKey":"d6700ed5-6633-48f3-a4a6-25bbc6f7e84d","style":{"countdown":{"maxWidth":{"desktop":"59%","mobile":"70%"},"background":"rgba(118, 4, 47, 1)","paddingLeft":{"desktop":"15px","mobile":"21px"},"paddingRight":{"desktop":"15px","mobile":"21px"},"digits":{"fontSize":{"desktop":"48px"},"color":"rgba(255, 255, 255, 1)"},"label":{"color":"rgba(255, 255, 255, 1)","fontSize":{"desktop":"24px","mobile":"16px"}},"container":{"borderTopLeftRadius":{"desktop":"20px"},"borderTopRightRadius":{"desktop":"20px"},"borderBottomRightRadius":{"desktop":"20px"},"borderBottomLeftRadius":{"desktop":"20px"}},"gap":{"mobile":"0px"}},"outer":{"tooltip":{"desktop":"top: 50%; left: 100%; bottom: auto; right: auto; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%); -webkit-transition: all .3s ease-in-out; transition: all .3s ease-in-out; margin-left: 10px; border-color: rgba(0, 0, 0, 0) #000 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);","arrow":{"desktop":"top: calc(50% - 5px); right: 100%; left: auto; bottom: auto; border-color: rgba(0, 0, 0, 0) #000 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0); border-right-color: #555;","mobile":"top: calc(50% - 5px); right: 100%; left: auto; bottom: auto; border-color: rgba(0, 0, 0, 0) #000 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0); border-right-color: #555;"},"mobile":"top: 50%; left: 100%; bottom: auto; right: auto; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%); -webkit-transition: all .3s ease-in-out; transition: all .3s ease-in-out; margin-left: 10px; border-color: rgba(0, 0, 0, 0) #000 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);"},"borderTopLeftRadius":{"desktop":"0px"},"borderTopRightRadius":{"desktop":"0px"},"borderBottomRightRadius":{"desktop":"0px"},"borderBottomLeftRadius":{"desktop":"0px"},"paddingBottom":{"mobile":"0px"}}},"misc":{"type":"countdown","countdownType":"evergreen","tag":"div","labelTag":"span","dateTime":"00:45","items":[{"text":"Days","show":false},{"text":"Hours","show":false},{"text":"Minutos","show":true},{"text":"Segundos","show":true}],"separator":{"active":true}}}];

          countdownList.forEach(function(countdown) {
            const countdownType = countdown.misc.countdownType;
            const dateTime = countdown.misc.dateTime;
            const compKey = countdown.compKey.slice(0, 7);
            const intervalName = 'atomicat_countdown_interval_' + compKey;

            window[intervalName] = setInterval(function updateCountdown() {
              let targetTime;
              if (countdownType === "evergreen") {
                const sessionStorageKey = 'atomicat_countdown_start_' + compKey;
                let countdownStart = sessionStorage.getItem(sessionStorageKey);
                if (!countdownStart) {
                  countdownStart = new Date().getTime();
                  sessionStorage.setItem(sessionStorageKey, countdownStart);
                }
                const [hours, minutes] = dateTime.split(":").map(Number);
                targetTime = new Date(parseInt(countdownStart));
                targetTime.setHours(targetTime.getHours() + hours);
                targetTime.setMinutes(targetTime.getMinutes() + minutes);
              } else if (countdownType === "due_date") {
                targetTime = new Date(dateTime);
              }

              const now = new Date();
              const distance = targetTime - now;

              if (distance <= 0) {
                clearInterval(window[intervalName]);
                const countdownContainer = document.querySelector('.atomicat-countdown-' + compKey);
                if(countdownContainer) {
                  const countdownDigits = countdownContainer.querySelectorAll('.atomicat-countdown-digits');
                  countdownDigits.forEach(digit => digit.textContent = '00');
                }
                return;
              }

              const days = Math.floor(distance / (1000 * 60 * 60 * 24));
              const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
              const seconds = Math.floor((distance % (1000 * 60)) / 1000);

              const countdownContainer = document.querySelector('.atomicat-countdown-' + compKey);
              if(countdownContainer) {
                if(countdownContainer.querySelector('.atomicat-countdown-days')){
                  countdownContainer.querySelector('.atomicat-countdown-days').textContent = days < 10 ? `0${days}` : days;
                }
                if(countdownContainer.querySelector('.atomicat-countdown-hours')){
                  countdownContainer.querySelector('.atomicat-countdown-hours').textContent = hours < 10 ? `0${hours}` : hours;
                }
                if(countdownContainer.querySelector('.atomicat-countdown-minutes')){
                  countdownContainer.querySelector('.atomicat-countdown-minutes').textContent = minutes < 10 ? `0${minutes}` : minutes;
                }
                if(countdownContainer.querySelector('.atomicat-countdown-seconds')){
                  countdownContainer.querySelector('.atomicat-countdown-seconds').textContent = seconds < 10 ? `0${seconds}` : seconds;
                }
              }
            }, 1000);

          });
        } catch (error) {
          console.log(error);
        }
      })();