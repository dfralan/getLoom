var coordinator =`
    
    <div id='coordinatorModal' class="modal z-i full-center blur-behind smooth-300 display-none">

    <div style='max-width: 250px' class="max-w-350 bg-body z-2 padded rounded brick flex-col s-gap">

        <li onclick='toggleCoordinatorModal()' class="${dropdownElementClass}">
        ${arrowBackIcon}
        Back
        </li>
        
        <div class="text-center color-grey block-mode divider"></div>

        <li class="text-center font-xs font-500 dropdown-element inactive block-mode color-primary">Theme</li>
        <li id="theme-btn" class="full-center ${dropdownElementClass}">
            <span>${sunIcon}${moonIcon}</span>
        </li>

        <div class="text-center color-grey block-mode divider"></div>

        <li class="text-center font-xs font-500 dropdown-element inactive block-mode color-primary">
            Your Public Key
        </li>
        <li onclick='copyPublicKeyToClipboard()' class="steady-1 overflow-scroll ${dropdownElementClass}">
            <span id='coordinatorPubkey' class="overflow-scroll">
            </span>
            <span class='s-padded no-padded-top no-padded-bottom no-padded-right'>
                ${copyIcon}
            </span>
        </li>

        <li class="text-center font-xs font-500 dropdown-element inactive block-mode color-primary">
            Your Private Key
        </li>
        <li onclick='copyPrivateKeyToClipboard()' class="steady-1 overflow-scroll ${dropdownElementClass}">
            <span class="overflow-scroll">
            ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
            </span>
            <span class='s-padded no-padded-top no-padded-bottom no-padded-right'>
                ${copyIcon}
            </span>
        </li>

        <div class="text-center color-grey block-mode divider"></div>

        <li onclick="logout()" class="full-center ${dropdownElementClass}">
            Logout
            ${doorIcon}
        </li>

    </div>
    
</div>
`