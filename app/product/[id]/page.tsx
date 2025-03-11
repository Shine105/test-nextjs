// "use client"; 

// import { useParams } from "next/navigation";  
// import React from "react";
// import { Metadata } from "next";

// const ProductDetails = () => {
//   const params = useParams();  

//   return (
//     <div>
//       <h1>Details about product {params.id}</h1> 
//     </div>
//   );
// };

// export default ProductDetails;


import { Metadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Product ${params.id} - My Store`,
    description: `Details and specifications for Product ${params.id}.`,
  };
}

export default function ProductDetails({ params }: Props) {
  return (
    <div>
      <h1>Details about product {params.id}</h1>
    </div>
  );
}

