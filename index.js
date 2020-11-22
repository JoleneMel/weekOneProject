var priceHealthPotion = 130;
var priceManaPotion = 135;

var amountOfMoneyInLootBag = 350;
var amountOfMoneyInBagOfHolding = 750;

var numberOfFriendsInParty = 7;
var numberOfFriendsOnSideQuest = 13;

var ageInYears = 23;
var ageInMonths = 276;

var firstNameA = "Angus";
var firstNameB = "Lissa"; 

var lastNameA = "McFife";
var lastNameB = "Belwinter";

var middleInitialA = "J";
var middleInitialB = "M";


var newAmtOfMoneyLootBagAfterMana = (amountOfMoneyInLootBag - priceManaPotion);
var newAmtOfMoneyLootBagAfterHealth = (amountOfMoneyInLootBag - priceHealthPotion); 

var newAmtOfMoneyBagOfHoldingAfterMana = (amountOfMoneyInBagOfHolding - priceManaPotion);
var newAmtOfMoneyBagOfHoldingAfterHealth = (amountOfMoneyInBagOfHolding - priceHealthPotion);

var newAmtOfMoneyBagOfHoldingAfterManaHealth = (amountOfMoneyInBagOfHolding - priceManaPotion - priceManaPotion);
var newAmtOfMoneyLootBagAfterManaHealth = (amountOfMoneyInLootBag - priceManaPotion - priceHealthPotion);


var numberOfFriendsInPartyPerYr = (numberOfFriendsInParty / ageInYears);
var numberOfFriendsInPartyPerMonths = (numberOfFriendsInParty / ageInMonths);

var numberOfFriendsOnSideQuestPerYr = (numberOfFriendsOnSideQuest / ageInYears);
var numberOfFriendsOnSideQuestPerMonths = (numberOfFriendsOnSideQuest / ageInMonths);


var fullNameAngusA = (firstNameA + middleInitialA + lastNameA);
var fullNameAngusB = (firstNameA + middleInitialB + lastNameB);
var fullNameAngusC = (firstNameA + middleInitialA + lastNameB);
var fullNameAngusD = (firstNameA + middleInitialB + lastNameA);

var fullNameLissaA = (firstNameB + middleInitialB + lastNameB);
var fullNameLissaB = (firstNameB + middleInitialA + lastNameA);
var fullNameLissaC = (firstNameB + middleInitialB + lastNameA);
var fullNameLissaD = (firstNameB + middleInitialA + lastNameB);


console.log('The health potion price is:' + priceHealthPotion);
console.log('The mana potion price is:' + priceManaPotion);

console.log('In the LootBag has:' + amountOfMoneyInLootBag);
console.log('In the Bag of Holding has:' + amountOfMoneyInBagOfHolding);

console.log('After I purchase a health potion my lootbag will have:' + newAmtOfMoneyLootBagAfterHealth);
console.log('After I purchase a mana potion my lootbag will have:' + newAmtOfMoneyLootBagAfterMana);
console.log('After I purchase a mana potion and mana potion my lootbag will have:' + newAmtOfMoneyLootBagAfterManaHealth);

console.log('If I use the bag of holdings funds to purchase a health potion I will still have:' + newAmtOfMoneyBagOfHoldingAfterHealth);
console.log('If I use the bag of holdings funds to purchase a mana potion I will still have:' + newAmtOfMoneyBagOfHoldingAfterMana);
console.log('If I use the bag of holdings funds to purchase a health potion and mana potion I will still have:' + newAmtOfMoneyBagOfHoldingAfterManaHealth);

console.log('The number of my party of heroes is:' + numberOfFriendsInParty);
console.log('The number of the heroes on side quests is:' + numberOfFriendsOnSideQuest);

console.log('The number of party members met each year divided by my age is:' + numberOfFriendsInPartyPerYr);
console.log('The number of heroes on side quests met each year divided by my age is:' + numberOfFriendsOnSideQuestPerYr);

console.log('The number of party members met each month divided by my age is:' + numberOfFriendsInPartyPerMonths);
console.log('The number of heroes on side quests per month divided by my age is' + numberOfFriendsOnSideQuestPerMonths);

console.log('My age in years is:' + ageInYears);
console.log('My age in months is:' + ageInMonths);

console.log('One partys member first name is:' + firstNameA);
console.log('Another partys member first name is:' + firstNameB);

console.log('One partys members last name is:' + lastNameA);
console.log('One partys members last name is:' + lastNameB); 

console.log('One partys members middle initial is:' + middleInitialA);
console.log('One partys members middle initial is:' + middleInitialB);

console.log('Angus name in this dimension is:' + fullNameAngusA);
console.log('Angus name in the Dundee dimension is:' + fullNameAngusB);
console.log('Angus name in the Kor-Virliath dimension is:' + fullNameAngusC);
console.log('Angus name in the Zargothrax dimension is:' + fullNameAngusD);

console.log('Lissas name in this dimension is:' + fullNameLissaA);
console.log('Lissas name in the Dundee dimension is:' + fullNameLissaB);
console.log('Lissas name in the Kor-Virliath dimension is:' + fullNameLissaC);
console.log('Lissas name in the Zargothrax dimension is:' + fullNameLissaD);