import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
import { useEffect, useState } from "react";

const supabase = createClient("https://tcfyjzfhbqppmhkdpoue.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjZnlqemZoYnFwcG1oa2Rwb3VlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3NjYzMTgsImV4cCI6MjAyNjM0MjMxOH0.yANuWP0Sg8BpEZyBi9kEEjDxlfXfZgtwD4LPa0ebjQE");

export default function SupabaseAPI() {
    const [comments, setComments] = useState([]);
  
      useEffect(() => {
        getComments();
      }, []);
  
      async function getComments() {
        const { data } = await supabase.from("comments").select();
        setComments(data);
      }
      return (
        // <ul>
        //   {comments.map((comment) => (
        //     <li key={comment.id}>{comment.user}{comment.comment}{comment.score}</li>
        //   ))}
        // </ul>

        <div key={comments.id} className="text-start">
          {comments.map((comment) => (
            <div className='p-5 boarder-solid border-black border-2'>
              <p className="text-sm">{comment.user}</p>
              <p>{comment.comment}</p>
              <p className="text-xs">{comment.score} hits</p>
            </div>
          ))}
        </div>
      ); 
  }