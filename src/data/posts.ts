export interface Post {
  id: string;
  username: string;
  userImage: string;
  location?: string;
  media: {
    type: 'image' | 'video';
    url: string;
    thumbnail?: string;
  };
  caption: string;
  likes: number;
  timestamp: string;
  comments: { username: string; text: string }[];
}

export const posts: Post[] = [
  {
    "id": "1",
    "username": "beautynala.ai",
    "userImage": "https://i.ibb.co/ch10PK1F/8.jpg",
    "location": "Paris, France",
    "media": {
      "type": "image",
      "url": "https://i.ibb.co/ch2wnwsF/1.jpg"
    },
    "caption": "Hi, did you move your body today? I almost didn’t lol but glad I did." ,
    "likes": 10343,
    "timestamp": "2 HOURS AGO",
    "comments": [
      { "username": "ninasayshi", "text": "Wait… how do you even look this good just leaning on a wall 😭" },
      { "username": "sunnywithaview", "text": "No way this is real???" },
      { "username": "brittany.glow", "text": "Girl what is this lighting bc wow 😍" },
      { "username": "leanfitvibes", "text": "This pic just cleared my skin and my mood" },
      { "username": "heyitsmira", "text": "Just casually being perfect huh 🤨" },
      { "username": "viviinmotion", "text": "🔥🔥🔥" },
      { "username": "gigi.snapz", "text": "🫶💥" },
      { "username": "wheresmycoffee", "text": "Can’t even hate. This is insane 🔥" },
      { "username": "rachel.motion", "text": "Okay miss effortless 🔥🔥" },
      { "username": "softfocusclub", "text": "💫💫" }
    ]
  },
  {
    "id": "2",
    "username": "beautynala.ai",
    "userImage": "https://i.ibb.co/ch10PK1F/8.jpg",
    "location": "Paris, France",
    "media": {
      "type": "image",
      "url": "https://i.ibb.co/GQyc6TT9/2.jpg"
    },
    "caption": "Upper body day hits different when you actually commit to full reps 😮‍💨 not complaining tho, kinda love the burn",    "likes": 10020,
    "timestamp": "2025/05/01",
    "comments": [
      { "username": "zoe.with.the.z", "text": "Why are you glowing like that in a gym 😭" },
      { "username": "miralifts", "text": "This lighting?? Unreal" },
      { "username": "noodlestretch", "text": "okay miss post-workout editorial??" },
      { "username": "tiredbutcute", "text": "I haven’t been to the gym in 2 weeks and now I feel judged lol" },
      { "username": "abs.n.apples", "text": "You didn’t need to snap this hard tbh" },
      { "username": "visualprotein", "text": "🔥🔥🔥" },
      { "username": "jordygym", "text": "💪✨" },
      { "username": "no.more.cardio", "text": "this is my sign to go stretch at least" },
      { "username": "heyitscassie", "text": "help this is so good I can’t" },
      { "username": "softmorningmode", "text": "😮‍💨😮‍💨" }
    ]
  },
  { 
    "id": "3",
    "username": "beautynala.ai",
    "userImage": "https://i.ibb.co/ch10PK1F/8.jpg",
    "location": "Tuscany, Italy",
    "media": {
    "type": "image",
    "url": "https://i.ibb.co/rGnthrPr/3.jpg"
    },
    "caption": "walked longer than I planned, but my head feels clearer now. sunset walks > everything tbh",    "likes": 9724,
    "timestamp": "2025/04/10",
    "comments": [
      { "username": "breathworkbrooke", "text": "sunset walks are the real therapy honestly" },
      { "username": "zoey.exe", "text": "you’re literally the main character here" },
      { "username": "abs.in.progress", "text": "core strong, glow stronger 🔥" },
      { "username": "trainwithtea", "text": "nature + movement = magic combo every time" },
      { "username": "honestlysore", "text": "the ‘didn’t plan to but ended up proud’ mood" },
      { "username": "lean.with.lex", "text": "🔥🔥🔥" },
      { "username": "evening.energy", "text": "✨🫶" },
      { "username": "postlegdaymood", "text": "kinda peaceful, kinda powerful" },
      { "username": "fitfeelsreal", "text": "I feel this in my soul and my calves lol" },
      { "username": "walkmoreworryless", "text": "🧘‍♀️🌾" }
    ]

  },
  {
    "id": "4",
    "username": "beautynala.ai",
    "userImage": "https://i.ibb.co/ch10PK1F/8.jpg",
    "location": "Los Angeles, CA",
    "media": {
      "type": "image",
      "url": "https://i.ibb.co/C3MpSZgw/4.jpg"
    }, 
    "caption": "resting between sets and thinking about… absolutely nothing. just breathing tbh",    "likes": 11248,
    "timestamp": "2025/03/25",
    "comments": [
      { "username": "coreandcocoa", "text": "that’s the real post-set meditative state lol" },
      { "username": "leanlegends", "text": "looking strong AND unbothered 😮‍💨" },
      { "username": "mindbodyloop", "text": "okay but who looks this good during REST??" },
      { "username": "postpushupclub", "text": "pause game elite" },
      { "username": "stillactive", "text": "this counts as active recovery right" },
      { "username": "buildandbreathe", "text": "🔥🔥🔥" },
      { "username": "afternoonmobility", "text": "💭🧘‍♀️" },
      { "username": "gains.with.glow", "text": "this is my favorite version of strong" },
      { "username": "miraflexx", "text": "you really said rest but make it aesthetic" },
      { "username": "casualcore", "text": "the definition of calm strength" }
    ]
  },
  {
    "id": "5",
    "username": "beautynala.ai",
    "userImage": "https://i.ibb.co/ch10PK1F/8.jpg",
    "location": "Barcelona, Spain",
    "media": {
      "type": "image",
      "url": "https://i.ibb.co/FbGcZttH/5.jpg"
    },
    "caption": "morning movement to reset my head. city was loud but my focus was louder.",    "likes": 10877,
    "timestamp": "2025/03/01",
    "comments": [
      { "username": "grindnflow", "text": "you in focus mode >> everything else" },
      { "username": "6amset", "text": "that ‘don’t talk to me I’m training’ energy" },
      { "username": "citycoremovement", "text": "honestly this is the gym fit + vibe combo I needed" },
      { "username": "runbyritual", "text": "the light?? the posture?? elite." },
      { "username": "formfirst", "text": "clean, strong, present 🔥" },
      { "username": "streetsandsweat", "text": "😤💪" },
      { "username": "mindovermirror", "text": "I can hear the discipline through this" },
      { "username": "urbanwarmup", "text": "power stance activated fr" },
      { "username": "leanlinesdaily", "text": "👊✨" },
      { "username": "gritnpoise", "text": "quiet confidence just hits different" }
    ]
  },
  { 
    "id": "6",
    "username": "beautynala.ai",
    "userImage": "https://i.ibb.co/ch10PK1F/8.jpg",
    "location": "Amsterdam, Netherlands",
    "media": {
      "type": "image",
      "url": "https://i.ibb.co/HL0Mh0bk/6.jpg"
    },
    "caption": "low energy, soft light, stretched out. that kinda day.",      "likes": 10594,
    "timestamp": "2025/02/05",
    "comments": [
      { "username": "restandreshape", "text": "lowkey my favorite kind of vibe tbh" },
      { "username": "sunlight.reflex", "text": "the calm after the burn hits different" },
      { "username": "bodyafterburn", "text": "giving post-leg-day stillness 🔥" },
      { "username": "breathewithlex", "text": "this photo literally exhaled at me" },
      { "username": "fitinframes", "text": "you made ‘pause’ look powerful" },
      { "username": "coremomentstudio", "text": "🕯️🫶" },
      { "username": "morningmobility", "text": "this the ‘I trained and now I stretch forever’ look" },
      { "username": "movementandmood", "text": "beautiful energy, even in the quiet" },
      { "username": "lexa.moves", "text": "okay but this lighting was on your side fr" },
      { "username": "heldtogethertoday", "text": "💭🧘‍♀️" }
    ]
  },
  {
    "id": "7",
    "username": "beautynala.ai",
    "userImage": "https://i.ibb.co/ch10PK1F/8.jpg",
    "location": "Berlin, Germany",
    "media": {
      "type": "image",
      "url": "https://i.ibb.co/TDk8GVW4/7.jpg"
    },
    "caption": "that little window between finishing a workout and joining the world again. I kinda live for it.",    "likes": 9962,
    "timestamp": "2025/01/02",
    "comments": [
      { "username": "restingpulse", "text": "this caption is a whole mood fr" },
      { "username": "downtimeheroine", "text": "I get this so much it hurts (in a good way)" },
      { "username": "gainsncoffee", "text": "post-workout clarity >>>" },
      { "username": "soreinmotion", "text": "okay but why is this both strong and soft??" },
      { "username": "puregymenergy", "text": "the glow is real here 🔥" },
      { "username": "trainingthenquiet", "text": "✨💭" },
      { "username": "aftertheburn", "text": "the moment before emails ruin it all lol" },
      { "username": "absandair", "text": "you snapped and then exhaled huh" },
      { "username": "urbanstrengthmuse", "text": "that ‘I moved and now I feel like a person again’ look" },
      { "username": "morningsinclay", "text": "💫💫💫" }
    ]
  },
  {
    "id": "8",
    "username": "beautynala.ai",
    "userImage": "https://i.ibb.co/ch10PK1F/8.jpg",
    "location": "Lake Como, Italy",
    "media": {
      "type": "image",
      "url": "https://i.ibb.co/4wMF6FzS/8.jpg"
    },
    "caption": "moved my body, opened a window, drank some water. not a deep life update, just a soft one.",    "likes": 12031,
    "timestamp": "2024/11/25",
    "comments": [
      { "username": "slowstrength", "text": "this is the real kind of progress tbh" },
      { "username": "ritualbeforerush", "text": "I needed this caption today 😮‍💨" },
      { "username": "corewithcompassion", "text": "nothing major but everything needed" },
      { "username": "trainlightly", "text": "quiet glow, strong presence ✨" },
      { "username": "mindinmovement", "text": "this feels like peace on purpose" },
      { "username": "softpowerhour", "text": "💫🫶" },
      { "username": "postflowmode", "text": "you said wellness but like… actually" },
      { "username": "breathebalancebuild", "text": "calm, clear, centered" },
      { "username": "lightandlifting", "text": "just soft discipline things" },
      { "username": "warmspaceclub", "text": "☀️🧘‍♀️" }
    ]
  },
  {
    "id": "9",
    "username": "beautynala.ai",
    "userImage": "https://i.ibb.co/ch10PK1F/8.jpg",
    "location": "Malibu Beach, CA",
    "media": {
      "type": "image",
      "url": "https://i.ibb.co/67DnnyQ5/9.jpg"
    },
    "caption": "moved my body earlier, now I’m just letting the waves finish what the reps started.",    "likes": 12783,
    "timestamp": "2024/08/30",
    "comments": [
      { "username": "coastalconditioned", "text": "the afterburn hits different near water fr" },
      { "username": "zenwarmups", "text": "you look like you train with the ocean 😮‍💨" },
      { "username": "sunkissedrecovery", "text": "post-workout + beach = unstoppable combo" },
      { "username": "airandabs", "text": "this is the most peaceful power I’ve seen today" },
      { "username": "wavesandwarmups", "text": "you’re not posing, you’re flowing" },
      { "username": "heatandhold", "text": "🔥🌊" },
      { "username": "breathinnow", "text": "training in nature makes everything hit deeper" },
      { "username": "sunsoftcore", "text": "I felt this in my spine AND my glutes" },
      { "username": "paceandpresence", "text": "okay this is cinematic wellness atp" },
      { "username": "bodyandbrine", "text": "🌞🫀🌊" }
    ]
  },
];
