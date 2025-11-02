// src/components/PublicOnlyRoute.jsx

import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { Navigate } from "react-router-dom";

const PublicOnlyRoute = ({ children }) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSession(session);
      setLoading(false);
    };

    fetchSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>; 
  }

  return session ? <Navigate to="/admin" replace /> : children;
};

export default PublicOnlyRoute;
