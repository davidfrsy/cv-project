// src/techConfig.jsx

import { FaReact, FaSass, FaBootstrap, FaCss3Alt, FaNodeJs, FaPython, FaLaravel} from 'react-icons/fa';
import { SiCodeigniter, SiMysql, SiTailwindcss, SiSupabase, SiTypescript, SiNextdotjs, SiGraphql } from 'react-icons/si';

export const TECH_MAP = {
  // --- FRONTEND ---
  'React': { name: 'React', icon: <FaReact />, color: '#61DAFB' },
  'Next.js': { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000' }, 
  'TypeScript': { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' }, 
  
  // --- STYLING ---
  'Tailwind': { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4' },
  'Bootstrap': { name: 'Bootstrap', icon: <FaBootstrap />, color: '#7952B3' },
  'SCSS': { name: 'SCSS', icon: <FaSass />, color: '#CD6799' },
  'CSS': { name: 'CSS', icon: <FaCss3Alt />, color: '#1572B6' },

  // --- BACKEND & DATABASE ---
  'Node.js': { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
  'Supabase': { name: 'Supabase', icon: <SiSupabase />, color: '#3ECF8E' },
  'Python': { name: 'Python', icon: <FaPython />, color: '#3776AB' }, 
  'Laravel': { name: 'Laravel', icon: <FaLaravel />, color: '#FF2D20' },
  'CodeIgniter': { name: 'CodeIgniter', icon: <SiCodeigniter />, color: '#EF4223' },
  'MySql': { name: 'MySql', icon: <SiMysql />, color: '#4479A1' },
  'GraphQL': { name: 'GraphQL', icon: <SiGraphql />, color: '#E10098' }, 
  
};

// Ekspor juga sebagai array agar mudah di-loop
export const TECH_OPTIONS = Object.keys(TECH_MAP).sort(); 