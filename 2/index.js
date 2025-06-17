startGame();
function startGame() {
    alert("Your objective for the day to obtain the Cloak of Serenity, a Scythe, and a warped Box.")
    alert("Your DnD party are in the tavern, Telindra is teaching Rations to COME.");
const firstChoice = prompt("Where do you want to go?\n1. Go To Rags and Gems");

if (firstChoice === '1') {
    goToRagsAndGems();
    return;
}
 
alert("You all fall flat on your faces going down the stairs, everyone gets knocked out."); 
startGame();

}
// each if statements checks if the players input matches a speficic destiation
// if a match is found, the corresponding function for that location will be called
// The return statment is important bc it stops the code from fall through if checks how to get around using else statements 

// this is the current function i am working on its the first one to come back to unless stated otherwise


function goToRagsAndGems() {
  alert("You all walk in and the shop is littered with items all around on floor and walls, the shop keeper a man with a cowboy hat, a black cloak, an large scythe greets you all. 'Welcome fellas, what can I do ya for?'");
  const choiceAtRags = prompt("What would you like to do in the shop?\n1. Sell shop keeper a grill\n2. Threathen with Rations for item");

  if (choiceAtRags === '1' ) {
    sellAGrill();
    return;
  }
  if (choiceAtRags === '2') {
    threathenWithRationsForItems();
    return;
  }
  alert("You all stand there like NPC. The shop keeper gives you a side-eye and throws a rock at you. (end)");
startGame();
  }
//end of function for to go to rags and gems


// this is the first option a for 

    function sellAGrill() { 

        const howToSell = prompt("You mention to the shop keeper you have a treasure he might be interested in\n1. Everyone whips out a grill at once\n2. George does a backflip to show of the grill\n3. George makes a piece of meat on the grill to impress the shop keeper with his grils powers.");

         if (howToSell === '1') {
            alert("The shop keeper raises his gun from behind the counter in alert and points it at the party threathening to shoot if they don't leave. (end)");
            startGame();
        }
        if (howToSell === '2') {
            georgeDoesFlip();
        }
        if (howToSell === '3') {
            alert("The smell of the meat makes ration hungry and he quickly snags the meat as George is about to hand it to the shop keeper. The shop keeper is not impressed, he tells you all to leave. (end)");
            startGame();
        }

        alert("He waits for you to present something and then he lets out a massive rip that stinks so bad you all have to leave the store for air.")
        startGame();

    }                                                     //the ending for sellAGril


    function georgeDoesFlip() {                         // dont use a semi colon
    // here // this is the first options for the first selection rags an gems
        const backFlip = prompt("George does a backflip so damn hard, it blows the shop keeper's mind away and he says invested in buying a grill. \n1.Talk to eachother\n2.George uses his ultimate grill to press his sword and his slices a mosquito in the air in half");

         if (backFlip === '1') {
            alert("The party turns to themselves and talks about the price offered, the shop keeper takes offense and says you can all leave if the party is going to be secretive.(end)");
            startGame();
        }
        if (backFlip === '2') {
            alert("The shop keeper stares at George in shock and nods, 'Ye sir, ye got yerself a deal.' He extends his hand to George.");
            dealIsMade();
        }
        alert ("George tries to do a backflip and he fails epically and is now on the ground writhing in pain. You all embarassingly drag George out of the store.");
        startGame();
    }                                            

    function dealIsMade() {

        const demonAppears = prompt("George shakes his hand. As he does, a demon bursts into the store and threathens the shop keeeper for the Cloak of Serenity\n1. Ronin grabs the guy from behind and flips him over onto his back.\n2. Karma blows a dart into his neck\n3.Telindra shoots a bow into his shoulder");

        //changed prompt to alert for this one and georgeflip
    

        if (demonAppears === '1') {
            alert("Ronin cracks the guys spine, and the shop keeper is relieved the cloak is safe. He offers you 100 dark gems extra for the hassle. You leave the store. (end)");
            startGame();
         }
        if (demonAppears === '2') {
            alert("Karma shoots her dart and the demon crumbles up like a ball. The shop keeper impressed by her strength offers to triple the reward. A total of 300 dark gems. Satisfied with the outcome, you all leave the store.(end.)");
            startGame();
        }
        if (demonAppears === '3') {
            alert("Telindra shoots an arrow at the demons back and he vanishes in thin air leaving behind a warped box on the ground.");
            fallenItem();

        }
        
        hasCloak = false
        hasScythe = false    //contains the items to know if the players have it or not
        hasBox = false
        

        //note to self about what im doing i am trying to move around the has cloak scythe button because my code isnt worknig for function deal is made
       
    }

    function fallenItem() {


        const haggle = prompt("The shop keeper lunges for the box, dropping his scythe. Baddara picks up the box. She notices his high interest in it. She wants to decieve the man.\n1.The party decides to keep the box instead and leave.\n2.Baddara will try to deceieve him for everything he has.");

        

        if (haggle === '1') {
            alert("The party looks at eachother and nod in agreement and quietly walk out of the shop, George tries to finish his deal with the shop keeper and he says not until he gets the box.");
            alert:("Box acquired.");
            startGame();
            
        }
        if (haggle === '2') {
            alert("Baddara tells him she will give him 100 grills for free. She has intentions to decieve him and give him nothing.");
            deception();
        }
        alert("The shop keeper snatches the box out of Baddara hands and points his scythe telling the party to leave.")
        startGame();
    } 


    // note that this is the line of code where we get the cloak of serenity

  

    function deception() {
        alert("The shop keeper excitedly agrees and as he gives over his items, Baddara takes the box, snatches the scythe and cloak then yells 'RUNNN' and the party dashes out of the shop.");
        alert ("Box, Cloak, Scythe acquired.")
        hasBox = true
        hasCloak = true
        hasScythe = true
        fooledHim();
    }


    function fooledHim() {
        alert("The shop keeper tries taking out his gun to shoot at the party but by the time he does theres is nothing but the door swinging in the wind.(end)");
        alert("Box, Scythe, Cloak have been acquired.");
        hasBox = true
        hasCloak = true
        hasScythe = true
        alert("You win.")
        startgame();
    }
