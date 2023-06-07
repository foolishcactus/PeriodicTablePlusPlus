import {Injectable} from '@angular/core';
import {ElementP} from './elements';

@Injectable({
    providedIn: 'root'
})

export class ElementService{
    constructor() {}

    getAllElements(): ElementP[]{
      return this.elementList;
    }

  getColor(element: ElementP): string{
      switch(element.type){
        case 'Nonmetal':
            return '#f2bac9';
        case 'Noble Gas':
            return '#d6c9de';
        case 'Alkali Metal':
            return '#c8d0e8';
        case 'Alkaline-Earth Metal':
            return '#bad7f2';
        case 'Halogen':
            return '#baf2d8';
        case 'Metal':
            return '#ffb449';
        case 'Actinide':
            return '#bae5e5';
        case 'Lanthanide':
            return '#baf2bb';
        case 'Transition Metal':
            return '#f2e2ba';
        }

        return 'red';  
  }


  getElement(period: number, group:number): ElementP{
    for (let i = 0; i < this.elementList.length; i++){
        let element = this.elementList[i];
        if(element.uniqueAlignCheck){
            if(element.periodalignval === period && element.groupalignval === group){
                return element;
            }
        }else if (element.period === period && element.group === group){
            return element;
        }
    }

    return this.elementList[0];
}

  filterPeriod(period:number){
    return function(element: ElementP){
        if (element.uniqueAlignCheck){
            return element.periodalignval === period
        }else{
            return element.period === period
        }
    }
  }

  getElementsByPeriod(period: number): ElementP[]{
    return this.elementList.filter(this.filterPeriod(period));
  }

