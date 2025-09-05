// src/hooks/useFilter.js
import { useState } from 'react';

const useFilter = (initialItems, initialCategory = 'all') => {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  
  // Obtener categorías únicas
  const categories = ['all', ...new Set(initialItems.map(item => item.category))];
  
  // Filtrar items por categoría
  const filteredItems = activeCategory === 'all' 
    ? initialItems 
    : initialItems.filter(item => item.category === activeCategory);
  
  return {
    activeCategory,
    setActiveCategory,
    categories,
    filteredItems
  };
};

export default useFilter;