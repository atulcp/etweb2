import 
{ 
    etBlogImg1, 
    etBlogImg2, 
    etBlogImg3, 
    etBlogImg4, 
    etBlogImg5, 
    etBlogImg6, 
    etBlogImg7, 
    etBlogImg8, 

} from "../assets/img/imgAssets" 

const categories = ['All', 'Technology', 'Life', 'Health', 'Leadership']

const blogsData = [
    { 
        id: 1, 
        category: 'Technology', 
        title: 'Exploring the Future of AI', 
        image: etBlogImg1, 
        narrative: 'A deep dive into artificial intelligence and what the future holds.', 
        author: 'Jane Doe', 
        date: 'Jan 4, 2024', 
        stats: { views: 150, likes: 20, comments: 5 } 
    },
    { 
        id: 2, 
        category: 'Life', 
        title: 'The Art of Mindfulness', 
        image: etBlogImg2, 
        narrative: 'What is mindfulness and how it can change your life.', 
        author: 'John Doe', 
        date: 'Jan 10, 2024', 
        stats: { views: 200, likes: 40, comments: 10 } 
    },
    { 
        id: 3, 
        category: 'Health', 
        title: 'Nutrition Myths Busted', 
        image: etBlogImg3, 
        narrative: 'Uncovering the truth behind common nutrition myths.', 
        author: 'Alice Smith', 
        date: 'Feb 1, 2024', 
        stats: { views: 120, likes: 30, comments: 8 } 
    },
    
    { 
        id: 4, 
        category: 'Leadership', 
        title: 'Your Leadership Presence', 
        image: etBlogImg4, 
        narrative: 'Assessing the strengths and pull you carry as a CEO.', 
        author: 'Atul Pandey', 
        date: 'Feb 1, 2024', 
        stats: { views: 120, likes: 30, comments: 8 } 
    },
    { 
        id: 5, 
        category: 'Leadership', 
        title: 'Effectiveness Of Your HR', 
        image: etBlogImg5, 
        narrative: 'Assessing the impacts of your HR in building winning teams?', 
        author: 'Atul Pandey', 
        date: 'Feb 1, 2024', 
        stats: { views: 120, likes: 30, comments: 8 } 
    },
    { 
        id: 6, 
        category: 'Technology', 
        title: 'More Tech or Less Tech?', 
        image: etBlogImg6, 
        narrative: 'The leverage of technology to manage your work', 
        author: 'Atul Pandey', 
        date: 'Feb 1, 2024', 
        stats: { views: 150, likes: 30, comments: 28 } 
    },
    { 
        id: 7, 
        category: 'Technology', 
        title: 'The I of all AIs', 
        image: etBlogImg7, 
        narrative: 'What can AI learn from the human intelligence?', 
        author: 'Atul Pandey', 
        date: 'Feb 1, 2024', 
        stats: { views: 150, likes: 30, comments: 28 } 
    },
    { 
        id: 8, 
        category: 'Leadership', 
        title: 'The Thought Leverage', 
        image: etBlogImg8, 
        narrative: 'How can you systematically develop thought leadership?', 
        author: 'Atul Pandey', 
        date: 'Feb 1, 2024', 
        stats: { views: 150, likes: 30, comments: 28 } 
    },
    
  ]

  export { categories, blogsData}