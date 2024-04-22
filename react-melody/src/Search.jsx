// import { AdvancedImage } from "@cloudinary/react";
// import {Cloudinary} from "@cloudinary/url-gen";
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
import { useEffect, useState } from "react";

const supabase = createClient("https://tcfyjzfhbqppmhkdpoue.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjZnlqemZoYnFwcG1oa2Rwb3VlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3NjYzMTgsImV4cCI6MjAyNjM0MjMxOH0.yANuWP0Sg8BpEZyBi9kEEjDxlfXfZgtwD4LPa0ebjQE");

export default function ResultsAPI() {
    const [searches, setSearch] = useState([]);
  
      useEffect(() => {
        getSearch();
      }, []);
  
      async function getSearch() {
        const { data } = await supabase.from("search").select();
        setSearch(data);
      }
      return (
        // <ul>
        //   {comments.map((comment) => (
        //     <li key={comment.id}>{comment.user}{comment.comment}{comment.score}</li>
        //   ))}
        // </ul>

        <div key={searches.id} className="text-start">
          {searches.map((search) => (
            <div className='boarder-solid border-black border-2 flex justify-between p-5'>
              <p className="text-lg">{search.result}</p>
              <p className="text-sm justify-end">{search.resultType}</p>
            </div>
          ))}
        </div>
      ); 
  }