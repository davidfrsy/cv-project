// src/components/ProtectedRoute.jsx

import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Ambil sesi (session) yang sedang berjalan
    const fetchSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      setLoading(false);
    };

    fetchSession();

    // 2. Dengarkan perubahan status login/logout
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    // Cleanup listener saat komponen di-unmount
    return () => subscription.unsubscribe();
  }, []);

  // Tampilkan loading saat masih memeriksa sesi
  if (loading) {
    return <div>Loading...</div>; // Atau tampilkan spinner
  }

  // Jika ada sesi (sudah login), tampilkan halaman (children)
  // Jika tidak, alihkan (redirect) ke halaman login
  return session ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;