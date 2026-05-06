import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom'; 

const Card = ({ id, image, title, price, location, rating }) => {
  return (
    <div className="group bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-50">
      <div className="h-64 overflow-hidden relative">
        <img src={image} alt={title} className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 text-xs font-bold shadow-sm font-inter">
          <Star size={12} className="text-yellow-500 fill-yellow-500" /> {rating}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-1 text-slate-400 text-[10px] mb-2 uppercase tracking-widest font-black font-inter">
          <MapPin size={12}/> {location}
        </div>
        <h3 className="text-xl font-bold mb-4 font-poppins text-slate-800">{title}</h3>
        <div className="flex justify-between items-center border-t border-slate-50 pt-4">
          <p className="font-bold text-blue-600 text-lg font-inter">Mulai {price}</p>
          <Link 
            to={`/place/${id}`} 
            className="text-teal-500 font-bold text-sm hover:translate-x-1 transition-transform font-inter"
          >
            Details →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;