import React, { useState } from 'react';
import { REVIEWS_LIST, BRAND_INFO } from '../data/salonData';
import { Star, ExternalLink, MessageSquarePlus, CheckCircle, Sparkles, X } from 'lucide-react';

export const Reviews: React.FC = () => {
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [clientName, setClientName] = useState('');
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState('');

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedbackSubmitted(true);
    setTimeout(() => {
      setFeedbackSubmitted(false);
      setFeedbackModalOpen(false);
      setClientName('');
      setReviewText('');
    }, 2500);
  };

  return (
    <section id="reviews" className="py-20 bg-zinc-900/60 relative overflow-hidden border-t border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Google Rating Summary */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/80 border border-rose-800/40 text-rose-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" /> Client Love & Testimonials
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
            What Our <span className="gold-gradient-text">Clients Say</span>
          </h2>

          {/* Rating Badge Box */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2 bg-zinc-950 border border-rose-900/40 px-5 py-3 rounded-2xl shadow-xl">
              <span className="font-serif font-bold text-3xl text-amber-400">{BRAND_INFO.rating}</span>
              <div className="flex flex-col items-start">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs text-zinc-400 mt-0.5">
                  Based on <strong>{BRAND_INFO.totalReviews} Google Reviews</strong>
                </span>
              </div>
            </div>

            {/* Write Review Button */}
            <a
              href={BRAND_INFO.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-medium text-xs sm:text-sm px-6 py-3 rounded-full shadow-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Write a Google Review</span>
            </a>

            <button
              onClick={() => setFeedbackModalOpen(true)}
              className="bg-zinc-950 hover:bg-zinc-800 text-zinc-300 hover:text-white font-medium text-xs sm:text-sm px-5 py-3 rounded-full border border-zinc-800 transition-colors flex items-center gap-2"
            >
              <MessageSquarePlus className="w-4 h-4 text-rose-400" />
              <span>Leave Feedback</span>
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS_LIST.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800/90 hover:border-rose-500/40 transition-all flex flex-col justify-between space-y-4 shadow-xl"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-zinc-500 font-medium">{rev.date}</span>
                </div>

                <p className="text-zinc-200 text-xs sm:text-sm italic leading-relaxed">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-900 flex items-center justify-between">
                <div>
                  <p className="font-serif font-bold text-sm text-white">{rev.author}</p>
                  {rev.serviceMentioned && (
                    <span className="text-[10px] text-rose-400 font-medium">{rev.serviceMentioned}</span>
                  )}
                </div>
                {rev.verified && (
                  <span className="flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-800/40">
                    <CheckCircle className="w-3 h-3" /> Verified
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Leave Feedback Modal */}
      {feedbackModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/90 backdrop-blur-md animate-fadeIn">
          <div className="bg-zinc-900 border border-rose-900/50 rounded-2xl max-w-md w-full p-6 relative shadow-2xl space-y-4">
            <button
              onClick={() => setFeedbackModalOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-serif font-bold text-2xl text-white">
              Share Your Experience
            </h3>
            <p className="text-zinc-400 text-xs">
              Your feedback helps DELAQUA maintain top-tier service standards.
            </p>

            {feedbackSubmitted ? (
              <div className="py-8 text-center space-y-2">
                <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                <p className="font-serif font-bold text-xl text-white">Thank You!</p>
                <p className="text-xs text-zinc-400">Your feedback has been submitted successfully.</p>
              </div>
            ) : (
              <form onSubmit={handleFeedbackSubmit} className="space-y-4 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full bg-zinc-950 border border-zinc-800 text-xs rounded-xl p-3 text-white focus:outline-none focus:border-rose-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className={`p-2 rounded-lg border ${
                          rating >= star
                            ? 'bg-amber-950/60 border-amber-500 text-amber-400'
                            : 'bg-zinc-950 border-zinc-800 text-zinc-600'
                        }`}
                      >
                        <Star className="w-5 h-5 fill-current" />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Your Review</label>
                  <textarea
                    rows={3}
                    required
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    placeholder="Tell us about your visit..."
                    className="w-full bg-zinc-950 border border-zinc-800 text-xs rounded-xl p-3 text-white focus:outline-none focus:border-rose-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-rose-600 to-pink-600 text-white font-medium text-xs sm:text-sm py-3 rounded-full shadow-lg hover:from-rose-500 hover:to-pink-500 transition-all cursor-pointer"
                >
                  Submit Feedback
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
