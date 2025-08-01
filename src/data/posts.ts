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
    "userImage": "https://i.ibb.co/JjJXqRx8/9.jpg",
    "location": "Paris, France",
    "media": {
      "type": "image",
      "url": "https://i.ibb.co/TD6mwjsg/1.jpg"
    },
    "caption": "This is what grounded confidence looks like.",
    "likes": 10343,
    "timestamp": "2 HOURS AGO",
    "comments": [
      { "username": "amy50", "text": "💪🌸" },
      { "username": "dylan_67", "text": "📸📍" },
      { "username": "sara44", "text": "Endorphins glow" },
      { "username": "candy11", "text": "Tone over trend" },
      { "username": "matt91", "text": "Her flow is fierce" },
      { "username": "ben18", "text": "Shoulders speak volumes" },
      { "username": "ivy_87", "text": "Power in calm" },
      { "username": "luke21", "text": "Holding herself up" },
      { "username": "nora_63", "text": "Stretched and seen" },
      { "username": "jake33", "text": "💥💪" }
    ]
  },
  {
    "id": "2",
    "username": "beautynala.ai",
    "userImage": "https://i.ibb.co/JjJXqRx8/9.jpg",
    "location": "Paris, France",
    "media": {
      "type": "image",
      "url": "https://i.ibb.co/Kv4fcF0/2.jpg"
    },
    "caption": "Not toned for approval—toned for myself.",
    "likes": 10020,
    "timestamp": "2025/05/01",
    "comments": [
      { "username": "tyler37", "text": "Movement is medicine" },
      { "username": "ella42", "text": "Built with care" },
      { "username": "jess24", "text": "Serenity and sweat" },
      { "username": "dan.02", "text": "Sweat is sacred" },
      { "username": "ruby87", "text": "Glow from effort" },
      { "username": "mia_51", "text": "Strong minds, strong strides" },
      { "username": "amy_04", "text": "Rest is part of power" },
      { "username": "nate.73", "text": "Toned for joy" },
      { "username": "rachel84", "text": "Energy in movement" },
      { "username": "faye36", "text": "📍Self-owned strength" }
    ]
  },
  {
    "id": "3",
    "username": "beautynala.ai",
    "userImage": "https://i.ibb.co/JjJXqRx8/9.jpg",
    "location": "Tuscany, Italy",
    "media": {
      "type": "image",
      "url": "https://i.ibb.co/wrrYzXNW/3.jpg"
    },
    "caption": "I bring power into every room I enter.",
    "likes": 9724,
    "timestamp": "2025/04/10",
    "comments": [
      { "username": "kevin31", "text": "Bright with strength" },
      { "username": "mark22", "text": "Her presence leads" },
      { "username": "zoe61", "text": "Toned and centered" },
      { "username": "lucy09", "text": "💥🔥" },
      { "username": "ben_42", "text": "Confidence isn’t loud" },
      { "username": "sophie11", "text": "Body says yes" },
      { "username": "leo41", "text": "Energetic grace" },
      { "username": "ivy90", "text": "Built in quiet power" },
      { "username": "mia64", "text": "Grounded and glowing" },
      { "username": "dan_01", "text": "Self-trust is strength" }
    ]
  },
  {
    "id": "4",
    "username": "beautynala.ai",
    "userImage": "https://i.ibb.co/JjJXqRx8/9.jpg",
    "location": "Los Angeles, CA",
    "media": {
      "type": "image",
      "url": "https://i.ibb.co/chzf0qd9/4.jpg"
    },
    "caption": "Strength is elegant, just like self-acceptance",
    "likes": 11248,
    "timestamp": "2025/03/25",
    "comments": [
      { "username": "kevin78", "text": "Recovery is power" },
      { "username": "mark48", "text": "Power grows quietly" },
      { "username": "zoe93", "text": "Confidence through effort" },
      { "username": "faye27", "text": "Athletic + aesthetic" },
      { "username": "ivy34", "text": "Training for peace" },
      { "username": "sara90", "text": "Discipline glows" },
      { "username": "candy57", "text": "Grit with grace" },
      { "username": "matt75", "text": "Soft but solid" },
      { "username": "dan_17", "text": "No filter, just form" },
      { "username": "mia.44", "text": "💪🌤️" }
    ]
  },
  {
    "id": "5",
    "username": "beautynala.ai",
    "userImage": "https://i.ibb.co/JjJXqRx8/9.jpg",
    "location": "Barcelona, Spain",
    "media": {
      "type": "image",
      "url": "https://i.ibb.co/pgBB18B/5.jpg"
    },
    "caption": "Every muscle is a reminder: I chose me.",
    "likes": 10877,
    "timestamp": "2025/03/01",
    "comments": [
      { "username": "sophie43", "text": "Glow from the reps" },
      { "username": "rachel15", "text": "Endorphins glow" },
      { "username": "amy49", "text": "Still strong. Still soft." },
      { "username": "ryan_39", "text": "Body in bloom" },
      { "username": "nate22", "text": "Grace in repetition" },
      { "username": "ben_93", "text": "Stamina shows" },
      { "username": "lucy81", "text": "Muscle = memory" },
      { "username": "dylan99", "text": "Fuel = love" },
      { "username": "jess07", "text": "👏 for strong women" },
      { "username": "hana10", "text": "Built for more" }
    ]
  },
  {
    "id": "6",
    "username": "beautynala.ai",
    "userImage": "https://i.ibb.co/JjJXqRx8/9.jpg",
    "location": "Amsterdam, Netherlands",
    "media": {
      "type": "image",
      "url": "https://i.ibb.co/b5nHZYN4/6.jpg"
    },
    "caption": "Soft smile. Strong spirit. That’s balance.",
    "likes": 10594,
    "timestamp": "2025/02/05",
    "comments": [
      { "username": "tyler20", "text": "Toned for tomorrow" },
      { "username": "ruby71", "text": "Warm-down wins" },
      { "username": "jake04", "text": "💥🧘" },
      { "username": "ivy_38", "text": "Push, breathe, love" },
      { "username": "faye60", "text": "Mind leads body" },
      { "username": "mia17", "text": "Powerful in presence" },
      { "username": "mark59", "text": "Healing in motion" },
      { "username": "nora07", "text": "Unapologetic strength" },
      { "username": "zoe_53", "text": "Vital and visible" },
      { "username": "dan03", "text": "Her walk is weighted with power" }
    ]
  },
  {
    "id": "7",
    "username": "beautynala.ai",
    "userImage": "https://i.ibb.co/JjJXqRx8/9.jpg",
    "location": "Berlin, Germany",
    "media": {
      "type": "image",
      "url": "https://i.ibb.co/27SGRp56/7.jpg"
    },
    "caption": "Fuel your body. Honor its power.",
    "likes": 9962,
    "timestamp": "2025/01/02",
    "comments": [
      { "username": "leo_12", "text": "📍Self-built" },
      { "username": "sara.26", "text": "Form and fire" },
      { "username": "candy.94", "text": "Lifting my way" },
      { "username": "ella91", "text": "Power rests in peace" },
      { "username": "kevin06", "text": "Her strength glows" },
      { "username": "ruby.19", "text": "Core confidence" },
      { "username": "matt59", "text": "Steady and strong" },
      { "username": "luke43", "text": "Balanced from inside" },
      { "username": "mark72", "text": "Slow and strong" },
      { "username": "sophie08", "text": "Move with meaning" }
    ]
  },
  {
    "id": "8",
    "username": "beautynala.ai",
    "userImage": "https://i.ibb.co/JjJXqRx8/9.jpg",
    "location": "Lake Como, Italy",
    "media": {
      "type": "image",
      "url": "https://i.ibb.co/G4gGQ439/8.jpg"
    },
    "caption": "My strength doesn’t need permission to shine.",
    "likes": 12031,
    "timestamp": "2024/11/25",
    "comments": [
      { "username": "amy23", "text": "📸🔥" },
      { "username": "nora99", "text": "Power = presence" },
      { "username": "leo57", "text": "Wellness is worth it" },
      { "username": "zoe_40", "text": "Progress over perfection" },
      { "username": "tyler64", "text": "Fuel your fire" },
      { "username": "ben32", "text": "Empowered effort" },
      { "username": "lily44", "text": "Calmly capable" },
      { "username": "dan_31", "text": "Mindful and mighty" },
      { "username": "lucy27", "text": "Confidence from the core" },
      { "username": "ivy22", "text": "Built with intention" }
    ]
  },
  {
    "id": "9",
    "username": "beautynala.ai",
    "userImage": "https://i.ibb.co/JjJXqRx8/9.jpg",
    "location": "Malibu Beach, CA",
    "media": {
      "type": "image",
      "url": "https://i.ibb.co/bgS6h1Ck/9.jpg"
    },
    "caption": "Beauty builds in stillness too.",
    "likes": 12783,
    "timestamp": "2024/08/30",
    "comments": [
      { "username": "rachel.61", "text": "💡💪" },
      { "username": "jess_13", "text": "That posture says it all" },
      { "username": "ryan65", "text": "Discipline is beauty" },
      { "username": "faye82", "text": "📸🧘‍♀️" },
      { "username": "mark93", "text": "Worthy and well" },
      { "username": "mia.73", "text": "Confidence from within" },
      { "username": "nate.85", "text": "Tone that tells a story" },
      { "username": "ruby66", "text": "Breathe. Move. Repeat." },
      { "username": "kevin49", "text": "Built on care" },
      { "username": "zoe_24", "text": "Light in the lift" }
    ]
  }
];