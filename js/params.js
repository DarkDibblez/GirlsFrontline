/*****************************************************************************************************
 *
 * [Logistics Contract Rate References]
 *
 * Area 0-10:
 *  Sangvis Ferri Sheet
 *  https://pan.baidu.com/s/1c3iS9Ks#list/path=/Girls%20Frontline
 *  Assumption, Not verified
 *
 * Area 11-12:
 *  Real Observation by developer
 *  Area 11 Sample: 140 Logistics Complete Results without Great Success Case
 *  Area 12 Sample: 210 Logistics Complete Results without Great Success Case
 *  Area 13 Sample: Temporary 20% (2020-05-07). Observation would start at 2020-05-12
 *
 *  If there is question for the data, please ask at below bbs. (English Available)
 *  BBS: http://users3.smartgb.com/g/g.php?a=s&i=g36-28145-f1
 *
 * Extra Reference:
 *  Plan to ask for feedback
 *  https://docs.google.com/spreadsheets/d/1ah2JO6ggWuVaBho9yxgDMC-ucEKA8C42SBkjIlnIcWk
 *
 *****************************************************************************************************/

var arr = [
//  Area,   Stage,  Time,   Huma,   Ammo,   MRE,    Part,   Doll,   Tool,   Fast,   Repr,   Tokn
    [0,     1,      50,     0,      145,    145,    0,      0,      0,      0.2,    0.5,    0   ],
    [0,     2,      180,    550,    0,      0,      350,    0.5,    0,      0,      0,      0   ],
    [0,     3,      720,    900,    900,    900,    250,    0,      0.4,    0,      0.4,    0   ],
    [0,     4,      1440,   0,      1200,   800,    750,    0,      0,      0,      0,      1   ],
    [1,     1,      15,     10,     30,     15,     0,      0,      0,      0,      0,      0   ],
    [1,     2,      30,     0,      40,     60,     0,      0,      0,      0,      0,      0   ],
    [1,     3,      60,     30,     0,      30,     10,     0,      0,      0,      0.6,    0   ],
    [1,     4,      120,    160,    160,    0,      0,      0.2,    0,      0,      0,      0   ],
    [2,     1,      40,     100,    0,      0,      30,     0,      0,      0,      0,      0   ],
    [2,     2,      90,     60,     200,    80,     0,      0,      0,      0,      0.3,    0   ],
    [2,     3,      240,    10,     10,     10,     230,    0,      0,      0.5,    0.5,    0   ],
    [2,     4,      360,    0,      250,    600,    60,     0.8,    0,      0,      0,      0   ],
    [3,     1,      20,     50,     0,      75,     0,      0,      0,      0,      0,      0   ],
    [3,     2,      45,     0,      120,    70,     30,     0,      0,      0,      0,      0   ],
    [3,     3,      90,     0,      300,    0,      0,      0,      0,      0.4,    0.45,   0   ],
    [3,     4,      300,    0,      0,      300,    300,    0.35,   0.4,    0,      0,      0   ],
    [4,     1,      60,     0,      185,    185,    0,      0,      0.2,    0,      0,      0   ],
    [4,     2,      120,    0,      0,      0,      210,    0,      0,      0.5,    0,      0   ],
    [4,     3,      360,    800,    550,    0,      0,      0.7,    0,      0,      0.3,    0   ],
    [4,     4,      480,    400,    400,    400,    150,    0,      0,      1,      0,      0   ],
    [5,     1,      30,     0,      0,      100,    45,     0,      0,      0,      0,      0   ],
    [5,     2,      150,    0,      600,    300,    0,      0,      0,      0,      0.8,    0   ],
    [5,     3,      240,    800,    400,    400,    0,      0,      0.5,    0,      0,      0   ],
    [5,     4,      420,    100,    0,      0,      700,    0.4,    0,      0,      0,      0   ],
    [6,     1,      120,    300,    300,    0,      100,    0,      0,      0,      0,      0   ],
    [6,     2,      180,    0,      200,    550,    100,    0,      0,      0.2,    0.5,    0   ],
    [6,     3,      300,    0,      0,      200,    500,    0,      0.6,    0,      0,      0   ],
    [6,     4,      720,    800,    800,    800,    0,      0,      0,      0,      0,      0.8 ],
    [7,     1,      150,    650,    0,      650,    0,      0,      0,      0,      0,      0   ],
    [7,     2,      240,    0,      650,    0,      300,    0.7,    0,      0,      0.3,    0   ], //0.6 0.4 ?
    [7,     3,      330,    900,    600,    600,    0,      0,      0.7,    0,      0,      0   ],
    [7,     4,      480,    250,    250,    250,    600,    0,      0,      0.8,    0,      0   ],
    [8,     1,      60,     150,    150,    150,    0,      0,      0.4,    0,      0,      0   ],
    [8,     2,      180,    0,      0,      0,      450,    0,      0,      0,      0.8,    0   ],
    [8,     3,      360,    400,    800,    800,    0,      0,      0,      0.6,    0.3,    0   ],
    [8,     4,      540,    1500,   400,    400,    100,    0.9,    0,      0,      0,      0   ],
    [9,     1,      30,     0,      0,      100,    50,     0,      0,      0,      0,      0   ],
    [9,     2,      90,     180,    0,      180,    100,    0,      0,      0.25,   0,      0   ],
    [9,     3,      270,    750,    750,    0,      0,      0.7,    0,      0,      0,      0   ],
    [9,     4,      420,    500,    900,    900,    0,      0,      1,      0,      0,      0   ],
    [10,    1,      40,     140,    200,    0,      0,      0,      0,      0,      0,      0   ],
    [10,    2,      100,    0,      240,    180,    0,      0.75,   0,      0.25,   0,      0   ],
    [10,    3,      320,    0,      480,    480,    300,    0,      0,      0.3,    0.5,    0   ],
    [10,    4,      600,    660,    660,    660,    330,    0,      0.9,    0,      0,      0   ], //1.0 ?
    [11,    1,      240,    350,    1050,   0,      0,      0.5,    0.5,    0,      0,      0   ],
    [11,    2,      240,    360,    540,    540,    0,      1,      0,      0,      0,      0   ],
    [11,    3,      480,    0,      750,    1500,   250,    0,      0,      0,      0.5,    0   ],
    [11,    4,      600,    0,      1650,   0,      900,    0,      0,      1,      0,      0   ],
    [12,    1,      60,     0,      220,    220,    0,      0,      0.5,    0,      0,      0   ],
    [12,    2,      90,     360,    0,      0,      120,    0,      0,      0,      0,      0   ],
    [12,    3,      540,    800,    1200,   1200,   0,      0,      0,      1,      0,      0   ],
    [12,    4,      720,    1800,   0,      1800,   0,      1,      0,      0,      0,      0   ],
    [13,    1,      180,    0,      0,      1200,   0,      0,      0,      0,      0.2,    0   ],
    [13,    2,      360,    800,    800,    800,    300,    0,      0,      0,      0,      0   ],
    [13,    3,      1440,   0,      4000,   0,      1200,   0,      0.2,    0,      0,      0   ],
    [13,    4,      360,    0,      0,      0,      1000,   0.2,    0,      0,      0,      0   ]
];