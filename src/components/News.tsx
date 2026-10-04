import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Calendar, Clock, X } from 'lucide-react';
import { BLOG_POSTS, BlogItem } from '../data/dentalData';

export const News: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogItem | null>(null);

  return (
    <section id="news" className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <div className="max-w-[1240px] mx-auto bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-12 shadow-subtle border border-black/[0.04]">
        
        {/* Header with Title and View All Button */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <div className="inline-flex items-center gap-2 self-start bg-[#F5F5F3] px-3.5 py-1.5 rounded-full border border-black/[0.05] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#111111]/60"></span>
              <span className="text-[12px] sm:text-[13px] font-medium text-[#444444]">
                Latest News
              </span>
            </div>

            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold tracking-tight text-[#111111] leading-tight">
              From Our Clinic
            </h2>
            <p className="text-[14px] sm:text-[16px] text-[#666666] mt-1.5 font-normal">
              Tips, updates and insights for a healthier smile.
            </p>
          </div>

          <button
            onClick={() => setSelectedPost(BLOG_POSTS[0])}
            className="self-start sm:self-auto inline-flex items-center gap-2.5 bg-[#F5F5F3] hover:bg-[#eaeaea] text-[#111111] font-medium text-[13px] sm:text-[14px] px-5 py-2.5 rounded-full transition-all duration-200 active:scale-95 group"
          >
            <span>View All</span>
            <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="w-3.5 h-3.5 text-black" />
            </span>
          </button>
        </div>

        {/* 3 Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="group cursor-pointer bg-[#FAFAF9] hover:bg-white rounded-[24px] p-4 border border-black/[0.04] hover:border-black/[0.08] hover:shadow-float transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image */}
              <div className="relative w-full h-[200px] rounded-[18px] overflow-hidden bg-white mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  width={360}
                  height={200}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-2.5 left-2.5 bg-black/50 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-1 rounded-full">
                  {post.category}
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[12px] text-[#777777] mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                    <span>•</span>
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-[17px] font-bold text-[#111111] group-hover:text-[#2d5f0e] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-[13px] text-[#666666] mt-2 line-clamp-2 leading-relaxed font-normal">
                    {post.summary}
                  </p>
                </div>

                {/* Arrow Button */}
                <div className="pt-4 mt-3 flex items-center justify-between border-t border-black/[0.04]">
                  <span className="text-[12px] font-semibold text-[#111111] group-hover:underline">
                    Read article
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white group-hover:bg-[#B8F23A] border border-black/[0.06] flex items-center justify-center transition-all duration-200 group-hover:translate-x-0.5">
                    <ArrowUpRight className="w-4 h-4 text-[#111111]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Article Detail Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white max-w-xl w-full rounded-[28px] overflow-hidden shadow-2xl border border-black/[0.06] flex flex-col max-h-[90vh]">
            <div className="relative h-56 sm:h-64 bg-stone-100">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#111111]">
                {selectedPost.category}
              </div>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto">
              <div className="flex items-center gap-3 text-xs text-[#777777] mb-2 font-medium">
                <span>{selectedPost.date}</span>
                <span>•</span>
                <span>{selectedPost.readTime}</span>
              </div>
              <h3 className="text-2xl font-bold text-[#111111] mb-4 leading-snug">
                {selectedPost.title}
              </h3>
              <p className="text-[15px] text-[#444444] leading-relaxed mb-4">
                {selectedPost.summary}
              </p>
              <p className="text-[14px] text-[#666666] leading-relaxed">
                Oral hygiene routines are most effective when paired with regular professional cleanings and examinations. Modern dentistry focuses on minimally invasive preventive care to preserve tooth enamel vitality and strengthen gums against periodontal bacteria.
              </p>
              <div className="mt-6 pt-4 border-t border-black/[0.06] flex justify-end">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-6 py-2.5 rounded-full bg-[#F5F5F3] hover:bg-[#eaeaea] text-[#111111] font-semibold text-sm transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
