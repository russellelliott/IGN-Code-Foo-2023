# IGN Code Foo 2023
## 1. Introduce Yourself
I am Russell Elliott, a 3rd year student studying Computer Science at the University of California, Santa Cruz. The document below further outlines my expertise and passions which align with the skills and needs of the internship.
https://docs.google.com/document/d/1sueMiOv20o3wnD-IGPBtGDnZ5wZbyaw40PpteVp2Ak0/edit

## 2. Hisui's New Power Plant

> The Galaxy Team has decided that in order to advance the research on Pokemon and the Pokedex, [Jubilife village](https://bulbapedia.bulbagarden.net/wiki/Jubilife_City) needs a brand new power plant. Luckily, Professor Laventon has discovered that the Pokemon, [Voltorb](https://bulbapedia.bulbagarden.net/wiki/Voltorb_(Pok%C3%A9mon)), is the best candidate to help power the village.

> Voltorbs can cleanly and efficiently produce electricity. An average Voltorb is about 0.5m (1'08") tall and weighs 10.4 kg (22.8lbs). However, they are uncommon and are only found in the Sacred Plaza.

> **Objective**: How many Voltorbs will you need to catch to fully power the village. Describe each step in your thought process.

To calculate how many Voltorbs are needed to fully power Jubilife village, we need to estimate the power demand of the village and the power output of a single Voltorb.

  

### Step 1: Calculate the power demand of Jubilife village

Assuming that Jubilife village is similar in size to a small town in the US, with around 500 households, we can estimate the daily power demand to be:

Power demand = 500 households x 30 kWh per household = 15,000 kWh per day

### Step 2: Estimate the power output of a single Voltorb

There is no direct information about the power output of a Voltorb in the Pokemon universe, and no conclusive sources exist to prove whether Voltorbs have the same power level as Pikachu or not. I say this because the Pokedex entries for the two Pokemon show they have similar size and attack. Therefore, we will assume that Voltorbs have the same power level as Pikachu, which is 100 kWh per day, given that a Pikachu produces 100,000 volts of electricity and assuming 1 amp hour.

  
$P_{kWh} = V_{volts}*A_{amp\_hours}/1000$

Power output per Voltorb = 100,000 volts * 1 amp hour / 1000

Power output per Voltorb = 100 kWh per day

### Step 3: Calculate how many Voltorbs are needed to meet the power demand of Jubilife village

Finally, we can calculate how many Voltorbs are needed to meet the power demand of Jubilife village by dividing the daily power demand by the power output per Voltorb:

Number of Voltorbs = Power demand / Power output per Voltorb

Number of Voltorbs = 15,000 kWh per day / 100 kWh per Voltorb per day

Number of Voltorbs = 150 Voltorbs

Therefore, based on the assumption that Voltorbs have the same power level as Pikachu, we would need around 150 Voltorbs to fully power Jubilife village. However, it's important to note that this estimate is based on several assumptions, and the actual power demand of the village and the power output of a single Voltorb may vary.

  
### Sources
Here are the sources I used to solve the problem

#### Power consumption of an Average US Household

[https://shrinkthatfootprint.com/average-household-electricity-consumption/](https://shrinkthatfootprint.com/average-household-electricity-consumption/)

[https://pineappleenergy.com/resources/how-many-kilowatts-does-it-take-to-power-a-house/](https://pineappleenergy.com/resources/how-many-kilowatts-does-it-take-to-power-a-house/)

The average household in the US consumes 30 kWh per day.

#### Power Output of a Pikachu

[https://tomrocksmaths.com/2017/07/04/pokemaths-how-many-pikachus-does-it-take-to-power-a-light-bulb/](https://tomrocksmaths.com/2017/07/04/pokemaths-how-many-pikachus-does-it-take-to-power-a-light-bulb/)

Pikachu produces 100,000 volts

#### Volts to kWh

[https://www.rapidtables.com/calc/electric/volt-to-kw-calculator.html](https://www.rapidtables.com/calc/electric/volt-to-kw-calculator.html)

[https://www.inchcalculator.com/ah-to-kwh-calculator/](https://www.inchcalculator.com/ah-to-kwh-calculator/)

The power output of a Pikachu is 100kWh, given that a Pikachu produces 100,000 volts, and assuming 1 amp hour.

[https://www.inchcalculator.com/ah-to-kwh-calculator/?uc_ah=1&uc_volts=100000](https://www.inchcalculator.com/ah-to-kwh-calculator/?uc_ah=1&uc_volts=100000)

#### Pokedex Entries for Pikachu and Voltorb

[https://www.pokemon.com/us/pokedex/voltorb](https://www.pokemon.com/us/pokedex/voltorb)

[https://www.pokemon.com/us/pokedex/pikachu](https://www.pokemon.com/us/pokedex/pikachu)

[https://pokemongo.gishan.net/compare/25-100](https://pokemongo.gishan.net/compare/25-100)

The two Pokemon seem vary similar in terms of size and attack.
## 3. Coding Sample
This is my implementation of the poll component for the IGN 2023 Engineering Internship coding sample. This component allows the user to select one of 5 options and confirm their selection. From there, the number of votes for each option are displayed. The backend utilizes a GraphQL Yoga API which communicates with a SQL Database containerized via Docker. The database stores the 5 voting options and how many votes each of them have. The frontend is a NextJS Application with ExpressJS server, both of which are written in Typescript. Both the Backend and Frontend are tested via React testing frameworks.

## Installation Instructions
1. Clone the repo and run `npm run installs` to install the necessary dependencies for the frontend and backend directories. Alternatively, you can run `npm install` in the backend and frontend directories individually.
2. Turn on Docker Desktop and run the command `docker compose up -d` in the backend folder.
3. Run `npm run dev` in the root of the repo. Alternatively, you can do `npm run dev` in the frontend and backend directories individually. Frontend will run at `localhost:3000` and backend will run at `localhost:4000/graphql`

## Usage Instructions
Upon going to port 3000, you will be asked to select your favorite Sci-Fi media. Choose from one of the 5 options by clicking the icon next to the option of your choosing and click for the "Vote For {option name} button to vote for that option. From there, the buttons to select a vote will disappear; being replaced by the number of votes for each item. Reload the page to vote again.