//end of option 1 for section 1


// option 2 path
    function threathenWithRationsForItems() {

        const stealFromShop = prompt("Rations barks at shop keepers face. Meanwhile Karma noitces the shiny cloak on the shop keeper. Baddara talks with intimidation, 'Fess up some items ya old man we're not messing around'\n1. The shop keeper stoiclly says 'Grab what you can before the guards come, then I never want to see you again'\n2. 'You really think that pooch is gonna scare me' the shop keeper says as he flicks Rations nose.\n3. Ronin yells across the shop");

        if (stealFromShop === '1') {
            alert("You all frantically start looking thorugh the items all around, grabbing as much as you can. When suddenly all your hands go numb and everyone is unable to move. You all freak out as the shop keeper smiles evily, 'Who said they wouldnt be poisionous in my shop, fools.' You all collaspe from poison damage. (end)");
            startGame();
        }

        if (stealFromShop === '2') {
            alert("Rations and Telindra fly against the wall with extremely force from the mere flick. You all look at Telindra then the back at the shop keeper noticing how strong he is. You all make the decision to leave.(end)");
            startGame();
        }

        if(stealFromShop === '3') {
            alert("Ronin shouts from the enterence of the shop, 'Well we wouldnt have to fight you if you just gave us something'.");
            takeSomething();
 
        }

    }                                                   
    

    function takeSomething() {
        const stealItem = prompt("The shop keeper takes out his scythe and swings it at Telindra, and saying 'Nothing is free here!' He misses his swing. \n1. Ronin blows smoke in the shop keeper's face.\n2. Karma blows her dart in the keeper's neck.")
        if (stealItem === '1') {
            alert("Ronin laughs as the shop keeper becomes very dazed and starts falling over. He takes the opportunity to take the cloak and the scythe of his body. The party leaves quickly.")
            alert("Cloak and Scythe acquired.")
            alert("You almost win.")
            startGame();
        }
        if (stealItem === '2') { 
            alert("Karma's dart puts the shop keeper to sleep. The party takes the advantage to rummage through the shop items. The items litered around the ground were poisonous, the party slowly takes immense poison dammage.(end)");
            alert("Died of poison damage.");
            startGame();
        }
    }
    //The end 

   
    