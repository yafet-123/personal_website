import Image from "next/image";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: 'Admin Home',
}

async function fetchExhibitionsCount() {
  const data = await fetch(
    process.env.URL + '/api/News',
    {   
      next: {
        revalidate: 60,
      },
    }
  );
  const exhibitions = await data.json();
  return exhibitions;
}

export default function AdminHome() {
  const exhibitioncount = await fetchExhibitionsCount();
  return (
    <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5">
      <div>
        {exhibitioncount}
      </div>
    </section>
  );
}
