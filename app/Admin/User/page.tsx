"use client";
import Image from "next/image";
import Form from "@/components/Admin/User/Form";
import UserDisplay from "@/components/Admin/User/UserDisplay";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Suspense } from 'react';
// import type { Metadata } from "next";
// export const metadata: Metadata = {
//   title: 'Admin User',
// }
interface User {
  UserName: string;
  email: string;
} 

const UserCardList = ({ data }) => {
  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5">
      {data.map((user) => (
        <UserDisplay key={user.user_id} user={user} />
      ))}
    </div>
  );
};

export default function AdminUserHome() {
  const { data: session } = useSession();
  const [submitting, setIsSubmitting] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [loading , setloading] = useState(false)
  const [user, setUser] = useState<User>({ UserName: "", email: "" });
  console.log(allUsers)
  const createUser = async (e) => {
    e.preventDefault();
    console.log(user.UserName);
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/User/Add", {
        method: "POST",
        body: JSON.stringify({
          UserName: user.UserName,
          email: user.email,
        }),
      });
      if (response.ok) {
        router.push("/Admin/User");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const fetchUsers = async () => {
    const response = await fetch("/api/User", { cache: 'no-store' });
    const data = await response.json();

    setAllUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <section className="w-full h-full lg:pt-24">
        <Form
          type="Create"
          user={user}
          setUser={setUser}
          submitting={submitting}
          handleSubmit={createUser}
        />
      <Suspense fallback={<div className="w-full mt-20 flex items-center text-white">Loading User Please Wait ...</div>}> 
        <UserCardList data={allUsers} />
      </Suspense>
      
    </section>
  );
}
