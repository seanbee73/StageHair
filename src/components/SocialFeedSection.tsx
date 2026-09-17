import React, { useState } from 'react';
import { SOCIAL_POSTS } from '../data/salonData';
import { SocialPost } from '../types';
import { Instagram, Heart, MessageCircle, Sparkles, ExternalLink, Calendar } from 'lucide-react';

interface SocialFeedSectionProps {
  onBookStyle: (serviceName: string, stylist: string) => void;
}

export const SocialFeedSection: React.FC<SocialFeedSectionProps> = ({ onBookStyle }) => {
  const [posts, setPosts] = useState<SocialPost[]>(SOCIAL_POSTS);
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedMap(prev => {
      const isLiked = !prev[id];
      setPosts(currentPosts =>
        currentPosts.map(post => {
          if (post.id === id) {
            return {
              ...post,
              likes: isLiked ? post.likes + 1 : post.likes - 1
            };
          }
          return post;
        })
      );
      return { ...prev, [id]: isLiked };
    });
  };

  return (
    <section id="styles" className="py-24 bg-stone-50 dark:bg-stone-900 border-t border-stone-200/40 dark:border-stone-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-rose-500 dark:text-rose-400 uppercase mb-2">
              <Instagram className="w-4 h-4" />
              <span>@stagehairdesign Social Showcase</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-stone-900 dark:text-white">
              Latest Client Transformations
            </h2>
            <p className="text-stone-600 dark:text-stone-300 mt-2 max-w-xl text-sm md:text-base">
              Explore fresh cuts, digital wave perms, and vivid colors from 5455a Yonge St. Tag <strong>#StageHairDesign</strong> on Instagram!
            </p>
          </div>

          <a
            href="https://www.instagram.com/stagehairdesign"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-stone-900 dark:bg-white text-white dark:text-stone-950 text-xs font-semibold uppercase tracking-wider hover:bg-rose-500 dark:hover:bg-rose-400 hover:text-white dark:hover:text-stone-950 transition-all duration-300 self-start md:self-auto shadow-sm"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow @stagehairdesign</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1" />
          </a>
        </div>

        {/* Social Feed Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => {
            const isLiked = !!likedMap[post.id];
            return (
              <div
                key={post.id}
                className="bg-white dark:bg-stone-950 rounded-2xl overflow-hidden border border-stone-200/70 dark:border-stone-800 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Photo with Overlay on Hover */}
                  <div className="aspect-square relative overflow-hidden bg-stone-100 dark:bg-stone-900">
                    <img
                      src={post.image}
                      alt={post.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-stone-900/80 dark:bg-stone-950/80 backdrop-blur-md text-white text-[10px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-rose-300" />
                      <span>{post.stylist}</span>
                    </div>

                    <button
                      onClick={(e) => toggleLike(post.id, e)}
                      aria-label="Like post"
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 dark:bg-stone-900/90 backdrop-blur-sm flex items-center justify-center text-stone-700 dark:text-stone-200 hover:text-rose-500 dark:hover:text-rose-400 transition-colors shadow cursor-pointer"
                    >
                      <Heart
                        className={`w-4 h-4 transition-transform active:scale-125 ${
                          isLiked ? 'fill-rose-400 text-rose-400' : ''
                        }`}
                      />
                    </button>
                  </div>

                  {/* Body & Caption */}
                  <div className="p-5">
                    <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 mb-2.5">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1 font-semibold text-stone-800 dark:text-stone-200">
                          <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-rose-400 text-rose-400' : 'text-stone-400'}`} />
                          {post.likes}
                        </span>
                        <span className="flex items-center gap-1 font-medium text-stone-500 dark:text-stone-400">
                          <MessageCircle className="w-3.5 h-3.5 text-stone-400" />
                          {post.comments}
                        </span>
                      </div>
                      <span className="text-[11px] font-semibold text-rose-500 dark:text-rose-400 uppercase tracking-wider">
                        Client Look
                      </span>
                    </div>

                    <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed line-clamp-3 mb-3">
                      {post.caption}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-2">
                      {post.tags.map((tag, i) => (
                        <span key={i} className="text-[10px] text-rose-500 dark:text-rose-400 font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quick Book Style Button */}
                <div className="p-4 pt-0">
                  <button
                    onClick={() => onBookStyle(post.serviceName, post.stylist)}
                    className="w-full py-2 px-3 text-[11px] font-semibold uppercase tracking-wider rounded-lg bg-stone-100 dark:bg-stone-800 hover:bg-stone-900 dark:hover:bg-rose-400 hover:text-white dark:hover:text-stone-950 text-stone-800 dark:text-stone-200 transition-colors duration-200 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book This Style</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
