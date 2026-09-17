import React, { useState } from 'react';
import { REVIEWS } from '../data/salonData';
import { ReviewItem } from '../types';
import { Star, Quote, Plus, Check, ExternalLink } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<ReviewItem[]>(REVIEWS);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newService, setNewService] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newContent.trim()) return;

    const newReview: ReviewItem = {
      id: `r-${Date.now()}`,
      initial: newAuthor.trim().charAt(0).toUpperCase(),
      author: newAuthor.trim(),
      service: newService.trim() || 'Haircut & Styling',
      rating: newRating,
      content: newContent.trim(),
      date: 'Just now',
    };

    setReviewsList([newReview, ...reviewsList]);
    setSubmittedMessage(true);
    setTimeout(() => {
      setSubmittedMessage(false);
      setShowAddModal(false);
      setNewAuthor('');
      setNewService('');
      setNewContent('');
      setNewRating(5);
    }, 1800);
  };

  return (
    <section id="reviews" className="py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center space-x-1 text-rose-400 mb-4">
            <Star className="w-5 h-5 fill-rose-400 text-rose-400" />
            <Star className="w-5 h-5 fill-rose-400 text-rose-400" />
            <Star className="w-5 h-5 fill-rose-400 text-rose-400" />
            <Star className="w-5 h-5 fill-rose-400 text-rose-400" />
            <Star className="w-5 h-5 fill-rose-400 text-rose-400" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-stone-900">
            Trusted by Toronto & North York Clients
          </h2>
          <p className="mt-4 text-stone-600">
            Rated <strong>4.9/5 on Fresha</strong> and <strong>4.1/5 on Google</strong> across 148+ verified client reviews.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviewsList.slice(0, 6).map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-8 rounded-xl shadow-sm border border-stone-200/60 relative flex flex-col justify-between"
            >
              <Quote className="text-stone-200 absolute top-6 right-6 w-8 h-8 pointer-events-none" />
              <div>
                <div className="flex items-center space-x-1 text-rose-400 mb-4">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-rose-400 text-rose-400" />
                  ))}
                </div>
                <p className="text-stone-700 leading-relaxed mb-6 italic text-sm">
                  "{rev.content}"
                </p>
              </div>
              <div className="flex items-center pt-2 border-t border-stone-100">
                <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center font-serif text-stone-700 text-lg font-medium flex-shrink-0">
                  {rev.initial}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-semibold text-stone-900">{rev.author}</p>
                  <p className="text-xs text-stone-500">{rev.service} • {rev.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leave Review Action */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-white border border-stone-300 text-stone-800 text-xs font-semibold uppercase tracking-wider hover:border-rose-300 hover:text-rose-500 hover:bg-stone-50 transition-all cursor-pointer shadow-sm"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Write a Client Review</span>
          </button>
        </div>
      </div>

      {/* Add Review Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl border border-stone-200 animate-in fade-in duration-200">
            {submittedMessage ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-rose-500 mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-stone-900">Thank You!</h3>
                <p className="text-sm text-stone-600">Your review for Stage Hair Design has been submitted.</p>
              </div>
            ) : (
              <div>
                <h3 className="font-serif text-2xl text-stone-900 mb-2">Write a Review for Stage Hair</h3>
                <p className="text-xs text-stone-500 mb-6">Tell us about your haircut, color, perm, or treatment experience.</p>
                
                <form onSubmit={handleAddReview} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-500 uppercase mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={newAuthor}
                      onChange={(e) => setNewAuthor(e.target.value)}
                      placeholder="e.g. Christine X."
                      className="w-full px-4 py-2.5 rounded-lg border border-stone-200 focus:outline-none focus:border-rose-300 focus:ring-1 focus:ring-rose-300 bg-stone-50 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-500 uppercase mb-1">Service & Stylist</label>
                    <input
                      type="text"
                      value={newService}
                      onChange={(e) => setNewService(e.target.value)}
                      placeholder="e.g. Digital Perm with William"
                      className="w-full px-4 py-2.5 rounded-lg border border-stone-200 focus:outline-none focus:border-rose-300 focus:ring-1 focus:ring-rose-300 bg-stone-50 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-500 uppercase mb-1">Rating</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((stars) => (
                        <button
                          type="button"
                          key={stars}
                          onClick={() => setNewRating(stars)}
                          className="p-1 cursor-pointer focus:outline-none"
                        >
                          <Star
                            className={`w-6 h-6 ${
                              stars <= newRating ? 'fill-rose-400 text-rose-400' : 'text-stone-300'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-500 uppercase mb-1">Review</label>
                    <textarea
                      required
                      rows={4}
                      value={newContent}
                      onChange={(e) => setNewContent(e.target.value)}
                      placeholder="How was your consultation, cut, or color result?"
                      className="w-full px-4 py-2.5 rounded-lg border border-stone-200 focus:outline-none focus:border-rose-300 focus:ring-1 focus:ring-rose-300 bg-stone-50 text-sm resize-none"
                    ></textarea>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowAddModal(false)}
                      className="flex-1 py-3 rounded-lg border border-stone-200 text-stone-700 text-xs font-semibold uppercase hover:bg-stone-50 cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3 rounded-lg bg-stone-900 text-white text-xs font-semibold uppercase hover:bg-rose-400 hover:text-stone-900 transition-colors cursor-pointer"
                    >
                      Submit Review
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