    elementList: ElementP [] = [

        {
            name: "No Element Found",
            atomicnumber: -1,
            symbol: "eigheiogheiogheouir",
            type: "euigheighe0igheigheg",
            atomicMass: "1.008",
            group: -1,
            period: -1,    
          },
          {
            name: "Hydrogen",
            atomicnumber: 1,
            symbol: "H",
            type: "Nonmetal",
            atomicMass: "1.008",
            group: 1,
            period: 1,    
          },
          {
            name: "Helium",
            atomicnumber: 2,
            symbol: "He",
            type: "Noble Gas",
            atomicMass: "4.0026",
            group: 18,
            period: 1,
          },
          {
            name: "Lithium",
            atomicnumber: 3,
            symbol: "Li",
            type: "Alkali Metal",
            atomicMass: "6.94",
            group: 1,
            period: 2,
          },
          {
              name: "Beryllium",
              atomicnumber: 4,
              symbol: "Be",
              type: "Alkaline-Earth Metal",
              atomicMass: "9.0122",
              group: 2,
              period: 2,
              
          },
          {
              name: "Boron",
              atomicnumber: 5,
              symbol: "B",
              type: "Nonmetal",
              atomicMass: "10.81",
              group: 13,
              period: 2,
              
          },
          {
              name: "Carbon",
              atomicnumber: 6,
              symbol: "C",
              type: "Nonmetal",
              atomicMass: "12.011",
              group: 14,
              period: 2,
              
          },
          {
              name: "Nitrogen",
              atomicnumber: 7,
              symbol: "N",
              type: "Nonmetal",
              atomicMass: "14.007",
              group: 15,
              period: 2,
              
          },
          {
              name: "Oxygen",
              atomicnumber: 8,
              symbol: "O",
              type: "Nonmetal",
              atomicMass: "15.999",
              group: 16,
              period: 2,
              
          },
          {
              name: "Fluorine",
              atomicnumber: 9,
              symbol: "F",
              type: "Halogen",
              atomicMass: "18.998",
              group: 17,
              period: 2,
              
          },
          {
              name: "Neon",
              atomicnumber: 10,
              symbol: "Ne",
              type: "Noble Gas",
              atomicMass: "20.18",
              group: 18,
              period: 2,
              
          },
          {
              name: "Sodium",
              atomicnumber: 11,
              symbol: "Na",
              type: "Alkali Metal",
              atomicMass: "22.99",
              group: 1,
              period: 3,
              
          },
          {
              name: "Magnesium",
              atomicnumber: 12,
              symbol: "Mg",
              type: "Alkaline-Earth Metal",
              atomicMass: "24.305",
              group: 2,
              period: 3,
              
          },
          {
              name: "Aluminium",
              atomicnumber: 13,
              symbol: "Al",
              type: "Metal",
              atomicMass: "26.982",
              group: 13,
              period: 3,
              
          },
          {
              name: "Silicon",
              atomicnumber: 14,
              symbol: "Si",
              type: "Nonmetal",
              atomicMass: "28.085",
              group: 14,
              period: 3,
              
          },
          {
              name: "Phosphorus",
              atomicnumber: 15,
              symbol: "P",
              type: "Nonmetal",
              atomicMass: "30.974",
              group: 15,
              period: 3,
              
          },
          {
              name: "Sulfur",
              atomicnumber: 16,
              symbol: "S",
              type: "Nonmetal",
              atomicMass: "32.06",
              group: 16,
              period: 3,
              
          },
          {
              name: "Chlorine",
              atomicnumber: 17,
              symbol: "Cl",
              type: "Halogen",
              atomicMass: "35.45",
              group: 17,
              period: 3,
              
          },
          {
              name: "Argon",
              atomicnumber: 18,
              symbol: "Ar",
              type: "Noble Gas",
              atomicMass: "39.95",
              group: 18,
              period: 3,
              
          },
          {
              name: "Potassium",
              atomicnumber: 19,
              symbol: "K",
              type: "Alkali Metal",
              atomicMass: "39.098",
              group: 1,
              period: 4,
              
          },
          {
              name: "Calcium",
              atomicnumber: 20,
              symbol: "Ca",
              type: "Alkaline-Earth Metal",
              atomicMass: "40.078",
              group: 2,
              period: 4,
              
          },
          {
              name: "Scandium",
              atomicnumber: 21,
              symbol: "Sc",
              type: "Transition Metal",
              atomicMass: "44.956",
              group: 3,
              period: 4,
              
          },
          {
              name: "Titanium",
              atomicnumber: 22,
              symbol: "Ti",
              type: "Transition Metal",
              atomicMass: "47.867",
              group: 4,
              period: 4,
              
          },
          {
              name: "Vanadium",
              atomicnumber: 23,
              symbol: "V",
              type: "Transition Metal",
              atomicMass: "50.942",
              group: 5,
              period: 4,
              
          },
          {
              name: "Chromium",
              atomicnumber: 24,
              symbol: "Cr",
              type: "Transition Metal",
              atomicMass: "51.996",
              group: 6,
              period: 4,
              
          },
          {
              name: "Manganese",
              atomicnumber: 25,
              symbol: "Mn",
              type: "Transition Metal",
              atomicMass: "54.938",
              group: 7,
              period: 4,
              
          },
          {
              name: "Iron",
              atomicnumber: 26,
              symbol: "Fe",
              type: "Transition Metal",
              atomicMass: "55.845",
              group: 8,
              period: 4,
              
          },
          {
              name: "Cobalt",
              atomicnumber: 27,
              symbol: "Co",
              type: "Transition Metal",
              atomicMass: "58.933",
              group: 9,
              period: 4,
              
          },
          {
              name: "Nickel",
              atomicnumber: 28,
              symbol: "Ni",
              type: "Transition Metal",
              atomicMass: "58.693",
              group: 10,
              period: 4,
              
          },
          {
              name: "Copper",
              atomicnumber: 29,
              symbol: "Cu",
              type: "Transition Metal",
              atomicMass: "63.546",
              group: 11,
              period: 4,
              
          },
          {
              name: "Zinc",
              atomicnumber: 30,
              symbol: "Zn",
              type: "Transition Metal",
              atomicMass: "65.38",
              group: 12,
              period: 4,
              
          },
          {
              name: "Gallium",
              atomicnumber: 31,
              symbol: "Ga",
              type: "Metal",
              atomicMass: "69.723",
              group: 13,
              period: 4,
              
          },
          {
              name: "Germanium",
              atomicnumber: 32,
              symbol: "Ge",
              type: "Metal",
              atomicMass: "72.63",
              group: 14,
              period: 4,
              
          },
          {
              name: "Arsenic",
              atomicnumber: 33,
              symbol: "As",
              type: "Nonmetal",
              atomicMass: "74.922",
              group: 15,
              period: 4,
              
          },
          {
              name: "Selenium",
              atomicnumber: 34,
              symbol: "Se",
              type: "Nonmetal",
              atomicMass: "78.971",
              group: 16,
              period: 4,
              
          },
          {
              name: "Bromine",
              atomicnumber: 35,
              symbol: "Br",
              type: "Halogen",
              atomicMass: "79.904",
              group: 17,
              period: 4,
              
          },
          {
              name: "Krypton",
              atomicnumber: 36,
              symbol: "Kr",
              type: "Noble Gas",
              atomicMass: "83.798",
              group: 18,
              period: 4,
              
          },
          {
              name: "Rubidium",
              atomicnumber: 37,
              symbol: "Rb",
              type: "Alkali Metal",
              atomicMass: "85.468",
              group: 1,
              period: 5,
              
          },
          {
              name: "Strontium",
              atomicnumber: 38,
              symbol: "Sr",
              type: "Alkaline-Earth Metal",
              atomicMass: "87.62",
              group: 2,
              period: 5,
              
          },
          {
              name: "Yttrium",
              atomicnumber: 39,
              symbol: "Y",
              type: "Transition Metal",
              atomicMass: "88.906",
              group: 3,
              period: 5,
              
          },
          {
              name: "Zirconium",
              atomicnumber: 40,
              symbol: "Zr",
              type: "Transition Metal",
              atomicMass: "91.224",
              group: 4,
              period: 5,
              
          },
          {
              name: "Niobium",
              atomicnumber: 41,
              symbol: "Nb",
              type: "Transition Metal",
              atomicMass: "92.906",
              group: 5,
              period: 5,
              
          },
          {
              name: "Molybdenum",
              atomicnumber: 42,
              symbol: "Mo",
              type: "Transition Metal",
              atomicMass: "95.95",
              group: 6,
              period: 5,
              
          },
          {
              name: "Technetium",
              atomicnumber: 43,
              symbol: "Tc",
              type: "Transition Metal",
              atomicMass: "[97]",
              group: 7,
              period: 5,
              
          },
          {
              name: "Ruthenium",
              atomicnumber: 44,
              symbol: "Ru",
              type: "Transition Metal",
              atomicMass: "101.07",
              group: 8,
              period: 5,
              
          },
          {
              name: "Rhodium",
              atomicnumber: 45,
              symbol: "Rh",
              type: "Transition Metal",
              atomicMass: "102.91",
              group: 9,
              period: 5,
              
          },
          {
              name: "Palladium",
              atomicnumber: 46,
              symbol: "Pd",
              type: "Transition Metal",
              atomicMass: "106.42",
              group: 10,
              period: 5,
              
          },
          {
              name: "Silver",
              atomicnumber: 47,
              symbol: "Ag",
              type: "Transition Metal",
              atomicMass: "107.87",
              group: 11,
              period: 5,
              
          },
          {
              name: "Cadmium",
              atomicnumber: 48,
              symbol: "Cd",
              type: "Transition Metal",
              atomicMass: "112.41",
              group: 12,
              period: 5,
              
          },
          {
              name: "Indium",
              atomicnumber: 49,
              symbol: "In",
              type: "Metal",
              atomicMass: "114.82",
              group: 13,
              period: 5,
              
          },
          {
              name: "Tin",
              atomicnumber: 50,
              symbol: "Sn",
              type: "Metal",
              atomicMass: "118.71",
              group: 14,
              period: 5,
              
          },
          {
              name: "Antimony",
              atomicnumber: 51,
              symbol: "Sb",
              type: "Metal",
              atomicMass: "121.76",
              group: 15,
              period: 5,
              
          },
          {
              name: "Tellurium",
              atomicnumber: 52,
              symbol: "Te",
              type: "Nonmetal",
              atomicMass: "127.6",
              group: 16,
              period: 5,
              
          },
          {
              name: "Iodine",
              atomicnumber: 53,
              symbol: "I",
              type: "Halogen",
              atomicMass: "126.9",
              group: 17,
              period: 5,
              
          },
          {
              name: "Xenon",
              atomicnumber: 54,
              symbol: "Xe",
              type: "Noble Gas",
              atomicMass: "131.29",
              group: 18,
              period: 5,
              
          },
          {
              name: "Caesium",
              atomicnumber: 55,
              symbol: "Cs",
              type: "Alkali Metal",
              atomicMass: "132.91",
              group: 1,
              period: 6,
              
          },
          {
              name: "Barium",
              atomicnumber: 56,
              symbol: "Ba",
              type: "Alkaline-Earth Metal",
              atomicMass: "137.33",
              group: 2,
              period: 6,
              
          },
          {
              name: "Lanthanum",
              atomicnumber: 57,
              symbol: "La",
              type: "Lanthanide",
              atomicMass: "138.91",
              group: 3,
              period: 6,
              
          },
          {
              name: "Cerium",
              atomicnumber: 58,
              symbol: "Ce",
              type: "Lanthanide",
              atomicMass: "140.12",
              group: 0,
              period: 6,
              periodalignval: 8,
              groupalignval: 4,
              uniqueAlignCheck: true,
              
          },
          {
              name: "Praseodymium",
              atomicnumber: 59,
              symbol: "Pr",
              type: "Lanthanide",
              atomicMass: "140.91",
              group: 0,
              period: 6,
              periodalignval: 8,
              groupalignval: 5,
              uniqueAlignCheck: true,
              
          },
          {
              name: "Neodymium",
              atomicnumber: 60,
              symbol: "Nd",
              type: "Lanthanide",
              atomicMass: "144.24",
              group: 0,
              period: 6,
              periodalignval: 8,
              groupalignval: 6,
              uniqueAlignCheck: true,
              
          },
          {
              name: "Promethium",
              atomicnumber: 61,
              symbol: "Pm",
              type: "Lanthanide",
              atomicMass: "[145]",
              group: 0,
              period: 6,
              periodalignval: 8,
              groupalignval:7,
              uniqueAlignCheck: true,
              
          },
          {
              name: "Samarium",
              atomicnumber: 62,
              symbol: "Sm",
              type: "Lanthanide",
              atomicMass: "150.36",
              group: 0,
              period: 6,
              periodalignval: 8,
              groupalignval: 8,
              uniqueAlignCheck: true,
              
          },
          {
              name: "Europium",
              atomicnumber: 63,
              symbol: "Eu",
              type: "Lanthanide",
              atomicMass: "151.96",
              group: 0,
              period: 6,
              periodalignval: 8,
              groupalignval: 9,
              uniqueAlignCheck: true,
              
          },
          {
              name: "Gadolinium",
              atomicnumber: 64,
              symbol: "Gd",
              type: "Lanthanide",
              atomicMass: "157.25",
              group: 0,
              period: 6,
              periodalignval: 8,
              groupalignval: 10,
              uniqueAlignCheck: true,
              
          },
          {
              name: "Terbium",
              atomicnumber: 65,
              symbol: "Tb",
              type: "Lanthanide",
              atomicMass: "158.93",
              group: 0,
              period: 6,
              periodalignval: 8,
              groupalignval: 11,
              uniqueAlignCheck: true,
              
          },
          {
              name: "Dysprosium",
              atomicnumber: 66,
              symbol: "Dy",
              type: "Lanthanide",
              atomicMass: "162.5",
              group: 0,
              period: 6,
              periodalignval: 8,
              groupalignval: 12,
              uniqueAlignCheck: true,
              
          },
          {
              name: "Holmium",
              atomicnumber: 67,
              symbol: "Ho",
              type: "Lanthanide",
              atomicMass: "164.93",
              group: 0,
              period: 6,
              periodalignval: 8,
              groupalignval: 13,
              uniqueAlignCheck: true,
              
          },
          {
              name: "Erbium",
              atomicnumber: 68,
              symbol: "Er",
              type: "Lanthanide",
              atomicMass: "167.26",
              group: 0,
              period: 6,
              periodalignval: 8,
              groupalignval: 14,
              uniqueAlignCheck: true,
              
          },
          {
              name: "Thulium",
              atomicnumber: 69,
              symbol: "Tm",
              type: "Lanthanide",
              atomicMass: "168.93",
              group: 0,
              period: 6,
              periodalignval: 8,
              groupalignval: 15,
              uniqueAlignCheck: true,
              
          },
          {
              name: "Ytterbium",
              atomicnumber: 70,
              symbol: "Yb",
              type: "Lanthanide",
              atomicMass: "173.05",
              group: 0,
              period: 6,
              periodalignval: 8,
              groupalignval: 16,
              uniqueAlignCheck: true,
              
          },
          {
              name: "Lutenium",
              atomicnumber: 71,
              symbol: "Lu",
              type: "Lanthanide",
              atomicMass: "174.97",
              group: 0,
              period: 6,
              periodalignval: 8,
              groupalignval: 17,
              uniqueAlignCheck: true,
          },
          {
              name: "Hafnium",
              atomicnumber: 72,
              symbol: "Hf",
              type: "Transition Metal",
              atomicMass: "178.49",
              group: 4,
              period: 6,
              
          },
          {
              name: "Tantalum",
              atomicnumber: 73,
              symbol: "Ta",
              type: "Transition Metal",
              atomicMass: "180.95",
              group: 5,
              period: 6,
              
          },
          {
              name: "Tungsten",
              atomicnumber: 74,
              symbol: "W",
              type: "Transition Metal",
              atomicMass: "183.84",
              group: 6,
              period: 6,
              
          },
          {
              name: "Rhenium",
              atomicnumber: 75,
              symbol: "Re",
              type: "Transition Metal",
              atomicMass: "186.21",
              group: 7,
              period: 6,
              
          },
          {
              name: "Osmium",
              atomicnumber: 76,
              symbol: "Os",
              type: "Transition Metal",
              atomicMass: "190.23",
              group: 8,
              period: 6,
              
          },
          {
              name: "Iridium",
              atomicnumber: 77,
              symbol: "Ir",
              type: "Transition Metal",
              atomicMass: "192.22",
              group: 9,
              period: 6,
              
          },
          {
              name: "Platinum",
              atomicnumber: 78,
              symbol: "Pt",
              type: "Transition Metal",
              atomicMass: "195.08",
              group: 10,
              period: 6,
              
          },
          {
              name: "Gold",
              atomicnumber: 79,
              symbol: "Au",
              type: "Transition Metal",
              atomicMass: "196.97",
              group: 11,
              period: 6,
              
          },
          {
              name: "Mercury",
              atomicnumber: 80,
              symbol: "Hg",
              type: "Transition Metal",
              atomicMass: "200.59",
              group: 12,
              period: 6,
              
          },
          {
              name: "Thallium",
              atomicnumber: 81,
              symbol: "Tl",
              type: "Metal",
              atomicMass: "204.38",
              group: 13,
              period: 6,
              
          },
          {
              name: "Lead",
              atomicnumber: 82,
              symbol: "Pb",
              type: "Metal",
              atomicMass: "207.2",
              group: 14,
              period: 6,
          },
          {
              name: "Bismuth",
              atomicnumber: 83,
              symbol: "Bi",
              type: "Metal",
              atomicMass: "208.98",
              
              group: 15,
              period: 6,
          },
          {
              name: "Polonium",
              atomicnumber: 84,
              symbol: "Po",
              type: "Metal",
              atomicMass: "[209]",
              group: 16,
              period: 6,
          },
          {
              name: "Astatine",
              atomicnumber: 85,
              symbol: "At",
              type: "Halogen",
              atomicMass: "[210]",
              group: 17,
              period: 6,
              
          },
          {
              name: "Radon",
              atomicnumber: 86,
              symbol: "Rn",
              type: "Noble Gas",
              atomicMass: "[222]",
              group: 18,
              period: 6,
              
          },
          {
              name: "Francium",
              atomicnumber: 87,
              symbol: "Fr",
              type: "Alkali Metal",
              atomicMass: "[223]",
              group: 1,
              period: 7,
            
          },
          {
              name: "Radium",
              atomicnumber: 88,
              symbol: "Ra",
              type: "Alkaline-Earth Metal",
              atomicMass: "[226]",
              group: 2,
              period: 7,
              
          },
          {
              name: "Actinium",
              atomicnumber: 89,
              symbol: "Ac",
              type: "Actinide",
              atomicMass: "[227]",
              group: 3,
              period: 7,
              
          },
          {
              name: "Thorium",
              atomicnumber: 90,
              symbol: "Th",
              type: "Actinide",
              atomicMass: "232.04",
              group: 0,
              period: 7,
              periodalignval: 9,
              groupalignval: 4,
              uniqueAlignCheck: true,
              
              
          },
          {
              name: "Protactinium",
              atomicnumber: 91,
              symbol: "Pa",
              type: "Actinide",
              atomicMass: "231.04",
              group: 0,
              period: 7,
              periodalignval: 9,
              groupalignval: 5,
              uniqueAlignCheck: true,
              
          },
          {
              name: "Uranium",
              atomicnumber: 92,
              symbol: "U",
              type: "Actinide",
              atomicMass: "238.03",
              group: 0,
              period: 7,
              periodalignval: 9,
              groupalignval: 6,
              uniqueAlignCheck: true,
              
          },
          {
              name: "Neptunium",
              atomicnumber: 93,
              symbol: "Np",
              type: "Actinide",
              atomicMass: "[237]",
              group: 0,
              period: 7,
              periodalignval: 9,
              groupalignval: 7,
              uniqueAlignCheck: true,
              
          },
          {
              name: "Plutonium",
              atomicnumber: 94,
              symbol: "Pu",
              type: "Actinide",
              atomicMass: "[244]",
              group: 0,
              period: 7,
              periodalignval: 9,
              groupalignval: 8,
              uniqueAlignCheck: true,
              
          },
          {
              name: "Americium",
              atomicnumber: 95,
              symbol: "Am",
              type: "Actinide",
              atomicMass: "[243]",
              group: 0,
              period: 7,
              periodalignval: 9,
              groupalignval: 9,
              uniqueAlignCheck: true,
              
          },
          {
              name: "Curium",
              atomicnumber: 96,
              symbol: "Cm",
              type: "Actinide",
              atomicMass: "[247]",
              group: 0,
              period: 7,
              periodalignval: 9,
              groupalignval: 10,
              uniqueAlignCheck: true,
              
          },
          {
              name: "Berkelium",
              atomicnumber: 97,
              symbol: "Bk",
              type: "Actinide",
              atomicMass: "[247]",
              group: 0,
              period: 7,
              periodalignval: 9,
              groupalignval: 11,
              uniqueAlignCheck: true,
              
          },
          {
              name: "Californium",
              atomicnumber: 98,
              symbol: "Cf",
              type: "Actinide",
              atomicMass: "[251]",
              group: 0,
              period: 7,
              periodalignval: 9,
              groupalignval: 12,
              uniqueAlignCheck: true,
              
          },
          {
              name: "Einsteinium",
              atomicnumber: 99,
              symbol: "Es",
              type: "Actinide",
              atomicMass: "[252]",
              group: 0,
              period: 7,
              periodalignval: 9,
              groupalignval: 13,
              uniqueAlignCheck: true,
          },
          {
              name: "Fermium",
              atomicnumber: 100,
              symbol: "Fm",
              type: "Actinide",
              atomicMass: "[257]",
              group: 0,
              period: 7,
              periodalignval: 9,
              groupalignval: 14,
              uniqueAlignCheck: true,
          },
          {
              name: "Mendelevium",
              atomicnumber: 101,
              symbol: "Md",
              type: "Actinide",
              atomicMass: "[258]",
              group: 0,
              period: 7,
              periodalignval: 9,
              groupalignval: 15,
              uniqueAlignCheck: true,
          },
          {
              name: "Nobelium",
              atomicnumber: 102,
              symbol: "No",
              type: "Actinide",
              atomicMass: "[259]",
              group: 0,
              period: 7,
              periodalignval: 9,
              groupalignval: 16,
              uniqueAlignCheck: true,
          },
          {
              name: "Lawrencium",
              atomicnumber: 103,
              symbol: "Lr",
              type: "Actinide",
              atomicMass: "[266]",
              group: 0,
              period: 7,
              periodalignval: 9,
              groupalignval: 17,
              uniqueAlignCheck: true,
              
          },
          {
              name: "Rutherfordium",
              atomicnumber: 104,
              symbol: "Rf",
              type: "Transition Metal",
              atomicMass: "[267]",
              group: 4,
              period: 7,
              
          },
          {
              name: "Dubnium",
              atomicnumber: 105,
              symbol: "Db",
              type: "Transition Metal",
              atomicMass: "[268]",
              group: 5,
              period: 7,
              
          },
          {
              name: "Seaborgium",
              atomicnumber: 106,
              symbol: "Sg",
              type: "Transition Metal",
              atomicMass: "[269]",
              group: 6,
              period: 7,
              
          },
          {
              name: "Bohrium",
              atomicnumber: 107,
              symbol: "Bh",
              type: "Transition Metal",
              atomicMass: "[270]",
              group: 7,
              period: 7,
              
          },
          {
              name: "Hassium",
              atomicnumber: 108,
              symbol: "Hs",
              type: "Transition Metal",
              atomicMass: "[269]",
              group: 8,
              period: 7,
              
          },
          {
              name: "Meitnerium",
              atomicnumber: 109,
              symbol: "Mt",
              type: "Transition Metal",
              atomicMass: "[278]",
              group: 9,
              period: 7,
              
          },
          {
              name: "Darmstadtium",
              atomicnumber: 110,
              symbol: "Ds",
              type: "Transition Metal",
              atomicMass: "[281]",
              group: 10,
              period: 7,
              
          },
          {
              name: "Roentgenium",
              atomicnumber: 111,
              symbol: "Rg",
              type: "Transition Metal",
              atomicMass: "[282]",
              group: 11,
              period: 7,
              
          },
          {
              name: "Copernicum",
              atomicnumber: 112,
              symbol: "Cn",
              type: "Transition Metal",
              atomicMass: "[285]",
              group: 12,
              period: 7,
              
          },
          {
              name: "Nihonium",
              atomicnumber: 113,
              symbol: "Nh",
              type: "Metal",
              atomicMass: "[286]",
              group: 13,
              period: 7,
              
          },
          {
              name: "Flerovium",
              atomicnumber: 114,
              symbol: "Fl",
              type: "Metal",
              atomicMass: "[289]",
              group: 14,
              period: 7,
              
          },
          {
              name: "Moscovium",
              atomicnumber: 115,
              symbol: "Mc",
              type: "Metal",
              atomicMass: "[290]",
              group: 15,
              period: 7,
              
          },
          {
              name: "Livermorium",
              atomicnumber: 116,
              symbol: "Lv",
              type: "Metal",
              atomicMass: "[293]",
              group: 16,
              period: 7,
              
          },
          {
              name: "Tennessine",
              atomicnumber: 117,
              symbol: "Ts",
              type: "Halogen",
              atomicMass: "[294]",
              group: 17,
              period: 7,
              
          },
          {
              name: "Oganesson",
              atomicnumber: 118,
              symbol: "Og",
              type: "Noble Gas",
              atomicMass: "[294]",
              group: 18,
              period: 7,
              
          },
    ]
}