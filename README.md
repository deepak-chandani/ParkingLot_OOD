## Parking Lot System

(Object Oriented Design using `TypeScript`)

### Why OOD ?
- I have been looking into TypeScript & thought of building out something which uses TypeScript a lot.
- So, I thought to try out this problem statement. and while solving this, **document my thought process, approach & ways to break down the problem**

## Problem Statement (high level requirements)

In this exercise, we will design an in memory software for a parking system using object oriented programming.
these requirements might be intentionally vague, try to resolve ambiguity by asking questions & clarifying things.

### Overview

- A parking system consists of n floors, and each **floor** has m parking spots.
- To enter the premise, driver can press a button which issues a parking ticket.
  - **NOTE:** No spot is assigned at the time of issuing the ticket.
- To exit the premise, driver can enter his **ticket** and press a button to exit.
- At entrance, driver can see floor wise **availability on signage board**: As an example:
  - Floor 1 has 5 out of 30 available
  - Floor 2 has 20 out of 50 available
- At the time of exit, driver can see parking charges associated with the ticket.

---

## How to approach for solving this problem

### Handle Ambiguity:

- As a good developer you should not make assumptions, rather, ask questions to clarify requirements.
> After all, a developer who just codes something without understanding what is expected to be build 🤷‍♂️, wastes the company's time & money. Potentially, may create much more serious issues.

Queries in given requirements: 🤷‍♂️

- **Q1:** What different `Vehicle` we are planning to be parked ? eg: Bike, Car, Bus ?
  - this gives us idea about size of vehicles being parked
- **Q2:** How do we know if `Vehicle` has been parked on a `spot` ? will that be decided by system while issuing ticket ?
  - important because we need to keep track of free/available spots inside `ParkingLot`
- **Q3:** when driver exits, How are charges calculated 💵 ? hourly ?
  - gives us idea about what information needs to be recorded when issuing ticket & when `Vehicle` exits

### Step 1: Defining Core Objects (Identify Entities)

Now, lets identify the core objects/entities from the requirement.

- `Vehicle` 🛵
- `Ticket`: 🎫 issued for vehicle
- `Floor`: parking-lot has multiple floors
- `ParkingSpot`: each `Floor` has multiple spots for parking
- `ParkingLot`: contains multiple floors

### Step 2: Analyze relationship between core objects/entities

Now, lets analyze
- which objects are member of which other objects ? `Composition`
- Do any object inherit from other ? `Inheritance`
- Is the relationship one-to-one or many-to-many ? `Cardinality`
- how these objects will be communicating with one another. `Interfacing` (or behaviours)
- Also, think about the key actions that objects will take & how they relate to each other

We can come up with following relationships/associations:
- `Ticket` is issued for a `Vehicle` (containment)
- `Floor` has multiple `ParkingSpot` (`ParkingSpot[]` 💡)
- `Vehicle` is parked at `ParkingSpot` (containment)
- `ParkingLot` is located at some `Address` & has multiple `Floors` (`Floors[]`)
- `ParkingLot` has `SignageBoard` to display availability of spots
- When drives exits he provides parking `Ticket` & based on that charges are calculated
  - `(exitTime - entryTime) * HOURLY_RATE`

> 🧠 think about any design patterns which can be leveraged in these use-cases

### Step 3: Writing implementation code

- All the entities can be found inside [`src/models`](./src/models) directory
- unit tests can be found inside [`src/models/__test__`](./src/models/__test__) directory
