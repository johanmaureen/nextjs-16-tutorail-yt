"use client";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Card } from "@/components/ui/card";

export default function BlogPage() {
  const data = useQuery(api.post.getPosts);
  return (
    <div className="py-12">
      <div className="text-center pb-12">
        <h1 className="text-4xl font-extr-bold tracking-tight">Our Blog</h1>
        <p className="pt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
          Insights, thoughts and trends from our team.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((post) => (
          <Card key={post._id}></Card>
        ))}
      </div>
    </div>
  );
}
