// const dispatch = useDispatch();
// const persistedInventory = useSelector((state) => state.inventory.data); // Get persisted data

// const {  data: InventoryData, error: inventoryError } = useSWR(LiveInventoryAPIURL, fetcher, {
// fallbackData: persistedInventory, // Use persisted data if available
// onSuccess: (fetchedData) => {
//   dispatch(setInventoryData(fetchedData)); // Save to Redux
// },
// });



// console.log("My inventory data",(InventoryData))

// if (inventoryError) return <p>Error loading data.</p>;
// if (!InventoryData && InventoryData.length === 0) return <p>Loading...</p>;


 
// const slicedData = InventoryData?.data?.slice(0,10) || []
// console.log("Redux Inventory Length:", persistedInventory?.length);
// const inventoryList = slicedData.map(item => ({
//     title: `${item.brand} ${item.model}`,
//     price: item.max_price,
//     engineHours: item.engine_hours,
//     driveType: item.drive_type,
//     enginePower: item.engine_power,
//     tractorId: item.tractor_id,
//     id: item.user_id,
//     imageUrl: item.processed_images,
//   })) || [];



//   const compareTractorData = {

//     oneData: [

//         {
//             brand1: 'Mahindra 475 DI',
//             brand2: 'Kubota MU401 2WD',
//             brand1hp: '42 HP',
//             brand2hp: '42 HP',
//             brand1price: '₹ 6.45-6.75 Lakh*',
//             brand2price: '₹ 8.30-8.40 Lakh*'
//         }


import { useState, useMemo } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setInventoryData } from "@/store/inventorySlice";

// ✅ Ensure getStaticProps fetches data properly
export async function getStaticProps(context) {
    const localeProps = await getLocaleProps(context);

    try {
        const res = await fetch(LiveInventoryAPIURL);
        if (!res.ok) throw new Error("Failed to fetch inventory data");
        const inventoryData = await res.json();

        console.log("Fetched inventoryData in getStaticProps:", inventoryData);

        return {
            props: {
                locale: localeProps.locale,
                inventoryData: inventoryData || { data: [] }, // Fallback to empty data
            },
            revalidate: 10,
        };
    } catch (error) {
        console.error("Error fetching inventory data:", error);
        return {
            props: {
                locale: localeProps.locale,
                inventoryData: { data: [] }, // Safe fallback
            },
            revalidate: 10,
        };
    }
}

// ✅ Ensure HomePage correctly receives inventoryData
export default function HomePage({ locale, inventoryData }) {
    console.log("HomePage received props:", { locale, inventoryData });

    // ✅ Ensure inventoryData is always defined
    const safeInventoryDa














