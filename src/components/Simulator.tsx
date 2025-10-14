
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const carData = {
  "Alfa Romeo": {
    "Giulia": {
      "Super": ["2.0 TB 200ch", "2.0 TB 280ch"],
      "Veloce": ["2.0 TB 280ch", "2.2 D 190ch"],
      "Quadrifoglio": ["2.9 V6 Bi-Turbo 510ch"]
    },
    "Stelvio": {
      "Super": ["2.0 TB 200ch", "2.2 D 190ch"],
      "Veloce": ["2.0 TB 280ch", "2.2 D 210ch"],
      "Quadrifoglio": ["2.9 V6 Bi-Turbo 510ch"]
    },
    "Tonale": {
      "Hybrid 130ch": ["1.5 Hybrid 130ch"],
      "Hybrid 160ch": ["1.5 Hybrid 160ch"],
      "Plug-in Hybrid Q4": ["1.3 PHEV 280ch"]
    },
    "4C": {
      "Spider": ["1.75 TBi 240ch"],
      "Competizione": ["1.75 TBi 240ch"]
    }
  },
  "Alpine": {
    "A110": {
      "Pure": ["1.8 TCe 252ch"],
      "Legende": ["1.8 TCe 252ch"],
      "S": ["1.8 TCe 300ch"],
      "GT": ["1.8 TCe 300ch"],
      "R": ["1.8 TCe 300ch"]
    },
    "A290": {
      "GT": ["Électrique 220ch"],
      "GTS": ["Électrique 220ch"]
    }
  },
  "Aston Martin": {
    "DB11": {
      "V8": ["4.0 V8 Bi-Turbo 510ch"],
      "V12": ["5.2 V12 Twin-Turbo 608ch"],
      "Volante V8": ["4.0 V8 Bi-Turbo 510ch"]
    },
    "Vantage": {
      "V8": ["4.0 V8 Bi-Turbo 510ch"],
      "F1 Edition": ["4.0 V8 Bi-Turbo 535ch"],
      "Roadster": ["4.0 V8 Bi-Turbo 510ch"]
    },
    "DBS": {
      "Superleggera": ["5.2 V12 725ch"],
      "Volante": ["5.2 V12 725ch"]
    },
    "DBX": {
      "707": ["4.0 V8 707ch"],
      "V8": ["4.0 V8 550ch"]
    }
  },
  "Audi": {
    "A3": {
      "Sportback": ["1.0 TFSI 110ch", "1.5 TFSI 150ch", "2.0 TDI 116ch"],
      "Sedan": ["1.5 TFSI 150ch", "2.0 TFSI 190ch"],
      "S3": ["2.0 TFSI 310ch"],
      "RS3": ["2.5 TFSI 400ch"]
    },
    "A4": {
      "Limousine": ["2.0 TFSI 150ch", "2.0 TFSI 190ch", "2.0 TDI 136ch"],
      "Avant": ["2.0 TFSI 245ch", "3.0 TDI 286ch"],
      "S4": ["3.0 TFSI 354ch"],
      "RS4 Avant": ["2.9 TFSI 450ch"]
    },
    "A6": {
      "Limousine": ["2.0 TDI 190ch", "3.0 TDI 286ch"],
      "Avant": ["2.0 TFSI 245ch", "3.0 TFSI 340ch"],
      "S6": ["2.9 TFSI 450ch"],
      "RS6 Avant": ["4.0 TFSI 600ch"]
    },
    "Q3": {
      "Q3": ["1.5 TFSI 150ch", "2.0 TDI 150ch"],
      "S Q3": ["2.0 TFSI 310ch"],
      "RS Q3": ["2.5 TFSI 400ch"]
    },
    "Q5": {
      "Q5": ["2.0 TFSI 245ch", "2.0 TDI 190ch", "3.0 TDI 286ch"],
      "SQ5": ["3.0 TFSI 354ch"]
    },
    "Q7": {
      "Q7": ["3.0 TDI 286ch", "3.0 TFSI 340ch"],
      "SQ7": ["4.0 TDI 435ch"]
    },
    "Q8": {
      "Q8": ["3.0 TDI 286ch", "3.0 TFSI 340ch"],
      "SQ8": ["4.0 TDI 435ch"],
      "RS Q8": ["4.0 TFSI 600ch"]
    },
    "R8": {
      "V10 Performance": ["5.2 V10 620ch"],
      "V10 Spyder": ["5.2 V10 620ch"]
    },
    "e-tron": {
      "50": ["Électrique 313ch"],
      "55": ["Électrique 408ch"],
      "S": ["Électrique 503ch"]
    },
    "TT": {
      "Coupé": ["2.0 TFSI 197ch"],
      "TTS": ["2.0 TFSI 306ch"],
      "TT RS": ["2.5 TFSI 400ch"]
    }
  },
  "Bentley": {
    "Continental GT": {
      "V8": ["4.0 V8 550ch"],
      "W12": ["6.0 W12 635ch"],
      "Speed": ["6.0 W12 650ch"],
      "Convertible V8": ["4.0 V8 550ch"]
    },
    "Flying Spur": {
      "V8": ["4.0 V8 550ch"],
      "W12": ["6.0 W12 635ch"],
      "Speed": ["6.0 W12 650ch"]
    },
    "Bentayga": {
      "V8": ["4.0 V8 550ch"],
      "Hybrid": ["3.0 V6 Hybrid 449ch"],
      "Speed": ["6.0 W12 635ch"]
    },
    "Mulsanne": {
      "Standard": ["6.75 V8 512ch"],
      "Speed": ["6.75 V8 537ch"]
    }
  },
  "BMW": {
    "Série 1": {
      "118i": ["1.5 136ch"],
      "120i": ["2.0 184ch"],
      "M135i xDrive": ["2.0 306ch"]
    },
    "Série 2": {
      "220i": ["2.0 184ch"],
      "M240i xDrive": ["3.0 374ch"],
      "Gran Coupé": ["2.0 184ch"]
    },
    "Série 3": {
      "320i": ["2.0 184ch"],
      "330i": ["2.0 258ch"],
      "M340i xDrive": ["3.0 374ch"],
      "M3 Competition": ["3.0 510ch"]
    },
    "Série 4": {
      "420i": ["2.0 184ch"],
      "430i": ["2.0 258ch"],
      "M440i xDrive": ["3.0 374ch"],
      "M4 Competition": ["3.0 510ch"]
    },
    "Série 5": {
      "520i": ["2.0 184ch"],
      "530i": ["2.0 252ch"],
      "540i": ["3.0 333ch"],
      "M550i xDrive": ["4.4 V8 530ch"],
      "M5 Competition": ["4.4 V8 625ch"]
    },
    "Série 7": {
      "730d": ["3.0 Diesel 286ch"],
      "740i": ["3.0 333ch"],
      "M760Li": ["6.6 V12 585ch"]
    },
    "Série 8": {
      "840i": ["3.0 340ch"],
      "M850i xDrive": ["4.4 V8 530ch"],
      "M8 Competition": ["4.4 V8 625ch"]
    },
    "X1": {
      "sDrive18i": ["1.5 140ch"],
      "xDrive20i": ["2.0 192ch"],
      "xDrive25e": ["1.5 PHEV 220ch"]
    },
    "X3": {
      "xDrive20i": ["2.0 184ch"],
      "xDrive30i": ["2.0 252ch"],
      "M40i": ["3.0 360ch"],
      "M Competition": ["3.0 510ch"]
    },
    "X5": {
      "xDrive40i": ["3.0 340ch"],
      "xDrive45e": ["3.0 PHEV 394ch"],
      "M50i": ["4.4 V8 530ch"],
      "M Competition": ["4.4 V8 625ch"]
    },
    "X6": {
      "xDrive40i": ["3.0 340ch"],
      "M50i": ["4.4 V8 530ch"],
      "M Competition": ["4.4 V8 625ch"]
    },
    "X7": {
      "xDrive40i": ["3.0 340ch"],
      "M50i": ["4.4 V8 530ch"]
    },
    "i4": {
      "eDrive40": ["Électrique 340ch"],
      "M50": ["Électrique 544ch"]
    },
    "iX": {
      "xDrive40": ["Électrique 326ch"],
      "xDrive50": ["Électrique 523ch"],
      "M60": ["Électrique 619ch"]
    },
    "Z4": {
      "sDrive20i": ["2.0 197ch"],
      "M40i": ["3.0 387ch"]
    }
  },
  "Citroën": {
    "C3": {
      "Feel": ["1.2 PureTech 83ch", "1.2 PureTech 110ch"],
      "Shine": ["1.2 PureTech 110ch"]
    },
    "C4": {
      "Feel": ["1.2 PureTech 130ch"],
      "Shine": ["1.2 PureTech 130ch", "1.5 BlueHDi 130ch"]
    },
    "C5 Aircross": {
      "Feel": ["1.2 PureTech 130ch", "1.5 BlueHDi 130ch"],
      "Shine": ["1.6 Plug-in Hybrid 225ch"]
    }
  },
  "Dacia": {
    "Sandero": {
      "Essential": ["1.0 SCe 65ch", "1.0 Bi-Fuel 70ch"],
      "Comfort": ["1.0 TCe 90ch"]
    },
    "Duster": {
      "Essential": ["1.6 SCe 115ch"],
      "Comfort": ["1.3 TCe 130ch", "1.5 dCi 115ch"]
    }
  },
  "Ferrari": {
    "Portofino": {
      "M": ["3.9 V8 Twin-Turbo 620ch"]
    },
    "Roma": {
      "Roma": ["3.9 V8 Twin-Turbo 620ch"]
    },
    "SF90": {
      "Stradale": ["4.0 V8 Hybrid 1000ch"]
    }
  },
  "Fiat": {
    "500": {
      "Lounge": ["1.0 Hybrid 70ch"],
      "Sport": ["1.0 Hybrid 70ch"]
    },
    "Panda": {
      "City Life": ["1.0 FireFly 70ch"],
      "Cross": ["1.0 Hybrid 70ch"]
    }
  },
  "Ford": {
    "Fiesta": {
      "Trend": ["1.0 EcoBoost 100ch"],
      "ST-Line": ["1.0 EcoBoost 125ch"]
    },
    "Focus": {
      "Trend": ["1.0 EcoBoost 125ch", "1.5 EcoBlue 120ch"],
      "ST-Line": ["1.0 EcoBoost 125ch"]
    },
    "Kuga": {
      "Trend": ["1.5 EcoBoost 150ch", "2.5 Duratec Hybrid 190ch"],
      "ST-Line": ["2.5 Duratec Hybrid 190ch"]
    }
  },
  "Honda": {
    "Civic": {
      "Elegance": ["1.5 VTEC Turbo 182ch"],
      "Sport": ["2.0 i-MMD Hybrid 184ch"]
    },
    "CR-V": {
      "Elegance": ["2.0 i-MMD Hybrid 184ch"],
      "Executive": ["2.0 i-MMD Hybrid 184ch"]
    }
  },
  "Hyundai": {
    "i20": {
      "Intuitive": ["1.0 T-GDI 100ch"],
      "N-Line": ["1.0 T-GDI 100ch"]
    },
    "Tucson": {
      "Intuitive": ["1.6 T-GDI 150ch", "1.6 Hybrid 230ch"],
      "N-Line": ["1.6 T-GDI 150ch"]
    }
  },
  "Jaguar": {
    "F-Pace": {
      "P250": ["2.0 250ch"],
      "P400": ["3.0 400ch"]
    },
    "XE": {
      "P250": ["2.0 250ch"],
      "P300": ["2.0 300ch"]
    }
  },
  "Kia": {
    "Ceed": {
      "Classic": ["1.0 T-GDI 100ch", "1.5 CRDi 115ch"],
      "Sportswagon": ["1.0 T-GDI 120ch"]
    },
    "Sportage": {
      "Classic": ["1.6 T-GDI 150ch", "1.6 CRDi 136ch"],
      "GT-Line": ["1.6 T-GDI 150ch"]
    }
  },
  "Lamborghini": {
    "Huracán": {
      "EVO": ["5.2 V10 640ch"],
      "STO": ["5.2 V10 640ch"]
    },
    "Urus": {
      "Urus": ["4.0 V8 Twin-Turbo 650ch"]
    }
  },
  "Land Rover": {
    "Defender": {
      "D200": ["2.0 Diesel 200ch"],
      "D250": ["3.0 Diesel 250ch"],
      "P400": ["3.0 Essence 400ch"]
    },
    "Range Rover Sport": {
      "D250": ["3.0 Diesel 250ch"],
      "P400": ["3.0 Essence 400ch"],
      "P550": ["4.4 V8 550ch"]
    }
  },
  "Lotus": {
    "Emira": {
      "First Edition": ["3.5 V6 Supercharged 400ch", "2.0 AMG 360ch"]
    }
  },
  "McLaren": {
    "720S": {
      "720S": ["4.0 V8 Twin-Turbo 720ch"]
    },
    "Artura": {
      "Artura": ["3.0 V6 Hybrid 680ch"]
    }
  },
  "Mercedes": {
    "Classe A": {
      "A180": ["1.3 136ch"],
      "A200": ["1.3 163ch"],
      "AMG A35": ["2.0 306ch"]
    },
    "Classe C": {
      "C200": ["1.5 204ch"],
      "C300": ["2.0 258ch"],
      "AMG C63": ["4.0 V8 476ch"]
    },
    "Classe E": {
      "E200": ["2.0 197ch"],
      "E300": ["2.0 258ch"],
      "AMG E53": ["3.0 435ch"]
    },
    "GLC": {
      "GLC 220d": ["2.0 Diesel 194ch"],
      "GLC 300": ["2.0 258ch"],
      "AMG GLC 43": ["3.0 390ch"]
    }
  },
  "Peugeot": {
    "208": {
      "Active": ["1.2 PureTech 75ch", "1.2 PureTech 100ch"],
      "GT": ["1.2 PureTech 130ch"]
    },
    "308": {
      "Allure": ["1.2 PureTech 130ch", "1.5 BlueHDi 130ch"],
      "GT": ["1.6 Plug-in Hybrid 180ch"]
    },
    "3008": {
      "Allure": ["1.2 PureTech 130ch", "1.5 BlueHDi 130ch"],
      "GT": ["1.6 Plug-in Hybrid 225ch"]
    }
  },
  "Porsche": {
    "911": {
      "Carrera": ["3.0 385ch"],
      "Carrera S": ["3.0 450ch"],
      "Turbo S": ["3.8 650ch"]
    },
    "Cayenne": {
      "Cayenne": ["3.0 340ch"],
      "Cayenne S": ["2.9 440ch"],
      "Turbo GT": ["4.0 640ch"]
    },
    "Taycan": {
      "Taycan": ["408ch"],
      "Taycan 4S": ["490ch"],
      "Turbo S": ["761ch"]
    }
  },
  "Renault": {
    "Clio": {
      "Evolution": ["1.0 TCe 65ch", "1.0 TCe 100ch"],
      "Intens": ["1.0 TCe 100ch", "1.3 TCe 140ch"]
    },
    "Captur": {
      "Evolution": ["1.0 TCe 100ch", "1.3 TCe 140ch"],
      "Intens": ["1.6 E-TECH Hybrid 145ch"]
    },
    "Megane": {
      "Evolution": ["1.3 TCe 140ch"],
      "Intens": ["1.3 TCe 160ch"]
    }
  },
  "Toyota": {
    "Yaris": {
      "Lounge": ["1.5 Hybrid 116ch"],
      "GR Sport": ["1.5 Hybrid 116ch"]
    },
    "Corolla": {
      "Sedan": ["1.8 Hybrid 122ch", "2.0 Hybrid 184ch"],
      "Touring Sports": ["1.8 Hybrid 122ch", "2.0 Hybrid 184ch"]
    },
    "RAV4": {
      "Lounge": ["2.5 Hybrid 218ch"],
      "Dynamic": ["2.5 Hybrid 218ch"]
    }
  },
  "Volkswagen": {
    "Golf": {
      "Life": ["1.0 TSI 110ch", "1.5 TSI 150ch"],
      "R-Line": ["1.5 TSI 150ch"],
      "GTI": ["2.0 TSI 245ch"],
      "R": ["2.0 TSI 320ch"]
    },
    "T-Roc": {
      "Life": ["1.0 TSI 110ch", "1.5 TSI 150ch"],
      "R-Line": ["1.5 TSI 150ch"]
    },
    "Tiguan": {
      "Life": ["1.5 TSI 150ch", "2.0 TDI 150ch"],
      "R-Line": ["2.0 TSI 245ch"]
    }
  },
  "Chevrolet": {
    "Camaro": {
      "LT": ["2.0 Turbo 275ch"],
      "SS": ["6.2 V8 455ch"],
      "ZL1": ["6.2 V8 Supercharged 650ch"]
    },
    "Corvette": {
      "Stingray": ["6.2 V8 495ch"],
      "Z06": ["5.5 V8 670ch"]
    }
  },
  "Tesla": {
    "Model 3": {
      "Standard Range Plus": ["Moteur électrique 283ch"],
      "Long Range": ["Double moteur 351ch"],
      "Performance": ["Double moteur 462ch"]
    },
    "Model Y": {
      "Long Range": ["Double moteur 351ch"],
      "Performance": ["Double moteur 462ch"]
    },
    "Model S": {
      "Long Range": ["Double moteur 670ch"],
      "Plaid": ["Triple moteur 1020ch"]
    }
  },
  "Bugatti": {
    "Chiron": {
      "Super Sport 300+": ["8.0 W16 1600ch"]
    }
  },
  "Alpina": {
    "B3": {
      "Bi-Turbo": ["3.0 462ch"],
      "Touring": ["3.0 462ch"]
    },
    "B5": {
      "Bi-Turbo": ["4.4 V8 621ch"],
      "Touring": ["4.4 V8 621ch"]
    },
    "B4": {
      "S Bi-Turbo": ["3.0 440ch"],
      "S Bi-Turbo Cabrio": ["3.0 440ch"]
    },
    "XB7": {
      "Bi-Turbo": ["4.4 V8 621ch"]
    }
  },
  "Ariel Motors": {
    "Atom": {
      "4": ["2.0 320ch"]
    }
  },
  "Artega": {
    "Scalo": {
      "Superelletra": ["Électrique 1020ch"]
    }
  },
  "Borgward": {
    "BX7": {
      "TS": ["2.0 224ch"]
    }
  },
  "Buick": {
    "Enclave": {
      "Essence": ["3.6 V6 310ch"]
    },
    "Regal": {
      "GS": ["2.0 Turbo 250ch"]
    }
  },
  "Cadillac": {
    "Escalade": {
      "Luxury": ["6.2 V8 420ch"]
    },
    "CT5": {
      "V": ["3.0 V6 Twin-Turbo 360ch"]
    }
  },
  "Caterham": {
    "Seven": {
      "360": ["2.0 180ch"],
      "620R": ["2.0 Supercharged 310ch"]
    }
  },
  "Chrysler": {
    "300C": {
      "V8": ["5.7 V8 363ch"]
    },
    "Pacifica": {
      "Hybrid": ["3.6 V6 Hybrid 260ch"]
    }
  },
  "Cupra": {
    "Formentor": {
      "VZ": ["2.0 TSI 310ch"]
    },
    "Leon": {
      "VZ": ["2.0 TSI 300ch"]
    }
  },
  "Daewoo": {
    "Matiz": {
      "SE": ["0.8 52ch"]
    }
  },
  "Dodge": {
    "Challenger": {
      "SRT Hellcat": ["6.2 V8 Supercharged 717ch"]
    },
    "Charger": {
      "SRT": ["6.2 V8 485ch"]
    }
  },
  "DS": {
    "DS3": {
      "Performance": ["1.6 THP 208ch"]
    },
    "DS7": {
      "Crossback": ["1.6 PureTech 225ch"]
    }
  },
  "Geely": {
    "Coolray": {
      "Sport": ["1.5 177ch"]
    }
  },
  "GWM": {
    "Haval H6": {
      "Elite": ["2.0 190ch"]
    }
  },
  "Holden": {
    "Commodore": {
      "VXR": ["6.2 V8 430ch"]
    }
  },
  "Infiniti": {
    "Q50": {
      "Sport": ["3.0 V6 Twin-Turbo 400ch"]
    },
    "QX50": {
      "Luxe": ["2.0 VC-Turbo 268ch"]
    }
  },
  "Isuzu": {
    "D-Max": {
      "LS": ["1.9 164ch"]
    }
  },
  "Iveco": {
    "Daily": {
      "35S": ["3.0 170ch"]
    }
  },
  "JAC": {
    "S3": {
      "Comfort": ["1.6 114ch"]
    }
  },
  "Jeep": {
    "Wrangler": {
      "Rubicon": ["2.0 272ch", "3.6 V6 284ch"]
    },
    "Grand Cherokee": {
      "Limited": ["3.0 V6 190ch"],
      "SRT": ["6.4 V8 468ch"]
    }
  },
  "KTM": {
    "X-Bow": {
      "GT": ["2.5 TFSI 375ch"]
    }
  },
  "Lancia": {
    "Ypsilon": {
      "Elefantino": ["0.9 TwinAir 85ch"]
    }
  },
  "Lexus": {
    "IS": {
      "300h": ["2.5 Hybrid 223ch"]
    },
    "NX": {
      "300h": ["2.5 Hybrid 197ch"]
    },
    "LC": {
      "500": ["5.0 V8 477ch"]
    }
  },
  "Lincoln": {
    "Navigator": {
      "Reserve": ["3.5 V6 Twin-Turbo 450ch"]
    }
  },
  "Mahindra": {
    "XUV500": {
      "W8": ["2.2 mHawk 140ch"]
    }
  },
  "MAN": {
    "TGE": {
      "3.140": ["2.0 TDI 140ch"]
    }
  },
  "Maserati": {
    "Ghibli": {
      "S": ["3.0 V6 430ch"]
    },
    "Levante": {
      "S": ["3.0 V6 430ch"],
      "Trofeo": ["3.8 V8 580ch"]
    },
    "MC20": {
      "MC20": ["3.0 V6 630ch"]
    }
  },
  "Mazda": {
    "3": {
      "Skyactiv-G": ["2.0 122ch", "2.0 150ch"]
    },
    "CX-5": {
      "Skyactiv-G": ["2.0 165ch", "2.5 194ch"]
    },
    "MX-5": {
      "Skyactiv-G": ["2.0 184ch"]
    }
  },
  "MG": {
    "ZS": {
      "EV": ["Électrique 143ch"]
    },
    "HS": {
      "Luxury": ["1.5 Turbo 162ch"]
    }
  },
  "Mini": {
    "Cooper": {
      "Cooper S": ["2.0 178ch"],
      "John Cooper Works": ["2.0 231ch"]
    },
    "Countryman": {
      "Cooper S": ["2.0 192ch"]
    }
  },
  "Mitsubishi": {
    "Outlander": {
      "PHEV": ["2.4 PHEV 224ch"]
    },
    "ASX": {
      "Instyle": ["2.0 150ch"]
    }
  },
  "Morgan": {
    "Plus Four": {
      "Plus Four": ["2.0 255ch"]
    },
    "Plus Six": {
      "Plus Six": ["3.0 340ch"]
    }
  },
  "Nissan": {
    "Qashqai": {
      "Acenta": ["1.3 DIG-T 140ch", "1.5 dCi 115ch"]
    },
    "Juke": {
      "N-Connecta": ["1.0 DIG-T 114ch"]
    },
    "GT-R": {
      "GT-R": ["3.8 V6 Twin-Turbo 570ch"]
    }
  },
  "Opel": {
    "Corsa": {
      "Edition": ["1.2 75ch", "1.2 Turbo 100ch"]
    },
    "Astra": {
      "Edition": ["1.2 Turbo 130ch"]
    },
    "Grandland": {
      "Elegance": ["1.2 Turbo 130ch"]
    }
  },
  "Pagani": {
    "Huayra": {
      "BC": ["6.0 V12 Twin-Turbo 800ch"]
    }
  },
  "PGO": {
    "Cévennes": {
      "S": ["2.0 180ch"]
    }
  },
  "Piaggio": {
    "Porter": {
      "Electric": ["Électrique 60ch"]
    }
  },
  "Rolls Royce": {
    "Phantom": {
      "Phantom": ["6.75 V12 571ch"]
    },
    "Ghost": {
      "Ghost": ["6.75 V12 571ch"]
    },
    "Cullinan": {
      "Cullinan": ["6.75 V12 571ch"]
    }
  },
  "Saab": {
    "9-3": {
      "Aero": ["2.0 Turbo 220ch"]
    }
  },
  "Samsung": {
    "SM5": {
      "Platinum": ["2.0 143ch"]
    }
  },
  "Scion": {
    "tC": {
      "Base": ["2.5 180ch"]
    }
  },
  "Seat": {
    "Ibiza": {
      "FR": ["1.0 TSI 95ch", "1.0 TSI 110ch"]
    },
    "Leon": {
      "FR": ["1.5 TSI 130ch", "2.0 TSI 190ch"]
    },
    "Ateca": {
      "FR": ["1.5 TSI 150ch", "2.0 TDI 150ch"]
    }
  },
  "Secma": {
    "F16": {
      "Sport": ["1.6 100ch"]
    }
  },
  "Skoda": {
    "Fabia": {
      "Ambition": ["1.0 TSI 95ch", "1.0 TSI 110ch"]
    },
    "Octavia": {
      "Ambition": ["1.5 TSI 150ch", "2.0 TDI 150ch"]
    },
    "Kodiaq": {
      "Ambition": ["2.0 TSI 190ch", "2.0 TDI 150ch"]
    }
  },
  "Smart": {
    "ForTwo": {
      "Passion": ["1.0 71ch"]
    },
    "ForFour": {
      "Passion": ["1.0 71ch"]
    }
  },
  "SsangYong": {
    "Tivoli": {
      "ELX": ["1.6 128ch"]
    },
    "Korando": {
      "Quartz": ["1.5 163ch"]
    }
  },
  "Subaru": {
    "Impreza": {
      "Sport": ["2.0 156ch"]
    },
    "XV": {
      "Premium": ["2.0 156ch"]
    },
    "WRX": {
      "STI": ["2.5 Turbo 300ch"]
    }
  },
  "Suzuki": {
    "Swift": {
      "Sport": ["1.4 Turbo 140ch"]
    },
    "Vitara": {
      "Privilege": ["1.4 Turbo 140ch"]
    }
  },
  "Tata": {
    "Nexon": {
      "XZ": ["1.2 Turbo 120ch"]
    }
  },
  "Volvo": {
    "XC40": {
      "Momentum": ["2.0 T4 190ch"],
      "R-Design": ["2.0 T5 247ch"]
    },
    "XC60": {
      "Momentum": ["2.0 B5 250ch"],
      "R-Design": ["2.0 T6 310ch"]
    },
    "S90": {
      "Momentum": ["2.0 B5 250ch"]
    }
  },
  "Westfield": {
    "Sport": {
      "1600": ["1.6 135ch"]
    }
  },
  "Wiesmann": {
    "GT MF5": {
      "V10": ["5.0 V10 507ch"]
    }
  }
};

