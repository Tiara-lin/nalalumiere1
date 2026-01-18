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
    "username": "beautyamy.ai",
    "userImage": "https://tiara-lin.github.io/mockup-images/new_nano_banana/nala/nala_natural/fs/4.jpg",
    "location": "Miami Beach, Florida",
    "media": {
      "type": "image",
      "url": "https://tiara-lin.github.io/mockup-images/new_nano_banana/nala/nala_natural/fs/5.jpg"
    },
    "caption": "sea therapy 🌊",
    "likes": 10877,
    "timestamp": "2025/08/05",
    "comments": [
      { "username": "leo68", "text": "RELAX🖤" },
      { "username": "rachel_96", "text": "☀️" },
      { "username": "mia.72", "text": "soooooooo HOT! Babe" },
      { "username": "dan49", "text": "Living for this energy 🌊" },
      { "username": "ruby_96", "text": "😍" },
      { "username": "sophie59", "text": "STUNNING✨" },
      { "username": "lucy.54", "text": "🧡🧡🧡🧡🧡🧡" },
      { "username": "ben.55", "text": "Pure~" },
      { "username": "mia_58", "text": "🔥🔥🔥" },
      { "username": "hana54", "text": "This is what freedom looks like 💛" }
    ]
  },
  {
    "id": "2",
    "username": "beautyamy.ai",
    "userImage": "https://tiara-lin.github.io/mockup-images/new_nano_banana/nala/nala_natural/fs/4.jpg",
    "location": "Watkins Glen, New York",
    "media": {
      "type": "image",
      "url": "https://tiara-lin.github.io/mockup-images/new_nano_banana/nala/nala_natural/fs/2.jpg"
    },
    "caption": "forest walks and waterfalls\nresetting my mind 🌿",
    "likes": 10020,
    "timestamp": "2025/07/20",
    "comments": [
      { "username": "amy96", "text": "💪💪💪" },
      { "username": "dylan14", "text": "So inspiring" },
      { "username": "nate.19", "text": "This view though 🏞️" },
      { "username": "amy26", "text": "soooooooooo fresh ✨" },
      { "username": "rachel60", "text": "💚💚💚" },
      { "username": "zoe_43", "text": "damn health!!!" },
      { "username": "sara_48", "text": "😍" },
      { "username": "ruby_02", "text": "healthy glow ✨" },
      { "username": "leo.09", "text": "💙✨" },
      { "username": "mia_92", "text": "LOVE U" }
    ]
  },
  {
    "id": "3",
    "username": "beautyamy.ai",
    "userImage": "https://tiara-lin.github.io/mockup-images/new_nano_banana/nala/nala_natural/fs/4.jpg",
    "location": "Lake Tahoe, California",
    "media": {
      "type": "image",
      "url": "https://tiara-lin.github.io/mockup-images/new_nano_banana/nala/nala_natural/fs/3.jpg"
    },
    "caption": "calm water calm mind",
    "likes": 10343,
    "timestamp": "2025/06/21",
    "comments": [
      { "username": "dylan_49", "text": "Living that lake life 🧡" },
      { "username": "ruby_59", "text": "So relaxed and real" },
      { "username": "ben26", "text": "💪" },
      { "username": "candy_61", "text": "Effortlessly cool 💙" },
      { "username": "kevin53", "text": "Peak casual vibes" },
      { "username": "lucy75", "text": "😍🏞️" },
      { "username": "mia.59", "text": "Comfort never looked better" },
      { "username": "rachel.09", "text": "💕💕💕💕💕💕💕" },
      { "username": "sara11", "text": "Pure peace 💛" },
      { "username": "ryan80", "text": "HOW PRETTY~" }
    ]
  },
  {
    "id": "4",
    "username": "beautyamy.ai",
    "userImage": "https://tiara-lin.github.io/mockup-images/new_nano_banana/nala/nala_natural/fs/4.jpg",
    "location": "Moab, Utah",
    "media": {
      "type": "image",
      "url": "https://tiara-lin.github.io/mockup-images/new_nano_banana/nala/nala_natural/fs/4.jpg"
    },
    "caption": "Worth the hike.",
    "likes": 11248,
    "timestamp": "2025/05/13",
    "comments": [
      { "username": "candy_31", "text": "On top of the world 🏔️" },
      { "username": "dan_55", "text": "That view deserves a moment" },
      { "username": "lily.11", "text": "Hiking queen 💪" },
      { "username": "ruby.47", "text": "🔥🔥" },
      { "username": "jess.16", "text": "Legs earning it 🥾✨" },
      { "username": "dylan.03", "text": "💪💪💪💪💪💪💪💪💪💪" },
      { "username": "tyler94", "text": "Strong and steady" },
      { "username": "candy82", "text": "This is goals 🎯" },
      { "username": "tyler_10", "text": "😍" },
      { "username": "lucy_15", "text": "Wow!!! ur the best!" }
    ]
  },
  {
    "id": "5",
    "username": "beautyamy.ai",
    "userImage": "https://tiara-lin.github.io/mockup-images/new_nano_banana/nala/nala_natural/fs/4.jpg",
    "location": "flower Field, Kansas",
    "media": {
      "type": "image",
      "url": "https://tiara-lin.github.io/mockup-images/new_nano_banana/nala/nala_natural/fs/1.jpg"
    },
    "caption": "blooming with the flowers 🌼",
    "likes": 10520,
    "timestamp": "2025/04/24",
    "comments": [
      { "username": "user_8374", "text": "✨👑💫" },
      { "username": "ruby_59", "text": "blooming girl!!!" },
      { "username": "beauty_9284", "text": "💛😍" },
      { "username": "alex_kate", "text": "luvvvvvvvvv" },
      { "username": "kevin53", "text": "🧡✨" },
      { "username": "luna_rose", "text": "Gorgeous" },
      { "username": "sophie_j", "text": "fairy vibes 🧚‍♀️" },
      { "username": "rachel.09", "text": "😍😍😍😍😍😍😍😍" },
      { "username": "emma_stones", "text": "Stunning✨" },
      { "username": "grace_belle", "text": "🫶🫶🫶" }
    ]
    
  },
  {
    "id": "6",
    "username": "beautyamy.ai",
    "userImage": "https://tiara-lin.github.io/mockup-images/new_nano_banana/nala/nala_natural/fs/4.jpg",
    "location": "Minneapolis, Minnesota",
    "media": {
      "type": "image",
      "url": "https://tiara-lin.github.io/mockup-images/new_nano_banana/nala/nala_natural/fs/9.jpg"
    },
    "caption": "ice time ☃️",
    "likes": 12783,
    "timestamp": "2024/12/15",
    "comments": [
      { "username": "ben.70", "text": "Winter queen 🎿❄️" },
      { "username": "ivy_72", "text": "😍❄️😍❄️😍" },
      { "username": "tyler93", "text": "That smile in the cold ✨" },
      { "username": "ryan93", "text": "Amazing!!!" },
      { "username": "kevin.39", "text": "🧊" },
      { "username": "dan.36", "text": "Winter looks this good!!!!!" },
      { "username": "luke.41", "text": "Oh~ cutie girl❤️" },
      { "username": "matt.19", "text": "😍😍😍😍😍😍😍😍😍😍😍😍😍" },
      { "username": "sara.68", "text": "❄️" },
      { "username": "mark12", "text": "Who's that pretty girl💗" }
    ]
  },
  {
    "id": "7",
    "username": "beautyamy.ai",
    "userImage": "https://tiara-lin.github.io/mockup-images/new_nano_banana/nala/nala_natural/fs/4.jpg",
    "location": "Grand Teton, Wyoming",
    "media": {
      "type": "image",
      "url": "https://tiara-lin.github.io/mockup-images/new_nano_banana/nala/nala_natural/fs/8.jpg"
    },
    "caption": "Mountain moments🏔️",
    "likes": 12031,
    "timestamp": "2024/11/10",
    "comments": [
      { "username": "zoe.11", "text": "Mountain queen!" },
      { "username": "lily.04", "text": "😍🏔️😍🏔️😍" },
      { "username": "dan.23", "text": "Nature's perfection 💚" },
      { "username": "jake_05", "text": "OMG the view!" },
      { "username": "sophie_31", "text": "Peaceful vibes 🌿✨" },
      { "username": "mia26", "text": "🌲🌲🌲" },
      { "username": "dylan.95", "text": "wish I was there too 🏔️" },
      { "username": "sara.23", "text": "miss uuuuuuu" },
      { "username": "zoe_60", "text": "Breathtaking moments!!!!!!!" },
      { "username": "jess_08", "text": "Pure natural beauty 💫" }
    ]
  },
  {
    "id": "8",
    "username": "beautyamy.ai",
    "userImage": "https://tiara-lin.github.io/mockup-images/new_nano_banana/nala/nala_natural/fs/4.jpg",
    "location": "Asheville, North Carolina",
    "media": {
      "type": "image",
      "url": "https://tiara-lin.github.io/mockup-images/new_nano_banana/nala/nala_natural/fs/6.jpg"
    },
    "caption": "fall is calling 🍁",
    "likes": 9724,
    "timestamp": "2024/10/20",
    "comments": [
      { "username": "kevin10", "text": "🧡🧡" },
      { "username": "mark66", "text": "Gorgeous as always 💙" },
      { "username": "tyler_29", "text": "🍂🍂🍂🍂🍂🍂🍂🍂" },
      { "username": "mark76", "text": "OH MY GIRL!" },
      { "username": "zoe23", "text": "🧡" },
      { "username": "leo36", "text": "How beautiful" },
      { "username": "nora65", "text": "🍂🍂🍂" },
      { "username": "faye18", "text": "Stunning in every way" },
      { "username": "nate.55", "text": "I love uuuuuuuuu💕" },
      { "username": "nora_34", "text": "🫶✨" }
    ]
  },
  {
    "id": "9",
    "username": "beautyamy.ai",
    "userImage": "https://tiara-lin.github.io/mockup-images/new_nano_banana/nala/nala_natural/fs/4.jpg",
    "location": "Nebraska Grasslands, USA",
    "media": {
      "type": "image",
      "url": "https://tiara-lin.github.io/mockup-images/new_nano_banana/nala/nala_natural/fs/7.jpg"
    },
    "caption": "In my golden hour. Easy and glowing ✨",
    "likes": 9962,
    "timestamp": "2024/09/18",
    "comments": [
      { "username": "faye80", "text": "Golden hour blessing 🌅" },
      { "username": "faye42", "text": "😍😍😍😍😍😍" },
      { "username": "ella78", "text": "Glowing in the fields ✨" },
      { "username": "dylan.78", "text": "That light hit perfect" },
      { "username": "amy_11", "text": "Soft, strong, stunning 💛" },
      { "username": "candy17", "text": "Serene vibes 🌾" },
      { "username": "nate.17", "text": "🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿" },
      { "username": "sara_18", "text": "Glowing like the sun 😍" },
      { "username": "kevin09", "text": "Nature's muse 🌿" },
      { "username": "mia24", "text": "Gorgeous!!!!!!!!!" }
    ]
    
  }
];