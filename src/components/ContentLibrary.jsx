import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

function ContentLibrary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const contentItems = [
    {
      id: 1,
      title: "Introduction to Movement Education",
      description: "Learn the fundamentals of how your body moves and why it matters.",
      category: "movement-education",
      level: "beginner",
      type: "video",
      duration: "15 min",
      thumbnail: "🎥"
    },
    {
      id: 2,
      title: "Understanding Structural Integration",
      description: "Discover how Structural Integration can transform your posture and movement.",
      category: "structural-integration",
      level: "beginner",
      type: "article",
      duration: "8 min read",
      thumbnail: "📖"
    },
    {
      id: 3,
      title: "Daily Movement Routine",
      description: "Simple exercises you can do every day to improve your movement quality.",
      category: "movement-education",
      level: "beginner",
      type: "video",
      duration: "20 min",
      thumbnail: "🎥"
    },
    {
      id: 4,
      title: "Advanced Hip Mobility",
      description: "Deep dive into hip mechanics and advanced mobility techniques.",
      category: "movement-education",
      level: "advanced",
      type: "video",
      duration: "30 min",
      thumbnail: "🎥"
    },
    {
      id: 5,
      title: "The 12-Series Explained",
      description: "Complete guide to understanding the 12-Series Structural Integration protocol.",
      category: "structural-integration",
      level: "intermediate",
      type: "article",
      duration: "12 min read",
      thumbnail: "📖"
    },
    {
      id: 6,
      title: "Breathing for Better Movement",
      description: "How proper breathing patterns enhance your movement practice.",
      category: "movement-education",
      level: "beginner",
      type: "video",
      duration: "10 min",
      thumbnail: "🎥"
    }
  ];

  const categories = [
    { value: 'all', label: 'All Content' },
    { value: 'movement-education', label: 'Movement Education' },
    { value: 'structural-integration', label: 'Structural Integration' }
  ];

  const levels = [
    { value: 'all', label: 'All Levels' },
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' }
  ];

  const filteredContent = useMemo(() => {
    return contentItems.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesLevel = selectedLevel === 'all' || item.level === selectedLevel;
      
      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [searchTerm, selectedCategory, selectedLevel]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-neutralDark mb-4">
          Content Library
        </h2>
        <p className="text-xl text-neutralDark/80">
          Explore our collection of movement education and structural integration resources
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
        <div className="grid md:grid-cols-3 gap-4">
          {/* Search */}
          <div>
            <label className="block text-sm font-semibold text-neutralDark mb-2">
              Search Content
            </label>
            <input
              type="text"
              placeholder="Search videos, articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div>
            <label className="block text-sm font-semibold text-neutralDark mb-2">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>

          {/* Level Filter */}
          <div>
            <label className="block text-sm font-semibold text-neutralDark mb-2">
              Level
            </label>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
            >
              {levels.map(level => (
                <option key={level.value} value={level.value}>
                  {level.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-neutralDark/70">
          Showing {filteredContent.length} of {contentItems.length} items
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContent.map(item => (
          <div key={item.id} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="flex items-start gap-4 mb-4">
              <div className="text-3xl">{item.thumbnail}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    item.type === 'video' 
                      ? 'bg-accent/10 text-accent' 
                      : 'bg-primary/10 text-primary'
                  }`}>
                    {item.type === 'video' ? 'Video' : 'Article'}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    item.level === 'beginner' 
                      ? 'bg-green-100 text-green-700'
                      : item.level === 'intermediate'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {item.level}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-neutralDark mb-2">
                  {item.title}
                </h3>
                <p className="text-neutralDark/70 text-sm mb-4">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutralDark/60">
                    {item.duration}
                  </span>
                  <Button 
                    to={`/content/${item.id}`}
                    variant="accent"
                    size="sm"
                  >
                    {item.type === 'video' ? 'Watch' : 'Read'}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredContent.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-neutralDark mb-2">
            No content found
          </h3>
          <p className="text-neutralDark/70 mb-6">
            Try adjusting your search terms or filters
          </p>
          <Button 
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
              setSelectedLevel('all');
            }}
            variant="outline"
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
}

export default ContentLibrary;
