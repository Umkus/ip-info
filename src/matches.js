const bad = [
  /(^|\W)vps(\W|$)/i,
  /anonim/i,
  /anony/i,
  /cdn(\W|$)/i,
  /coll?o(c|[^a-z]|$)/i,
  /scale/i,
  /cloud/i,
  /data.?center/i,
  /ddos/i,
  /dedi/i,
  /host/i,
  /server/i,
  /unassigned/i,
  /vpn/i,
];

const good = [
  /(\W|^)mobile/i,
  /(\W|^)tv(\W|$)/i,
  /broad/i,
  /vcable/i,
  /fiber/i,
  /home(\W|$)/i,
  /internet/i,
  /isp/i,
  /tele/i,
  /tele?com/i,
];

const asns = [
  0,
  10105,
  10124,
  10157,
  10297,
  10310,
  10355,
  10381,
  10439,
  10461,
  10474,
  10532,
  10689,
  10708,
  10732,
  10782,
  10835,
  10880,
  10910,
  10912,
  10913,
  10929,
  10930,
  1101,
  11042,
  11126,
  11169,
  11195,
  112,
  11238,
  1128,
  11357,
  11439,
  1146093571,
  11508,
  11588,
  11590,
  11604,
  11620,
  11653,
  11666,
  11668,
  11678,
  11680,
  11820,
  11831,
  11853,
  11854,
  11855,
  11878,
  11989,
  11990,
  12028,
  12083,
  12085,
  1213,
  1215,
  1216,
  1217,
  12178,
  12179,
  12180,
  12181,
  12182,
  12200,
  12222,
  12260,
  12290,
  12344,
  12347,
  12350,
  12426,
  12488,
  12505,
  12519,
  12521,
  12556,
  12574,
  12637,
  12722,
  12822,
  12824,
  12859,
  12876,
  1293,
  12989,
  12993,
  13030,
  13039,
  131199,
  13125,
  13136,
  131367,
  131392,
  131423,
  131428,
  131444,
  131447,
  131455,
  131633,
  131745,
  131755,
  132022,
  132049,
  132056,
  132078,
  13213,
  132145,
  132198,
  132203,
  132272,
  132335,
  13238,
  13246,
  132576,
  132586,
  132591,
  132680,
  132692,
  132730,
  132779,
  132816,
  132839,
  132869,
  132892,
  132937,
  132954,
  13319,
  133201,
  133204,
  133219,
  133295,
  133296,
  13335,
  133359,
  133398,
  133478,
  133480,
  133483,
  133549,
  133590,
  133643,
  133680,
  133708,
  133752,
  133800,
  133877,
  133929,
  133932,
  13438,
  134451,
  134520,
  134530,
  134533,
  134534,
  134535,
  134536,
  134548,
  1347,
  134791,
  134963,
  134982,
  135132,
  135147,
  135161,
  135225,
  135330,
  135353,
  135391,
  135392,
  13549,
  135543,
  13557,
  135602,
  135630,
  136258,
  13638,
  136517,
  136523,
  136533,
  136715,
  136770,
  136899,
  136900,
  136907,
  13692,
  13693,
  13694,
  136988,
  13706,
  137099,
  137409,
  13754,
  13768,
  13776,
  137840,
  137874,
  137876,
  13789,
  13790,
  13791,
  13792,
  138026,
  138074,
  138207,
  138247,
  13868,
  13886,
  138995,
  13903,
  139070,
  139086,
  13909,
  13911,
  13916,
  139190,
  139242,
  13926,
  13927,
  139281,
  139460,
  139638,
  14012,
  140589,
  14061,
  140664,
  14076,
  14127,
  14174,
  14196,
  1421,
  14211,
  14361,
  14387,
  14469,
  14519,
  14585,
  14609,
  14618,
  14636,
  14642,
  14659,
  14678,
  14741,
  14742,
  14743,
  14744,
  14745,
  14858,
  14901,
  14907,
  14991,
  15003,
  15022,
  15081,
  15083,
  151,
  15124,
  15149,
  15169,
  15244,
  15395,
  15456,
  15510,
  15535,
  15570,
  15576,
  15598,
  15626,
  15635,
  15657,
  15694,
  15734,
  15804,
  15817,
  15825,
  15830,
  15859,
  15879,
  15922,
  15966,
  15967,
  16047,
  16125,
  16150,
  16178,
  16190,
  16205,
  16243,
  16247,
  1625,
  16262,
  16265,
  16276,
  16281,
  16284,
  16347,
  16371,
  16397,
  16509,
  16553,
  16578,
  16591,
  16625,
  16724,
  16805,
  16830,
  16842,
  16942,
  1705,
  17062,
  17090,
  17139,
  17185,
  17204,
  17216,
  17223,
  17305,
  17363,
  174,
  17403,
  17428,
  17447,
  17464,
  17471,
  17493,
  17505,
  17506,
  17511,
  17539,
  17563,
  17661,
  17675,
  17676,
  17705,
  17707,
  17819,
  17831,
  17884,
  17911,
  17941,
  18024,
  18069,
  18140,
  18229,
  1836,
  18362,
  18408,
  18450,
  18462,
  18607,
  18618,
  18634,
  18650,
  18710,
  18717,
  1873,
  1874,
  18747,
  18845,
  18929,
  18978,
  19024,
  19055,
  19084,
  19148,
  19171,
  19194,
  19208,
  19237,
  19306,
  1931,
  19310,
  19318,
  195,
  19531,
  19538,
  19551,
  19647,
  196689,
  196713,
  196752,
  196961,
  197005,
  19710,
  197155,
  197216,
  197225,
  197233,
  197254,
  197328,
  19742,
  197459,
  197540,
  197572,
  197595,
  197695,
  197706,
  197731,
  197914,
  197922,
  197988,
  198047,
  198050,
  198203,
  198220,
  198310,
  19842,
  198431,
  19844,
  198605,
  198621,
  19868,
  198972,
  198992,
  19905,
  19907,
  199081,
  199089,
  199098,
  199118,
  199159,
  199232,
  199250,
  19930,
  199506,
  199524,
  199527,
  199566,
  199653,
  199780,
  199883,
  19994,
  199968,
  199970,
  200019,
  200038,
  200088,
  200274,
  200350,
  200534,
  200549,
  200557,
  200600,
  200651,
  200761,
  200837,
  200871,
  200904,
  200980,
  200984,
  201011,
  201057,
  201308,
  20144,
  201455,
  2015,
  20150,
  201510,
  201525,
  201563,
  201637,
  201682,
  201684,
  201719,
  201730,
  20189,
  201912,
  201924,
  20202,
  202023,
  20205,
  202053,
  202054,
  202090,
  202155,
  20218,
  202242,
  202376,
  202396,
  202425,
  202448,
  202569,
  202623,
  20264,
  202696,
  20278,
  202780,
  202805,
  202861,
  202920,
  202947,
  203053,
  203070,
  203219,
  203220,
  203226,
  203254,
  203280,
  2033,
  203315,
  203368,
  203376,
  203380,
  203416,
  203417,
  203523,
  203557,
  203658,
  20376,
  203786,
  203851,
  203898,
  204019,
  204038,
  204040,
  204139,
  204167,
  204248,
  20446,
  204472,
  20448,
  204601,
  204631,
  204655,
  204720,
  20473,
  204825,
  204864,
  204875,
  205016,
  205024,
  205053,
  205143,
  205275,
  205300,
  205301,
  205317,
  20545,
  205544,
  205608,
  205631,
  205697,
  205727,
  205801,
  205952,
  20598,
  206092,
  206144,
  20616,
  206204,
  206314,
  20634,
  206446,
  206485,
  20649,
  20661,
  206625,
  206646,
  206672,
  206762,
  206791,
  206798,
  206804,
  207034,
  207134,
  20718,
  20738,
  20741,
  207636,
  20766,
  20773,
  207821,
  207957,
  20799,
  208006,
  208136,
  20815,
  208179,
  208333,
  20836,
  208429,
  20846,
  20857,
  20860,
  208782,
  208861,
  208917,
  209006,
  209033,
  209150,
  209181,
  209201,
  209242,
  209249,
  209378,
  20940,
  209482,
  209485,
  209499,
  20953,
  209589,
  209591,
  209623,
  209637,
  209854,
  210171,
  210266,
  210277,
  21031,
  21069,
  21100,
  21104,
  21159,
  21221,
  21267,
  213055,
  21321,
  21342,
  21350,
  21371,
  21409,
  21430,
  21437,
  2149,
  21580,
  2159,
  2160,
  2161,
  2162,
  2164,
  2165,
  2166,
  21769,
  21775,
  21859,
  22030,
  22132,
  22211,
  22241,
  22275,
  22363,
  22404,
  22435,
  22439,
  22452,
  22458,
  22552,
  22565,
  22576,
  22612,
  22616,
  22619,
  22632,
  22653,
  22713,
  22720,
  22747,
  22781,
  22792,
  22843,
  22915,
  23033,
  23131,
  23252,
  23338,
  23342,
  23367,
  23454,
  23468,
  23495,
  23637,
  23661,
  23663,
  23679,
  23686,
  23756,
  23816,
  23858,
  23881,
  23885,
  23903,
  23923,
  23932,
  23951,
  23957,
  24034,
  24097,
  24121,
  24183,
  24199,
  24200,
  24214,
  24236,
  24237,
  24245,
  24246,
  24247,
  24256,
  24295,
  24296,
  24319,
  24376,
  24466,
  24482,
  24506,
  24523,
  24556,
  24572,
  24581,
  24592,
  24597,
  24607,
  24640,
  24642,
  24669,
  24724,
  24768,
  24806,
  24875,
  24898,
  24940,
  24951,
  24961,
  24971,
  24989,
  24990,
  25058,
  25061,
  2514,
  2516,
  25163,
  2519,
  25190,
  25308,
  25369,
  25379,
  25394,
  25406,
  25459,
  25525,
  2554,
  25560,
  25649,
  25653,
  25697,
  25795,
  25820,
  25886,
  25888,
  25951,
  25975,
  25999,
  26008,
  26085,
  26101,
  26211,
  26212,
  26232,
  262486,
  262612,
  262706,
  262772,
  263137,
  263639,
  263643,
  263693,
  263812,
  264167,
  264220,
  264324,
  264344,
  264502,
  264509,
  26452,
  26467,
  264763,
  26496,
  265415,
  265443,
  26546,
  26548,
  265517,
  265584,
  265728,
  265780,
  265825,
  265848,
  26592,
  265997,
  266122,
  266849,
  26700,
  267242,
  26753,
  267733,
  268489,
  268581,
  26981,
  26983,
  269848,
  269939,
  27006,
  27008,
  270276,
  270786,
  27176,
  27220,
  27224,
  2723,
  27240,
  27257,
  27330,
  27357,
  27428,
  27566,
  27630,
  27715,
  28110,
  28399,
  28546,
  2856,
  28649,
  28753,
  28824,
  28849,
  28859,
  28914,
  28924,
  29066,
  29141,
  29164,
  29169,
  29182,
  29216,
  29222,
  29278,
  29312,
  29397,
  29405,
  29422,
  29465,
  29522,
  29527,
  29550,
  29593,
  29632,
  29636,
  29655,
  29671,
  29691,
  29713,
  29757,
  29761,
  29763,
  29802,
  29838,
  29863,
  29884,
  29889,
  29944,
  30037,
  30059,
  30083,
  30148,
  30159,
  30176,
  30242,
  30247,
  30350,
  30447,
  30548,
  3061,
  30633,
  30636,
  3064,
  30691,
  30693,
  30774,
  30775,
  30818,
  30823,
  30827,
  30844,
  30860,
  30880,
  30900,
  30933,
  30968,
  30998,
  31027,
  31034,
  31042,
  31103,
  31108,
  31109,
  31110,
  31120,
  31147,
  31229,
  31239,
  31362,
  31377,
  31400,
  31438,
  31463,
  31477,
  31493,
  31595,
  31615,
  31644,
  31669,
  31679,
  31708,
  31736,
  31745,
  31797,
  31798,
  31815,
  31834,
  31863,
  31898,
  31953,
  32015,
  32030,
  3204,
  32097,
  3214,
  3218,
  32181,
  3223,
  32323,
  32363,
  32459,
  32475,
  32489,
  32517,
  32536,
  32550,
  3257,
  32613,
  3265,
  32708,
  32709,
  32740,
  32742,
  327721,
  327784,
  327813,
  327942,
  327984,
  328035,
  328383,
  32877,
  32915,
  32921,
  32934,
  32980,
  33,
  33055,
  33083,
  33139,
  33182,
  33211,
  3327,
  33302,
  33333,
  33361,
  33383,
  33387,
  33438,
  33480,
  33506,
  33532,
  3356,
  33785,
  33797,
  33837,
  33843,
  33876,
  33891,
  33905,
  33940,
  34010,
  34011,
  34037,
  34154,
  34164,
  34209,
  34224,
  34225,
  34233,
  34240,
  34305,
  34309,
  34343,
  34347,
  34372,
  34447,
  34458,
  34514,
  34529,
  34547,
  34549,
  34555,
  34568,
  3457,
  34619,
  3462,
  34660,
  34762,
  34788,
  34892,
  34934,
  34961,
  34971,
  34989,
  35041,
  35042,
  35063,
  35100,
  35106,
  35161,
  35166,
  35204,
  35206,
  35329,
  35332,
  35366,
  35393,
  35415,
  35425,
  35470,
  35505,
  35537,
  35540,
  35592,
  3561,
  35908,
  35916,
  35943,
  3598,
  35994,
  36007,
  36024,
  36040,
  36057,
  36088,
  36114,
  36217,
  36221,
  36229,
  36236,
  36242,
  36248,
  36290,
  36351,
  36363,
  36384,
  36385,
  36400,
  36408,
  36436,
  36444,
  36492,
  36646,
  36647,
  36711,
  36752,
  36828,
  36873,
  36920,
  36970,
  36987,
  3700,
  37018,
  37088,
  37109,
  37153,
  37170,
  37209,
  37230,
  37248,
  37269,
  37280,
  37308,
  37347,
  37377,
  37433,
  37472,
  37506,
  37518,
  37521,
  37540,
  37661,
  37684,
  37692,
  37714,
  3790,
  37963,
  37983,
  3800,
  38001,
  38034,
  38072,
  38093,
  38107,
  38211,
  38217,
  38220,
  38277,
  38309,
  38320,
  38365,
  3842,
  38478,
  38502,
  38532,
  38538,
  38592,
  38627,
  38718,
  38719,
  38731,
  38735,
  38820,
  38826,
  38895,
  38901,
  38927,
  38930,
  38971,
  39020,
  39122,
  39239,
  39246,
  39247,
  39292,
  3931,
  393216,
  393245,
  39326,
  393447,
  39351,
  393560,
  39369,
  393710,
  393886,
  39392,
  393960,
  393965,
  393996,
  394102,
  394192,
  394235,
  394256,
  394314,
  394330,
  394367,
  394380,
  394381,
  394507,
  394625,
  394639,
  39469,
  394695,
  394699,
  394738,
  394749,
  394814,
  394844,
  394882,
  394888,
  39494,
  394949,
  395089,
  39519,
  395376,
  395403,
  395470,
  39570,
  395731,
  395747,
  395936,
  395954,
  395973,
  396076,
  396190,
  396273,
  39629,
  396362,
  396426,
  396885,
  396982,
  39704,
  397154,
  397257,
  39729,
  397373,
  397378,
  397423,
  39743,
  397513,
  39758,
  397582,
  397599,
  39772,
  39783,
  39790,
  397903,
  398072,
  398101,
  398107,
  398108,
  398110,
  39832,
  39845,
  398478,
  39855,
  39875,
  39877,
  39921,
  39963,
  40015,
  40021,
  40049,
  40156,
  40244,
  40395,
  40575,
  40676,
  40824,
  40861,
  40900,
  40935,
  40965,
  41264,
  4128,
  41313,
  41337,
  41412,
  41535,
  41564,
  41605,
  41653,
  41717,
  4184,
  41900,
  4192,
  42011,
  4213,
  42160,
  42352,
  42473,
  42494,
  4250,
  42525,
  42599,
  42695,
  42708,
  42730,
  4282,
  4283,
  4284,
  42926,
  42931,
  42964,
  4298,
  43037,
  43108,
  43146,
  43224,
  43289,
  43303,
  43317,
  43345,
  43350,
  43419,
  43428,
  43432,
  43513,
  4358,
  43618,
  43639,
  4364,
  43647,
  43711,
  43755,
  43847,
  43858,
  43872,
  43907,
  43948,
  43994,
  44050,
  44078,
  44273,
  44329,
  4434,
  44384,
  44477,
  44638,
  44668,
  44774,
  44882,
  44901,
  44907,
  44925,
  45012,
  45017,
  45090,
  45102,
  4513,
  45139,
  45187,
  45232,
  45270,
  45302,
  45328,
  45454,
  45470,
  45494,
  45501,
  45502,
  45537,
  45544,
  45557,
  45566,
  45570,
  45650,
  45671,
  45731,
  45753,
  45815,
  45839,
  45899,
  45915,
  45926,
  4594,
  45996,
  46015,
  46085,
  4618,
  46231,
  46242,
  46261,
  46403,
  46407,
  46430,
  46475,
  4655,
  4658,
  46597,
  46606,
  46636,
  46664,
  46805,
  46816,
  46841,
  46844,
  46927,
  4694,
  46954,
  47038,
  47066,
  47147,
  4725,
  47317,
  47328,
  47359,
  47447,
  4750,
  47543,
  47544,
  47588,
  47726,
  4785,
  47886,
  47902,
  47935,
  48057,
  48095,
  48205,
  4827,
  48287,
  48324,
  48337,
  48505,
  48594,
  48635,
  48691,
  48716,
  48730,
  4880,
  48955,
  48979,
  49349,
  49367,
  49453,
  49505,
  49544,
  49588,
  49604,
  49635,
  49711,
  49718,
  49855,
  49981,
  5006,
  50214,
  50292,
  50297,
  50304,
  50331,
  50338,
  50340,
  50389,
  50463,
  50474,
  5048,
  50495,
  50584,
  50599,
  50613,
  50616,
  5073,
  50840,
  50896,
  50979,
  51013,
  51088,
  51091,
  51159,
  51167,
  51191,
  51395,
  51430,
  51696,
  51724,
  51731,
  51747,
  51754,
  51852,
  51905,
  52006,
  52048,
  52129,
  52148,
  52169,
  52173,
  52201,
  52423,
  52557,
  52833,
  52882,
  52985,
  52994,
  52999,
  53013,
  53340,
  53363,
  53365,
  53444,
  53597,
  53667,
  53755,
  53767,
  53813,
  53831,
  53837,
  53869,
  53999,
  5404,
  54046,
  54103,
  54104,
  54113,
  54115,
  54265,
  543,
  54341,
  54359,
  54438,
  54455,
  54489,
  54540,
  54574,
  54588,
  54600,
  54650,
  54777,
  54825,
  54938,
  54958,
  54994,
  55002,
  5504,
  55044,
  55045,
  5505,
  55081,
  55106,
  5537,
  5538,
  55517,
  55536,
  55592,
  55669,
  55685,
  55750,
  5577,
  55803,
  55852,
  5588,
  55897,
  55898,
  55907,
  55931,
  55933,
  55967,
  55990,
  56005,
  56030,
  56059,
  56110,
  56140,
  56149,
  56202,
  56239,
  56469,
  56541,
  56577,
  56630,
  56694,
  56709,
  56740,
  56787,
  56803,
  56823,
  5693,
  56961,
  57115,
  5714,
  5715,
  57169,
  57172,
  57230,
  57322,
  57363,
  57475,
  57497,
  5752,
  57739,
  57753,
  5779,
  57814,
  57817,
  57858,
  57872,
  58010,
  58065,
  58073,
  58074,
  58123,
  58305,
  58338,
  58381,
  58391,
  58397,
  58525,
  58588,
  58649,
  58651,
  58683,
  58786,
  58791,
  58862,
  59067,
  59210,
  59253,
  59261,
  59349,
  59360,
  59432,
  59642,
  59729,
  59764,
  59843,
  59871,
  59895,
  59930,
  60033,
  60068,
  60086,
  60118,
  60204,
  60217,
  60281,
  60376,
  60410,
  60485,
  60494,
  60505,
  60567,
  60572,
  60589,
  60618,
  60626,
  60703,
  60762,
  60781,
  60911,
  60991,
  61003,
  61053,
  61217,
  6122,
  61272,
  6130,
  61317,
  61323,
  61333,
  61345,
  61348,
  61440,
  61577,
  61643,
  6171,
  61976,
  61998,
  62014,
  62021,
  62041,
  62044,
  62092,
  62211,
  62214,
  62240,
  62282,
  6233,
  62334,
  62370,
  62471,
  62485,
  62540,
  62563,
  62571,
  62651,
  62727,
  62729,
  62731,
  62785,
  62804,
  62805,
  62814,
  62874,
  62900,
  62904,
  62907,
  6292,
  62921,
  63008,
  63023,
  63119,
  63128,
  63148,
  6315,
  63199,
  63288,
  63293,
  63446,
  63447,
  6364,
  63911,
  63949,
  63989,
  63997,
  64006,
  64010,
  64073,
  64102,
  64124,
  64235,
  64245,
  64259,
  64267,
  64275,
  64286,
  64432,
  64437,
  64496,
  64510,
  6453,
  6479,
  6494,
  6536,
  6584,
  6597,
  6700,
  6718,
  6724,
  6859,
  6870,
  6885,
  6903,
  6939,
  6943,
  7024,
  7040,
  7195,
  7203,
  7224,
  7233,
  7258,
  7280,
  7296,
  7393,
  7397,
  7430,
  7453,
  7506,
  7546,
  7552,
  7568,
  7595,
  7604,
  7642,
  7684,
  7735,
  7806,
  7821,
  7859,
  792,
  793,
  794,
  7941,
  7988,
  7991,
  8068,
  8069,
  8070,
  8071,
  8075,
  8100,
  8175,
  8241,
  8257,
  8282,
  8283,
  8308,
  8314,
  8426,
  8455,
  8473,
  8483,
  8496,
  8520,
  8560,
  8596,
  8685,
  8726,
  8741,
  8771,
  8778,
  8893,
  8897,
  8925,
  8972,
  8975,
  8987,
  9008,
  9009,
  9030,
  9120,
  9123,
  9132,
  9178,
  9186,
  9268,
  9286,
  9312,
  9313,
  9339,
  9358,
  9370,
  9371,
  9389,
  9391,
  9558,
  9559,
  9723,
  9850,
  9891,
  9957,
  9989,
];

module.exports = {
  bad,
  good,
  asns,
};
