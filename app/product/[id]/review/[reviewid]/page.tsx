"use client";  
import { useParams } from "next/navigation";  
import { useRouter } from "next/navigation";  
import React from "react";  

const ProductReviews = () => {  
  const params = useParams();  
  const router = useRouter(); 

  return (  
    <div>  
      <p>Here are the review {params.reviewId} for product{params.id} .</p>  
      <button  
        onClick={() => router.back()}  
        style={{ padding: "10px", background: "lightgray", border: "none", cursor: "pointer" }}
      >  
        🔙 Go Back
      </button>  
    </div>  
  );  
};  

export default ProductReviews;
