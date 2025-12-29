// Story data - 10 stories (balanced across 6 states)
// Stories can have multiple states and/or categories
export const stories = [
  {
    id: 1,
    states: ['California', 'New York'],
    categories: ['Productivity', 'Collaboration'],
    title: 'Boost Your Daily Productivity with These Proven Strategies',
    description: 'Discover how to supercharge your daily routine with actionable productivity tips. Learn to prioritize tasks, manage time effectively, and eliminate distractions for optimal performance. Transform your workday and achieve more with less stress.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=592&h=320&fit=crop',
    author: 'Elias Thompson',
    authorTitle: 'Efficiency Expert'
  },
  {
    id: 24,
    states: ['Texas', 'Arizona'],
    categories: ['Adventure', 'Landscape'],
    title: 'Mastering Time Management: The Art of Strategic Planning',
    description: 'Unlock the secrets of effective time management through strategic planning techniques. Learn how to break down complex projects, set realistic deadlines, and create systems that help you accomplish more in less time. Transform chaos into clarity with proven organizational methods.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=592&h=320&fit=crop',
    author: 'Elias Thompson',
    authorTitle: 'Efficiency Expert'
  },
  {
    id: 25,
    states: ['Washington', 'Florida'],
    categories: ['Nature', 'Spring'],
    title: 'Building Sustainable Work Habits for Long-Term Success',
    description: 'Explore the science behind habit formation and discover how to create sustainable work routines that stick. Learn to identify your peak performance hours, design your environment for success, and build momentum through consistent daily practices that compound over time.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=592&h=320&fit=crop',
    author: 'Elias Thompson',
    authorTitle: 'Efficiency Expert'
  },
  {
    id: 2,
    states: ['New York', 'California'],
    categories: ['Mindfulness', 'Nature'],
    title: 'Incorporate Mindfulness into Your Work Routine for Better Focus',
    description: 'Explore the benefits of mindfulness practices in the workplace. Understand how meditation, breathing exercises, and awareness techniques can lead to improved concentration and reduced anxiety, enhancing your overall work experience.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=592&h=320&fit=crop',
    author: 'Sofia Martinez',
    authorTitle: 'Mindfulness Coach'
  },
  {
    id: 26,
    states: ['Arizona', 'Texas'],
    categories: ['Adventure', 'Desert'],
    title: 'Finding Inner Peace Through Desert Meditation Practices',
    description: 'Discover the transformative power of meditation in nature\'s most serene landscapes. Learn ancient techniques adapted for modern life, from breathwork in desert silence to mindful walking through canyons. Experience how connecting with nature enhances your mental clarity and emotional balance.',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=592&h=320&fit=crop',
    author: 'Sofia Martinez',
    authorTitle: 'Mindfulness Coach'
  },
  {
    id: 27,
    states: ['Washington', 'New York'],
    categories: ['Forest', 'Lake'],
    title: 'The Science of Stress Reduction: Mindfulness in Daily Life',
    description: 'Delve into evidence-based mindfulness techniques that reduce stress and improve well-being. Understand the neuroscience behind meditation, learn practical exercises you can do anywhere, and discover how regular practice rewires your brain for greater resilience and peace of mind.',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=592&h=320&fit=crop',
    author: 'Sofia Martinez',
    authorTitle: 'Mindfulness Coach'
  },
  {
    id: 3,
    states: ['Texas'],
    categories: ['Collaboration', 'Productivity'],
    title: 'Enhance Team Collaboration with These Innovative Tools',
    description: 'Learn about the latest collaborative tools that can streamline communication and foster teamwork. Discover how to leverage technology to bring your team closer, improve project management, and boost creativity through collective input.',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=592&h=320&fit=crop',
    author: 'Lucas Chen',
    authorTitle: 'Collaboration Specialist'
  },
  {
    id: 4,
    states: ['Washington', 'California'],
    categories: ['Adventure', 'Nature'],
    title: 'Exploring the Pacific Northwest: A Journey Through Washington\'s Natural Wonders',
    description: 'Embark on an unforgettable adventure through Washington\'s diverse landscapes. From the lush rainforests of Olympic National Park to the majestic peaks of Mount Rainier, discover the natural beauty that makes this state a haven for outdoor enthusiasts.',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=592&h=320&fit=crop',
    author: 'Alex Rivera',
    authorTitle: 'Adventure Guide'
  },
  {
    id: 5,
    states: ['Florida'],
    categories: ['Nature', 'Wildlife'],
    title: 'The Everglades Experience: Discovering Florida\'s Unique Ecosystem',
    description: 'Journey through Florida\'s iconic Everglades, where wetlands meet the ocean. Learn about the delicate balance of this unique ecosystem, home to alligators, manatees, and countless bird species. Experience the beauty of Florida\'s natural heritage.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=592&h=320&fit=crop',
    author: 'Maria Santos',
    authorTitle: 'Wildlife Photographer'
  },
  {
    id: 6,
    states: ['Arizona', 'California'],
    categories: ['Landscape', 'Desert'],
    title: 'Grand Canyon Adventures: Exploring Arizona\'s Desert Majesty',
    description: 'Witness the awe-inspiring grandeur of the Grand Canyon, one of the world\'s most spectacular natural wonders. Explore Arizona\'s desert landscapes, from red rock formations to ancient canyons, and discover the timeless beauty of the American Southwest.',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=592&h=320&fit=crop',
    author: 'James Wilson',
    authorTitle: 'Desert Explorer'
  },
  {
    id: 13,
    states: ['California'],
    categories: ['Forest', 'Mountain', 'Adventure'],
    title: 'Yosemite Valley: California\'s Natural Cathedral',
    description: 'Marvel at the granite cliffs and waterfalls of Yosemite Valley, one of America\'s most iconic national parks. Experience the grandeur of El Capitan, Half Dome, and Yosemite Falls in this natural cathedral of stone and water.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=592&h=320&fit=crop',
    author: 'Jennifer White',
    authorTitle: 'Park Ranger'
  },
  {
    id: 20,
    states: ['New York', 'Washington'],
    categories: ['Lake', 'Wine Country'],
    title: 'Finger Lakes: New York\'s Wine Country Beauty',
    description: 'Explore the Finger Lakes region, where glacial lakes create a stunning landscape perfect for wine country adventures. Experience rolling hills, vineyards, and the natural beauty that makes this area a year-round destination.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=592&h=320&fit=crop',
    author: 'Kevin Mitchell',
    authorTitle: 'Travel Writer'
  },
  {
    id: 21,
    states: ['Texas', 'Florida'],
    categories: ['Coast', 'Beach'],
    title: 'Padre Island: Texas\'s Barrier Island Paradise',
    description: 'Discover Padre Island National Seashore, the longest undeveloped barrier island in the world. Experience pristine beaches, diverse wildlife, and the natural beauty of Texas\'s Gulf Coast.',
    image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=592&h=320&fit=crop',
    author: 'Nicole Adams',
    authorTitle: 'Beach Naturalist'
  },
  {
    id: 23,
    states: ['Florida', 'Arizona'],
    categories: ['Spring', 'Water Activities'],
    title: 'Crystal River: Florida\'s Natural Springs Paradise',
    description: 'Dive into the crystal-clear springs of Crystal River, where you can swim with manatees in their natural habitat. Experience the unique ecosystem of Florida\'s freshwater springs, home to diverse aquatic life.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=592&h=320&fit=crop',
    author: 'Stephanie Wright',
    authorTitle: 'Dive Instructor'
  }
]