const Simulator = () => {
  const navigate = useNavigate();
  const [marque, setMarque] = useState("");
  const [modele, setModele] = useState("");
  const [version, setVersion] = useState("");
  const [moteur, setMoteur] = useState("");

  const handleMarqueChange = (value: string) => {
    setMarque(value);
    setModele("");
    setVersion("");
    setMoteur("");
  };

  const handleModeleChange = (value: string) => {
    setModele(value);
    setVersion("");
    setMoteur("");
  };

  const handleVersionChange = (value: string) => {
    setVersion(value);
    setMoteur("");
  };

  const handleMoteurChange = (value: string) => {
    setMoteur(value);
  };

  const isDisabled = !(marque && modele && version && moteur);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isDisabled) {
      navigate(`/simulation?marque=${encodeURIComponent(marque)}&modele=${encodeURIComponent(modele)}&version=${encodeURIComponent(version)}&moteur=${encodeURIComponent(moteur)}`);
    }
  };

  const getModeles = () => {
    return marque ? Object.keys(carData[marque as keyof typeof carData] || {}) : [];
  };

  const getVersions = () => {
    if (!marque || !modele) return [];
    const marqueData = carData[marque as keyof typeof carData];
    return marqueData ? Object.keys(marqueData[modele as keyof typeof marqueData] || {}) : [];
  };

  const getMoteurs = () => {
    if (!marque || !modele || !version) return [];
    const marqueData = carData[marque as keyof typeof carData];
    if (!marqueData) return [];
    const modeleData = marqueData[modele as keyof typeof marqueData];
    if (!modeleData) return [];
    return modeleData[version as keyof typeof modeleData] || [];
  };

  return (
    <Card className="w-full max-w-lg bg-white shadow-2xl rounded-2xl overflow-hidden border-none">
      <CardHeader className="bg-white text-center py-4 sm:py-6">
        <CardTitle className="text-xl sm:text-2xl lg:text-3xl font-black text-primaryRed">
          Simulateur de performance
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 lg:p-8 bg-white">
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {/* Marque Dropdown */}
          <div className="space-y-2">
            <Select value={marque} onValueChange={handleMarqueChange}>
              <SelectTrigger className="w-full h-12 sm:h-14 border-2 border-gray-300 rounded-lg px-3 sm:px-4 text-gray-700 font-semibold focus:border-primaryRed bg-gray-50 text-base sm:text-lg">
                <SelectValue placeholder="Marque" />
              </SelectTrigger>
              <SelectContent className="bg-white border-2 border-gray-200 rounded-lg shadow-xl max-h-60 z-50">
                {Object.keys(carData).map((m) => (
                  <SelectItem 
                    key={m} 
                    value={m}
                    className="text-gray-700 font-medium py-2 sm:py-3 px-3 sm:px-4 hover:bg-primaryRed/10 hover:text-primaryRed cursor-pointer"
                  >
                    {m}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Modele Dropdown */}
          <div className="space-y-2">
            <Select 
              value={modele} 
              onValueChange={handleModeleChange}
              disabled={!marque}
            >
              <SelectTrigger className="w-full h-12 sm:h-14 border-2 border-gray-300 rounded-lg px-3 sm:px-4 text-gray-700 font-semibold focus:border-primaryRed bg-gray-50 text-base sm:text-lg disabled:opacity-50 disabled:cursor-not-allowed">
                <SelectValue placeholder="Modèle" />
              </SelectTrigger>
              <SelectContent className="bg-white border-2 border-gray-200 rounded-lg shadow-xl max-h-60 z-50">
                {getModeles().map((mod) => (
                  <SelectItem 
                    key={mod} 
                    value={mod}
                    className="text-gray-700 font-medium py-2 sm:py-3 px-3 sm:px-4 hover:bg-primaryRed/10 hover:text-primaryRed cursor-pointer"
                  >
                    {mod}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Version Dropdown */}
          <div className="space-y-2">
            <Select 
              value={version} 
              onValueChange={handleVersionChange}
              disabled={!modele}
            >
              <SelectTrigger className="w-full h-12 sm:h-14 border-2 border-gray-300 rounded-lg px-3 sm:px-4 text-gray-700 font-semibold focus:border-primaryRed bg-gray-50 text-base sm:text-lg disabled:opacity-50 disabled:cursor-not-allowed">
                <SelectValue placeholder="Version" />
              </SelectTrigger>
              <SelectContent className="bg-white border-2 border-gray-200 rounded-lg shadow-xl max-h-60 z-50">
                {getVersions().map((ver) => (
                  <SelectItem 
                    key={ver} 
                    value={ver}
                    className="text-gray-700 font-medium py-2 sm:py-3 px-3 sm:px-4 hover:bg-primaryRed/10 hover:text-primaryRed cursor-pointer"
                  >
                    {ver}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Moteur Dropdown */}
          <div className="space-y-2">
            <Select 
              value={moteur} 
              onValueChange={handleMoteurChange}
              disabled={!version}
            >
              <SelectTrigger className="w-full h-12 sm:h-14 border-2 border-gray-300 rounded-lg px-3 sm:px-4 text-gray-700 font-semibold focus:border-primaryRed bg-gray-50 text-base sm:text-lg disabled:opacity-50 disabled:cursor-not-allowed">
                <SelectValue placeholder="Moteur" />
              </SelectTrigger>
              <SelectContent className="bg-white border-2 border-gray-200 rounded-lg shadow-xl max-h-60 z-50">
                {getMoteurs().map((mot) => (
                  <SelectItem 
                    key={mot} 
                    value={mot}
                    className="text-gray-700 font-medium py-2 sm:py-3 px-3 sm:px-4 hover:bg-primaryRed/10 hover:text-primaryRed cursor-pointer"
                  >
                    {mot}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {/* Simuler Button */}
          <Button
            type="submit"
            className={`w-full bg-primaryRed hover:bg-red-600 font-black text-white text-lg sm:text-xl py-5 sm:py-6 rounded-lg transition-all duration-300 ${
              isDisabled 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:scale-105 shadow-xl'
            }`}
            disabled={isDisabled}
          >
            Simuler la Performance
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Simulator;
