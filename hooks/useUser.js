"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  userData } from "@/lib/redux/featuers/authSlice";

export function useUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  //    const { loading, error, user } = useSelector((state) => state.auth);

  useEffect(() => {
    const getUserData = async()=>{
         try {
           const result = await dispatch(userData());
           if (result.meta.requestStatus === "fulfilled") {
            setUser(result.payload.user);
           }
         } catch (err) {
           toast.error("Logout failed ");
         } finally {
        setLoading(false);
      }
    };
    getUserData();
  }, []);

  return { user, loading };
}
