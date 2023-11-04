/*!
 * App for loom web.
 * Copyright 2022-2023 The Teller Authors
 * Licensed under the Apache License, Version 2.0
 */

(() => {
  'use strict'

  function main() {

    // Loading DOM animation
    const logoLoadAnimationContainer = document.querySelector('.logoLoadAnimationContainer');
    const logoLoadAnimation = document.querySelector('.logoLoadAnimation');
    function fadeOut(el) {
      var opacity = 1; // Initial opacity
      var interval = setInterval(function () {
        if (opacity > 0) {
          opacity -= 0.1;
          el.style.opacity = opacity;
        } else {
          clearInterval(interval); // Stop the interval when opacity reaches 0
          el.style.display = 'none'; // Hide the element
        }
      }, 50);
    }
    setTimeout(function () {
      fadeOut(logoLoadAnimation);
      setTimeout(function () {
        fadeOut(logoLoadAnimationContainer);
      }, 500);
    }, 1000);

    // Content for welcome animation
    const recibimientos = {
      "de": "Hallo",
      "br": "Olá",
      "en": "Hello",
      "fr": "Bonjour",
      "it": "Ciao",
      "id": "Halo",
      "ar": "Hola",
      "ja": "こんにちは",
      "sa": "مرحبا",
      "de": "Guten Tag",
      "ru": "Привет",
      "hi": "नमस्ते",
      "zh": "你好",
      "ko": "안녕하세요",
      "tr": "Merhaba",
      "es": "Hola",
      "sv": "Hej",
      "pl": "Cześć",
      "cs": "Ahoj",
      "da": "Hej",
      "mx": "Hola",
      "fi": "Hei",
      "gb": "Hello",
      "pt": "Olá",
      "el": "Γεια σας",
      "hu": "Sziasztok",
      "th": "สวัสดี",
      "no": "Hei",
      "ro": "Salut",
      "he": "שלום",
      "uk": "Привіт",
      "vi": "Xin chào",
      "bg": "Здравейте",
      "us": "Hello",
    };

    const welcomeHeader = document.getElementById("welcomeHeader");
    const loomList = document.querySelector("[loom-list]");
    let intervalId;

    function changeHeaderText() {
        let index = 0;
        const languages = Object.keys(recibimientos);
        intervalId = setInterval(() => {
          welcomeHeader.textContent = recibimientos[languages[index]];
          index = (index + 1) % languages.length;
        }, 3000);
    }

    function stopHeaderTextChange() {
      clearInterval(intervalId); // Call clearInterval with the stored intervalId
    }

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    function checkUserLang() {
      var a = (navigator.language || navigator.userLanguage || navigator.browserLanguage)
      if (a){
        let aTwoFirst = a.substring(0, 2);
        if (recibimientos[aTwoFirst]){
          welcomeHeader.textContent = recibimientos[aTwoFirst]
          setTimeout(function () {
            stopHeaderTextChange()
            changeHeaderText()
          }, 3000);
        }
        else {
          welcomeHeader.textContent = recibimientos[0]
          stopHeaderTextChange()
          changeHeaderText()
        }
      } else {
        welcomeHeader.textContent = recibimientos[0]
        stopHeaderTextChange()
        changeHeaderText()
      }
    }

    // Animation for welcome hero section
    if (welcomeHeader) {
      checkUserLang()
    }
    
    if (loomList && welcomeHeader) {
      // Loom selector listener
      loomList.addEventListener("click", function (event) {
        const selectedLoom = event.target.getAttribute('loom-language');
        let valuee = recibimientos[selectedLoom];
        if (valuee) {
          stopHeaderTextChange()
          welcomeHeader.textContent = valuee
            changeHeaderText()
        }

      });
    }

    // Get the spans
    const spans = document.querySelectorAll('#frase span');
  
    // Function to toggle the "d-none" class
    function toggleClass() {
      spans.forEach((span) => {
        if (span.classList.contains('d-none')) {
          span.classList.remove('d-none');
        } else {
          span.classList.add('d-none');
        }
      });
    }
  
    // Set an interval to toggle the class every 5 seconds
    setInterval(toggleClass, 5000);
  
    let dailyCallContainer = document.getElementById('daily-call-container')
    let dailyCallCloseButton = document.getElementById('daily-call-close-button')
  
    dailyCallCloseButton.addEventListener("click", function (event) {
      dailyCallContainer.remove()
  
    })

    // Hide widgets when scrolling
    let didScroll = false;
    let scrollTimeout = null;
    const tellerElement = document.getElementsByTagName("teller")[0]
    const themeSelectorElement = document.getElementById("themeSelector")

    window.onscroll = () => {
      didScroll = true;
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (didScroll) {
          didScroll = false;
          themeSelectorElement.style.transform = "translateY(0px)"
          tellerElement.style.transform = "translateY(0px)"
        }
      }, 250);

      themeSelectorElement.style.transform = "translateY(80px)"
      if (tellerElement.classList.contains("teller-launched")) {
          tellerElement.style.transform = "translateY(0px)"
      } else {
        tellerElement.style.transform = "translateY(80px)"
      }
    };

    // Cookie agreement
    var loomCookiesAccepted = localStorage.getItem('loomCookiesAccepted');
    
    const cookiesModal = document.getElementById('cookiesModal')
    const btnAcceptCookies = document.getElementById('btnAcceptCookies');
    const btnDeclineCookies = document.getElementById('btnDeclineCookies');

    btnAcceptCookies.addEventListener('click', function() {
      localStorage.setItem('loomCookiesAccepted', true);
      cookiesModal.style.display = "none";
    });

    btnDeclineCookies.addEventListener('click', function() {
      localStorage.setItem('loomCookiesAccepted', false);
      cookiesModal.style.display = "none";
    });

    if (!loomCookiesAccepted) {
      cookiesModal.style.display = "block";
    }

    const navBarTellerLaunch = document.getElementById("navBarTellerLaunch")
    const footerTellerLaunch = document.getElementById("footerTellerLaunch")
    const IncentToContact = document.getElementById("IncentToContact")

    // Define the shared event listener function
    function clickOnTeller() {
      const buttonFatherBrick = document.getElementById('buttonFatherBrick');
      buttonFatherBrick.click();

    };


    navBarTellerLaunch.addEventListener('click', clickOnTeller);
    footerTellerLaunch.addEventListener('click', clickOnTeller);
    if (IncentToContact){
      IncentToContact.addEventListener('click', clickOnTeller);
    }

    // Notification launcher
    function notify(a) {
      const liveToast = document.getElementById('liveToast')
      const toastBootstrap = bootstrap.Toast.getOrCreateInstance(liveToast)
      const toastBody = document.getElementById('toastBody')
      toastBody.setAttribute('loom', a);
      toastBootstrap.show()
    }

    

    // Download loom zip
    var downloadLoomElement = document.getElementById("downloadLoom");
    if (downloadLoomElement) {
      downloadLoomElement.addEventListener("click", function(event) {
        // Perform custom actions here
        // For example, you can redirect to the file location:
        window.location.href = "src/zip/loom.js.zip";

        // Or you can initiate a file download using AJAX or any other method:
        // Your custom download logic here

        // Prevent the default anchor tag behavior
        event.preventDefault();
      });
    }

    // Passive scroll setter for accesibility improve
    document.addEventListener('touchstart', onTouchStart, {passive: true});


    // Function copy id element to clipboard

    function copyElementContent(elementId) {
      const contentToCopy = document.getElementById(elementId);
      if (contentToCopy) {
        const range = document.createRange();
        range.selectNodeContents(contentToCopy);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        
        document.execCommand("copy");
        console.log("Content was copied to clipboard: " + contentToCopy.innerText);
      }
    }
    
    let copyExampleClipboard = document.getElementById("copyExampleClipboard")
    // Example copy listener
    if (copyExampleClipboard) {
      copyExampleClipboard.addEventListener('click', function() {
        copyElementContent("exampleIntegrationPre");
        notify('Integration example copied to clipboard')
      })
    }
    
    // CDN copy listener
    let copyCDNClipboard = document.getElementById("copyCDNClipboard")
    if (copyCDNClipboard) {
      copyCDNClipboard.addEventListener('click', function() {
        copyElementContent("CDNPre");
        notify('Integration CDN Script copied to clipboard')
      })
    }
    
    // Collapse navbar button animation
    const plusIcon = document.getElementById('navbar-toggler-icon');
    document.getElementById('navbarNavAltMarkup').addEventListener('show.bs.collapse', function () {
      plusIcon.classList.add('rotate');
    });
    document.getElementById('navbarNavAltMarkup').addEventListener('hide.bs.collapse', function () {
      plusIcon.classList.remove('rotate');
    });

    // Take loom dropdown list to end when navbar collapse
    function handleResize() {
      const dropdown = document.querySelector("[loom-list]");
      const windowWidth = window.innerWidth || document.documentElement.clientWidth;
      if (windowWidth <= 992) {
        dropdown.classList.add('dropdown-menu-end');
      } else {
        dropdown.classList.remove('dropdown-menu-end');
      }
    }
    window.addEventListener('resize', handleResize);
    handleResize();

    // Contact form submitter
    const fullForm = document.getElementById('contact-form')
    var opts = {
      method: "POST",
      mode: "no-cors",
      redirect: "follow",
      referrer: "no-referrer"
    } 
    var validationTimeout

    if (fullForm) {
      
      var entryA = "";
      var entryB = "";
      var entryC = "";
      var entryD = "";
      const nameOrCompany = document.getElementById('formName')
      const email = document.getElementById('formEmail')
      const website = document.getElementById('formWebsite')
      const message = document.getElementById('formMessage')

      function urlFeedbackConstructor() {
        let filledURL = "https://docs.google.com/forms/d/e/1FAIpQLSdocuOVq_dXRzfiPPygvGKnsevS75XoL1GIF5sOpe9Qf7WICg/viewform?usp=pp_url&entry.500029575=nombre&entry.1588432699=correo&entry.1600389041=www&entry.1156858948=sisi"
        let ss = filledURL.match("https(.*)/viewform");
        var formEntries = filledURL.match(/entry.([0-9]+)/g);
        entryA = formEntries[0];
        entryB = formEntries[1];
        entryC = formEntries[2];
        entryD = formEntries[3];
        return ss[0].replace("viewform", "formResponse?usp=pp_url");
      }

      function entryComposer(entry, content) {
        let encodedContent = encodeURIComponent(content)
        if (entry == "") { return "" }
        else return ('&' + entry + '=' + encodedContent)
      }

      function addValidationClass() {
        fullForm.classList.add('was-validated');
      }

      nameOrCompany.addEventListener('input', function() {
        clearTimeout(validationTimeout);
        validationTimeout = setTimeout(addValidationClass, 3000);
      });

      email.addEventListener('input', function() {
        clearTimeout(validationTimeout);
        validationTimeout = setTimeout(addValidationClass, 3000);
      });

      website.addEventListener('input', function() {
        clearTimeout(validationTimeout);
        validationTimeout = setTimeout(addValidationClass, 3000);
      });

      message.addEventListener('input', function() {
        clearTimeout(validationTimeout);
        validationTimeout = setTimeout(addValidationClass, 3000);
      });

      // JavaScript to handle form submission and display control messages
      document.getElementById('contact-form').addEventListener('submit', function(event) {
        var form = event.target;
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          form.classList.add('was-validated');
        } else {
          clearTimeout(validationTimeout);
          form.classList.remove('was-validated');
          event.preventDefault();
          submit(nameOrCompany.value, email.value, website.value, message.value);
        }
      });

      //Submit fetch
      function submit(a,b,c,d) {
        var fullFeedbackurl = urlFeedbackConstructor() +
            entryComposer(entryA, a) +
            entryComposer(entryB, b) +
            entryComposer(entryC, c) +
            entryComposer(entryD, d) +
            '&submit=Submit'

        console.log("Making Request");
            fullForm.classList.remove('was-validated');
            fetch(fullFeedbackurl, opts).then(function (response) {
                return response.text();
            })
            .then(function (text) {
              notify('You made the right decision, we will catch you soon. 👋')
              nameOrCompany.value = '';
              email.value = '';
              website.value = '';
              message.value = '';
              fullForm.classList.remove('was-validated');
            })
            .catch(function (error) {
              notify('Message unsend, please try later. 👎')
            });
      }
    }
      
    const submitOnAttempt = document.getElementById('submitOnAttempt')
    //Submit from window of attempting exit
    if (submitOnAttempt) {
    submitOnAttempt.addEventListener('click', function() {
      const attemptExitEmailInput = document.getElementById('attemptExitEmailInput')
      const attemptingExitFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScNh_GFkcUU3EX_z41iis8S15mvNUBWnfeaXrJgiAfx2zRbAA/formResponse?usp=pp_url?usp=pp_url&entry.110882613="
      const endUrl = "&submit=Submit"
      const regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (regexMail.test(attemptExitEmailInput.value)) {
        fetch(attemptingExitFormUrl+attemptExitEmailInput.value+endUrl, opts).then(function (response) {
          return response.text();
        })
        .then(function () {
          notify('You made the right decision, we will catch you soon. 👋')
        })
        .catch(function () {
          notify('Message unsend, please try later.')
        });
      } else {
        notify("Invalid email")
      }
      
      })
    }

    // Exit intent detector
    var _ouibounce = ouibounce(document.getElementById('exampleModal'), {
      aggressive: true,
      timer: 0,
      callback: function() { 
        // actions to perform on almost close page
        const myModal = new bootstrap.Modal ('#exampleModal');
        console.log('ouibounce fired!');
        myModal.show();
      }
    });
    
  }
  window.addEventListener('DOMContentLoaded', () => {
    main()
  })

})()
