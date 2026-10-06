export type HoodSub = { h: string; ps: string[]; bullets?: string[] };
export type HoodStep = { t: string; d: string };
export type HoodFaq = { q: string; a: string };
export type Hood = {
  slug: string; name: string; h1: string; title: string; description: string; intro: string; heroPs: string[];
  bodyH2: string; bodyPs: string[]; considerations: string[];
  svcH2: string; svcLead: string; svcNotes: Record<string, string>;
  appsH2: string; apps: HoodSub[]; implH2: string; implPs: string[]; impl: HoodSub[];
  planH2: string; planPs: string[]; steps: HoodStep[];
  mapH2: string; mapIntro: string; mapQuery: string; mapTitle: string;
  nearbyH2: string; nearbyP: string; faqH2: string; faqs: HoodFaq[]; ctaH2: string; ctaPs: string[];
};
export const neighborhoods: Hood[] = [
  {
    "slug": "cicero-center",
    "name": "Cicero Center",
    "h1": "Hydro Jetting in Cicero Center, Cicero NY",
    "title": "Hydro Jetting in Cicero Center, Cicero | Cicero Hydro Jetting Pros",
    "description": "Hydro jetting in Cicero Center, Cicero NY: how repairs and additions in an old crossroads settlement shape drain questions and cleaning plans. Call (877) 761-0283.",
    "intro": "Cicero Center grew up around an early crossroads at Route 11 and Crabtree Lane. Past repairs and additions matter more to a drain than the date on the house.",
    "heroPs": [
      "Homes and buildings in Cicero Center can develop slow drains from grease, scale or roots, and older properties often have a mix of original and replacement pipe. Hydro jetting can clear buildup from a sound line when an inspection shows it is the right method. Describe any earlier drain work so the inspection can focus on the actual line."
    ],
    "bodyH2": "Hydro Jetting for Cicero Center Properties",
    "bodyPs": [
      "The town history places early settlement near Route 11 and Crabtree Lane, a spot once called Cody's Corner. The historic route later carried a plank road and a trolley, and the area has been a travel corridor ever since. That kind of long, continuous use tends to leave a mix of old and new buildings side by side.",
      "Mixed ages mean mixed plumbing. One property may have its original lateral, the next may have a replaced section, and a third may have been rerouted during an addition. Each of those facts changes which cleaning method makes sense and how much access the crew will have.",
      "Hydro jetting uses a high-pressure stream of water to scour grease, scale and roots from a sound pipe wall. On a line with an unknown history, it is the inspection that tells you whether jetting is a good idea and where it should stop."
    ],
    "considerations": [
      "Past repairs, additions or rerouted sections of the line",
      "Which fixtures are slow and whether lower-level drains are affected",
      "Mature trees along the path of the lateral",
      "Where the cleanout is, and whether an addition has covered it",
      "Cooking and disposal habits in the kitchen",
      "Whether the property uses a public sewer connection"
    ],
    "svcH2": "Hydro Jetting Services in Cicero Center",
    "svcLead": "Each service page answers one question. Pick the one that sounds like your drain.",
    "svcNotes": {
      "severe-grease-and-sludge": "Restaurants and busy home kitchens along a travel corridor can load a line with grease.",
      "tree-root-intrusions": "Mature trees on older lots can reach joints that have aged.",
      "recurring-clogs-and-slow-drains": "A line that slows again after clearing is holding something the clearing missed.",
      "mineral-and-scale-deposits": "Scale can build slowly in older pipe and narrow it at bends.",
      "preventative-maintenance": "An inspection and a planned cleaning can head off a first backup."
    },
    "appsH2": "Hydro Jetting Situations Along a Historic Corridor",
    "apps": [
      {
        "h": "Older buildings with replaced sections",
        "ps": [
          "A building that has had pipe replaced in stages can contain several materials in one line. Jetting works best when the crew knows which sections are old and which are new."
        ]
      },
      {
        "h": "Additions that changed the route",
        "ps": [
          "A room added decades ago may have moved or buried the original path. Tell the crew about additions so the inspection knows where to look."
        ]
      },
      {
        "h": "Kitchens that run hard",
        "ps": [
          "A kitchen that serves a household or a small business day after day can build a grease layer fast. Jetting strips the layer off the wall instead of opening a narrow channel."
        ]
      },
      {
        "h": "Slow drains that keep returning",
        "ps": [
          "A repeat clog is a clue. A planned cleaning after an inspection beats another emergency visit."
        ]
      }
    ],
    "implH2": "Hydro Jetting Considerations for Cicero Center",
    "implPs": [
      "Properties in a long-settled area carry history that shows up in the pipe. The history can be sorted out with records and a camera.",
      "These are the points that shape the work in Cicero Center."
    ],
    "impl": [
      {
        "h": "Unknown pipe history",
        "ps": [
          "If you do not know when a line was last touched, treat it as unknown. The camera decides the method."
        ],
        "bullets": [
          "Gather any repair records",
          "Expect an inspection before cleaning"
        ]
      },
      {
        "h": "Access after additions",
        "ps": [
          "A cleanout can end up under a deck, behind a wall or beneath landscaping."
        ],
        "bullets": [
          "Locate the cleanout ahead of the visit",
          "Mention any additions or remodels"
        ]
      },
      {
        "h": "Mixed use on one street",
        "ps": [
          "Homes and commercial buildings share the corridor, and their drain loads differ."
        ],
        "bullets": [
          "Describe how the property is used",
          "Ask whether grease handling needs attention"
        ]
      }
    ],
    "planH2": "Planning a Hydro Jetting Project in Cicero Center",
    "planPs": [
      "A few minutes of notes before the call makes the inspection faster. Anything that depends on your property gets settled by looking, not guessing.",
      "The stages below fit most properties here."
    ],
    "steps": [
      {
        "t": "Write down the symptoms",
        "d": "Which fixtures are slow, any gurgling or backups, and when it started."
      },
      {
        "t": "Gather what you know",
        "d": "Collect any records of past cleanings, repairs or remodels, even partial ones."
      },
      {
        "t": "Find the cleanout",
        "d": "Locate the access point and note any additions or remodels near the line, since they can move or hide it."
      },
      {
        "t": "Inspect before cleaning",
        "d": "An inspection shows whether the cause is grease, scale, roots or damage, and whether jetting fits."
      },
      {
        "t": "Confirm the result",
        "d": "Ask how the line was verified clear and what would bring the problem back."
      }
    ],
    "mapH2": "Hydro Jetting in Cicero Center, Cicero NY",
    "mapIntro": "Cicero Hydro Jetting Pros takes requests in Cicero Center and across Cicero. The map shows the neighborhood area, not a business office.",
    "mapQuery": "Route 11 & Crabtree Ln, Cicero, NY",
    "mapTitle": "Map of Cicero Center, Cicero, NY",
    "nearbyH2": "Serving Cicero Center and Nearby Cicero Neighborhoods",
    "nearbyP": "Cicero Hydro Jetting Pros serves Cicero Center and the rest of Cicero, including South Bay. Each neighborhood page covers the local context that matters for its properties.",
    "faqH2": "Frequently Asked Questions About Hydro Jetting in Cicero Center",
    "faqs": [
      {
        "q": "Does the area's long history mean my pipes are old?",
        "a": "Not necessarily. Place history does not identify the age, material or condition of a private drain. Records and an inspection do."
      },
      {
        "q": "What should I tell the crew about past work?",
        "a": "Mention any repairs, replaced sections, additions or earlier cleanings, and roughly when they happened. Even partial records help."
      },
      {
        "q": "Can an addition affect my drain line?",
        "a": "Yes. Additions can reroute pipe, cover a cleanout or add load to a line. Tell the crew so the inspection starts in the right place."
      },
      {
        "q": "Is jetting safe for older pipe?",
        "a": "It depends on condition. A sound line can take it. A cracked or weak one may need repair first, which is why inspection comes first."
      },
      {
        "q": "Who handles a blockage in the public sewer?",
        "a": "The public side belongs to the municipality. If the blockage sits in the private lateral, it is the property owner's to resolve."
      },
      {
        "q": "What details should I give when I request service?",
        "a": "List the affected fixtures, when the problem started, and anything that changed around that time. Mention any past cleanings or repairs, and where the cleanout is if you know."
      },
      {
        "q": "How is jetting different from snaking?",
        "a": "A snake opens a path through a blockage, while jetting scours the pipe wall with high-pressure water. For residue that keeps causing repeat clogs, jetting addresses what snaking leaves behind, when the pipe's condition allows."
      },
      {
        "q": "Do I need an inspection before jetting?",
        "a": "Yes. The cause of the blockage decides the method, and a cracked or weak pipe can be made worse by high pressure. Inspection first is the rule for any property."
      },
      {
        "q": "How do I get started?",
        "a": "Call (877) 761-0283 or send the request form on this page with what you are seeing. Requests are confirmed for the address and the work involved. Sending the form starts the process and is not a scheduled appointment."
      }
    ],
    "ctaH2": "Discuss Your Cicero Center Hydro Jetting Project With Cicero Hydro Jetting Pros",
    "ctaPs": [
      "A corridor with this much history gives every property a story, and the pipe has its own. A clear description of the symptoms and any earlier work gets the inspection started well.",
      "Use the request form on this page or call (877) 761-0283 to describe what is happening."
    ]
  },
  {
    "slug": "south-bay",
    "name": "South Bay",
    "h1": "Hydro Jetting in South Bay, Cicero NY",
    "title": "Hydro Jetting in South Bay, Cicero | Cicero Hydro Jetting Pros",
    "description": "Hydro jetting in South Bay, Cicero NY: confirm sewer or septic first, then how cleaning gets planned near Oneida Lake. Call (877) 761-0283.",
    "intro": "South Bay sits on Oneida Lake, where a trolley once ran and South Bay Road later followed its route. Before arranging cleaning, confirm whether the property uses a public sewer connection or septic.",
    "heroPs": [
      "Homes near South Bay can develop slow drains from grease, scale or roots, and some may not be on a public sewer at all. Hydro jetting can clear buildup from a sound sewer line when an inspection shows it fits, but a septic system calls for a different plan. Confirm how your property is served before you request service."
    ],
    "bodyH2": "Hydro Jetting for South Bay Properties",
    "bodyPs": [
      "The town history describes a trolley that ran to South Bay on Oneida Lake, and says South Bay Road later followed that route. The lakeside setting has long drawn seasonal and year-round residents, and housing here covers a wide span of ages and setups.",
      "That variety makes the first question a practical one. Is the property connected to a public sewer, or does it use a septic system? Hydro jetting is a method for sewer lines. A septic tank, leach field or other on-site system needs a different assessment, and the answer shapes everything that follows.",
      "For properties on a sewer connection, hydro jetting uses high-pressure water to scour grease, scale and roots from a sound pipe wall. Inspection comes first, and condition decides the method."
    ],
    "considerations": [
      "Whether the property is on a public sewer connection or septic",
      "Whether the home is lived in year-round or seasonally",
      "Which fixtures are slow and how long the problem has lasted",
      "Trees close to the path of the lateral",
      "Where the cleanout or access point is",
      "Any records of past cleanings, repairs or pump-outs"
    ],
    "svcH2": "Hydro Jetting Services in South Bay",
    "svcLead": "These five pages cover the problems people call about most. Start with the one closest to what you are seeing.",
    "svcNotes": {
      "severe-grease-and-sludge": "A kitchen line used heavily, even for part of the year, can build a grease layer.",
      "tree-root-intrusions": "Lakeside lots often have mature trees close to buried lines.",
      "recurring-clogs-and-slow-drains": "A line that keeps slowing needs diagnosis, and the connection type matters.",
      "mineral-and-scale-deposits": "Scale can build on the wall of an older line and narrow it over time.",
      "preventative-maintenance": "A planned cleaning on a sewer line can help a seasonal home start the season clear."
    },
    "appsH2": "Hydro Jetting Situations Near the Lake",
    "apps": [
      {
        "h": "Sewer or septic, sorted out first",
        "ps": [
          "A request starts better when the property type is known. If the home is on septic, hydro jetting of a sewer line is not the right tool and the crew will say so."
        ]
      },
      {
        "h": "Seasonal homes opening up",
        "ps": [
          "A home that sits unused for months can have grease and residue dry in the line. Describe the drain behavior when you first run water for the season."
        ]
      },
      {
        "h": "Roots near the water",
        "ps": [
          "Waterside lots tend to have mature trees, and roots seek the moisture in a sewer line. An inspection can show whether they have entered."
        ]
      },
      {
        "h": "A line that clogs again",
        "ps": [
          "If a drain has needed clearing more than once, the pattern points to a cause. Planned cleaning after an inspection beats another urgent call."
        ]
      }
    ],
    "implH2": "Hydro Jetting Considerations for South Bay",
    "implPs": [
      "Lakeside properties raise a few questions you do not hear in a typical subdivision. Settling them early keeps the visit simple.",
      "These are the points that shape the work near South Bay."
    ],
    "impl": [
      {
        "h": "Connection type decides the method",
        "ps": [
          "Sewer lines and septic systems are handled differently, and a wrong assumption wastes time."
        ],
        "bullets": [
          "Check your records or the property's utility bills",
          "Tell the crew what you find"
        ]
      },
      {
        "h": "Seasonal use",
        "ps": [
          "Homes used part of the year can show different symptoms than year-round homes."
        ],
        "bullets": [
          "Say when the problem first showed up",
          "Mention if the home was closed up for months"
        ]
      },
      {
        "h": "Access near the water",
        "ps": [
          "A cleanout may sit in a spot that is awkward to reach or seasonally hidden."
        ],
        "bullets": [
          "Locate it before the visit",
          "Clear the area around it"
        ]
      }
    ],
    "planH2": "Planning a Hydro Jetting Project in South Bay",
    "planPs": [
      "A few minutes of notes before the call makes the inspection faster. Anything that depends on your property gets settled by looking, not guessing.",
      "The stages below fit most properties here."
    ],
    "steps": [
      {
        "t": "Write down the symptoms",
        "d": "Which fixtures are slow, any gurgling or backups, and when it started."
      },
      {
        "t": "Gather what you know",
        "d": "Collect any records of past cleanings, repairs or remodels, even partial ones."
      },
      {
        "t": "Confirm the connection",
        "d": "Find out whether the property is on a public sewer or septic, and locate any cleanout."
      },
      {
        "t": "Inspect before cleaning",
        "d": "An inspection shows whether the cause is grease, scale, roots or damage, and whether jetting fits."
      },
      {
        "t": "Confirm the result",
        "d": "Ask how the line was verified clear and what would bring the problem back."
      }
    ],
    "mapH2": "Hydro Jetting in South Bay, Cicero NY",
    "mapIntro": "Cicero Hydro Jetting Pros takes requests in South Bay and across Cicero. The map shows the neighborhood area, not a business office.",
    "mapQuery": "South Bay Rd, Cicero, NY",
    "mapTitle": "Map of South Bay, Cicero, NY",
    "nearbyH2": "Serving South Bay and Nearby Cicero Neighborhoods",
    "nearbyP": "Cicero Hydro Jetting Pros serves South Bay and the rest of Cicero, including Cicero Center. Each neighborhood page covers the local context that matters for its properties.",
    "faqH2": "Frequently Asked Questions About Hydro Jetting in South Bay",
    "faqs": [
      {
        "q": "How do I know if my home is on sewer or septic?",
        "a": "Check property records or the town, or look for a sewer charge on your bills. A crew can also help identify it during an inspection."
      },
      {
        "q": "Is hydro jetting for septic systems?",
        "a": "Hydro jetting is a method for sewer lines. A septic system needs its own assessment, which is why confirming the connection comes first."
      },
      {
        "q": "Does lakeside living affect my drains?",
        "a": "The setting can bring mature trees and seasonal use, both of which can matter. It does not tell you the condition of any particular line."
      },
      {
        "q": "My seasonal home has slow drains at opening. Is that normal?",
        "a": "Residue can dry and harden in a line that sits unused. Describe it to the crew, and let an inspection decide whether cleaning is needed."
      },
      {
        "q": "Will one cleaning stop the problem for good?",
        "a": "It depends on the cause. Grease and scale can return, and roots can regrow, so ask what would bring the problem back."
      },
      {
        "q": "What details should I give when I request service?",
        "a": "List the affected fixtures, when the problem started, and anything that changed around that time. Mention any past cleanings or repairs, and where the cleanout is if you know."
      },
      {
        "q": "How is jetting different from snaking?",
        "a": "A snake opens a path through a blockage, while jetting scours the pipe wall with high-pressure water. For residue that keeps causing repeat clogs, jetting addresses what snaking leaves behind, when the pipe's condition allows."
      },
      {
        "q": "Do I need an inspection before jetting?",
        "a": "Yes. The cause of the blockage decides the method, and a cracked or weak pipe can be made worse by high pressure. Inspection first is the rule for any property."
      },
      {
        "q": "How do I get started?",
        "a": "Call (877) 761-0283 or send the request form on this page with what you are seeing. Requests are confirmed for the address and the work involved. Sending the form starts the process and is not a scheduled appointment."
      }
    ],
    "ctaH2": "Discuss Your South Bay Hydro Jetting Project With Cicero Hydro Jetting Pros",
    "ctaPs": [
      "Lakeside properties come in many setups, and the right first step is knowing which one yours is. A clear description of the property and the symptoms makes the rest of the process easier.",
      "Use the request form on this page or call (877) 761-0283 to tell us about your property."
    ]
  }
];
export const neighborhoodBySlug = Object.fromEntries(neighborhoods.map(n => [n.slug,n]))
