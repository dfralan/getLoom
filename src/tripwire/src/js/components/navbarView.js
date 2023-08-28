let loomDropdownId = genHex(12);
let navUserDropdownId = genHex(12);

var navbar =`
<div class="bg-body stick-top z-3 s-padded no-padded-bottom spaced display-flex flex-row full-center s-gap">
    <div class="display-flex flex-row s-gap full-center s-padded no-padded-bottom no-padded-top">
        <!-- Left Sidebar -->
        <p onclick="showSideBar()" class='display-flex cursor-pointer hover-bg-lighter full-center border-solid border-secondary xs-padded rounded-s color-primary fill-primary'>
            ${menuIcon}
        </p>

        <!-- Brand -->
        <div class="display-flex flex-row h-center">
            ${clipIcon}
            <p class="font-500 color-primary on-mobile-pass">Tripwire</p>
            <p class="font-500 color-primary on-mobile-show">Tw</p>
        </div>
    </div>

    <div class="display-flex flex-row s-gap flex-end h-center s-padded no-padded-bottom no-padded-top">

        <div class="display-flex flex-row h-center flex-end fill-secondary relative">
            <span class='z-1 full-center absolute xs-padded end-0'>
                ${filterIcon}
            </span>

            <input style='padding-right: 30px !important'
                class="responsive-1 s-padded-wide bg-body rounded-s border-solid border-secondary shadow-dynamic placeholder-secondary font-s font-300 color-primary"
                type="text" id="filterInput" placeholder="Filter">
        </div>

        <!-- Avatar Dropdown -->
        <div id='${navUserDropdownId}' class="dropdown">
            <!-- Dropdown button -->
            <div onclick="toggleDropdown('${navUserDropdownId}')" class="btn display-flex cursor-pointer">
                <span class='avatar-m shadow-dynamic bg-primary'></span>
            </div>
            <!-- Dropdown content -->
            <ul style='min-width: 200px'
                class="dropdown-content to-right z-1 absolute text-right rounded shadow-two bg-body xs-padded border-solid-s border-primary">
                <li class="text-center font-xs font-500 dropdown-element inactive block-mode color-secondary">Theme</li>
                <li id="theme-btn" class="dropdown-element btn">
                    <span>${sunIcon}${moonIcon}</span>
                </li>
                <div class="text-center color-grey block-mode divider"></div>
                <li class="text-center font-xs font-500 dropdown-element inactive block-mode color-secondary">Workspaces
                </li>
                <li onclick="toggleSideBar()" class="text-center font-xs font-300 dropdown-element block-mode color-primary cursor-pointer">Sales
                    Approach</li>
                <div class="text-center color-grey block-mode divider"></div>
                <li onclick="logout()"
                    class="text-right flex-center font-xs font-300 dropdown-element block-mode rounded-xs cursor-pointer full-center color-primary fill-primary">
                    Logout
                    ${doorIcon}
                </li>
            </ul>
        </div>
    </div>
    <!-- Missing closing div for the first "bg-body" div -->
</div>


`