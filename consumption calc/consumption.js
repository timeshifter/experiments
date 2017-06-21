var ConsumptionCalc = {
	
	Ecos: {
		Residency: {
			Max_Level: 4,
			Worker_Capacity: 8,
			Employee_Ratio: 0.8,
			Employee_Capacity: 15,
			Engineer_Ratio: 0.6,
			Engineer_Capacity: 25,
			Executive_Ratio: 0.4,
			Executive_Capacity: 40,
			
			get Population() {
				return this.Workers + this.Employees + this.Engineers + this.Executives;
			},
			get Workers() {
				return this.Worker_Houses * this.Worker_Capacity;
			},
			get Employees() {
				return this.Employee_Houses * this.Employee_Capacity;
			},
			get Engineers() {
				return this.Engineer_Houses * this.Engineer_Capacity;
			},
			get Executives() {
				return this.Executive_Houses * this.Executive_Capacity;
			},
			
			Houses: 0,
			get Worker_Houses() {
				if(this.Max_Level >= 2) 
					return Math.ceil(this.Houses * (1 - this.Employee_Ratio));
				else
					return this.Houses;
			},
			get Employee_Houses() {
				if(this.Max_Level >= 3)
					return Math.ceil((this.Houses - this.Worker_Houses) * (1 - this.Engineer_Ratio));
				else
					return this.Houses - this.Worker_Houses;
			},
			get Engineer_Houses() {
				if(this.Max_Level >= 4)
					return Math.ceil((this.Houses - this.Worker_Houses - this.Employee_Houses) * (1 - this.Executive_Ratio));
				else
					return this.Houses - this.Worker_Houses - this.Employee_Houses;
			},
			get Executive_Houses() {
				return this.Houses - this.Worker_Houses - this.Employee_Houses - this.Engineer_Houses;
			}
		},
		Needs: {
			Fish: {
				get Total_Requirement() {
					return this.Worker_Requirement + this.Employee_Requirement + this.Engineer_Requirement + this.Executive_Requirement;
				},
				Worker_Rate: 250,
				get Worker_Requirement() {
					return this.Worker_Rate == 0 ? 0 : ConsumptionCalc.Ecos.Residency.Workers / this.Worker_Rate;
				},
				Employee_Rate: 364,
				get Employee_Requirement() {
					return this.Employee_Rate == 0 ? 0 : ConsumptionCalc.Ecos.Residency.Employees / this.Employee_Rate;
				},
				Engineer_Rate: 571,
				get Engineer_Requirement() {
					return this.Engineer_Rate == 0 ? 0 : ConsumptionCalc.Ecos.Residency.Engineers / this.Engineer_Rate;
				},
				Executive_Rate: 800,
				get Executive_Requirement() {
					return this.Executive_Rate == 0 ? 0 : ConsumptionCalc.Ecos.Residency.Executives / this.Executive_Rate;
				}
			},
			Tea: {
				get Total_Requirement() {
					return this.Worker_Requirement + this.Employee_Requirement + this.Engineer_Requirement + this.Executive_Requirement;
				},
				Worker_Rate: 375,
				get Worker_Requirement() {
					return this.Worker_Rate == 0 ? 0 : ConsumptionCalc.Ecos.Residency.Workers / this.Worker_Rate;
				},
				Employee_Rate: 375,
				get Employee_Requirement() {
					return this.Employee_Rate == 0 ? 0 : ConsumptionCalc.Ecos.Residency.Employees / this.Employee_Rate;
				},
				Engineer_Rate: 500,
				get Engineer_Requirement() {
					return this.Engineer_Rate == 0 ? 0 : ConsumptionCalc.Ecos.Residency.Engineers / this.Engineer_Rate;
				},
				Executive_Rate: 750,
				get Executive_Requirement() {
					return this.Executive_Rate == 0 ? 0 : ConsumptionCalc.Ecos.Residency.Executives / this.Executive_Rate;
				}
			},
			Health_Food:{
				get Total_Requirement() {
					return this.Worker_Requirement + this.Employee_Requirement + this.Engineer_Requirement + this.Executive_Requirement;
				},
				Worker_Rate: 0,
				get Worker_Requirement() {
					return this.Worker_Rate == 0 ? 0 : ConsumptionCalc.Ecos.Residency.Workers / this.Worker_Rate;
				},
				Employee_Rate: 667,
				get Employee_Requirement() {
					return this.Employee_Rate == 0 ? 0 : ConsumptionCalc.Ecos.Residency.Employees / this.Employee_Rate;
				},
				Engineer_Rate: 857,
				get Engineer_Requirement() {
					return this.Engineer_Rate == 0 ? 0 : ConsumptionCalc.Ecos.Residency.Engineers / this.Engineer_Rate;
				},
				Executive_Rate: 1000,
				get Executive_Requirement() {
					return this.Executive_Rate == 0 ? 0 : ConsumptionCalc.Ecos.Residency.Executives / this.Executive_Rate;
				}
			},
 			Communicator: {
				get Total_Requirement() {
					return this.Worker_Requirement + this.Employee_Requirement + this.Engineer_Requirement + this.Executive_Requirement;
				},
				Worker_Rate: 0,
				get Worker_Requirement() {
					return this.Worker_Rate == 0 ? 0 : ConsumptionCalc.Ecos.Residency.Workers / this.Worker_Rate;
				},
				Employee_Rate: 571,
				get Employee_Requirement() {
					return this.Employee_Rate == 0 ? 0 : ConsumptionCalc.Ecos.Residency.Employees / this.Employee_Rate;
				},
				Engineer_Rate: 800,
				get Engineer_Requirement() {
					return this.Engineer_Rate == 0 ? 0 : ConsumptionCalc.Ecos.Residency.Engineers / this.Engineer_Rate;
				},
				Executive_Rate: 1250,
				get Executive_Requirement() {
					return this.Executive_Rate == 0 ? 0 : ConsumptionCalc.Ecos.Residency.Executives / this.Executive_Rate;
				}
			},
			Bio_Drink: {
				get Total_Requirement() {
					return this.Worker_Requirement + this.Employee_Requirement + this.Engineer_Requirement + this.Executive_Requirement;
				},
				Worker_Rate: 0,
				get Worker_Requirement() {
					return this.Worker_Rate == 0 ? 0 : ConsumptionCalc.Ecos.Residency.Workers / this.Worker_Rate;
				},
				Employee_Rate: 0,
				get Employee_Requirement() {
					return this.Employee_Rate == 0 ? 0 : ConsumptionCalc.Ecos.Residency.Employees / this.Employee_Rate;
				},
				Engineer_Rate: 833,
				get Engineer_Requirement() {
					return this.Engineer_Rate == 0 ? 0 : ConsumptionCalc.Ecos.Residency.Engineers / this.Engineer_Rate;
				},
				Executive_Rate: 1136,
				get Executive_Requirement() {
					return this.Executive_Rate == 0 ? 0 : ConsumptionCalc.Ecos.Residency.Executives / this.Executive_Rate;
				}
			},
			Pasta: {
				get Total_Requirement() {
					return this.Worker_Requirement + this.Employee_Requirement + this.Engineer_Requirement + this.Executive_Requirement;
				},
				Worker_Rate: 0,
				get Worker_Requirement() {
					return this.Worker_Rate == 0 ? 0 : ConsumptionCalc.Ecos.Residency.Workers / this.Worker_Rate;
				},
				Employee_Rate: 0,
				get Employee_Requirement() {
					return this.Employee_Rate == 0 ? 0 : ConsumptionCalc.Ecos.Residency.Employees / this.Employee_Rate;
				},
				Engineer_Rate: 667,
				get Engineer_Requirement() {
					return this.Engineer_Rate == 0 ? 0 : ConsumptionCalc.Ecos.Residency.Engineers / this.Engineer_Rate;
				},
				Executive_Rate: 909,
				get Executive_Requirement() {
					return this.Executive_Rate == 0 ? 0 : ConsumptionCalc.Ecos.Residency.Executives / this.Executive_Rate;
				}
			},
			Projector: {
				get Total_Requirement() {
					return this.Worker_Requirement + this.Employee_Requirement + this.Engineer_Requirement + this.Executive_Requirement;
				},
				Worker_Rate: 0,
				get Worker_Requirement() {
					return this.Worker_Rate == 0 ? 0 : ConsumptionCalc.Ecos.Residency.Workers / this.Worker_Rate;
				},
				Employee_Rate: 0,
				get Employee_Requirement() {
					return this.Employee_Rate == 0 ? 0 : ConsumptionCalc.Ecos.Residency.Employees / this.Employee_Rate;
				},
				Engineer_Rate: 0,
				get Engineer_Requirement() {
					return this.Engineer_Rate == 0 ? 0 : ConsumptionCalc.Ecos.Residency.Engineers / this.Engineer_Rate;
				},
				Executive_Rate: 750,
				get Executive_Requirement() {
					return this.Executive_Rate == 0 ? 0 : ConsumptionCalc.Ecos.Residency.Executives / this.Executive_Rate;
				}
			},
			Service_Bot: {
				get Total_Requirement() {
					return this.Worker_Requirement + this.Employee_Requirement + this.Engineer_Requirement + this.Executive_Requirement;
				},
				Worker_Rate: 0,
				get Worker_Requirement() {
					return this.Worker_Rate == 0 ? 0 : ConsumptionCalc.Ecos.Residency.Workers / this.Worker_Rate;
				},
				Employee_Rate: 0,
				get Employee_Requirement() {
					return this.Employee_Rate == 0 ? 0 : ConsumptionCalc.Ecos.Residency.Employees / this.Employee_Rate;
				},
				Engineer_Rate: 0,
				get Engineer_Requirement() {
					return this.Engineer_Rate == 0 ? 0 : ConsumptionCalc.Ecos.Residency.Engineers / this.Engineer_Rate;
				},
				Executive_Rate: 667,
				get Executive_Requirement() {
					return this.Executive_Rate == 0 ? 0 : ConsumptionCalc.Ecos.Residency.Executives / this.Executive_Rate;
				}
			}
		},
		Raw_Materials: {
			get Vegetable() {
				return (ConsumptionCalc.Ecos.Needs.Health_Food.Total_Requirement * 2) + (ConsumptionCalc.Ecos.Needs.Pasta.Total_Requirement * 1);
			},
			get Rice() {
				return (ConsumptionCalc.Ecos.Needs.Health_Food.Total_Requirement * 1);
			},
			get Algae() {
				return (ConsumptionCalc.Ecos.Raw_Materials.Biopolymer * 1);
			},
			get Copper() {
				return (ConsumptionCalc.Ecos.Raw_Materials.Microchip * 0.5);
			},
			get Sand() {
				return (ConsumptionCalc.Ecos.Raw_Materials.Microchip * (1/3));
			},
			get Microchip() {
				return (ConsumptionCalc.Ecos.Needs.Communicator.Total_Requirement * 1) + (ConsumptionCalc.Ecos.Needs.Service_Bot.Total_Requirement * 0.5);
			},
			get Electronics_Recycler() {
				return (ConsumptionCalc.Ecos.Needs.Communicator.Total_Requirement * (2/3)) + (ConsumptionCalc.Ecos.Needs.Service_Bot.Total_Requirement * (1/3));
			},
			get Fruit() {
				return (ConsumptionCalc.Ecos.Needs.Bio_Drink.Total_Requirement * 2);
			},
			get Milk() {
				return (ConsumptionCalc.Ecos.Needs.Bio_Drink.Total_Requirement * 1);
			},
			get Flour() {
				return (ConsumptionCalc.Ecos.Needs.Pasta.Total_Requirement * 0.5);
			},
			get Grain() {
				return (ConsumptionCalc.Ecos.Raw_Materials.Flour * 3);
			},
			get Diamond() {
				return (ConsumptionCalc.Ecos.Needs.Projector.Total_Requirement * (50/89));
			},
			get Rare_Earth_Metal() {
				return (ConsumptionCalc.Ecos.Needs.Projector.Total_Requirement * (100/89));
			},
			get Manganese() {
				return (ConsumptionCalc.Ecos.Raw_Materials.Rare_Earth_Metal * 0.5);
			},
			get Biopolymer() {
				return (ConsumptionCalc.Ecos.Needs.Service_Bot.Total_Requirement * 1);
			},
			get Corn() {
				return (ConsumptionCalc.Ecos.Raw_Materials.Biopolymer * 2);
			}
		}
	},
	
	Tycoons: {
		Residency: {
			Max_Level: 4,
			Worker_Capacity: 8,
			Employee_Ratio: 0.8,
			Employee_Capacity: 15,
			Engineer_Ratio: 0.6,
			Engineer_Capacity: 25,
			Executive_Ratio: 0.4,
			Executive_Capacity: 40,
			
			get Population() {
				return this.Workers + this.Employees + this.Engineers + this.Executives;
			},
			get Workers() {
				return this.Worker_Houses * this.Worker_Capacity;
			},
			get Employees() {
				return this.Employee_Houses * this.Employee_Capacity;
			},
			get Engineers() {
				return this.Engineer_Houses * this.Engineer_Capacity;
			},
			get Executives() {
				return this.Executive_Houses * this.Executive_Capacity;
			},
			
			Houses: 0,
			get Worker_Houses() {
				if(this.Max_Level >= 2) 
					return Math.ceil(this.Houses * (1 - this.Employee_Ratio));
				else
					return this.Houses;
			},
			get Employee_Houses() {
				if(this.Max_Level >= 3)
					return Math.ceil((this.Houses - this.Worker_Houses) * (1 - this.Engineer_Ratio));
				else
					return this.Houses - this.Worker_Houses;
			},
			get Engineer_Houses() {
				if(this.Max_Level >= 4)
					return Math.ceil((this.Houses - this.Worker_Houses - this.Employee_Houses) * (1 - this.Executive_Ratio));
				else
					return this.Houses - this.Worker_Houses - this.Employee_Houses;
			},
			get Executive_Houses() {
				return this.Houses - this.Worker_Houses - this.Employee_Houses - this.Engineer_Houses;
			}
		},
		Needs: {
			Fish: {
				get Total_Requirement() {
					return this.Worker_Requirement + this.Employee_Requirement + this.Engineer_Requirement + this.Executive_Requirement;
				},
				Worker_Rate: 250,
				get Worker_Requirement() {
					return this.Worker_Rate == 0 ? 0 : ConsumptionCalc.Tycoons.Residency.Workers / this.Worker_Rate;
				},
				Employee_Rate: 364,
				get Employee_Requirement() {
					return this.Employee_Rate == 0 ? 0 : ConsumptionCalc.Tycoons.Residency.Employees / this.Employee_Rate;
				},
				Engineer_Rate: 571,
				get Engineer_Requirement() {
					return this.Engineer_Rate == 0 ? 0 : ConsumptionCalc.Tycoons.Residency.Engineers / this.Engineer_Rate;
				},
				Executive_Rate: 800,
				get Executive_Requirement() {
					return this.Executive_Rate == 0 ? 0 : ConsumptionCalc.Tycoons.Residency.Executives / this.Executive_Rate;
				}
			},
			Liquor: {
				get Total_Requirement() {
					return this.Worker_Requirement + this.Employee_Requirement + this.Engineer_Requirement + this.Executive_Requirement;
				},
				Worker_Rate: 300,
				get Worker_Requirement() {
					return this.Worker_Rate == 0 ? 0 : ConsumptionCalc.Tycoons.Residency.Workers / this.Worker_Rate;
				},
				Employee_Rate: 333,
				get Employee_Requirement() {
					return this.Employee_Rate == 0 ? 0 : ConsumptionCalc.Tycoons.Residency.Employees / this.Employee_Rate;
				},
				Engineer_Rate: 300,
				get Engineer_Requirement() {
					return this.Engineer_Rate == 0 ? 0 : ConsumptionCalc.Tycoons.Residency.Engineers / this.Engineer_Rate;
				},
				Executive_Rate: 750,
				get Executive_Requirement() {
					return this.Executive_Rate == 0 ? 0 : ConsumptionCalc.Tycoons.Residency.Executives / this.Executive_Rate;
				}
			},
			Convenience_Food: {
				get Total_Requirement() {
					return this.Worker_Requirement + this.Employee_Requirement + this.Engineer_Requirement + this.Executive_Requirement;
				},
				Worker_Rate: 0,
				get Worker_Requirement() {
					return this.Worker_Rate == 0 ? 0 : ConsumptionCalc.Tycoons.Residency.Workers / this.Worker_Rate;
				},
				Employee_Rate: 577,
				get Employee_Requirement() {
					return this.Employee_Rate == 0 ? 0 : ConsumptionCalc.Tycoons.Residency.Employees / this.Employee_Rate;
				},
				Engineer_Rate: 714,
				get Engineer_Requirement() {
					return this.Engineer_Rate == 0 ? 0 : ConsumptionCalc.Tycoons.Residency.Engineers / this.Engineer_Rate;
				},
				Executive_Rate: 857,
				get Executive_Requirement() {
					return this.Executive_Rate == 0 ? 0 : ConsumptionCalc.Tycoons.Residency.Executives / this.Executive_Rate;
				}
			},
			Plastic: {
				get Total_Requirement() {
					return this.Worker_Requirement + this.Employee_Requirement + this.Engineer_Requirement + this.Executive_Requirement;
				},
				Worker_Rate: 0,
				get Worker_Requirement() {
					return this.Worker_Rate == 0 ? 0 : ConsumptionCalc.Tycoons.Residency.Workers / this.Worker_Rate;
				},
				Employee_Rate: 667,
				get Employee_Requirement() {
					return this.Employee_Rate == 0 ? 0 : ConsumptionCalc.Tycoons.Residency.Employees / this.Employee_Rate;
				},
				Engineer_Rate: 1000,
				get Engineer_Requirement() {
					return this.Engineer_Rate == 0 ? 0 : ConsumptionCalc.Tycoons.Residency.Engineers / this.Engineer_Rate;
				},
				Executive_Rate: 1667,
				get Executive_Requirement() {
					return this.Executive_Rate == 0 ? 0 : ConsumptionCalc.Tycoons.Residency.Executives / this.Executive_Rate;
				}
			},
			Luxury_Meal: {
				get Total_Requirement() {
					return this.Worker_Requirement + this.Employee_Requirement + this.Engineer_Requirement + this.Executive_Requirement;
				},
				Worker_Rate: 0,
				get Worker_Requirement() {
					return this.Worker_Rate == 0 ? 0 : ConsumptionCalc.Tycoons.Residency.Workers / this.Worker_Rate;
				},
				Employee_Rate: 0,
				get Employee_Requirement() {
					return this.Employee_Rate == 0 ? 0 : ConsumptionCalc.Tycoons.Residency.Employees / this.Employee_Rate;
				},
				Engineer_Rate: 833,
				get Engineer_Requirement() {
					return this.Engineer_Rate == 0 ? 0 : ConsumptionCalc.Tycoons.Residency.Engineers / this.Engineer_Rate;
				},
				Executive_Rate: 1111,
				get Executive_Requirement() {
					return this.Executive_Rate == 0 ? 0 : ConsumptionCalc.Tycoons.Residency.Executives / this.Executive_Rate;
				}
			},
			Champagne: {
				get Total_Requirement() {
					return this.Worker_Requirement + this.Employee_Requirement + this.Engineer_Requirement + this.Executive_Requirement;
				},
				Worker_Rate: 0,
				get Worker_Requirement() {
					return this.Worker_Rate == 0 ? 0 : ConsumptionCalc.Tycoons.Residency.Workers / this.Worker_Rate;
				},
				Employee_Rate: 0,
				get Employee_Requirement() {
					return this.Employee_Rate == 0 ? 0 : ConsumptionCalc.Tycoons.Residency.Employees / this.Employee_Rate;
				},
				Engineer_Rate: 1042,
				get Engineer_Requirement() {
					return this.Engineer_Rate == 0 ? 0 : ConsumptionCalc.Tycoons.Residency.Engineers / this.Engineer_Rate;
				},
				Executive_Rate: 1389,
				get Executive_Requirement() {
					return this.Executive_Rate == 0 ? 0 : ConsumptionCalc.Tycoons.Residency.Executives / this.Executive_Rate;
				}
			},
			Jewelery: {
				get Total_Requirement() {
					return this.Worker_Requirement + this.Employee_Requirement + this.Engineer_Requirement + this.Executive_Requirement;
				},
				Worker_Rate: 0,
				get Worker_Requirement() {
					return this.Worker_Rate == 0 ? 0 : ConsumptionCalc.Tycoons.Residency.Workers / this.Worker_Rate;
				},
				Employee_Rate: 0,
				get Employee_Requirement() {
					return this.Employee_Rate == 0 ? 0 : ConsumptionCalc.Tycoons.Residency.Employees / this.Employee_Rate;
				},
				Engineer_Rate: 0,
				get Engineer_Requirement() {
					return this.Engineer_Rate == 0 ? 0 : ConsumptionCalc.Tycoons.Residency.Engineers / this.Engineer_Rate;
				},
				Executive_Rate: 665,
				get Executive_Requirement() {
					return this.Executive_Rate == 0 ? 0 : ConsumptionCalc.Tycoons.Residency.Executives / this.Executive_Rate;
				}
			},
			Pharmaceuticals: {
				get Total_Requirement() {
					return this.Worker_Requirement + this.Employee_Requirement + this.Engineer_Requirement + this.Executive_Requirement;
				},
				Worker_Rate: 0,
				get Worker_Requirement() {
					return this.Worker_Rate == 0 ? 0 : ConsumptionCalc.Tycoons.Residency.Workers / this.Worker_Rate;
				},
				Employee_Rate: 0,
				get Employee_Requirement() {
					return this.Employee_Rate == 0 ? 0 : ConsumptionCalc.Tycoons.Residency.Employees / this.Employee_Rate;
				},
				Engineer_Rate: 0,
				get Engineer_Requirement() {
					return this.Engineer_Rate == 0 ? 0 : ConsumptionCalc.Tycoons.Residency.Engineers / this.Engineer_Rate;
				},
				Executive_Rate: 571,
				get Executive_Requirement() {
					return this.Executive_Rate == 0 ? 0 : ConsumptionCalc.Tycoons.Residency.Executives / this.Executive_Rate;
				}
			}
		},
		Raw_Materials: {
			get Meat() {
				return (ConsumptionCalc.Tycoons.Needs.Convenience_Food.Total_Requirement * 2);
			},
			get Super_Flavor() {
				return (ConsumptionCalc.Tycoons.Needs.Convenience_Food.Total_Requirement * 1);
			},
			get Algae() {
				return (ConsumptionCalc.Tycoons.Raw_Materials.Secret_Ingredient * 1);
			},
			get Oil_Driller() {
				return (ConsumptionCalc.Tycoons.Raw_Materials.Oil_Refinery * 3);
			},
			get Oil_Rig() {
				return (ConsumptionCalc.Tycoons.Raw_Materials.Oil_Refinery * 1);
			},
			get Oil_Refinery() {
				return (ConsumptionCalc.Tycoons.Needs.Plastic.Total_Requirement * 1);
			},
			get Sugar() {
				return (ConsumptionCalc.Tycoons.Needs.Champagne.Total_Requirement * 1);
			},
			get Lobster() {
				return (ConsumptionCalc.Tycoons.Needs.Luxury_Meal.Total_Requirement * 0.5);
			},
			get Truffle() {
				return (ConsumptionCalc.Tycoons.Needs.Luxury_Meal.Total_Requirement * 2);
			},
			get Grape() {
				return (ConsumptionCalc.Tycoons.Needs.Champagne.Total_Requirement * 2);
			},
			get Diamond() {
				return (ConsumptionCalc.Tycoons.Needs.Jewelery.Total_Requirement * 1);
			},
			get Rare_Earth_Metal() {
				return (ConsumptionCalc.Tycoons.Needs.Pharmaceuticals.Total_Requirement * 1.5);
			},
			get Manganese() {
				return (ConsumptionCalc.Tycoons.Raw_Materials.Rare_Earth_Metal * 0.5);
			},
			get Gold() {
				return (ConsumptionCalc.Tycoons.Needs.Jewelery.Total_Requirement * 1);
			},
			get Gold_Collector() {
				return (ConsumptionCalc.Tycoons.Raw_Materials.Gold * 1);
			},
			get Gold_Converter() {
				return (ConsumptionCalc.Tycoons.Raw_Materials.Gold * 0.89);
			},
			get Coal() {
				return (ConsumptionCalc.Tycoons.Raw_Materials.Gold * 1);
			},
			get Coal_Mine() {
				return (ConsumptionCalc.Tycoons.Raw_Materials.Gold * 0.5);
			},
			get Secret_Ingredient() {
				return (ConsumptionCalc.Tycoons.Needs.Pharmaceuticals.Total_Requirement * 1);
			},
			get Fat() {
				return (ConsumptionCalc.Tycoons.Raw_Materials.Secret_Ingredient * 3);
			}
		}
	},
	
	Techs: {
		Residency: {
			Max_Level: 3,
			Assistant_Capacity: 5,
			Researcher_Ratio: 0.6,
			Researcher_Capacity: 30,
			Genius_Ratio: 0.3,
			Genius_Capacity: 50,
			
			get Population() {
				return this.Assistants + this.Researchers + this.Geniuses;
			},
			get Assistants() {
				return this.Assistant_Houses * this.Assistant_Capacity;
			},
			get Researchers() {
				return this.Researcher_Houses * this.Researcher_Capacity;
			},
			get Geniuses() {
				return this.Genius_Houses * this.Genius_Capacity;
			},
			
			Houses: 0,
			get Assistant_Houses() {
				if(this.Max_Level >= 2) 
					return Math.ceil(this.Houses * (1 - this.Researcher_Ratio));
				else
					return this.Houses;
			},
			get Researcher_Houses() {
				if(this.Max_Level >= 3)
					return Math.ceil((this.Houses - this.Assistant_Houses) * (1 - this.Genius_Ratio));
				else
					return this.Houses - this.Assistant_Houses;
			},
			get Genius_Houses() {
				return this.Houses - this.Assistant_Houses - this.Researcher_Houses;
			}
		},
		Needs: {
			Fish: {
				get Total_Requirement() {
					return this.Assistant_Requirement + this.Researcher_Requirement + this.Genius_Requirement;
				},
				Assistant_Rate: 800,
				get Assistant_Requirement() {
					return this.Assistant_Rate == 0 ? 0 : ConsumptionCalc.Techs.Residency.Assistants / this.Assistant_Rate;
				},
				Researcher_Rate: 800,
				get Researcher_Requirement() {
					return this.Researcher_Rate == 0 ? 0 : ConsumptionCalc.Techs.Residency.Researchers / this.Researcher_Rate;
				},
				Genius_Rate: 1600,
				get Genius_Requirement() {
					return this.Genius_Rate == 0 ? 0 : ConsumptionCalc.Techs.Residency.Geniuses / this.Genius_Rate;
				}
			},
			Functional_Food: {
				get Total_Requirement() {
					return this.Assistant_Requirement + this.Researcher_Requirement + this.Genius_Requirement;
				},
				Assistant_Rate: 299,
				get Assistant_Requirement() {
					return this.Assistant_Rate == 0 ? 0 : ConsumptionCalc.Techs.Residency.Assistants / this.Assistant_Rate;
				},
				Researcher_Rate: 444,
				get Researcher_Requirement() {
					return this.Researcher_Rate == 0 ? 0 : ConsumptionCalc.Techs.Residency.Researchers / this.Researcher_Rate;
				},
				Genius_Rate: 1250,
				get Genius_Requirement() {
					return this.Genius_Rate == 0 ? 0 : ConsumptionCalc.Techs.Residency.Geniuses / this.Genius_Rate;
				}
			},
			Functional_Drink: {
				get Total_Requirement() {
					return this.Assistant_Requirement + this.Researcher_Requirement + this.Genius_Requirement;
				},
				Assistant_Rate: 301,
				get Assistant_Requirement() {
					return this.Assistant_Rate == 0 ? 0 : ConsumptionCalc.Techs.Residency.Assistants / this.Assistant_Rate;
				},
				Researcher_Rate: 735,
				get Researcher_Requirement() {
					return this.Researcher_Rate == 0 ? 0 : ConsumptionCalc.Techs.Residency.Researchers / this.Researcher_Rate;
				},
				Genius_Rate: 1250,
				get Genius_Requirement() {
					return this.Genius_Rate == 0 ? 0 : ConsumptionCalc.Techs.Residency.Geniuses / this.Genius_Rate;
				}
			},
			Immunity_Drug: {
				get Total_Requirement() {
					return this.Assistant_Requirement + this.Researcher_Requirement + this.Genius_Requirement;
				},
				Assistant_Rate: 0,
				get Assistant_Requirement() {
					return this.Assistant_Rate == 0 ? 0 : ConsumptionCalc.Techs.Residency.Assistants / this.Assistant_Rate;
				},
				Researcher_Rate: 500,
				get Researcher_Requirement() {
					return this.Researcher_Rate == 0 ? 0 : ConsumptionCalc.Techs.Residency.Researchers / this.Researcher_Rate;
				},
				Genius_Rate: 667,
				get Genius_Requirement() {
					return this.Genius_Rate == 0 ? 0 : ConsumptionCalc.Techs.Residency.Geniuses / this.Genius_Rate;
				}
			},
			Neuroimplant: {
				get Total_Requirement() {
					return this.Assistant_Requirement + this.Researcher_Requirement + this.Genius_Requirement;
				},
				Assistant_Rate: 0,
				get Assistant_Requirement() {
					return this.Assistant_Rate == 0 ? 0 : ConsumptionCalc.Techs.Residency.Assistants / this.Assistant_Rate;
				},
				Researcher_Rate: 667,
				get Researcher_Requirement() {
					return this.Researcher_Rate == 0 ? 0 : ConsumptionCalc.Techs.Residency.Researchers / this.Researcher_Rate;
				},
				Genius_Rate: 667,
				get Genius_Requirement() {
					return this.Genius_Rate == 0 ? 0 : ConsumptionCalc.Techs.Residency.Geniuses / this.Genius_Rate;
				}
			},
			Laboratory_Instrument: {
				get Total_Requirement() {
					return this.Assistant_Requirement + this.Researcher_Requirement + this.Genius_Requirement;
				},
				Assistant_Rate: 0,
				get Assistant_Requirement() {
					return this.Assistant_Rate == 0 ? 0 : ConsumptionCalc.Techs.Residency.Assistants / this.Assistant_Rate;
				},
				Researcher_Rate: 0,
				get Researcher_Requirement() {
					return this.Researcher_Rate == 0 ? 0 : ConsumptionCalc.Techs.Residency.Researchers / this.Researcher_Rate;
				},
				Genius_Rate: 444,
				get Genius_Requirement() {
					return this.Genius_Rate == 0 ? 0 : ConsumptionCalc.Techs.Residency.Geniuses / this.Genius_Rate;
				}
			},
			Bionic_Suit: {
				get Total_Requirement() {
					return this.Assistant_Requirement + this.Researcher_Requirement + this.Genius_Requirement;
				},
				Assistant_Rate: 0,
				get Assistant_Requirement() {
					return this.Assistant_Rate == 0 ? 0 : ConsumptionCalc.Techs.Residency.Assistants / this.Assistant_Rate;
				},
				Researcher_Rate: 0,
				get Researcher_Requirement() {
					return this.Researcher_Rate == 0 ? 0 : ConsumptionCalc.Techs.Residency.Researchers / this.Researcher_Rate;
				},
				Genius_Rate: 1481,
				get Genius_Requirement() {
					return this.Genius_Rate == 0 ? 0 : ConsumptionCalc.Techs.Residency.Geniuses / this.Genius_Rate;
				}
			}
		},
		Raw_Materials: {
			get Algae() {
				return (ConsumptionCalc.Techs.Raw_Materials.Biopolymer * 1) + (ConsumptionCalc.Techs.Needs.Functional_Food.Total_Requirement * 1);
			},
			get Copper() {
				return (ConsumptionCalc.Techs.Raw_Materials.Microchip * 0.5);
			},
			get Sand() {
				return (ConsumptionCalc.Techs.Raw_Materials.Microchip * (1/3));
			},
			get Microchip() {
				return (ConsumptionCalc.Techs.Needs.Neuroimplant.Total_Requirement * 0.5);
			},
			get Electronics_Recycler() {
				return (ConsumptionCalc.Techs.Needs.Neuroimplant.Total_Requirement * (1/3));
			},
			get Sugar() {
				return (ConsumptionCalc.Techs.Needs.Functional_Drink.Total_Requirement * 1);
			},
			get Caffiene() {
				return (ConsumptionCalc.Techs.Needs.Functional_Drink.Total_Requirement * 1);
			},
			get Enzymes() {
				return (ConsumptionCalc.Techs.Needs.Immunity_Drug.Total_Requirement * 1);
			},
			get Coral() {
				return (ConsumptionCalc.Techs.Needs.Immunity_Drug.Total_Requirement * 0.5);
			},
			get Sponge() {
				return (ConsumptionCalc.Techs.Needs.Neuroimplant.Total_Requirement * 1);
			},
			get Coal() {
				return (ConsumptionCalc.Techs.Raw_Materials.Iron * 1);
			},
			get Coal_Mine() {
				return (ConsumptionCalc.Techs.Raw_Materials.Iron * 0.5);
			},
			get Platinum() {
				return (ConsumptionCalc.Techs.Needs.Laboratory_Instrument.Total_Requirement * 1) + (ConsumptionCalc.Techs.Raw_Materials.Exoskeleton * 1);
			},
			get Iron() {
				return (ConsumptionCalc.Techs.Needs.Laboratory_Instrument.Total_Requirement * 1);
			},
			get Iron_Mine() {
				return (ConsumptionCalc.Techs.Raw_Materials.Iron * 1);
			},
			get Iron_Converter() {
				return (ConsumptionCalc.Techs.Raw_Materials.Iron * (2/3));
			},
			get Biopolymer() {
				return (ConsumptionCalc.Techs.Needs.Bionic_Suit.Total_Requirement * 1);
			},
			get Corn() {
				return (ConsumptionCalc.Techs.Raw_Materials.Biopolymer * 2);
			},
			get Fat() {
				return (ConsumptionCalc.Techs.Raw_Materials.Electrolyte_Cell * 2);
			},
			get Exoskeleton() {
				return (ConsumptionCalc.Techs.Needs.Bionic_Suit.Total_Requirement * 1);
			},
			get Lithium() {
				return (ConsumptionCalc.Techs.Raw_Materials.Electrolyte_Cell * 2);
			},
			get Electrolyte_Cell() {
				return (ConsumptionCalc.Techs.Raw_Materials.Exoskeleton * 1);
			}
		}
	},
	
	Totals: {
		Residency: {
			get Houses() {
				return ConsumptionCalc.Ecos.Residency.Houses + ConsumptionCalc.Tycoons.Residency.Houses + ConsumptionCalc.Techs.Residency.Houses;
			},
			get Eco_Houses() {
				return ConsumptionCalc.Ecos.Residency.Houses;
			},
			get Tycoon_Houses() {
				return ConsumptionCalc.Tycoons.Residency.Houses;
			},
			get Tech_Houses() {
				return ConsumptionCalc.Techs.Residency.Houses;
			},
			get Population() {
				return ConsumptionCalc.Ecos.Residency.Population + ConsumptionCalc.Tycoons.Residency.Population + ConsumptionCalc.Techs.Residency.Population;
			},
			get Eco_Population() {
				return ConsumptionCalc.Ecos.Residency.Population;
			},
			get Tycoon_Population() {
				return ConsumptionCalc.Tycoons.Residency.Population;
			},
			get Tech_Population() {
				return ConsumptionCalc.Techs.Residency.Population;
			}
		},
		Needs: {
			get Fish() {
				return ConsumptionCalc.Ecos.Needs.Fish.Total_Requirement + ConsumptionCalc.Tycoons.Needs.Fish.Total_Requirement + ConsumptionCalc.Techs.Needs.Fish.Total_Requirement;
			},
			get Tea() {
				return ConsumptionCalc.Ecos.Needs.Tea.Total_Requirement;
			},
			get Liquor() {
				return ConsumptionCalc.Tycoons.Needs.Liquor.Total_Requirement;
			},
			get Functional_Food() {
				return ConsumptionCalc.Techs.Needs.Functional_Food.Total_Requirement;
			},
			get Functional_Drink() {
				return ConsumptionCalc.Techs.Needs.Functional_Drink.Total_Requirement;
			},
			get Health_Food() {
				return ConsumptionCalc.Ecos.Needs.Health_Food.Total_Requirement;
			},
			get Communicator() {
				return ConsumptionCalc.Ecos.Needs.Communicator.Total_Requirement;
			},
			get Convenience_Food() {
				return ConsumptionCalc.Tycoons.Needs.Convenience_Food.Total_Requirement;
			},
			get Plastic() {
				return ConsumptionCalc.Tycoons.Needs.Plastic.Total_Requirement;
			},
			get Immunity_Drug() {
				return ConsumptionCalc.Techs.Needs.Immunity_Drug.Total_Requirement;
			},
			get Neuroimplant() {
				return ConsumptionCalc.Techs.Needs.Neuroimplant.Total_Requirement;
			},
			get Bio_Drink() {
				return ConsumptionCalc.Ecos.Needs.Bio_Drink.Total_Requirement;
			},
			get Pasta() {
				return ConsumptionCalc.Ecos.Needs.Pasta.Total_Requirement;
			},
			get Luxury_Meal() {
				return ConsumptionCalc.Tycoons.Needs.Luxury_Meal.Total_Requirement;
			},
			get Champagne() {
				return ConsumptionCalc.Tycoons.Needs.Champagne.Total_Requirement;
			},
			get Laboratory_Instrument() {
				return ConsumptionCalc.Techs.Needs.Laboratory_Instrument.Total_Requirement;
			},
			get Bionic_Suit() {
				return ConsumptionCalc.Techs.Needs.Bionic_Suit.Total_Requirement;
			},
			get Projector() {
				return ConsumptionCalc.Ecos.Needs.Projector.Total_Requirement;
			},
			get Service_Bot() {
				return ConsumptionCalc.Ecos.Needs.Service_Bot.Total_Requirement;
			},
			get Jewelery() {
				return ConsumptionCalc.Tycoons.Needs.Jewelery.Total_Requirement;
			},
			get Pharmaceuticals() {
				return ConsumptionCalc.Tycoons.Needs.Pharmaceuticals.Total_Requirement;
			}
		},
		Raw_Materials: {
			get Vegetable() {
				return ConsumptionCalc.Ecos.Raw_Materials.Vegetable;
			},
			get Rice() {
				return ConsumptionCalc.Ecos.Raw_Materials.Rice;
			},
			get Meat() {
				return ConsumptionCalc.Tycoons.Raw_Materials.Meat;
			},
			get Super_Flavor() {
				return ConsumptionCalc.Tycoons.Raw_Materials.Super_Flavor;
			},
			get Algae() {
				return ConsumptionCalc.Tycoons.Raw_Materials.Algae + ConsumptionCalc.Ecos.Raw_Materials.Algae + ConsumptionCalc.Techs.Raw_Materials.Algae;
			},
			get Copper() {
				return ConsumptionCalc.Ecos.Raw_Materials.Copper + ConsumptionCalc.Techs.Raw_Materials.Copper;
			},
			get Sand() {
				return ConsumptionCalc.Ecos.Raw_Materials.Sand + ConsumptionCalc.Techs.Raw_Materials.Sand;
			},
			get Microchip() {
				return ConsumptionCalc.Ecos.Raw_Materials.Microchip + ConsumptionCalc.Techs.Raw_Materials.Microchip;
			},
			get Electronics_Recycler() {
				return ConsumptionCalc.Ecos.Raw_Materials.Electronics_Recycler + ConsumptionCalc.Techs.Raw_Materials.Electronics_Recycler;
			},
			get Oil_Driller() {
				return ConsumptionCalc.Tycoons.Raw_Materials.Oil_Driller;
			},
			get Oil_Rig() {
				return ConsumptionCalc.Tycoons.Raw_Materials.Oil_Rig;
			},
			get Oil_Refinery() {
				return ConsumptionCalc.Tycoons.Raw_Materials.Oil_Refinery;
			},
			get Sugar() {
				return ConsumptionCalc.Tycoons.Raw_Materials.Sugar + ConsumptionCalc.Techs.Raw_Materials.Sugar;
			},
			get Caffiene() {
				return ConsumptionCalc.Techs.Raw_Materials.Caffiene;
			},
			get Enzymes() {
				return ConsumptionCalc.Techs.Raw_Materials.Enzymes;
			},
			get Coral() {
				return ConsumptionCalc.Techs.Raw_Materials.Coral;
			},
			get Fruit() {
				return ConsumptionCalc.Ecos.Raw_Materials.Fruit;
			},
			get Milk() {
				return ConsumptionCalc.Ecos.Raw_Materials.Milk;
			},
			get Lobster() {
				return ConsumptionCalc.Tycoons.Raw_Materials.Lobster;
			},
			get Truffle() {
				return ConsumptionCalc.Tycoons.Raw_Materials.Truffle;
			},
			get Sponge() {
				return ConsumptionCalc.Techs.Raw_Materials.Sponge;
			},
			get Flour() {
				return ConsumptionCalc.Ecos.Raw_Materials.Flour;
			},
			get Grain() {
				return ConsumptionCalc.Ecos.Raw_Materials.Grain;
			},
			get Grape() {
				return ConsumptionCalc.Tycoons.Raw_Materials.Grape;
			},
			get Diamond() {
				return ConsumptionCalc.Tycoons.Raw_Materials.Diamond + ConsumptionCalc.Ecos.Raw_Materials.Diamond;
			},
			get Rare_Earth_Metal() {
				return ConsumptionCalc.Tycoons.Raw_Materials.Rare_Earth_Metal + ConsumptionCalc.Ecos.Raw_Materials.Rare_Earth_Metal;
			},
			get Manganese() {
				return ConsumptionCalc.Tycoons.Raw_Materials.Manganese + ConsumptionCalc.Ecos.Raw_Materials.Manganese;
			},
			get Gold() {
				return ConsumptionCalc.Tycoons.Raw_Materials.Gold;
			},
			get Gold_Collector() {
				return ConsumptionCalc.Tycoons.Raw_Materials.Gold_Collector;
			},
			get Gold_Converter() {
				return ConsumptionCalc.Tycoons.Raw_Materials.Gold_Converter;
			},
			get Coal() {
				return ConsumptionCalc.Tycoons.Raw_Materials.Coal + ConsumptionCalc.Techs.Raw_Materials.Coal;
			},
			get Coal_Mine() {
				return ConsumptionCalc.Tycoons.Raw_Materials.Coal_Mine + ConsumptionCalc.Techs.Raw_Materials.Coal_Mine;
			},
			get Platinum() {
				return ConsumptionCalc.Techs.Raw_Materials.Platinum;
			},
			get Iron() {
				return ConsumptionCalc.Techs.Raw_Materials.Iron;
			},
			get Iron_Mine() {
				return ConsumptionCalc.Techs.Raw_Materials.Iron_Mine;
			},
			get Iron_Converter() {
				return ConsumptionCalc.Techs.Raw_Materials.Iron_Converter;
			},
			get Biopolymer() {
				return ConsumptionCalc.Ecos.Raw_Materials.Biopolymer + ConsumptionCalc.Techs.Raw_Materials.Biopolymer;
			},
			get Corn() {
				return ConsumptionCalc.Ecos.Raw_Materials.Corn + ConsumptionCalc.Techs.Raw_Materials.Corn;
			},
			get Secret_Ingredient() {
				return ConsumptionCalc.Tycoons.Raw_Materials.Secret_Ingredient;
			},
			get Fat() {
				return ConsumptionCalc.Tycoons.Raw_Materials.Fat + ConsumptionCalc.Techs.Raw_Materials.Fat;
			},
			get Exoskeleton() {
				return ConsumptionCalc.Techs.Raw_Materials.Exoskeleton;
			},
			get Lithium() {
				return ConsumptionCalc.Techs.Raw_Materials.Lithium;
			},
			get Electrolyte_Cell() {
				return ConsumptionCalc.Techs.Raw_Materials.Electrolyte_Cell;
			}
		}
	}
 }