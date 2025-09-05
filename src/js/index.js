/* Your JS here. */
function dropDown(action) {
    const bio = document.getElementById("dropdown");
    if (action == 1) {
       bio.classList.remove("off");
    }
    if (action == 0) {
       bio.classList.add("off");
    }
}

function nyanMode() {
    const state = document.getElementById("switch").getAttribute("data-state");
    if (state === "off") {
        document.getElementById("pic").setAttribute("src", "assets/nyan.gif");
        document.getElementById("name").innerHTML = "N̴̷̵̵̶̸̡̛̲̺̠̩͉̣̯̻̱̻̞̖͐ͭͭͯ̇̊̌̃ͦ́͌ͬ͒́̿̃͂ͮ̾̈́̃ͥ͜͢ÿ͖͘ā̶̧̖͓̤̪̠̲̘ͫ̿͆ͦ̾̈͢͞͞n̴̡̢̼̗̭͉̘̼̦̖̞̰͚̫ͤ̿͑́̄͂͒͂́͂͝͡ͅ Ǩ̠̈͆ẏ͕͙̰̬̖̜̰̜̭̥̼̂ͧ͗͂̐ͦ̓u̴̶̧̡̢̡̮͙̲͙̟̭̼̳̻͊͆̌̓͛ͫͥ̓͘̕͟͜͞u͉͙̗̲̲̯̲͎̹̓ͪ̐́ͥ̔̆͘͠m̶̝̹̗̘̼̗̺̘̱̼̗̤̣͂͂ͮͤ̊̉̽̐̔͋ͤͦ͒ͥ͒͑ͩ̒͟͠r̶̸̵̨̢̰̙̯͚̰͚͚̙̠̭͍̫̖̼͓͇͙̥̳͉̱̝͌̈́͑ͥ̊̄̌ͨ́ͫ̔͆̊͂̐͝͞͠ͅơ̛̩̭̮̗͓̥̖̱̹͇̲̮͍̰̝̥̔̓͛͆ͮ̆ͥͪ̌͌̉ͣ́͑̿̌̚͢͟͟͜͞͞w̵͖͓̔ͯ̈́̑";
        document.getElementById("desc").innerHTML = "3wdd-nyyaahhh uwu!! ✨ studewnt iwn C-c-compyutew sciewncyyy OwO awnd cwop sciewncyyy, p-p-pawffft~ nya >///< !! I ish intewested in embwedded sysyyystewms, nya :3 rawr~!!! Swwwensin fwuffy datas >:3 paws at sensow owo nyaaaa~ acquisyitiony wiff my wittwe cwaws, mew mew =^.^= Secowdawy iwntewest? OwO compyutew sciewncy educatiowwwn, nya~ su su edupawcation fwufffy, uwu. I wanna buiwd toooowwsies awnd iwnfwastwuctuwwuwe fwuff ffow aww da students, nyaaaa!! mrrrp, suppowtin cwass at scawe OwO waggwy taiw uwu uwu. Addytiowawwyyy, da chawwenge obby iwncowpowatinggg OR stawppyng da usage obby LLMs nya :3 iz su sowo iwntewestiiing, nya p-p-pwease meeeow mrrrrowww >w< !!!And den nya~!!! I ish internyin at stawrtuppy nyaaaa~ :3c bats at uw scriipts uwu whewe I buiwd web-scwapyews fwuffy nyan scratchy c-c-code owo!! nya~ snatchyy nyew SAS pwoductsies uwu owo nya buyers!! Mewww :3 :3 uwu. Awso meowww I ish big meowny pwoud couwse assistyawnt fow CS128 nyaaaa~ mrrrrp mrrroww!! pounces on uwu univewrsity nya pawpaw, uwu uwu meeeeoooowwww =^w^=";
        document.getElementById("switch").setAttribute("data-state", "on");
    } else {
        document.getElementById("pic").setAttribute("src", "assets/prof.png");
        document.getElementById("name").innerHTML = "Ryan Kumar";
        document.getElementById("desc").innerHTML = "3rd-year student in Computer Science and Crop Sciences. I am interested in working on embedded systems within the field of agriculture, particularly those involved in sensing and data acquisition. My secondary interest is in Computer Science Education. I am interested in working on developing tools and infrastructure to support education at scale. Additionally, I find the challenge of incorporating, or preventing the usage of LLMs within a given set of coursework to be very intriguing.<br/><br/> I am currently interning at a startup, where I write web-scrapers to scout for new prospective SAS products, and their respective buyers. I am also a lead course assistant for CS 128 here at the University.";
        document.getElementById("switch").setAttribute("data-state", "off");
    }
}